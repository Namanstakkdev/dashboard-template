import Loader from "./components/loader/Loader";
import Sidebar from "./components/sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";

function App() {
  return (
    <>
      <Loader />
      <Sidebar />
    </>
  );
}

export default App;
