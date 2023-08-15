import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

function Layout(): JSX.Element {
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Navbar style={{ width: "100%" }} bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="../../src/assets/icon.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            <Navbar.Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Home
            </Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Layout;
