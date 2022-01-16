import propTypes from "prop-types";
import style from "./Button.module.css";

function Button({text}) {
    return (<button className={style.btn}>{text}</button>);
}

Button.propTypes = {
    text: propTypes.string.isRequired
}
export default Button;