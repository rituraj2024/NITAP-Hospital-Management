// import React from "react";
// import hero from "../assets/hero.png";

// const Hero = ({ title }) => {
//   return (
//     <>
//       <div className="hero container">
//         <div className="banner">
//           <h1>{title}</h1>
//           <p>
//             The health center is located with in the campus and the Institute
//             has a one full time medical officer and 5 other paramedical staff to
//             attend the medical needs of the students, staffs and their family
//             members. Incase of emergency individual can be evacuated to nearest
//             State Governmenthospitals.
//           </p>
//         </div>
//         <div className="banner">
//           <img
//             src="https://nitandhra.ac.in/main/images/Health%20Centre.webp"
//             alt="hero"
//             className="animated-image"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

// // import React from "react";
// // import hero from "../assets/hero.png";

// // const Hero = ({ title }) => {
// //   const containerStyle = {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: "20px",
// //     backgroundColor: "#f0f8ff",
// //     borderRadius: "10px",
// //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //   };

// //   const bannerStyle = {
// //     flex: "1",
// //     margin: "10px",
// //     textAlign: "center",
// //   };

// //   const headingStyle = {
// //     fontSize: "2.5em",
// //     fontWeight: "bold",
// //     color: "#333",
// //     marginBottom: "10px",
// //   };

// //   const paragraphStyle = {
// //     fontSize: "1.2em",
// //     lineHeight: "1.5",
// //     color: "#555",
// //   };

// //   const imageStyle = {
// //     maxWidth: "100%",
// //     height: "auto",
// //     borderRadius: "10px",
// //     transition: "transform 0.3s ease-in-out",
// //   };

// //   const imageHoverStyle = {
// //     transform: "scale(1.05)",
// //   };

// //   return (
// //     <>
// //       <div style={containerStyle} className="hero container">
// //         <div style={bannerStyle} className="banner">
// //           <h1 style={headingStyle}>{title}</h1>
// //           <p style={paragraphStyle}>
// //             The health center is located within the campus and the Institute has
// //             a one full time medical officer and 5 other paramedical staff to
// //             attend the medical needs of the students, staff and their family
// //             members. In case of emergency, individuals can be evacuated to the
// //             nearest State Government hospitals.
// //           </p>
// //         </div>
// //         <div style={bannerStyle} className="banner">
// //           <img
// //             src="https://nitandhra.ac.in/main/images/Health%20Centre.webp"
// //             alt="hero"
// //             className="animated-image"
// //             style={imageStyle}
// //             onMouseOver={(e) =>
// //               (e.currentTarget.style.transform = imageHoverStyle.transform)
// //             }
// //             onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
// //           />
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Hero;

import React from "react";

const Hero = ({ title }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#e0f7fa",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const bannerStyle = {
    flex: "1",
    margin: "10px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "1.2em",
    lineHeight: "1.5",
    color: "#555",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out",
  };

  const imageHoverStyle = {
    transform: "scale(1.05)",
  };

  return (
    <>
      <div style={containerStyle} className="hero container">
        <div style={bannerStyle} className="banner">
          <h1 style={headingStyle}>{title}</h1>
          <p style={paragraphStyle}>
            The health center is located within the campus and the Institute has
            a one full-time medical officer and 5 other paramedical staff to
            attend the medical needs of the students, staff, and their family
            members. In case of emergency, individuals can be evacuated to the
            nearest State Government hospitals.
          </p>
        </div>
        <div style={bannerStyle} className="banner">
          <img
            src="https://nitandhra.ac.in/main/images/Health%20Centre.webp"
            alt="hero"
            className="animated-image"
            style={imageStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = imageHoverStyle.transform)
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
