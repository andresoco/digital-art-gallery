import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar, Footer } from './components/Common'
import { HomePage } from './components/Home/HomePage'
import { AboutPage } from './components/About/AboutPage'
import { GalleryPage } from './components/Gallery/GalleryPage'
import { ExhibitionsPage } from './components/Exhibitions/ExhibitionsPage'
import { ProfilePage } from './components/Profile/ProfilePage'
import { DetailPage } from './components/Detail/DetailPage'
import './index.css'

function App() {
  return (
    <Router>
      <div className="bg-surface text-primary font-body">
        <NavBar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/exhibitions" element={<ExhibitionsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
