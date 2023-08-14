import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

const buttonStyle = { height: 130, width: 130 };
const iconStyle = { color: "white" };

function Home(): JSX.Element {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <div style={{ height: "35%", marginTop: "10%" }}>
        <h1 style={{ fontWeight: "bolder" }}>Analysis Results Standard</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => <Tooltip {...props}>Create new file</Tooltip>}
        >
          <Button
            style={{ ...buttonStyle, marginRight: "1rem" }}
            onClick={() => alert("Not implemented")}
          >
            <FontAwesomeIcon icon={faPlus} style={iconStyle} size="xl" />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => <Tooltip {...props}>Open existing file</Tooltip>}
        >
          <Button style={buttonStyle}>
            <FontAwesomeIcon icon={faFolderOpen} style={iconStyle} size="xl" />
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default Home;
