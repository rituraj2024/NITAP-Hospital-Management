// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../main";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { GoCheckCircleFill } from "react-icons/go";
// import { AiFillCloseCircle } from "react-icons/ai";
// import logo from "../assets/image.png";
// //import "../styles/dashboard.css";

// const Dashboard = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:4000/api/v1/appointment/getall",
//           { withCredentials: true }
//         );
//         setAppointments(data.appointments);
//       } catch (error) {
//         setAppointments([]);
//         toast.error("Failed to fetch appointments");
//       }
//     };
//     fetchAppointments();
//   }, []);

//   const handleUpdateStatus = async (appointmentId, status) => {
//     try {
//       const { data } = await axios.put(
//         `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
//         { status },
//         { withCredentials: true }
//       );
//       setAppointments((prevAppointments) =>
//         prevAppointments.map((appointment) =>
//           appointment._id === appointmentId
//             ? { ...appointment, status }
//             : appointment
//         )
//       );
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const { isAuthenticated, admin } = useContext(Context);
//   if (!isAuthenticated) {
//     return <Navigate to={"/login"} />;
//   }

//   return (
//     <>
//       <section className="dashboard page">
//         <div className="banner">
//           <div className="firstBox">
//             <img src={logo} alt="docImg" />
//             <div className="content">
//               <div>
//                 <p>Hello ,</p>
//                 <h5>{admin && `${admin.firstName} ${admin.lastName}`} </h5>
//               </div>
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Facilis, nam molestias. Eaque molestiae ipsam commodi neque.
//                 Assumenda repellendus necessitatibus itaque.
//               </p>
//             </div>
//           </div>
//           <div className="secondBox">
//             <p>Total Appointments</p>
//             <h3>200</h3>
//           </div>
//           <div className="thirdBox">
//             <p>Registered Doctors</p>
//             <h3>7</h3>
//           </div>
//         </div>
//         <div className="banner">
//           <h5>Appointments</h5>
//           <table>
//             <thead>
//               <tr>
//                 <th>Patient</th>
//                 <th>Date</th>
//                 <th>Doctor</th>
//                 <th>Department</th>
//                 <th>Status</th>
//                 <th>Visited</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments && appointments.length > 0
//                 ? appointments.map((appointment) => (
//                     <tr key={appointment._id}>
//                       <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
//                       <td>{appointment.appointment_date.substring(0, 16)}</td>
//                       <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
//                       <td>{appointment.doctor.department}</td>
//                       <td>
//                         {appointment.status === "pending" ? (
//                           <>
//                             <button
//                               onClick={() =>
//                                 handleUpdateStatus(appointment._id, "approved")
//                               }
//                             >
//                               <GoCheckCircleFill />
//                             </button>
//                             <button
//                               onClick={() =>
//                                 handleUpdateStatus(appointment._id, "rejected")
//                               }
//                             >
//                               <AiFillCloseCircle />
//                             </button>
//                           </>
//                         ) : (
//                           appointment.status
//                         )}
//                       </td>
//                       <td>{appointment.visited ? "Yes" : "No"}</td>
//                     </tr>
//                   ))
//                 : null}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Dashboard;

import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([
    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      appointment_date: "2024-06-15T10:00:00",
      doctor: {
        firstName: "Dr. Smith",
        lastName: "",
        department: "Cardiology",
      },
      status: "pending",
      visited: false,
    },
    {
      _id: "2",
      firstName: "Jane",
      lastName: "Doe",
      appointment_date: "2024-06-20T11:30:00",
      doctor: {
        firstName: "Dr. Johnson",
        lastName: "",
        department: "Pediatrics",
      },
      status: "approved",
      visited: false,
    },
    {
      _id: "3",
      firstName: "Alice",
      lastName: "Smith",
      appointment_date: "2024-06-25T15:45:00",
      doctor: {
        firstName: "Dr. Brown",
        lastName: "",
        department: "Orthopedics",
      },
      status: "rejected",
      visited: false,
    },
    {
      _id: "4",
      firstName: "Bob",
      lastName: "Jones",
      appointment_date: "2024-06-30T09:15:00",
      doctor: {
        firstName: "Dr. Wilson",
        lastName: "",
        department: "Dermatology",
      },
      status: "approved",
      visited: true,
    },
    {
      _id: "5",
      firstName: "Emily",
      lastName: "Taylor",
      appointment_date: "2024-07-05T14:00:00",
      doctor: {
        firstName: "Dr. Lee",
        lastName: "",
        department: "Neurology",
      },
      status: "pending",
      visited: false,
    },
  ]);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      // Simulating update status
      const updatedAppointments = appointments.map((appointment) =>
        appointment._id === appointmentId
          ? { ...appointment, status }
          : appointment
      );
      setAppointments(updatedAppointments);
      toast.success("Status updated successfully");
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  // Check if user is authenticated
  // If not, redirect to login page
  const isAuthenticated = true; // Replace with actual authentication state
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="dashboard page">
      <div className="banner">
        <div className="firstBox">
          <img
            src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            alt="docImg"
            style={{ borderRadius: "50%" }}
          />
          <div className="content">
            <div>
              <p>Hello ,</p>
              <h5>Admin Name</h5>
            </div>
            <p>
              Health is a state of complete harmony of the body, mind, and
              spirit
            </p>
          </div>
        </div>
        <div className="secondBox">
          <p>Total Appointments</p>
          <h3>5</h3>
        </div>
        <div className="thirdBox">
          <p>Registered Doctors</p>
          <h3>7</h3>
        </div>
      </div>
      <div className="banner">
        <h5>Appointments</h5>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Status</th>
              <th>Visited</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                <td>{appointment.appointment_date.substring(0, 16)}</td>
                <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                <td>{appointment.doctor.department}</td>
                <td>
                  {appointment.status === "pending" ? (
                    <>
                      <button
                        style={{ marginRight: "5px" }}
                        onClick={() =>
                          handleUpdateStatus(appointment._id, "approved")
                        }
                      >
                        <GoCheckCircleFill />
                      </button>
                      <button
                        style={{ color: "red" }}
                        onClick={() =>
                          handleUpdateStatus(appointment._id, "rejected")
                        }
                      >
                        <AiFillCloseCircle />
                      </button>
                    </>
                  ) : (
                    appointment.status
                  )}
                </td>
                <td>{appointment.visited ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
