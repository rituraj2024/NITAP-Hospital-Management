import React from "react";
import Hero from "../components/Hero";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";
import Biography from "../components/Biography";
const Home = () => {
  return (
    <>
      <Hero title={"welcome to the health care"} />

      <Biography />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
