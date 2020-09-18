import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Footer = () => {
  const [show, setShow] = useState(true);
  const [values, setValues] = useState({
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleEmail = event => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmitted = event => {
    event.preventDefault();
    if (values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div className="container-fluid bg-dark ">
      <div className="row text-center">
        <div className="col-md-7 text-light font-italic">
          <p>Please sign up for exclusive offers!</p>
        </div>
        <div className="col-md-5">
          <Button
            className="btn btn-success mt-1"
            size="sm"
            onClick={handleShow}
          >
            Sign up here
          </Button>

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Please write your information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="model-body">
                <div className="form-group" onSubmit={handleSubmitted}>
                  {submitted && valid ? (
                    <Button variant="success" block>
                      Success! Thank you for registering
                    </Button>
                  ) : null}

                  <label for="nameInput" className="mt-3">
                    Your email:
                  </label>
                  <input
                    onChange={handleEmail}
                    value={values.email}
                    type="text"
                    className="form-control"
                  />
                  {submitted && !values.email ? (
                    <div className="danger">please enter your email</div>
                  ) : null}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="option1"
                ></input>
                <label className="form-check-label">contact by email</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="option1"
                ></input>
                <label className="form-check-label">contact by post</label>
              </div>
              <Button variant="primary" onClick={handleSubmitted}>
                submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Footer;
