import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

function LoadingModal({ description, show }): JSX.Element {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>{description}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Spinner
          style={{
            height: 100,
            width: 100,
            margin: 30
          }}
          animation="border"
          variant="primary"
        />
      </Modal.Body>
    </Modal>
  );
}

export default LoadingModal;
