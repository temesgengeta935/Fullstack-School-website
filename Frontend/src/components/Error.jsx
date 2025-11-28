import { MessageCircleWarning } from "lucide-react";
import React from "react";

const Error = ({ message = "unknown error occured, please try again!" }) => {
  const styles = {
    div: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
    p: {
      fontSize: "18px",
      fontWeight: "bold",
      textWrap: "wrap",
      whiteSpace: "wrap",
    },
  };
  return (
    <div style={styles.div}>
      <MessageCircleWarning size={52} style={{ color: "red" }} />
      <p style={styles.p}>{message}</p>
    </div>
  );
};

export default Error;
