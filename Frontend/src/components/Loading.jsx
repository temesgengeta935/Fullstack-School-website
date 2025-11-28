import React from "react";

const Loading = ({ message = "" }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    loadingCircle: {
      width: "50px",
      height: "50px",
      border: "6px solid #f3f3f3",
      borderTop: "6px solid #3498db",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
      marginBottom: "2px",
    },
    message: {
      fontSize: "18px",
      color: "#555",
      animation: "fade 1s linear infinite",
    },
  };

  return (
    <div style={styles.container}>
      {/* loading circle */}
      <div style={styles.loadingCircle} />
      <p style={styles.message}>{message}</p>
    </div>
  );
};

export default Loading;
