import React, {useEffect} from 'react'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
  useEffect(()=>{
    const fetchProtectedData = async () =>{
      try{
        const response = await axiosInstance.get('/protected-view/');
      
        console.log('Success: ', response.data);
      }catch(error){
        console.error('Error fetching data:', error)
        }
      }
    fetchProtectedData();
  }, [])

  return (
    <div className='container-fluid'>
      <div className='container dashboard'>
        <h3 className="mt-2 text-dark text-center">Dashboard</h3>
        <p className="lead text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>    
      </div>
    </div>
  )
}

export default Dashboard