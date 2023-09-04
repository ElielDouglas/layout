import './index.scss'

export default function Info() {
  return (
    <div>
      <div className="container-info">
        <div className="info-item">
          <h3>Informações</h3>
          <ul>
            <li>Quem Somos</li>
            <li>Prazo de Envio</li>
            <li>Trocas e Devoluções</li>
            <li>Promoções e Cupons</li>
          </ul>
        </div>
        <div className="info-item">
          <h3>Minha Conta</h3>
          <ul>
            <li>Minha Conta</li>
            <li>Meus Pedidos</li>
            <li>Cadastre-se</li>
          </ul>
        </div>
        <div className="info-item">
          <h3>Onde nos Encontrar</h3>
          <ul>
            <li>Lojas</li>
            <li>Endereço</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
