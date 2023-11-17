import { StyledDiv } from './FeedbackOptions-styling'
import propTypes from "prop-types";



export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <StyledDiv>
    {options.map((option, index) => (
      <button
        className={'button-' + option}
        key={index}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
        
      </button>
    ))}

  </StyledDiv>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};