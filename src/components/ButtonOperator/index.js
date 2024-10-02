import { ButtonContainer } from './styles';

const ButtonOperator = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default ButtonOperator;