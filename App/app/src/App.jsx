import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create' element={<CreatePost />} />
        <Route path='/post' element={<Feed />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App