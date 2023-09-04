import './index.scss'

import World from '../../assets/img/world.svg'
import Estoque  from '../../assets/img/estoque.svg'
import Trade  from '../../assets/img/trade.svg'
import Offer  from '../../assets/img/offer.svg'
import Transport  from '../../assets/img/transport.svg'

const items = [ 
  {
    title : "Produtos Importados",
    caption: "Produto de Alta Qualidade",
    icon : World
  },
  {
    title : "Estoque No Brasil",
    caption: "Produtos mais perto de você!",
    icon : Estoque
  },
  {
    title : "Trocas Garantidas",
    caption: "Trocas em até 48 horas, veja as regras",
    icon : Trade
  },
  {
    title : "Ganhe 5% off",
    caption: "Pagando à vista no Cartão",
    icon : Offer
  },
  {
    title : "Frete Grátis",
    caption: "Em compras acima de R$499,00",
    icon : Transport
  },
 ]
export default function TipBar() {
  return (
    <div>
      <div className="container-tipbar">
        <h2>Por que comprar na Maeztra?</h2>
        <div className='container-items'>
        {items.map((item, index)=>{
          return (
          <div key={index} className="tipbar-item">
            <img src={item.icon} alt="" />
            <div className="text-container-tipbar">
              <span className='title'>{item.title}</span>
              <span className='caption'>{item.caption}</span>
            </div>
          </div>
            )
        })}
        </div>
      </div>
    </div>
  )
}
