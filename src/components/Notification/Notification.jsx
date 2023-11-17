import propTypes from "prop-types";
import { StyledP } from "./Notification-styling";

export const Notification = ({message}) => (
    <StyledP>{message}</StyledP>
)


Notification.propTypes = {
    message: propTypes.string.isRequired,
}