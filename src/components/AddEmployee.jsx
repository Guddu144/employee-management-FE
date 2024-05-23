import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addEmployee, fetchEmployee, updateEmployee } from '../utils/apiClient';
import { useEffect, useState } from 'react';

const AddEmployee = () => {
  const { handleSubmit,register,setError} = useForm();
  const navigate=useNavigate()
  const user=JSON.parse(localStorage.getItem('user'))
  const [data,setData] =useState()
  
  const tag=user?.role==="EMPLOYEE" ? "Update" : "Add";
  
  const onSubmit = () => (payload) => {
    if(tag==="Add"){
      addEmployee(payload).then((data) => {
        console.log(data,'success')
        navigate('/dashboard')
  
      });
    }else{
      updateEmployee(user?.userId,payload).then((data) => { 
        console.log(data,'success')
      })
    }
    
  };



    useEffect(() => {
      if (tag === "Add") {
        setData({});
      } else {
        fetchEmployee(user?.userId)
          .then(setData)
          .catch(err => console.error(err));
      }
    }, [tag, user?.userId]);

  if(!data){
      return null
    }

  return (
    <div className="flex h-screen flex-col items-center justify-center" >
        <form className='' onSubmit={handleSubmit(onSubmit(setError))}>
            <div className="mb-10">
              <div className="space-y-1 ">
                <div className="space-y-2">
                  <div className=''>
                    <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Title</label>
                    <input 
                      id="title"
                      type="text"
                      disabled={user?.role==="EMPLOYEE" }
                      {...register('title', {
                        required:
                          'please provide your title',
                        value: data?.title
                      })}
                      placeholder="Enter your title"
                    />
                  </div>
                  <div className=''>
                    <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Yearly salary</label>
                    <input 
                      id="yearly_salary"
                      disabled={user?.role==="EMPLOYEE" }
                      type="number"
                      {...register('yearly_salary', {
                        required:
                          'please provide your yearly_salary',
                        valueAsNumber:true,
                        value: data?.yearly_salary
                      })}
                      placeholder="Enter your yearly_salary"
                    />
                  </div>
                  <div className=''>
                    <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                    <input 
                      id="email"
                      type="text"
                      {...register('email', {
                        required:
                          'please provide your email',
                        value: data?.user?.email
                      })}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className=''>
                    <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                    <input 
                      id="name"
                      type="text"
                      {...register('name',{
                        value:data?.user?.name
                      })}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className=''>
                      <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone</label>
                      <input 
                        id="phone"
                        type="text"
                        {...register('phone',{
                          value:data?.user?.phone
                        })}
                        placeholder="Enter your phone"
                      />
                  </div>
                  <div className=''>
                      <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Address</label>
                      <input 
                        id="address"
                        type="text"
                        {...register('address',{
                          value:data?.address
                        })}
                        placeholder="Enter your address"
                      />
                  </div>
                  {tag==="Add" &&
                    <div>
                      <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4" >Password</label>
                      <input 
                          id="password"
                          type="password"
                          {...register("password", {
                            required: "please enter your password",
                          })}
                          placeholder="Enter your password"
                        />
                      </div>
                  }

                </div>
              </div>
              <div className='mt-4'>
                <button className=" ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" 
                type="submit">{tag} Employee</button>
              </div>
            </div>
      </form>
    </div>
  )
}

export default AddEmployee
