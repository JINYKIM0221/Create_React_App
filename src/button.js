import propTypes from "prop-types";
import styles from "./button.module.css";


function button({text}){
    return <button>{text}</button>;
}

button.prototype = {
    text: propTypes.string.isRequired,
};
export default button;