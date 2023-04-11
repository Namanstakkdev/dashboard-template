import './App.css';
import Loader from "./components/loader/Loader";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      {/* <Loader /> */}

      <div id="app">
        <aside class="main-sidebar fixed offcanvas b-r sidebar-tabs" data-toggle='offcanvas'>
          <Sidebar />
        </aside>
      </div>
    </>
  );
}

export default App;
