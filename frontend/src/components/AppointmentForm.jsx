// import axios from "axios";
// import React, { useEffect } from "react";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const AppointmentForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [nic, setNic] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [department, setDepartment] = useState("Pediatrics");
//   const [doctorFirstName, setDoctorFirstName] = useState("");
//   const [doctorLastName, setDoctorLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [hasVisited, setHasVisited] = useState(false);

//   const departmentsArray = [
//     "Pediatrics",
//     "Orthopedics",
//     "Cardiology",
//     "Neurology",
//     "Oncology",
//     "Radiology",
//     "Physical Therapy",
//     "Dermatology",
//     "ENT",
//   ];
//   const [doctors, setDoctors] = useState([]);
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       const { data } = await axios.get(
//         "http://localhost:4000/api/v1/user/doctors",
//         { withCredentials: true }
//       );
//       setDoctors(data.doctors);
//       console.log(data.doctors);
//     };
//     fetchDoctors();
//   }, []);

//   const handleAppointment = async (e) => {
//     e.preventDefault();
//     try {
//       const hasVisitedBool = Boolean(hasVisited);
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/appointment/post",
//         {
//           firstName,
//           lastName,
//           email,
//           phone,
//           nic,
//           dob,
//           gender,
//           appointment_date: appointmentDate,
//           department,
//           doctor_firstName: doctorFirstName,
//           doctor_lastName: doctorLastName,
//           hasVisited: hasVisitedBool,
//           address,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       toast.success(data.message);
//       setFirstName(""),
//         setLastName(""),
//         setEmail(""),
//         setPhone(""),
//         setNic(""),
//         setDob(""),
//         setGender(""),
//         setAppointmentDate(""),
//         setDepartment(""),
//         setDoctorFirstName(""),
//         setDoctorLastName(""),
//         setHasVisited(""),
//         setAddress("");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <>
//       <div className="container form-component appointment-form">
//         <h2>Appointment</h2>
//         <form onSubmit={handleAppointment}>
//           <div>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Mobile Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="number"
//               placeholder="NIC"
//               value={nic}
//               onChange={(e) => setNic(e.target.value)}
//             />
//             <input
//               type="date"
//               placeholder="Date of Birth"
//               value={dob}
//               onChange={(e) => setDob(e.target.value)}
//             />
//           </div>
//           <div>
//             <select value={gender} onChange={(e) => setGender(e.target.value)}>
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//             <input
//               type="date"
//               placeholder="Appointment Date"
//               value={appointmentDate}
//               onChange={(e) => setAppointmentDate(e.target.value)}
//             />
//           </div>
//           <div>
//             <select
//               value={department}
//               onChange={(e) => {
//                 setDepartment(e.target.value);
//                 setDoctorFirstName("");
//                 setDoctorLastName("");
//               }}
//             >
//               {departmentsArray.map((depart, index) => (
//                 <option value={depart} key={index}>
//                   {depart}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={`${doctorFirstName} ${doctorLastName}`}
//               onChange={(e) => {
//                 const [firstName, lastName] = e.target.value.split(" ");
//                 setDoctorFirstName(firstName);
//                 setDoctorLastName(lastName);
//               }}
//               disabled={!department}
//             >
//               <option value="">Select Doctor</option>
//               {/* Doctors options here */}
//             </select>
//           </div>
//           <textarea
//             rows="10"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder="Address"
//           />
//           <div
//             style={{
//               gap: "10px",
//               justifyContent: "flex-end",
//               flexDirection: "row",
//             }}
//           >
//             <p style={{ marginBottom: 0 }}>Have you visited before?</p>
//             <input
//               type="checkbox"
//               checked={hasVisited}
//               onChange={(e) => setHasVisited(e.target.checked)}
//               style={{ flex: "none", width: "25px" }}
//             />
//           </div>
//           <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AppointmentForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
//import "../styles/Appointment.css";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [appointmentNumber, setAppointmentNumber] = useState("");

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
          appointmentNumber,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      // Reset form fields after successful submission
      resetFormFields();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setNic("");
    setDob("");
    setGender("");
    setAppointmentDate("");
    setDepartment("Pediatrics");
    setDoctorFirstName("");
    setDoctorLastName("");
    setAddress("");
    setHasVisited(false);
    setAppointmentNumber("");
  };

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Appointment</h2>
        <form onSubmit={handleAppointment}>
          {/* Form input fields */}

          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              {departmentsArray.map((depart, index) => (
                <option value={depart} key={index}>
                  {depart}
                </option>
              ))}
            </select>
            <select
              value={`${doctorFirstName} ${doctorLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {/* Doctors options here */}
              {doctors.map((doctor, index) => (
                <option
                  value={`${doctor.firstName} ${doctor.lastName}`}
                  key={index}
                >
                  {`${doctor.firstName} ${doctor.lastName}`}
                </option>
              ))}
            </select>
          </div>
          <textarea
            rows="10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Have you visited before?</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => {
                setHasVisited(e.target.checked);
                setShowModal(e.target.checked);
              }}
              style={{ flex: "none", width: "25px" }}
            />
          </div>
          <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
        </form>
      </div>

      {/* Modal for entering appointment number */}
      {showModal && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              width: "300px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
              Enter Appointment Number
            </h3>
            <input
              type="text"
              value={appointmentNumber}
              onChange={(e) => setAppointmentNumber(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  marginRight: "10px",
                }}
                onClick={() => setShowModal(false)}
              >
                Submit
              </button>
              <button
                style={{
                  padding: "10px",
                  border: "none",
                  borderRadius: "50%",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onClick={() => setShowModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.354 8l-3.28 3.28a.5.5 0 1 0 .708.707L8 8.707l3.28 3.28a.5.5 0 1 0 .707-.707L8.707 8l3.28-3.28a.5.5 0 0 0-.707-.707L8 7.293 4.72 4.707a.5.5 0 1 0-.708.707L7.293 8 4.72 10.68a.5.5 0 1 0 .708.707L8 8.707l3.28 3.28a.5.5 0 1 0 .707-.707L8.707 8l3.28-3.28a.5.5 0 1 0-.707-.707L8 7.293 4.72 4.707a.5.5 0 1 0-.708.707L7.293 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentForm;
