import { useEffect, useState } from "react"
import { fetchEmployees } from "../utils/apiClient"
import { useNavigate } from "react-router-dom";
import EmployeeTable from "./tables/EmployeeTable";
import UserTable from "./tables/userTable";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const user=JSON.parse(localStorage.getItem('user'))

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
        <button onClick={()=>navigate('/employee/add')}className="bg-green-500 text-white p-2 text-right">{tag} Employee</button>

        {user?.role==="EMPLOYEER" &&
        <button onClick={()=>navigate('/bulk-upload')}className="bg-green-500 text-white p-2 text-right">Bulk Upload</button>
        }
      </div>
      <div>
        {user?.role==="EMPLOYEER" &&
        <EmployeeTable/>  
        }
        {user?.role==="ADMIN" &&
        <UserTable/>
        }
      </div>
      <div>
      </div>
    </div>
  )
}

export default Dashboard
