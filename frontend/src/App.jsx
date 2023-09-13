import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import RequiredAuth from './features/auth/RequiredAuth';
import Welcome from './features/auth/Welcome';
import Employees from './features/employee/Employees';
import Unauthorized from './components/Unauthorized';
import Home from './components/Home';
import Admin from './components/Admin';
import Editor from './components/Editor';
import Missing from './components/Missing';

// const ROLES = {
//   'user':2001,
//   "Editor":1984,
//   "Admin":5150,
// };



const App = () => {
  return (
    // <Public />
    <Routes>
      <Route path='/' element={<Layout />} >
        {/* public route */}
        <Route index element={<Public />}  />
        <Route path='login' element={<Login />} />
        <Route path='unauthorized' element={<Unauthorized/>} />
 
        {/* protected route */}
       
        {/* users page */}
        <Route element={<RequiredAuth allowedRoles={[201]} />} >
          <Route path='welcome' element={<Welcome />} />
           <Route path='user' element={<Home />} />
        </Route>

        {/* editor page */}
        <Route element={<RequiredAuth allowedRoles={[1984]} />} >
           <Route path='editor' element={<Editor />} />
        </Route>

         {/* admin page */}
         <Route element={<RequiredAuth allowedRoles={[5150]} />} >
           <Route path='admin' element={<Admin />} />
        </Route>

        {/* employee page */}
        <Route element={<RequiredAuth allowedRoles={[1984, 5150]} />} >
           <Route path='employee' element={<Employees />} />
        </Route>

          {/* missing route */}
          <Route path='/*' element={<Missing />} />
      </Route>
    </Routes> 
  )
}

export default App


//  {/* protected route */}
//  <Route element={<RequiredAuth />} >
//     <Route path='welcome' element={<Welcome />} />
//     <Route path='employees' element={<Employees />} />
// </Route>
