import propTypes from "prop-types";
import { StyledUl, StyledLi } from "./Statistics-styling";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StyledUl>
    <StyledLi>Good: {good}</StyledLi>
    <StyledLi>Neutral {neutral}</StyledLi>
    <StyledLi>Bad: {bad}</StyledLi>
    <StyledLi>Total: {total}</StyledLi>
    <StyledLi>Positive feedback: {positivePercentage} %</StyledLi>
  </StyledUl>
);


Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
}