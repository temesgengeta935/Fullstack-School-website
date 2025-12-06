import React from "react";

const styles = {
  badge: {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
  highPriority: {
    backgroundColor: "#e74c3c", // Red
  },
  mediumPriority: {
    backgroundColor: "#f39c12", // Orange
  },
  lowPriority: {
    backgroundColor: "#27ae60", // Green
  },
};

const Badge = ({ text, type, style = {} }) => {
  type = type.toLowerCase();
  const getBadgeStyle = () => {
    switch (type) {
      case "high":
        return styles.highPriority;
      case "medium":
        return styles.mediumPriority;
      case "low":
        return styles.lowPriority;
      default:
        return "";
    }
  };

  return (
    <span style={{ ...styles.badge, ...getBadgeStyle(), ...style }}>
      {text}
    </span>
  );
};

export default Badge;
