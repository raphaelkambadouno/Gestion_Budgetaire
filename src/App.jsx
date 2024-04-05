import { useState } from 'react'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='wrapper'>
          <Navbar />
          <div className="content-wrapper">
              <section className="content-header">
                  <div className="container-fluid">
                      
                  </div>
              </section>
          </div>
          <Footer/>
      </div> 
      <Login/>*/}
      <Register />
    </>
  )
}

export default App
