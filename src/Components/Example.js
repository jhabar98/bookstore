import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
    function handlelogin() {
        alert("success");
        var password = document.getElementById('password').value;
        var email = document.getElementById('email').value;
        if ( email != ''&& password != '' )
        console.log(email,password)
         {
          fetch('http://13.48.194.120:8000//registre/', {
            method: 'POST',
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              
  
            })
          }).then(res => res.json())
            .then(data => {
              if (data.error) {
              }
              else {
              }
            })
        }
      }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary mx-3" onClick={handleShow}>
        LOGIN
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3" controlId="inputemail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus
              />
            </Form.Group>
            //<Form.Group className="mb-3" controlId="inputpassword">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter password"
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handlelogin}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;