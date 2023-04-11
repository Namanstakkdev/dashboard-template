import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import Loader from "./components/loader/Loader";
import PushMenu from "./components/pushmenu/pushmenu";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      {/* <Loader /> */}

      <div id="app">
        <Sidebar />
        {/* <PushMenu /> */}
        <NavBar />
        {/* <Dashboard /> */}
      </div>
    </>
  );
}

export default App;
