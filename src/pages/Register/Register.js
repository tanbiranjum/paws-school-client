import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { createUserWithEmail, updateUserProfile, providerLogin } =
    useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullname.value;
    const photoURL = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;

    if (validatePassword(password, cpassword)) {
      createUserWithEmail(email, password)
        .then((result) => {
          setError("");
          form.reset();
          updateUserProfile({ displayName: fullName, photoURL });
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const signUpWithGoogle = (e) => {
    e.preventDefault();
    providerLogin(googleProvider)
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
      return setError("Password can't be less than six character!");
      return false;
    }
    return true;
  };

  return (
    <div className="w-40 mx-auto mt-3">
      <p className="mt-2">Signup using these platform!</p>
      <div className="d-flex justify-content-center gap-3">
        <Button variant="info" onClick={signUpWithGoogle}>
          <FcGoogle />
        </Button>
        <Button variant="info">
          <FaGithub />
        </Button>
      </div>
      <p className="text-center">Or</p>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="fullname" placeholder="Full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
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
            name="photoUrl"
            placeholder="Photo URL"
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
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
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
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
