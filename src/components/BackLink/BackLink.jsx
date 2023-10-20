import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

const StyledLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 10px;
  transition: color .3s;

  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`;

const Icon = styled(BsArrowLeftCircleFill)`
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
`;

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
`;

export default function BackLink({ to, children }) {
  return (
    <StyledLink to={to}>
      <Icon />
      <Text>{children}</Text>
    </StyledLink>
  );
}
