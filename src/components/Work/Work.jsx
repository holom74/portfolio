import  { useState } from 'react'
import style from  './Work.module.css'
// import img1 from '../../assets/images/img-1-C4nS0eD8.jpg'

export default function Work() {

  const [isLessVisible, setIsLessVisible] = useState(true);
  const [isAllVisible, setIsAllVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);


  const handleShowDouble = () => {
    setIsLessVisible(false);
    setIsAllVisible(true);
    setIsButtonVisible(false);
    setIsBackButtonVisible(true);
  };

  const handleBack = () => {
    setIsLessVisible(true);
    setIsAllVisible(false);
    setIsButtonVisible(true);
    setIsBackButtonVisible(false);
  };




  return (
    <>
      <div className= "container py-5 mt-3" >
        <p className={style.workTitle}>MY WORK</p>
        <h2 className={style.workHeading}>RECENT WORK</h2>
        <ul className="nav">
          <li className={"nav-item"}>
            <button className="nav-link  text-dark " aria-current="page" >Graphic Design</button>
          </li>
          <li className="nav-item">
            <button className="nav-link text-dark" >Apps</button>
          </li>
          <li className="nav-item ">
            <button className="nav-link text-dark" >Software </button>
          </li>
        </ul>
        {isLessVisible && (
          <div className="row">
            <div className="col-md-6">
              <div className={`${style.project} ${style.img1}`}>

        </div>
            </div>
            <div className="col-md-6">
              <div className={`${style.project} ${style.img2}`}></div>
            </div>
            <div className="col-md-6">
              <div className={`${style.project} ${style.img3}`}></div>
            </div>
            <div className="col-md-6">
              <div className={`${style.project} ${style.img4}`}></div>
            </div>
          </div>
        )}
        {isAllVisible && (
          <div className="row">
            <div className="col-md-6">
              <div className={`${style.project} ${style.img1}`} > </div>
            </div>
            <div className="col-md-6">
              <div className={`${style.project} ${style.img2}`}></div>
            </div>
            <div className="col-md-6">
              <div className={`${style.project} ${style.img3}`}></div>
            </div>
            <div className="col-md-6">
              <div className={`${style.project} ${style.img4}`}></div>
            </div>
            <div className="col-md-6">
              <div className={`${style.project} ${style.img5}`}></div>
            </div>
            <div className="col-md-6">
              <div className={`${style.project} ${style.img6}`}></div>
            </div>
          </div>
        )}
        {isButtonVisible && (
          <button className=' btn btn-info w-25' onClick={handleShowDouble}>
            show more
          </button>
        )}
        {isBackButtonVisible && (
          <button className=' btn btn-primary w-25' onClick={handleBack}>
            show less
          </button>
        )}
      </div>
    </>
  )
}
