import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import AddEmployeer from './AddEmployeer';
import AddEmployee from './AddEmployee';
import Auth from './Auth';
import AddBulkEmployee from './AddBulkEmployee';


const App=()=>{
  
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route element={<Auth />}>
        <Route path="/dashboard/" element={<Dashboard />}/>
        <Route path="/add-employeer" element={<AddEmployeer />}/>
        <Route path="/employee/add" element={<AddEmployee />}/>
        <Route path="/employee/:id" element={<AddEmployee />}/>
        <Route path="/bulk-upload" element={<AddBulkEmployee />}/>
      </Route>
    </Routes>
  )

}

export default App;
