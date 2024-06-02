import React from "react";

const Biography = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#e0f7fa",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  };

  const headingStyle = {
    fontSize: "3em",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2c3e50",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  };

  const paragraphStyle = {
    fontSize: "1.2em",
    lineHeight: "1.6",
    textAlign: "center",
    maxWidth: "800px",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Biography</h1>
      <p style={paragraphStyle}>
        Welcome to the biography section. Here you will find a detailed account
        of the personal and professional life of the individual. From early
        childhood experiences to professional accomplishments, this biography
        highlights the journey and achievements that have shaped the person’s
        life. The narrative aims to provide a comprehensive view of the
        milestones, challenges, and successes encountered along the way.
      </p>
    </div>
  );
};

export default Biography;
