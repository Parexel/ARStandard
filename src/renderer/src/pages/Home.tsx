import HomeButton from "@renderer/components/HomeButton";
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
        <HomeButton
          icon={faPlus}
          iconSize="xl"
          overlayText="Create new file"
          overlayPlacement="left"
          style={{ ...buttonStyle, marginRight: "1rem" }}
          onClick={() => alert("Not implemented")}
        />

        <HomeButton
          icon={faFolderOpen}
          iconSize="xl"
          overlayText="Open existing file"
          overlayPlacement="right"
          style={buttonStyle}
          onClick={() => alert("Opening file...")}
        />
      </div>
    </div>
  );
}

export default Home;
