import Alert from "react-bootstrap/Alert";

function AlertRegister() {
  return (
    <>
      {["danger"].map((variant) => (
        <Alert key={variant} variant={variant}>
          Qualche campo non è corretto!
        </Alert>
      ))}
    </>
  );
}

export default AlertRegister;
