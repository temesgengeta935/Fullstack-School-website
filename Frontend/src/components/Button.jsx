import React from "react";

const Button = ({
  children,
  onClick,
  style,
  type = "button",
  disabled = false,
  variant,
}) => {
  //variant can be 'primary', 'secondary', 'danger', etc. You can expand this as needed.
  let variantStyle = getVariantStyle(variant);

  const combinedStyle = { ...variantStyle, ...style };
  return (
    <button
      onMouseOver={(e) => {
        //  hover color effect
        e.target.style.opacity = 0.8;
        //scale effect
        e.target.style.transform = "scale(1.05)";
        //transition effect
        e.target.style.transition = "all 0.2s ease-in-out";
        //scale back when mouse gets clicked
      }}
      onMouseLeave={(e) => {
        e.target.style.opacity = 1;
        e.target.style.transform = "scale(1)";
        e.target.style.transition = "all 0.2s ease-in-out";
      }}
      onClick={onClick}
      style={combinedStyle}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

function getVariantStyle(variant) {
  let variantStyle = {};
  switch (variant) {
    case "primary":
      variantStyle = {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
      };
      break;
    case "secondary":
      variantStyle = {
        backgroundColor: "#6c757d",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
      };
      break;
    case "danger":
      variantStyle = {
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
      };
      break;
    case "link":
      variantStyle = {
        backgroundColor: "transparent",
        color: "#007bff",
        border: "none",
        padding: "0",
        cursor: "pointer",
        textDecoration: "underline",
      };
      break;
    case "outline":
      variantStyle = {
        backgroundColor: "transparent",
        color: "#007bff",
        border: "2px solid #007bff",
        padding: "8px 18px",
        borderRadius: "4px",
        cursor: "pointer",
      };
      break;
    case "success":
      variantStyle = {
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
      };
      break;
    case "info":
      variantStyle = {
        backgroundColor: "#17a2b8",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
      };
      break;
    default:
      variantStyle = {
        backgroundColor: "#f8f9fa",
        color: "#000",
        border: "1px solid #ced4da",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
      };
  }
  return variantStyle;
}
