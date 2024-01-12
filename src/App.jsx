
import './App.css'
import Nvbar from './components/Nvbar'
import Pimg from './components/Pimg'
import Aboutme from './components/Aboutme'
import Footer from './components/Footer'


export default function App() {
  return (
   <>
   <div className="container min-h-screen bg-black py-8 relative">
     <Nvbar/>
     <Aboutme/>
     <Pimg/>
     </div>
     <Footer/>
   </>
  
  )
}

