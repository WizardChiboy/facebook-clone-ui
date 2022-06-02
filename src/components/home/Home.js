import React from "react";
import Feed from "../Feeds/Feed";
import Sidebar from "../Sidebar/Sidebar";
import Widget from "../Widgets/Widget";
import Navigation from "../Navigation/Navigation";

function Home() {
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

export default Home;
