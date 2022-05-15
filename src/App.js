import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feeds/Feed";
import Widget from "./components/Widgets/Widget";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="app__container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="feed">
          <Feed />
        </div>

        <div className="widget">
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default App;
