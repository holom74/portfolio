// import React from 'react'
import any from './Experience.module.css'

export default function Experiennce() {
  return (
   <>

   <div className="container mt-5 pt-5">
      <p className={any.experienceTitle}> EXPERIENCE</p>
      <h3 className={any.experienceHeading}> Work Experience</h3>
      <div  className="row">
    <ul  className={any.timeline}>
      <li>
        <div  className={any.timeline_badge}><i  className="fas fa-pencil-alt"></i></div>
        <div  className={any.timeline_panel}>
          <div  className={any.timeline_heading}>
            <h4  className={any.timeline_title}>Full Stack Developer</h4>
          <p><small  className={any.text_muted}><i  className="fas fa-clock"></i> 2017-2018</small></p>
          </div>
          <div  className={any.timeline_body}>
            <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
        </div>
      </li>
      <li  className={any.timeline_inverted}>
        <div  className={any.timeline_badge}><i  className="fas fa-pencil-alt"></i></div>
        <div  className={any.timeline_panel}>
          <div  className={any.timeline_heading}>
            <h4  className={any.timeline_title}>Front End Developer at Google Company</h4>
            <p><small  className={any.text_muted}><i  className="fas fa-clock"></i> 2017-2018</small></p>
          </div>
          <div  className={any.timeline_body}>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          </div>
        </div>
      </li>
      <li>
        <div  className={any.timeline_badge}><i  className="fas fa-pencil-alt"></i></div>
        <div  className={any.timeline_panel}>
          <div  className={any.timeline_heading}>
            <h4  className={any.timeline_title}>System Analyst</h4>
            <p><small  className={any.text_muted}><i  className="fas fa-clock"></i> 2017-2018</small></p>
          </div>
          <div  className={any.timeline_body}>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
    </div>
   </>
  )
}
