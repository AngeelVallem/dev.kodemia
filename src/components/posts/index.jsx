import React from "react";

import AppCard from "../AppCard";
import AppButton from "../appButton";

import "../../css/main/index.css";

import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";

class Posts extends React.Component {
  render() {
    return (
      <div className="my-5">
        <AppCard img="https://res.cloudinary.com/practicaldev/image/fetch/s--lT1mgYzG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h0y0cf2fj9m16wpv7y2n.jpg">
          <div className="d-flex">
            <img
              className="rounded-circle avatar"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--cZkO3zSE--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/617393/67c4df49-d9b4-4361-a19f-a1a31486dec7.png"
              alt="avatar"
            />
            <div className="d-flex flex-column mx-2">
              <h4>Lupita Code 🌚</h4>
              <p>jun 1</p>
            </div>
          </div>
          <h1 className="post-title">La propiedad display en CSS</h1>
          <ul className="d-flex">
            <li>#bootstrap</li>
            <li>#css</li>
          </ul>
          <div className="footer-post d-flex w-100 justify-content-between">
            <ul className="d-flex">
              <AppButton
                text="3 reactions"
                type="listItem"
                url="/#"
                styles="reaction"
                img={like}
              />
              <AppButton
                text="Add comment"
                type="listItem"
                url="/#"
                styles="reaction"
                img={comment}
              />
            </ul>
            <div className="save d-flex justify-content-between align-items-center ">
              <p className="pt-2 mx-2">8 min read</p>
              <AppButton
                text="Save"
                url="/#"
                styles="save-post"
                img={comment}
              />
            </div>
          </div>
        </AppCard>
        <AppCard>
          <div className="d-flex">
            <img
              className="rounded-circle avatar"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--cZkO3zSE--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/617393/67c4df49-d9b4-4361-a19f-a1a31486dec7.png"
              alt="avatar"
            />
            <div className="d-flex flex-column mx-2">
              <h4>Lupita Code 🌚</h4>
              <p>jun 1</p>
            </div>
          </div>
          <h1 className="post-title">La propiedad display en CSS</h1>
          <ul className="d-flex">
            <li>#bootstrap</li>
            <li>#css</li>
          </ul>
          <div className="footer-post d-flex w-100 justify-content-between">
            <ul className="d-flex">
              <AppButton
                text="3 reactions"
                type="listItem"
                url="/#"
                styles="reaction"
                img={like}
              />
              <AppButton
                text="Add comment"
                type="listItem"
                url="/#"
                styles="reaction"
                img={comment}
              />
            </ul>
            <div className="save d-flex justify-content-between align-items-center ">
              <p className="pt-2 mx-2">8 min read</p>
              <AppButton
                text="Save"
                url="/#"
                styles="save-post"
                img={comment}
              />
            </div>
          </div>
        </AppCard>
        <AppCard>
          <div className="d-flex">
            <img
              className="rounded-circle avatar"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--cZkO3zSE--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/617393/67c4df49-d9b4-4361-a19f-a1a31486dec7.png"
              alt="avatar"
            />
            <div className="d-flex flex-column mx-2">
              <h4>Lupita Code 🌚</h4>
              <p>jun 1</p>
            </div>
          </div>
          <h1 className="post-title">La propiedad display en CSS</h1>
          <ul className="d-flex">
            <li>#bootstrap</li>
            <li>#css</li>
          </ul>
          <div className="footer-post d-flex w-100 justify-content-between">
            <ul className="d-flex">
              <AppButton
                text="3 reactions"
                type="listItem"
                url="/#"
                styles="reaction"
                img={like}
              />
              <AppButton
                text="Add comment"
                type="listItem"
                url="/#"
                styles="reaction"
                img={comment}
              />
            </ul>
            <div className="save d-flex justify-content-between align-items-center ">
              <p className="pt-2 mx-2">8 min read</p>
              <AppButton
                text="Save"
                url="/#"
                styles="save-post"
                img={comment}
              />
            </div>
          </div>
        </AppCard>
      </div>
    );
  }
}

export default Posts;
