import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="smmeta-logo-container">
                <img src={logo} alt="SMMeta" />
                <h1>SMMeta</h1>
                <p>
                    Deselvolvido por
                    <a href="https://github.com/ShadiusMaximus"> ShadiusMaximus</a>
                </p>
            </div>
        </header>
    )
}

export default Header