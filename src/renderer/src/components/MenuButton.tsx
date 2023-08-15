import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function MenuButton({icon, iconSize, text, overlayText, overlayPlacement, style, onClick}): JSX.Element {
  return (
    <OverlayTrigger
      placement={overlayPlacement}
      delay={{ show: 250, hide: 400 }}
      overlay={(props) => <Tooltip {...props}>{overlayText}</Tooltip>}
    >
      <Button
        style={{ ...style}}
        onClick={onClick}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <FontAwesomeIcon icon={icon} style={{ color: "white" }} size={iconSize} />
          {text}
        </div>
      </Button>
    </OverlayTrigger>
  );
}


export default MenuButton;
