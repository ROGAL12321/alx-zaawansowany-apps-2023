const Button = (props) => {
  return (
    <button type={props.type}>
      {props.text}
    </button>
  )
}

Button.defaultProps = {
  type: 'button'
}

export default Button