import { useEffect, useState } from "react"
import { fetchEmployees } from "../utils/apiClient"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [employee,setEmployee]=useState()
  console.log(employee)
  const user=JSON.parse(localStorage.getItem('user'))
  console.log(user)
  useEffect(() => {
    fetchEmployees()
      .then((data) => {
        setEmployee(data);
        console.log('success');
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const tag=user?.role==="EMPLOYEE" ? "Update" : "Add";


  return (
    <div>
      <div className="font-semibold">
        <div className="flex justify-center text-xl">Welcome to employee management dashboard</div>
        <span className="flex justify-center text-xl">{user.role}</span>
      </div>
      <div className="flex justify-around mt-4" >
        {user?.role==="ADMIN" &&
          <button onClick={()=>navigate('/add-employeer')}className="bg-green-500 text-white p-2 text-right">Add Employeer</button>
        }
        <button onClick={()=>navigate('/add-employee')}className="bg-green-500 text-white p-2 text-right">{tag} Employee</button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Dashboard
