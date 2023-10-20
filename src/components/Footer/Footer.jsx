import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 4em;
  font-size: 14px;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>©2023 Developed by Andrii Doroshenko</p>
    </StyledFooter>
  );
};

export default Footer;
