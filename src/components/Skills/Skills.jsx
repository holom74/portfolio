// import React from 'react'
import skst from './Skills.module.css'

export default function Skills() {
  return (
    <>
      <div>
        <div className="mt-5 pt-5">
          <p className={skst.skillsTitle}> ABOUT US </p>
          <h2 className={skst.skillsHeading}>who am i </h2>
          <p className={skst.skillsText}>
            The Big Oxmox advised her not to do so, because there were thousands of
            bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text
            didn’t listen. She packed her seven versalia,
            put her initial into the belt and made herself on the way.
          </p>
          <div className="row  my-5">
            <div className="col-6">
              <h3 className={`mb-2 skst.progressTitle`}>HTML5</h3>
              <div className='progress'  role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className={`skst.progress-bar bg-info`} role="progressbar" style={{ width: '75%' }}>
                <span className=' text-dark'>75%</span>
                </div>
              </div>
              <h3 className={`mb-2 skst.progressTitle`}>css3</h3>
              <div className=' progress' role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }}>
                  <span className=' text-dark'>85%</span>
                </div>
              </div>
              <h3 className={`mb-2 skst.progressTitle`}>java script </h3>
              <div className=' progress' role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }}>
                <span className=' text-dark'>50%</span>
                </div>
              </div>
              

            </div>
            <div className="col-6">
              <h3 className={`mb-2 skst.progressTitle`}>jquery</h3>
              <div className=' progress' role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger-subtle" role="progressbar" style={{ width: '60%' }}>
                <span className=' text-dark'>60%</span>
                </div>
              </div>
              <h3 className={`mb-2 skst.progressTitle`}>SEO</h3>
              <div className='progress' role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '75%' }}>
                <span className=' text-dark'>75%</span>
                </div>
              </div>
              <h3 className={`mb-2 skst.progressTitle`}>Figma</h3>
              <div className=' progress' role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }}>
                  <span className=' text-dark'>75%</span>
                </div>
              </div>
              

            </div>

          </div>
        </div>
      </div>

    </>
  )
}
