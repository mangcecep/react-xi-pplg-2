import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Cart from './pages/Cart'
import User from './pages/User'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
