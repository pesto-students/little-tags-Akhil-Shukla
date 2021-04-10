import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

export default function Card({ title, imageUrl, twitter_username, bio, blog }) {
  return (
    <div className="card">
      <img className="cover" src={imageUrl} alt={title} />
      <div className="title">{title}</div>
      <div className="bio">{bio} </div>
      <a href={blog} target="_blank" rel="noreferrer">
        {blog}
      </a>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  bio: PropTypes.string,
  blog: PropTypes.string,
  twitter_username: PropTypes.string
};

Card.defaultProps = {
  bio: "",
  blog: "",
  twitter_username: ""
};
