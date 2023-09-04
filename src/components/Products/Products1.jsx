import './index.scss'
import Product1 from "../../assets/img/product1.png";

export default function Products1() {
  return (
    <div className="product-item">
    <img src={Product1} alt="" />
    <div className="colors c1"></div>
    <div className="colors c2"></div>
    <div className="colors c3"></div>
    <div className="colors c4"></div>
    <div className="text-product">
        <span className='price'>R$500,00</span>
        <span className='name'>Faux Suede Mini Skirt</span>
        <span className='description'>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</span>
    </div>
</div>
  )
}
