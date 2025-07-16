// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// // import Blog from './components/Blog'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Hero/>
//       {/* <Blog /> */}
//     </div>
//   )
// }

// export default App


import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Footer from './components/Footer';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blogs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
