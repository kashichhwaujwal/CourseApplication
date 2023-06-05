import styled from "styled-components";

const LanguageButton = styled.button`
  border: none;
  background: white;
  font-size: 0.8rem;
  margin: 1rem;
  cursor: pointer;
  font-weight: ${(props) => (props.className === "true" ? "bold" : "none")};
`;

interface Props {
  label: string;
  onClick?: React.MouseEventHandler;
  isActiveLocale: string;
}

const LocalSwitcher = ({ label, onClick, isActiveLocale }: Props) => {
  return (
    <LanguageButton className={isActiveLocale} onClick={onClick}>
      {label}
    </LanguageButton>
  );
};

export default LocalSwitcher;
