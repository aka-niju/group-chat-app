import './App.css'
import Chat from './components/Chat Page/Chat'
import Login from './components/Login Page/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {



  return (
    // <Router>
    //   <Routes>
    //     <Route exact path='/' element={<Login/>}></Route>
    //     <Route path='/chat' element = {<Chat />}>

    //     </Route>
    //   </Routes>
    // </Router>
    <Login />
  )
}

export default App
