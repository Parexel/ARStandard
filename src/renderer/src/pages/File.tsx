import { useLocation } from "react-router-dom";
import MenuButton from "@renderer/components/MenuButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";


const buttonStyle = { width: 130, height: 130 };

function File(): JSX.Element {
  const location = useLocation();
  const { filePath } = location.state;

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
      <div style={{ marginTop: "5%" }}>
        <h1>{filePath}</h1>
      </div>

      <div
        style={{
          marginTop: "30%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <MenuButton
          text="Outputs"
          icon={faPlus}
          iconSize="xl"
          overlayText="Outputs"
          overlayPlacement="left"
          style={buttonStyle}
          onClick={() => alert("Not implemented")}
        />

        <MenuButton
          text="Metadata"
          icon={faPlus}
          iconSize="xl"
          overlayText="Metadata"
          overlayPlacement="top"
          style={{ ...buttonStyle, marginLeft: "1rem", marginRight: "1rem" }}
          onClick={() => alert("Not implemented")}
        />

        <MenuButton
          text="DPP"
          icon={faPlus}
          iconSize="xl"
          overlayText="Data Presentation Plan"
          overlayPlacement="right"
          style={buttonStyle}
          onClick={() => alert("Not implemented")}
        />
      </div>
    </div>);
}

export default File;
