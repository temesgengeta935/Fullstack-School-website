import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <main className="container" style={{ flex: "1" }}>
        <h1 style={{ marginTop: "130px" }}>Home Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
