import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Cachorrinhos } from '../pages/Cachorros'
import { Gatinhos } from '../pages/Gatos'


export function AuthRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cachorros" element={<Cachorrinhos />} />
      <Route path="/gatos" element={<Gatinhos />} />
    </Routes>

  )
}