import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import AddEmployeer from './AddEmployeer';
import AddEmployee from './AddEmployee';
import Auth from './Auth';


const App=()=>{
  
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route element={<Auth />}>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/add-employeer" element={<AddEmployeer />}/>
        <Route path="/add-employee" element={<AddEmployee />}/>
      </Route>
    </Routes>
  )

}

export default App;
