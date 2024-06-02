// import React from "react";

// const Departments = () => {
//   return <div>Departments</div>;
// };

// export default Departments;

import React from "react";

const Departments = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#e0f7fa",
    color: "#006064",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "3em",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const paragraphStyle = {
    fontSize: "1.2em",
    lineHeight: "1.5",
    textAlign: "center",
    maxWidth: "800px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Departments</h1>
      <p style={paragraphStyle}>
        Our institute offers a wide range of departments to cater to the diverse
        academic and professional interests of our students. Each department is
        equipped with state-of-the-art facilities and staffed by experienced
        faculty members dedicated to providing a high-quality education and
        fostering an environment of research and innovation.
      </p>
    </div>
  );
};

export default Departments;
