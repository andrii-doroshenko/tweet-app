import styled from 'styled-components';

const DropDown = styled.select`
  border: 1px solid black;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  cursor: pointer;
`;

export default function DropdownMenu({ onFilterChange, filter }) {
  return (
    <DropDown value={filter} onChange={e => onFilterChange(e.target.value)}>
      <option value="">Show all</option>
      <option value="false">Show follow</option>
      <option value="true">Show followings</option>
    </DropDown>
  );
}
