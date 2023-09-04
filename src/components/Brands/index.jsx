import './index.scss'

import Comma from '../../assets/img/comma.svg'
import Melissa  from '../../assets/img/melissa.svg'
import Forever  from '../../assets/img/forever.svg'
import Zara  from '../../assets/img/zara.svg'
import Ann  from '../../assets/img/ann.svg'

const brands = [ 
  {
    img : Comma
  },
  {
    img : Melissa
  },
  {
    img : Forever
  },
  {
    img : Zara
  },
  {
    img : Ann
  },
 ]
export default function Brands() {
  return (
    <div>
      <div className="container-brands">
        <h2>Marcas Parceiras</h2>
        <div className='container-items'>
        {brands.map((item, index)=>{
          return (
          <div key={index} className="brands-item">
            <img src={item.img} alt="" />
          </div>
            )
        })}
        </div>
      </div>
    </div>
  )
}
