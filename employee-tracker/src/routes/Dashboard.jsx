import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link
} from 'react-router-dom';

const Dashboard = () => {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Dashboard />}></Route>
      </Routes>
  </Router>
  )
}

export default Dashboard