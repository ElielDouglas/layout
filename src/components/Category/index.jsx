import './index.scss'
export default function CategoryList() {
  const categorys = [ 'Novidades', 'Vestidos', 'Roupas', 'Sapatos', 'Lingerie', 'Acessórios', 'OUTLET']
  return (
    <div>
      <div className="container-category">
        {categorys.map((item,index) => {
         return (
          <span key={index}>{item}</span>
         )
        })}
      </div>
    </div>
  )
}
