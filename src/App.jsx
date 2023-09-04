import './index.scss'

import Header from "./components/Header"
import Carrousel from './components/Carrousel'
import CategoryList from './components/Category'
import TipBar from './components/TipBar'
import Brands from './components/Brands'
import Products from './components/Products'
import Banner from './components/Banner'
import Newsletter from './components/Newsletter'
import Info from './components/Info'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Header/>
    <CategoryList />
    <Carrousel />
    <TipBar />
    <Brands />
    <Products/>
    <Banner />
    <Newsletter />
    <Info />
    <Footer />
    </>
  )
}

export default App
