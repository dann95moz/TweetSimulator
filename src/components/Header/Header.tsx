import styles from './Header.module.scss'
import logo from "../../assets/images/twitter-logo.png"
const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo}  />
        <h1>Tweet simulator</h1>
    </div>
  )
}

export default Header