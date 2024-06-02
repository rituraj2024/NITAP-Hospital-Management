// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FaLocationArrow, FaPhone } from "react-icons/fa6";
// // import { MdEmail } from "react-icons/md";
// // import "../styles/Footer.css";

// // const Footer = () => {
// //   const hours = [
// //     {
// //       id: 1,
// //       day: "Monday",
// //       time: "9:00 AM - 11:00 PM",
// //     },
// //     {
// //       id: 2,
// //       day: "Tuesday",
// //       time: "12:00 PM - 12:00 AM",
// //     },
// //     {
// //       id: 3,
// //       day: "Wednesday",
// //       time: "10:00 AM - 10:00 PM",
// //     },
// //     {
// //       id: 4,
// //       day: "Thursday",
// //       time: "9:00 AM - 9:00 PM",
// //     },
// //     {
// //       id: 5,
// //       day: "Monday",
// //       time: "3:00 PM - 9:00 PM",
// //     },
// //     {
// //       id: 6,
// //       day: "Saturday",
// //       time: "9:00 AM - 3:00 PM",
// //     },
// //   ];

// //   return (
// //     <>
// //       <footer className={"container"}>
// //         <hr />
// //         <div className="content">
// //           <div>
// //             <img src="/logo.png" alt="logo" className="logo-img" />
// //           </div>
// //           <div>
// //             <h4>Quick Links</h4>
// //             <ul>
// //               <Link to={"/"}>Home</Link>
// //               <Link to={"/appointment"}>Appointment</Link>
// //               <Link to={"/about"}>About</Link>
// //             </ul>
// //           </div>
// //           <div>
// //             <h4>Hours</h4>
// //             <ul>
// //               {hours.map((element) => (
// //                 <li key={element.id}>
// //                   <span>{element.day}</span>
// //                   <span>{element.time}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div>
// //             <h4>Contact</h4>
// //             <div>
// //               <FaPhone />
// //               <span>999-999-9999</span>
// //             </div>
// //             <div>
// //               <MdEmail />
// //               <span>621240@student.nitandhra.ac.in</span>
// //             </div>
// //             <div>
// //               <FaLocationArrow />
// //               <span>NIT ANDHRA PRADESH</span>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // };

// // export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaLocationArrow, FaPhone } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import "../styles/Footer.css";

// const Footer = () => {
//   const hours = [
//     {
//       id: 1,
//       day: "Monday",
//       time: "9:00 AM - 11:00 PM",
//     },
//     {
//       id: 2,
//       day: "Tuesday",
//       time: "12:00 PM - 12:00 AM",
//     },
//     {
//       id: 3,
//       day: "Wednesday",
//       time: "10:00 AM - 10:00 PM",
//     },
//     {
//       id: 4,
//       day: "Thursday",
//       time: "9:00 AM - 9:00 PM",
//     },
//     {
//       id: 5,
//       day: "Friday",
//       time: "3:00 PM - 9:00 PM",
//     },
//     {
//       id: 6,
//       day: "Saturday",
//       time: "9:00 AM - 3:00 PM",
//     },
//   ];

//   return (
//     <footer className="container">
//       <hr />
//       <div className="content">
//         <div className="logo-container">
//           <img src="/logo.png" alt="logo" className="logo-img" />
//         </div>
//         <div className="links-container">
//           <h4>Quick Links</h4>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/appointment">Appointment</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="hours-container">
//           <h4>Hours</h4>
//           <ul>
//             {hours.map((element) => (
//               <li key={element.id}>
//                 <span>{element.day}</span>
//                 <span>{element.time}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="contact-container">
//           <h4>Contact</h4>
//           <div>
//             <FaPhone className="icon" />
//             <span>999-999-9999</span>
//           </div>
//           <div>
//             <MdEmail className="icon" />
//             <span>nitandhra.ac.in</span>
//           </div>
//           <div>
//             <FaLocationArrow className="icon" />
//             <span>Tadepalligudum, Andhra Pradesh</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaLocationArrow, FaPhone } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import logo from "../assets/image.png";
// import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";

// const Footer = () => {
//   const hours = [
//     {
//       id: 1,
//       day: "Monday",
//       time: "9:00 AM - 11:00 PM",
//     },
//     {
//       id: 2,
//       day: "Tuesday",
//       time: "12:00 PM - 12:00 AM",
//     },
//     {
//       id: 3,
//       day: "Wednesday",
//       time: "10:00 AM - 10:00 PM",
//     },
//     {
//       id: 4,
//       day: "Thursday",
//       time: "9:00 AM - 9:00 PM",
//     },
//     {
//       id: 5,
//       day: "Friday",
//       time: "3:00 PM - 9:00 PM",
//     },
//     {
//       id: 6,
//       day: "Saturday",
//       time: "9:00 AM - 3:00 PM",
//     },
//   ];

