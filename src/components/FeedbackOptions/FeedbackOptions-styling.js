import styled , {keyframes} from "styled-components";

export const slideIn = keyframes`
  from {
    
  }

  to {
    font-size:24px;

  }
`;



export const StyledDiv = styled.div`
display: flex;
justify-content:center;
gap: 20px;
    > button {
        width:120px;
        height:46px;
  font-size: 18px;
  cursor: pointer;
  background-color:rgba(60, 49, 84, 1);
  border: none;
  border-radius:5px;
  color:white;
      &:hover {
        animation: ${slideIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
      }
  
    }
  
    > .button-Good{

      &:active {
        background-color : rgba(64, 181, 105, 1);

      }
  }
    > .button-Neutral{

      &:active {
        background-color : rgba(209, 186, 35, 1);
      }
  }
    > .button-Bad{
      &:active {
        background-color : rgba(180, 65, 65, 1);
      }

  }
`;