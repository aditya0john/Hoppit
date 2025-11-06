import { GroceryItem } from "@/lib/schema";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function useGrocerySearch() {
  const [results, setResults] = useState<GroceryItem[]>([]);
  const [loading, setLoading] = useState(false);

  const searchGroceries = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    const { data, error } = await supabase
      .from("grocery")
      .select("*")
      .textSearch("search_vector", query, {
        type: "websearch", // smarter search syntax
      });

    if (error) console.error("Search error:", error);
    else setResults(data);

    setLoading(false);
  };

  return { results, searchGroceries, loading };
}
