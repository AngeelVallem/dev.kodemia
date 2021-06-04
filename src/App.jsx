import React from "react";
import Header from "./components/Header/Header";
import LeftSideBar from "./components/sideBar/index";
import Posts from './components/posts/index'
import RightSideBar from './components/sideBarRight/index'
import AppLoading from "./components/AppLoading";

import "./css/index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <LeftSideBar />
            </div>
            <div className="col-6">
              <Posts/>
            </div>
            <div className="col-3">
              <RightSideBar/>
            </div>
          <AppLoading/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
