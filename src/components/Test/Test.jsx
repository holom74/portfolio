// import React, { useState } from 'react';
// import './Test.css'

//  function Test() {
//   // حالة لتتبع ما إذا كان العنصر الفردي مرئيًا أم لا
//   const [isLessVisible, setIsLessVisible] = useState(true);
//   // حالة لتتبع ما إذا كانت العناصر الثنائية مرئية أم لا
//   const [isAllVisible, setIsAllVisible] = useState(false);
//   // حالة لتتبع ما إذا كان الزر الأول مرئيًا أم لا
//   const [isButtonVisible, setIsButtonVisible] = useState(true);
//   // حالة لتتبع ما إذا كان زر العودة مرئيًا أم لا
//   const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);

//   // دالة لتبديل الرؤية بين العناصر
//   const handleShowDouble = () => {
//     setIsLessVisible(false); // إخفاء العنصر الفردي
//     setIsAllVisible(true);  // إظهار العناصر الثنائية
//     setIsButtonVisible(false); // إخفاء الزر الأول
//     setIsBackButtonVisible(true); // إظهار زر العودة
//   };

//   // دالة للعودة إلى الحالة الأولى
//   const handleBack = () => {
//     setIsLessVisible(true); // إظهار العنصر الفردي
//     setIsAllVisible(false); // إخفاء العناصر الثنائية
//     setIsButtonVisible(true); // إظهار الزر الأول
//     setIsBackButtonVisible(false); // إخفاء زر العودة
//   };

//   return (
//     <>
//     <div className="container bg-primary-subtle ">
//         <p className="workTitle">MY WORK</p>
//         <h2 className='workHeading'>RECENT WORK</h2>
//         <ul className="nav ">
//           <li className="nav-item">
//             <button className="nav-link active " aria-current="page" >Graphic Design</button>
//           </li>
//           <li className="nav-item">
//             <button className="nav-link" >Apps</button>
//           </li>
//           <li className="nav-item">
//             <button className="nav-link" >Software </button>
//           </li>
//         </ul>
//       {isLessVisible && (
//         <div className="row">
//         <div className="col-md-6">
//           <div className="project img1" > </div>
//         </div>
//         <div className="col-md-6">
//           <div className="project img2"></div>
//         </div>
//         <div className="col-md-6">
//           <div className="project img3"></div>
//         </div>
//         <div className="col-md-6">
//           <div className="project img4"></div>
//         </div>
//       </div>
//       )}
//       {isAllVisible && (
//         <div className="row">
//         <div className="col-md-6">
//           <div className="project img1" > </div>
//         </div>
//         <div className="col-md-6">
//           <div className="project img2"></div>
//         </div>
//         <div className="col-md-6">
//           <div className="project img3"></div>
//         </div>
//         <div className="col-md-6">
//           <div className="project img4"></div>
//         </div>
//         <div className="col-md-6">
//           <div className="project img5"></div>
//         </div>
//         <div className="col-md-6">
//           <div className="project img6"></div>
//         </div>
//       </div>
//       )}
//       {isButtonVisible && (
//         <button className=' btn btn-info w-25' onClick={handleShowDouble}>
//           show more
//         </button>
//       )}
//       {isBackButtonVisible && (
//         <button className=' btn btn-primary w-25' onClick={handleBack}>
//           show less
//         </button>
//       )}
//       </div>
//     </>
//   );
// };

// export default Test;
