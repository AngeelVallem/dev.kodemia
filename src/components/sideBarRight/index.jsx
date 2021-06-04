import React from "react";

import AppCard from "../AppCard";
import AppButton from "../appButton";

import "../../css/rightAside/index.css";

class SideBarRight extends React.Component {
  render() {
    return (
      <section className="my-5">
        <AppCard>
          <header className="d-flex justify-content-between">
            <h5>Listings</h5>
            <AppButton text="See all" type="anchor" url="/#" />
          </header>
          <hr />
          <ul>
            <AppButton
              text="Walkthrough Wednesday with Gant Laborde"
              type="listItem"
              url="/#"
              styles="aside-items w-100"
            >
              <p className="text-muted">events</p>
            </AppButton>
            <AppButton
              text="Walkthrough Wednesday with Gant Laborde"
              type="listItem"
              url="/#"
              styles="aside-items"
            >
              <p className="text-muted">education</p>
            </AppButton>
          </ul>
        </AppCard>
      </section>
    );
  }
}

export default SideBarRight;
