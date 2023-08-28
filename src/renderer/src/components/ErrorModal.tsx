import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ErrorModal({ title, message, handleClose, show }): JSX.Element {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title style={{ color: "#D9534F" }}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          overflowWrap: "anywhere"
        }}
      >
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ height: 40, width: 100 }} variant="danger" onClick={handleClose}>
          Go Back
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
