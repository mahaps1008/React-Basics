
import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
import New from './New'
import Page from './Page'
import Api from './Api'
import Handlelogin from './Handlelogin'
import Handleclick from './Handleclick'
import Settingelement from './Settingelement'
import Eventhandling from './Eventhandling'
import Eventpooling from './Eventpooling'
import Eventvalue from './Eventvalue'
import Onsubmit from './Onsubmit'
import Mouseover from './Mouseover'
import Onblur from './Onblur'
import Navigate from './Navigate'
import Filter from './Filter'
import Filter2 from './Filter2'
import Sorting from './Sorting'
import Date from './Date'

function App() {
  return (
    
    <Router>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new'element={<New/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='/api'  element={<Api/>}/>
        <Route path='/handlelogin'element={<Handlelogin/>}/>
        <Route path='/onclick' element={<Handleclick/>}/>
        <Route path='/web' element={<Settingelement/>}/>
        <Route path='/event'element={<Eventhandling/>}/>
        <Route path='/pooling'element={<Eventpooling/>}/>
        <Route path='/value' element={<Eventvalue/>}/>
        <Route path='/submit' element={<Onsubmit/>}/>
        <Route path='/over' element={<Mouseover/>}/>
        <Route path='/blur' element={<Onblur/>}/>
        <Route path='/navigate' element={<Navigate/>}/>
        <Route path='/filter' element={<Filter/>}/>
        <Route path='/filter2' element={<Filter2/>}/>
        <Route path='/sorting' element={<Sorting/>}/>
        <Route path='/date' element={<Date/>}/>
      </Routes>
      </div>
    </Router>
    
  )
}

export default App