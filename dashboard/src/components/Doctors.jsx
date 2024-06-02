// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { Context } from "../main";
// import { Navigate } from "react-router-dom";

// const Doctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   const { isAuthenticated } = useContext(Context);
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:4000/api/v1/user/doctors",
//           { withCredentials: true }
//         );
//         setDoctors(data.doctors);
//       } catch (error) {
//         toast.error(error.response.data.message);
//       }
//     };
//     fetchDoctors();
//   }, []);

//   if (!isAuthenticated) {
//     return <Navigate to={"/login"} />;
//   }
//   return (
//     <section className="page doctors">
//       <h1>DOCTORS</h1>
//       <div className="banner">
//         {doctors && doctors.length > 0 ? (
//           doctors.map((element) => {
//             return (
//               <div className="card">
//                 <img
//                   src={element.docAvatar && element.docAvatar.url}
//                   alt="doctor avatar"
//                 />
//                 <h4>{`${element.firstName} ${element.lastName}`}</h4>
//                 <div className="details">
//                   <p>
//                     Email: <span>{element.email}</span>
//                   </p>
//                   <p>
//                     Phone: <span>{element.phone}</span>
//                   </p>
//                   <p>
//                     DOB: <span>{element.dob.substring(0, 10)}</span>
//                   </p>
//                   <p>
//                     Department: <span>{element.doctorDepartment}</span>
//                   </p>
//                   <p>
//                     NIC: <span>{element.nic}</span>
//                   </p>
//                   <p>
//                     Gender: <span>{element.gender}</span>
//                   </p>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <h1>No Registered Doctors Found!</h1>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Doctors;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

import "../styles/Doctor.css"; // Importing CSS file

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  // Static data for demonstration
  const staticDoctors = [
    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "1234567890",
      dob: "1990-01-01",
      doctorDepartment: "Cardiology",
      nic: "1234567890123",
      gender: "Male",
      docAvatar: {
        url: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      },
    },
    {
      _id: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phone: "0987654321",
      dob: "1985-05-15",
      doctorDepartment: "Pediatrics",
      nic: "9876543210987",
      gender: "Female",
      docAvatar: {
        url: "https://th.bing.com/th/id/OIP._40LAFN9WMqxcFdfdZf6wwHaE3?rs=1&pid=ImgDetMain",
      },
    },
  ];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="doctor-cards">
        {doctors && doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div className="doctor-card" key={doctor._id}>
              <img
                className="doctor-avatar"
                src={doctor.docAvatar && doctor.docAvatar.url}
                alt="Doctor Avatar"
              />
              <div className="doctor-details">
                <h4>{`${doctor.firstName} ${doctor.lastName}`}</h4>
                <div className="doctor-info">
                  <p>
                    <strong>Email:</strong> {doctor.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {doctor.phone}
                  </p>
                  <p>
                    <strong>DOB:</strong>{" "}
                    {doctor.dob && doctor.dob.substring(0, 10)}
                  </p>
                  <p>
                    <strong>Department:</strong> {doctor.doctorDepartment}
                  </p>
                  <p>
                    <strong>NIC:</strong> {doctor.nic}
                  </p>
                  <p>
                    <strong>Gender:</strong> {doctor.gender}
                  </p>
                  {/* Additional fields can be added here */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1> Registered Doctors Found!</h1>
        )}
        {/* Displaying static doctors */}
        {staticDoctors.map((doctor) => (
          <div className="doctor-card" key={doctor._id}>
            <img
              className="doctor-avatar"
              src={doctor.docAvatar.url}
              alt="Doctor Avatar"
            />
            <div className="doctor-details">
              <h4>{`${doctor.firstName} ${doctor.lastName}`}</h4>
              <div className="doctor-info">
                <p>
                  <strong>Email:</strong> {doctor.email}
                </p>
                <p>
                  <strong>Phone:</strong> {doctor.phone}
                </p>
                <p>
                  <strong>DOB:</strong> {doctor.dob}
                </p>
                <p>
                  <strong>Department:</strong> {doctor.doctorDepartment}
                </p>
                <p>
                  <strong>NIC:</strong> {doctor.nic}
                </p>
                <p>
                  <strong>Gender:</strong> {doctor.gender}
                </p>
                {/* Additional fields can be added here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
