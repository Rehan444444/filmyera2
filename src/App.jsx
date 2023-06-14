
import Header from './Components/Header'
import Cards from './Components/Cards'
import AvengerInfinity from './Components/AvengerInfinity'
import Strange from './Components/Strange'
import John from './Components/John'
import Avatar2 from './Components/Avatar2'
import ShowAll1 from './Components/ShowAll1'
import RRR from './Components/Show/RRR'
import Topgun from './Components/Show/Topgun'
import Thor from './Components/Show/Thor'
import Wakanda from './Components/Show/Wakanda'
import {Route, Routes} from 'react-router-dom'
import AddMovie from './Components/AddMovie'
import Login from './Components/Login'


function App() {
  return (
   
    <div >
    <Header/>
    <Routes>
      <Route path="/" element={<Cards/>}     />
      <Route path="/AddMovie" element={<AddMovie/>}     />
      <Route path="/Login" element={<Login/>}     />
      <Route path="/ShowAll1" element={<ShowAll1/>}     />
      <Route path="/RRR" element={<RRR/>}     />
      <Route path="/Topgun" element={<Topgun/>}     />
      <Route path="/Thor" element={<Thor/>}     />
      <Route path="/Wakanda" element={<Wakanda/>}     />
      <Route path="/AvengerInfinity" element={<AvengerInfinity/>}     />
      <Route path="/Strange" element={<Strange/>}     />
      <Route path="/John" element={<John/>}     />
      <Route path="/Avatar2" element={<Avatar2/>}     />
    </Routes>
    </div>
   
  )
}

export default App;
