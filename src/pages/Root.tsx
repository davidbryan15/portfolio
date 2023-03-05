import { Outlet } from "react-router-dom";

const Root = () => {
  return <>
    <div>New Home Page</div>
    {/* navbar will go here */}
    <div><Outlet /></div>
  </>;
}

export default Root;
