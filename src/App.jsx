import { BrowserRouter, Route, Routes } from "react-router-dom"

import News from "./pages/News"

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<News />} />
        </Routes>
      </BrowserRouter>
  )
}