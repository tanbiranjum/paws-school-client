import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { createUserWithEmail, updateUserProfile, providerLogin } =
    useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleRegister = (data) => {
    const { displayName, photoURL, email, password, cpassword } = data;

    if (validatePassword(password, cpassword)) {
      createUserWithEmail(email, password)
        .then(() => {
          setError("");
          updateUserProfile({ displayName, photoURL });
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
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

  const validatePassword = (password, cpassword) => {
    if (password !== cpassword) {
      setError("Password is not same!");
      return false;
    } else if (password.length < 6) {
      setError("Password can't be less than six character!");
      return false;
    }
    return true;
  };

  return (
    <div className="w-40 mx-auto mt-3">
      <p className="mt-2">Signup using these platform!</p>
      <div className="d-flex justify-content-center gap-3">
        <Button variant="info" onClick={signInWithGoogle}>
          <FcGoogle />
        </Button>
        <Button variant="info" onClick={signInWithGithub}>
          <FaGithub />
        </Button>
      </div>
      <p className="text-center">Or</p>
      <Form onSubmit={handleSubmit(handleRegister)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="displayName"
            placeholder="Full name"
            {...register("displayName")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            {...register("email")}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            {...register("photoURL")}
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
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            {...register("cpassword")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Accept Terms & Conditions"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
