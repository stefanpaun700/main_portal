import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className="container">
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Main Portal</h1>
            <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <Button text="Login" class="btn-outline-info" />             
            {/* <Button text="Explore Now" class="btn-info" url="/dashboard" /> */}
        </div>
      </div>
    </>
  )
}

export default Main