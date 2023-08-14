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
      <Outlet />
    </div>
  );
}

export default Layout;
