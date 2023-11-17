import propTypes from "prop-types";
import { StyledH2 } from "./Section-styling";

export const Section = ({ title, children }) => (
  <div>
    <StyledH2>{title}</StyledH2>
    {children}
  </div>
);


Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
}