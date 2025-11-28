//response

function response(
  message = "Operation successful",
  status_code = 200,
  data = null,
  success,
  meta = {}
) {
  return {
    message,
    status_code,
    data,
    success,
    meta,
  };
}

export { response };
