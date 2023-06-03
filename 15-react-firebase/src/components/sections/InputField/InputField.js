const InputField = (props) => {
  return (
    <div>
      <label>
        {props.label}
        <input
          type={props.type}
          value={props.value}
          onChange={props.handleChange}
        />
      </label>
      {props.isError
        ? <p>{props.errorMessage}</p>
        : null
      }
    </div>
  )
}

export default InputField