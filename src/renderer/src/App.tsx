import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import File from "./pages/File";
import Outputs from "./pages/Outputs";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="file" element={<File />} />
          <Route path="outputs" element={<Outputs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
