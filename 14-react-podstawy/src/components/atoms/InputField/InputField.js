import styles from './InputField.module.css'

const InputField = (props) => {
  return (
    <label className={styles.label}>
      {props.title}

      <input
        className={styles.input}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  )
}

export default InputField