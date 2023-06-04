const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

Button.defaultProps = {
  type: 'button'
}

export default Button