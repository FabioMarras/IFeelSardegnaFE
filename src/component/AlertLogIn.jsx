import Alert from "react-bootstrap/Alert";

function AlertLogIn() {
  return (
    <>
      {["danger"].map((variant) => (
        <Alert key={variant} variant={variant}>
          Credenziali non valide!
        </Alert>
      ))}
    </>
  );
}

export default AlertLogIn;
