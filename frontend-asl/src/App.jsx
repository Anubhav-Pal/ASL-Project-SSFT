import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Emergency, Feedback, Landingpage, LiveVideoToText, TextToVideo, VideoToText } from './pages'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landingpage/> } />
      <Route path='/emergency' exact element={ <Emergency/>} />
      <Route path='/feedback' exact element={<Feedback/> } />
      <Route path='/livevideototext' exact element={ <LiveVideoToText/>} />
      <Route path='/videototext' exact element={ <VideoToText/>} />
      <Route path='/texttovideo' exact element={ <TextToVideo/>} />
    </Routes>
  </BrowserRouter>
)


export default App  