import { Button } from "react-bootstrap";

const buttonStyle = { borderRadius: 10, height: 130, width: 130 };

function Home(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Button style={{ ...buttonStyle, fontSize: 30 }} onClick={() => alert("Not implemented")}>
        +
      </Button>
      <Button style={buttonStyle}>Open</Button>
    </div>
  );
}

export default Home;
