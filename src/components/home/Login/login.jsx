import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Login = (props) => {
  const { isShow, handleLoginClose } = props;
  return (
    <Modal centered show={isShow} onHide={handleLoginClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>this iks a login modal</Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
