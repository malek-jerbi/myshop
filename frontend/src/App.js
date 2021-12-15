import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact></Route>
            <Route path='/product/:id' element={<ProductScreen />}></Route>
            <Route path='/cart/:id' element={<CartScreen />}></Route>
            <Route path='/cart' element={<CartScreen />}></Route>
            <Route
              path='/login'
              element={<div>Work Still In Progress...</div>}
            ></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
