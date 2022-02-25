import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Belajar</span> Next
        </h1>
        <p className={headerStyles.description}>
            Belajar seumur hidup
        </p>
    </div>
  )
}

export default Header