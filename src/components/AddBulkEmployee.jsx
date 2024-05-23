import { useForm } from 'react-hook-form';
import {  bulkUpload } from '../utils/apiClient';
import { useNavigate } from 'react-router-dom';

const AddBulkEmployee = () => {
  const { handleSubmit,register,setError} = useForm();
  const navigate=useNavigate()
  
  
  const onSubmit = () => async (payload) => {
    const formData = new FormData();
    formData.append('file', payload.file[0]);
    try {
      const data = await bulkUpload(formData);
      console.log(data, 'success');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center" >
        <form className='' onSubmit={handleSubmit(onSubmit(setError))}>
            <div className="mb-10">
              <div className="space-y-1 ">
                <div className="space-y-2">
                  <div className=''>
                    <label className="text-sm font-medium leading-none pr-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Excel Upload</label>
                    <input 
                      id="file"
                      type="file"
                      accept=".xlsx, .xls"
                      {...register('file', {
                        required:
                          'please provide your file',
                      })}
                      placeholder="Enter your file"
                    />
                  </div>
                </div>
              </div>
              <div className='mt-4'>
                <button className=" ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" 
                type="submit">Bulk Upload</button>
              </div>
            </div>
      </form>
    </div>
  )
}

export default AddBulkEmployee
