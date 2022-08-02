import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard';

const AdminDashboard = () => {
  return (
    <Router>
      <Routes>
          <Route exact path='/admin-dashboard' element={<AdminDashboard />}></Route>
          {/* <Route exact path='/about' element={< About />}></Route> */}
          {/* <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>
  </Router>
  )
}

export default AdminDashboard