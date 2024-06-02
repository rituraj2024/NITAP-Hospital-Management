import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero title={"Schedule Your Appointment | NIT AP HEALTH CARE"} />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
