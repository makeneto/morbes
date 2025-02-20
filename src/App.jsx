import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"

import News from "./pages/News"
import NotMobile from "./ui/NotMobile"

export default function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <BrowserRouter>
      {isMobile ? (
        <Routes>
          <Route index element={<News />} />
        </Routes>
      ) : (
        <NotMobile />
      )}
    </BrowserRouter>
  )
}