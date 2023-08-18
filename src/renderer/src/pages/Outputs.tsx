import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

function Outputs() {
  return (
    <Form
      style={{
        paddingLeft: "5%",
        paddingRight: "5%",
        width: "100%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>Generate Outputs</h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <h2>Available Outputs</h2>
        <Button>
          Select All
        </Button>
      </div>

      <Accordion
        style={{
          width: "100%",
          marginTop: "3%",
          marginBottom: "3%",
          overflowY: "auto"
        }}
      >
        {[...Array(20).keys()].map(n => (
          <Accordion.Item
            eventKey={n.toString()}
          >
            <Accordion.Header>Analysis Header #{n}</Accordion.Header>
            <Accordion.Body
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {[...Array(20).keys()].map(n => (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Form.Label style={{ fontSize: 20 }}>Output {n}</Form.Label>
                  <Form.Check
                    defaultChecked={true}
                    type="checkbox"
                  />
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <Button type="submit">
          Generate
        </Button>
      </div>
    </Form>
  );
}

export default Outputs;
