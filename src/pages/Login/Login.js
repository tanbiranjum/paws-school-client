import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { providerLogin, signInWithEmail } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogin = (data) => {
    const { email, password } = data;
    signInWithEmail(email, password)
      .then(() => {
        setError("");
        navigate("/home");
      })
      .catch((error) => {
        setError("Email or Password doesn't match!");
        console.log(error);
      });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    providerLogin(googleProvider)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGithub = (e) => {
    e.preventDefault();
    providerLogin(githubProvider)
      .then((result) => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Row className="justify-content-center mt-3">
      <Col xs={10} md={7} lg={5} xl={5}>
        <p className="mt-2">Login using these platform!</p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="info" onClick={signInWithGoogle}>
            <FcGoogle />
          </Button>
          <Button variant="info" onClick={signInWithGithub}>
            <FaGithub />
          </Button>
        </div>
        <p className="text-center">Or</p>
        <Form onSubmit={handleSubmit(handleLogin)}>
          {error && <Form.Text className="text-danger">{error}</Form.Text>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              {...register("email")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              {...register("password")}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="d-block">
            Don't have an account? <Link to="/register">Register</Link> now!
          </Form.Text>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
