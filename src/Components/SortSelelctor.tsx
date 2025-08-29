import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface SortItem {
  value: string;
  label: string;
}

interface Props {
  onClickSortSelector: (sortItem: SortItem) => void;
  selectedSortItem: SortItem | null;
}

const SortSelelctor = ({ onClickSortSelector, selectedSortItem }: Props) => {
  const SortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {selectedSortItem?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {SortOrder.map((item) => (
          <MenuItem
            onClick={() => onClickSortSelector(item)}
            value={item.value}
            key={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelelctor;
