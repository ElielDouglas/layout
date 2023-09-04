import './index.scss'
import Product2 from "../../assets/img/product2.png";

export default function Products2() {
  return (
    <div className="product-item">
    <img src={Product2} alt="" />
    <div className="colors c5"></div>
    <div className="colors c6"></div>
    <div className="colors c7"></div>
    <div className="colors c8"></div>
    <div className="text-product">
        <span className='price'>R$500,00</span>
        <span className='name'>Faux Suede Mini Skirt</span>
        <span className='description'>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</span>
    </div>
</div>
  )
}
