//response

function response(
  message = "Operation successful",
  status_code = 200,
  data = null,
  success
) {
  return {
    message,
    status_code,
    data,
    success,
  };
}

export { response };
