import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row, Toast, ToastContainer } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { useContext } from "react";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const { user, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const handleUpdateProfile = (data) => {
    updateUserProfile(data)
      .then(() => {
        setShowToast(true);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  };
  return (
    <Row className="justify-content-center mt-5">
      <Col xs={10} md={7} lg={5} xl={5}>
        <p className="mt-2 fw-bold fs-5">Update Profile</p>
        <Form onSubmit={handleSubmit(handleUpdateProfile)}>
          {error && <Form.Text className="text-danger">{error}</Form.Text>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Profile URL</Form.Label>
            <Form.Control
              type="text"
              name="photoURL"
              placeholder="Your photo url"
              defaultValue={user?.photoURL}
              {...register("photoURL")}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              type="text"
              name="displayName"
              placeholder="Your display name"
              {...register("displayName")}
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
      </Col>
    </Row>
  );
};

export default Profile;
