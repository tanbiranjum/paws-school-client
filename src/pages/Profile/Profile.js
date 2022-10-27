import React from "react";
import { useState } from "react";
import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useContext } from "react";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const handleUpdateProfile = (e) => {
    const form = e.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;
    e.preventDefault();
    updateUserProfile({ displayName, photoURL })
      .then(() => {
        setShowToast(true);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  };
  return (
    <div className="w-40 mx-auto mt-5">
      <p className="mt-2 fw-bold fs-5">Update Profile</p>
      <Form onSubmit={handleUpdateProfile}>
        {error && <Form.Text className="text-danger">{error}</Form.Text>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Profile URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Your photo url"
            defaultValue={user?.photoURL}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="displayName"
            placeholder="Your display name"
            defaultValue={user?.displayName}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
      <ToastContainer position="top-center">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success!</strong>
          </Toast.Header>
          <Toast.Body>Your Profile is updated!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Profile;
