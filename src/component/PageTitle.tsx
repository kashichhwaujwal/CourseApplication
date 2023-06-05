import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.2rem;
  position: relative;
  top: 0.6rem;
  left: 2rem;
`;

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return <Title>{title}</Title>;
};

export default PageTitle;
