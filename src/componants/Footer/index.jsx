import logo from '../../assets/LOGOFOOTER.png'
import '../../styles/css/footer/style.css'

function Footer(){
    return(
        <div className='footer'>
            <div className='footer-conteneur'>
                <img src={logo} alt="Logo Kasa en blanc" />
                <p>© 2024 Kasa. All rights reserverd</p>
            </div>
        </div>
    )
}

export default Footer