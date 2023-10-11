import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx';
import StakePage from './Pages/StakePage.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/stake' element={<StakePage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
