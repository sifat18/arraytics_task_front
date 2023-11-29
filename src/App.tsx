import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
function App() {
  return (
    <>
      <div>
        <Layout>
          <Outlet></Outlet>
        </Layout>
      </div>
    </>
  );
}

export default App;
