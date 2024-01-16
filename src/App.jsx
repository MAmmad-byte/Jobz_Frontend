import './App.css'
import { Box } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import UserDashboard from './pages/UserDashboard'
import Jobs from './pages/Jobs'
import Footer from './components/Footer'
import JobPreview from './pages/JobPreview'
import JobForm from './pages/JobForm'
import CreateJob from './pages/CreateJob'
import Success from './pages/Success'
import Users from './pages/Users'
import UserAppliedJobs from './pages/UsersAppliedJobs'
import Logout from './components/Logout'

function App() {


  return (
    <Box width="100%" minHeight="100vh" display="flex" flexDirection={"column"} >
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<div>Contact</div>} path='/contact' />
        <Route element={<Jobs />} path='/jobs' />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
        <Route element={<UserDashboard />} path='/dashboard' />
        <Route element={<Logout/>} path='/logout' />
        <Route element={<JobPreview/>} path='/job/:id' />
        <Route element={<JobForm/>} path='/job/:id/apply' />
        <Route element={<CreateJob/>} path='/admin/job/new' />
        <Route element={<Success/>} path='/admin/user/:user_id/job/:job_id' />    {/*it must be start with profile. not an admin*/}
        <Route element={<Users/>} path='/admin/allUsers' />
        <Route element={<UserAppliedJobs/>} path='/admin/allUsers/:id/applied' />
      </Routes>
      <Footer />
      </BrowserRouter>
    </Box>
  )
}

export default App
