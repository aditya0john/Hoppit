import { Ionicons } from '@expo/vector-icons'
import * as DropdownMenu from 'zeego/dropdown-menu'

export default function DropDownMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Ionicons name='chevron-down' size={20} color={"blue"} />
      </DropdownMenu.Trigger>



      <DropdownMenu.Content>

        <DropdownMenu.Label>Pay Using</DropdownMenu.Label>
        <DropdownMenu.Item key="item-1" onSelect={() => console.log('item-1 selected')}>
          <DropdownMenu.ItemTitle>Item Title</DropdownMenu.ItemTitle>
        </DropdownMenu.Item>

        {/* <DropdownMenu.Label />
        <DropdownMenu.Item>
          <DropdownMenu.ItemTitle />
        </DropdownMenu.Item>

        <DropdownMenu.Group>
          <DropdownMenu.Item />
        </DropdownMenu.Group>

        <DropdownMenu.CheckboxItem>
          <DropdownMenu.ItemIndicator />
        </DropdownMenu.CheckboxItem>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger />
          <DropdownMenu.SubContent />
        </DropdownMenu.Sub>

        <DropdownMenu.Separator />
        <DropdownMenu.Arrow /> */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}