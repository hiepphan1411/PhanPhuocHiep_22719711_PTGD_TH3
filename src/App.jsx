import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import NewsSection from './components/NewsSection'
import SideMenu from './components/SideMenu'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="pt-16">
        <div className="container mx-auto p-4 mt-4">
          <Navbar />
          <Slider />
          <div className="flex">
            <SideMenu />
            <NewsSection />
          </div>
          <ContentSection />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
