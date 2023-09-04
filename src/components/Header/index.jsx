import './index.scss'

import logo from '../../assets/img/logo.png'
import User  from '../../assets/img/icon-user.svg'
import Heart  from '../../assets/img/icon-heart.svg'
import Cart  from '../../assets/img/icon-shoppingbag.svg'
import ActionComponent from './ActionComponent'

const items = [ 
  {
    title : "Minha Conta",
    icon : User
  },
  {
    title : "Minha Conta",
    icon : Heart
  },
  {
    title : "Meu Carrinho",
    icon : Cart
  }
 ]

export default function Header() {
  return (
    <header>
      <div className='container'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search-box">
        <input type="text" placeholder='O Que Você Busca?' name="" id="" />
        <button>Buscar</button>
      </div>
      <div className="functions">
        {items.map((item,index) => {
            return (
             <ActionComponent key={index} item={item} />
        )
        })}
      </div>
      </div>
    </header>
  )
}
