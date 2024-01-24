import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Cachorros } from '../pages/Cachorros'
import { Gatinhos } from '../pages/Gatos'


export function AuthRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cachorros" element={<Cachorros />} />
      <Route path="/gatos" element={<Gatinhos />} />
    </Routes>

  )
}