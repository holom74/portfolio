// import React from 'react'
import './SideNav.module.css'
import { Link } from 'react-router-dom'
import Myimge from '../../assets/images/about-BgAkqdr2.jpg'

export default function SideNav() {
    return (
        <>
            <div className="d-flex navbar navbar-expand-lg  flex-column  bg-light vh-100  container " >
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    <div className="d-flex flex-column align-items-center mt-5 navbar-nav ">
                        <img src={Myimge} alt="Profile" className=" rounded-circle mb-5"
                            style={{ width: '150px', height: '150px' }} />
                        <h4> helmy reda </h4>
                    </div>
                    <ul className="nav flex-column align-self-center  mt-3">
                        <li className="nav-item">
                            <Link to='Home' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='About' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='Skills' className="nav-link">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='Experience' className="nav-link">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='Work' className="nav-link">Work</Link>
                        </li>
                    </ul>
                </div>
            {/* </div> */}


        </>
    )
}
