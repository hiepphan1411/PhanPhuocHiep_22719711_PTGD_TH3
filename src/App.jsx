import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16"> 
        <Slider />
        <div className="container mx-auto p-4 mt-4">
          <h1 className="text-2xl font-bold">Nội dung trang web</h1>
        </div>
      </div>
    </>
  )
}

export default App
