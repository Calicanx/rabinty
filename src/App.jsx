import Portfolio from './Portfolio.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={< Portfolio/>}/>
      <Route path='/about' element={< Portfolio/>}/>
      <Route path='/projects' element={< Portfolio/>}/>
      <Route path='/contact' element={< Portfolio/>}/>
      <Route path='/car' element={< car/>}/>
    </Routes>
    </>
  )
}

export default App
