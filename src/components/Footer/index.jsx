import './index.scss'

//socials
import Face from '../../assets/img/facebook.svg'
import Linkedin  from '../../assets/img/linkedin.svg'
import Insta  from '../../assets/img/instagram.svg'
import Youtube  from '../../assets/img/youtube.svg'

//cards
import Visa from '../../assets/img/visa.svg'
import Mastercard from '../../assets/img/mastercard.svg'

//logos
import Vtex from '../../assets/img/vtex.png'
import Logo from '../../assets/img/logoFooter.png'




export default function Footer() {
  return (
    <footer>
      <div className='container-footer'>
      <div className="socials">
        <img src={Face} alt="" />
        <img src={Linkedin} alt="" />
        <img src={Insta} alt="" />
        <img src={Youtube} alt="" /> 
      </div>
      <div className="cards">
        <img src={Visa} alt="" />
        <img src={Mastercard} alt="" />
        <img src={Visa} alt="" />
        <img src={Mastercard} alt="" />
      </div>
      <div className="logos">
        <div className="item">
          <span>Powered By</span>
          <img src={Vtex} alt="" />
        </div>
        <div className="item">
          <span>Developed  By</span>
          <img src={Logo} alt="" />
        </div>
      </div>
      </div>
    </footer>
  )
}
