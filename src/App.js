import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import Browse from './components/pages/Browse'
import IntroPage from './components/pages/IntroPage'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/browse" element={<Browse />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
