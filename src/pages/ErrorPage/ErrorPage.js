import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <h1>Looks like the page you are searching is not availabe now!</h1>
      <p>Go Back to Home Page By Clicking on this button below</p>
      <Button variant="primary" as={Link} to="/">
        Go To Home
      </Button>
    </div>
  );
};

export default ErrorPage;
