import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import Browse from './components/pages/Browse'
import EditProfile from './components/pages/EditProfile'
import IntroPage from './components/pages/IntroPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage title="Who's Watching?" />} />
        <Route
          path="/manage-profiles"
          element={<IntroPage title="Manage Profiles:" />}
        />
        <Route path="/browse" element={<Browse />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
