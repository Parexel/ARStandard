import { useLocation } from "react-router-dom";

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
      <h1>{filePath}</h1>
    </div>);
}

export default File;
