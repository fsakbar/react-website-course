import {Routes, Route} from 'react-router-dom'

import NavBarComponent from './components/NavBarComponent'
// import FooterComponent from './components/FooterComponent'

import Homepage from './pages/Homepage'
import KelasPage from './pages/KelasPage'
import TestimonialPage from './pages/TestimonialPage'
import FaqPage from './pages/FaqPage'
import SyaratKetenPage from './pages/SyaratKetenPage'


function App() {
  return (
    <>
      <div>
        <NavBarComponent/>
        <Routes>
          <Route path='/'Component={Homepage} />
          <Route path='/kelas' Component={KelasPage}/>
          <Route path='/testimonial' Component={TestimonialPage}/>
          <Route path='/faq' Component={FaqPage}/>
          <Route path='/syaratketen' Component={SyaratKetenPage}/>
        </Routes>
        {/* <FooterComponent/> */}
      </div>
    </>
  )

}

export default App
