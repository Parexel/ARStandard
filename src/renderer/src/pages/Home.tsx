import HomeButton from "@renderer/components/HomeButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState, useEffect, BaseSyntheticEvent, MutableRefObject } from "react";
import { useNavigate } from "react-router-dom";


const buttonStyle = { height: 130, width: 130 };

function Home(): JSX.Element {
  const navigate = useNavigate();
  const fileInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [selectedFile, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (selectedFile != null) {
      console.log(selectedFile.name);
      navigate("/file", { state: { filePath: selectedFile.name }});
    }
  }, [selectedFile]);


  const handleFileChange = (event: BaseSyntheticEvent) => {
    var newFile = null;
    if (event.target.files.length > 0)
      newFile = event.target.files[0];

    setFile(newFile);
  };

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
          onClick={() => fileInputRef.current?.click()}
        />

        <input hidden ref={fileInputRef} type="file" accept=".yml, .yaml" onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default Home;
