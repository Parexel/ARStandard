import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingModal from "@renderer/components/LoadingModal";

function Outputs(): JSX.Element {
  const location = useLocation();
  const { filePath } = location.state;
  const [analyses, setAnalyses] = useState<object[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.mainProcess.getAnalyses(filePath).then((response) => {
      setAnalyses(response);
      setLoading(false);
    });
  }, []);

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
        <Button>Select All</Button>
      </div>

      <Accordion
        style={{
          width: "100%",
          marginTop: "3%",
          marginBottom: "3%",
          overflowY: "auto"
        }}
      >
        {analyses?.map((analysis, i) => (
          <Accordion.Item key={i} eventKey={i.toString()}>
            <Accordion.Header>{analysis.name}</Accordion.Header>
            <Accordion.Body
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {[...Array(20)].map((n) => (
                <div
                  key={n}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Form.Label style={{ fontSize: 20 }}>Output {n}</Form.Label>
                  <Form.Check defaultChecked={true} type="checkbox" />
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
        <Button type="submit">Generate</Button>
      </div>
      <LoadingModal description="Loading file..." show={loading} />
    </Form>
  );
}

export default Outputs;
