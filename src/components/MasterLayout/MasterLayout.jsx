// import React from 'react'
import { Outlet } from "react-router-dom";
import SideNav from "../SideNav/SideNav";

export default function MasterLayout() {
  return (
    <>
      <div className=' container-fluid'>
        <div className='row '>
          <div className='col-md-2  position-fixed start-0 top-0 end-0 d-flex justify-content-center align-items-center'>
            <SideNav />
          </div>
          <div className=' col-md-9 position-relative me-5  container-fluid d-flex d-block flex-column justify-content-center'>

            <Outlet />

          </div>
        </div>
      </div>

    </>
  )
}
