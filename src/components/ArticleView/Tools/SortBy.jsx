import { FaChevronDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";

const SortBy = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentOrderBy =
    searchParams.get("order_by") === "asc" ? "asc" : "desc";
  const newOrderBy = currentOrderBy === "asc" ? "desc" : "asc";

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          SortBy
          <FaChevronDown className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <NavLink
            to="?sort_by=created_at"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            New
          </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink
            to="?sort_by=comment_count"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Comments
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="?sort_by=votes"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Popular
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to={`?order_by=${newOrderBy}`}
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Reverse Order ({newOrderBy === "asc" ? "Ascending" : "Descending"})
          </NavLink>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default SortBy;
