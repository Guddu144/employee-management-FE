import { useForm } from 'react-hook-form';
import { addEmployeer } from '../utils/apiClient';
import { useNavigate } from 'react-router-dom';

const AddEmployeer = () => {
  const { handleSubmit,register,setError} = useForm();
  const navigate=useNavigate()
  
  
  const onSubmit = () => (payload) => {
    addEmployeer(payload).then((data) => {
      console.log(data,'success')
      navigate('/dashboard')

    });
    
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center" >
        <form className='' onSubmit={handleSubmit(onSubmit(setError))}>
            <div className="mb-10">
              <div className="space-y-1 ">
                <div className="space-y-2">
                  <div className=''>
                    <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                    <input 
                      id="email"
                      type="text"
                      {...register('email', {
                        required:
                          'please provide your email',
                      })}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className=''>
                    <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                    <input 
                      id="name"
                      type="text"
                      {...register('name')}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className=''>
                      <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone</label>
                      <input 
                        id="phone"
                        type="text"
                        {...register('phone')}
                        placeholder="Enter your phone"
                      />
                  </div>
                  <div className=''>
                      <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Address</label>
                      <input 
                        id="address"
                        type="text"
                        {...register('address')}
                        placeholder="Enter your address"
                      />
                  </div>
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
                </div>
              </div>
              <div className='mt-4'>
                <button className=" ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" 
                type="submit">Add Employeer</button>
              </div>
            </div>
      </form>
    </div>
  )
}

export default AddEmployeer
