import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { providerLogin, signInWithEmail } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password).then((result) => {
      setError("");
      form.reset();
      navigate("/home");
    });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    providerLogin(googleProvider)
      .then((result) => {
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
    <div className="w-40 mx-auto mt-3">
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
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
