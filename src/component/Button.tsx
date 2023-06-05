import styled from "styled-components";

const CustomButton = styled.button`
  background: blue;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  height: 2rem;
  min-width: 7rem;
  position: relative;
  right: 1.5rem;
  top: 0.9rem;
`;

interface Props {
  label: string;
  type?: string;
  onClick?: React.MouseEventHandler;
}

const Button = ({ label, type, onClick }: Props) => {
  return (
    <CustomButton type="button" onClick={onClick}>
      {label}
    </CustomButton>
  );
};

export default Button;
