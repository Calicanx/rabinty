import Portfolio from './portfolio.jsx'
import { Routes, Route } from 'react-router-dom'
import Projects from './Projects.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={< Portfolio/>}/>
      <Route path='/about' element={< Portfolio/>}/>
      <Route path='/projects' element={< Projects/>}/>
    </Routes>
    </>
  )
}

export default App
