import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeButton({
  icon,
  iconSize,
  overlayText,
  overlayPlacement,
  style,
  onClick
}): JSX.Element {
  return (
    <OverlayTrigger
      placement={overlayPlacement}
      delay={{ show: 250, hide: 400 }}
      overlay={(props) => <Tooltip {...props}>{overlayText}</Tooltip>}
    >
      <Button style={{ ...style }} onClick={onClick}>
        <FontAwesomeIcon icon={icon} style={{ color: "white" }} size={iconSize} />
      </Button>
    </OverlayTrigger>
  );
}

export default HomeButton;
