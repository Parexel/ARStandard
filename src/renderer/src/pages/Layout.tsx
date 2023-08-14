import { Outlet } from "react-router-dom";

function Layout(): JSX.Element {
  return (
    <div
      style={{
        background: "#AACCFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      Layout
      <Outlet />
    </div>
  );
}

export default Layout;
