import { Route, Routes } from 'react-router-dom';
import Login from './Login';


const App=()=>{
  
  return (
    <Routes>
      <Route path="/" element={<Login />}/>

    </Routes>
  )

}

export default App;
