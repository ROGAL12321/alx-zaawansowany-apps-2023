import styles from './Title.module.css';
import logo from '../../../assets/logo.svg'

const Title = (props) => {
  return (
    <h1 className={styles.title}>
      <img src={logo} alt="Logo" className={styles.logo}/>

      {props.text}
    </h1>
  )
}

export default Title;