//   const footerStyle = {
//     backgroundColor: "#0a192f",
//     color: "#fff",
//     padding: "20px",
//     borderTop: "1px solid #fff",
//     textAlign: "center",
//   };

//   const contentStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   };

//   const logoContainerStyle = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const logoImgStyle = {
//     marginRight: "10px",
//     width: "50px",
//   };

//   const linksContainerStyle = {
//     textAlign: "left",
//     marginLeft: "20px",
//   };

//   const hoursContainerStyle = {
//     textAlign: "left",
//   };

//   const contactContainerStyle = {
//     textAlign: "left",
//     marginLeft: "20px",
//   };

//   return (
//     <footer style={footerStyle}>
//       <div className="content" style={contentStyle}>
//         <div className="logo-container" style={logoContainerStyle}>
//           <img
//             src={logo}
//             alt="logo"
//             className="logo-img"
//             style={logoImgStyle}
//           />
//           <div className="social-icons">
//             <a href="https://facebook.com">
//               <RiFacebookFill />
//             </a>
//             <a href="https://twitter.com">
//               <RiTwitterFill />
//             </a>
//             <a href="https://linkedin.com">
//               <RiLinkedinFill />
//             </a>
//           </div>
//         </div>
//         <div className="links-container" style={linksContainerStyle}>
//           <h4>Quick Links</h4>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/appointment">Appointment</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="hours-container" style={hoursContainerStyle}>
//           <h4>Hours</h4>
//           <ul>
//             {hours.map((element) => (
//               <li key={element.id}>
//                 <span>{element.day}</span>
//                 <span>{element.time}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="contact-container" style={contactContainerStyle}>
//           <h4>Contact</h4>
//           <div>
//             <FaPhone className="icon" />
//             <span>999-999-9999</span>
//           </div>
//           <div>
//             <MdEmail className="icon" />
//             <span>nitandhra.ac.in</span>
//           </div>
//           <div>
//             <FaLocationArrow className="icon" />
//             <span>Tadepalligudum, Andhra Pradesh</span>
//           </div>
//         </div>
//       </div>
//       <br></br>
//       <p>
//         © 2024 NATIONAL INSTITUTE OF TECHNOLOGY, ANDHRA PRADESH - ALL RIGHTS
//         RESERVED
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/image.png";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  const footerStyle = {
    backgroundColor: "#0a192f",
    color: "#fff",
    padding: "20px",
    borderTop: "1px solid #fff",
    textAlign: "center",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoImgStyle = {
    marginRight: "10px",
    width: "50px",
  };

  const linksContainerStyle = {
    textAlign: "left",
    marginLeft: "20px",
    flex: "1",
  };

  const hoursContainerStyle = {
    textAlign: "left",
    flex: "1",
  };

  const contactContainerStyle = {
    textAlign: "left",
    marginLeft: "20px",
    flex: "1",
  };

  return (
    <footer style={footerStyle}>
      <div className="content" style={contentStyle}>
        <div className="logo-container" style={logoContainerStyle}>
          <img
            src={logo}
            alt="logo"
            className="logo-img"
            style={logoImgStyle}
          />
          <div className="social-icons">
            <a href="https://facebook.com">
              <RiFacebookFill />
            </a>
            <a href="https://twitter.com">
              <RiTwitterFill />
            </a>
            <a href="https://linkedin.com">
              <RiLinkedinFill />
            </a>
          </div>
        </div>
        <div className="links-container" style={linksContainerStyle}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="hours-container" style={hoursContainerStyle}>
          <h4>Hours</h4>
          <ul>
            {hours.map((element) => (
              <li key={element.id}>
                <span>{element.day}</span>
                <span>{element.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-container" style={contactContainerStyle}>
          <h4>Contact</h4>
          <div>
            <FaPhone className="icon" />
            <span>999-999-9999</span>
          </div>
          <div>
            <MdEmail className="icon" />
            <span>nitandhra.ac.in</span>
          </div>
          <div>
            <FaLocationArrow className="icon" />
            <span>Tadepalligudum, Andhra Pradesh</span>
          </div>
        </div>
      </div>
      <br />
      <p>
        © 2024 NATIONAL INSTITUTE OF TECHNOLOGY, ANDHRA PRADESH - ALL RIGHTS
        RESERVED
      </p>
    </footer>
  );
};

export default Footer;
