import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={styles.myButton}
    >
      {props.text}
    </button>
  )
}

Button.defaultProps = {
  type: "button",
  text: "Send"
}

export default Button;