import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const EventDetails = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <main
        style={{
          flex: "1",
          marginTop: "calc(100vh - 130px)",
          backgroundColor: "#a03030ff",
        }}
      >
        <h1>Details: {id}</h1>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;
