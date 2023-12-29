import { styled, keyframes} from "styled-components";
import { Colors } from "./ColorComponent";

const rotate624 = keyframes`
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
`;

const storm1261 = keyframes`
`;

const StyledButton = styled.button`
  position: relative;
  margin: 25px;
  padding: 17px 35px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #fff;
  border: 1px solid ${Colors.FaTimes};
  border-radius: 10px;
  color: ${Colors.FaTimes};
  font-weight: 400;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    animation: ${rotate624} 0.7s ease-in-out both;
  }

  &:hover span {
    animation: ${storm1261} 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }
`;

const StyledSpan = styled.span`
  color: ${Colors.FaTimes};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.7px;
`;

interface ButtonProps {
  Text: string
}

const ButtonRoot: React.FC<ButtonProps> = ({ Text }) => {

  const HandleReload = () => {
    window.location.reload();
  }
  return (
    <StyledButton onClick={HandleReload}>
      <StyledSpan>{Text}</StyledSpan>
    </StyledButton>
  );
};

export default ButtonRoot;