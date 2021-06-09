import React from 'react'

import Header from "../../components/Header/Header";
import LeftSideBar from "../../components/sideBar/index";
import Posts from '../../components/posts/index'
import RightSideBar from '../../components/sideBarRight/index'
import AppLoading from "../../components/AppLoading";

 function Home () {
    return(
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Home