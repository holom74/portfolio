// import React from 'react'
import abst from './About.module.css'


export default function About() {
  return (

    <>
      <div className='py-5 mt-5'>
        <p className={abst.aboutTitle}> ABOUT US </p>
        <h2 className={abst.aboutHedding}>who am i </h2>
        <p className={abst.aboutText}>
          <strong>Hi Im Jackson Ford</strong> On her way she met a copy.
          The copy warned the Little Blind Text, that where it came
          from it would have been rewritten a thousand times and everything that was left
          from its origin would be the word  and the Little
          Blind Text should turn around and return to its own, safe country.
        </p>
        <p className={abst.aboutText}>
          Even the all-powerful Pointing has no control about the
          blind texts it is an almost unorthographic life One day however
          a small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
        <div className="row ">
          <div className="col-3">
            <div className={`${abst.services} ${abst['color-1']}`}>
              <span className={abst.icon}><i className={`${abst['fa-regular']}  fa-lightbulb `}></i> </span>
              <h3 className=' mt-4'>Application</h3>
            </div>
          </div>
          <div className="col-3">
            <div className={`${abst.services} ${abst['color-2']}`}>
              <span className={abst.icon}><i className={`${abst['fa-solid']} fa-earth-africa`}></i> </span>
              <h3 className=' mt-4'>Software</h3>
            </div>
          </div>
          <div className="col-3">
            <div className={`${abst.services} ${abst['color-3']}`}>
              <span className={abst.icon}><i className={`${abst['fa-solid']} fa-database`}></i> </span>
              <h3 className=' mt-4'>Web Design</h3>
            </div>
          </div>
          <div className="col-3">
            <div className={`${abst.services} ${abst['color-4']}`}>
              <span className={abst.icon}><i className={`${abst['fa-solid']} fa-mobile-screen-button `}></i> </span>
              <h3 className=' mt-4'>Application</h3>
            </div>
          </div>
        </div>
      </div>



    </>

  )
}
