import React from "react";
import AppButton from "../appButton";
import homeImg from "../../assets/home.svg";
import signinImg from "../../assets/signin.svg";
import listingImg from '../../assets/listings.svg'
import podcastImg from "../../assets/podcast.svg";
import videoImg from "../../assets/video.svg";
import tagsImg from "../../assets/tags.svg";

class LinksSideBar extends React.Component {
  render() {
    return (
      <ul>
        <AppButton
          text="HOME"
          type="listItem"
          url="/#"
          styles="aside-links"
          img={homeImg}
        />
        <AppButton
          text="Sign in/Up"
          type="listItem"
          url="/#"
          styles="aside-links"
          img={signinImg}
        />
        <AppButton
          text="Listing"
          type="listItem"
          url="/#"
          styles="aside-links"
          img={listingImg}
        />
        <AppButton
          text="Podcasts"
          type="listItem"
          url="/#"
          styles="aside-links"
          img={podcastImg}
        />
        <AppButton
          text="Video"
          type="listItem"
          url="/#"
          styles="aside-links"
          img={videoImg}
        />
        <AppButton
          text="Tags"
          type="listItem"
          url="/#"
          styles="aside-links"
          img={tagsImg}
        />
        <AppButton
          text="More ..."
          type="listItem"
          url="/#"
          styles="aside-links pa"
        />
      </ul>
    );
  }
}

export default LinksSideBar;
