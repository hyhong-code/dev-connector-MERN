import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, like, comment, date },
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <a href="profile.html">
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </a>
    </div>
    <div>
      <p className="my-1">{text}</p>
      <p className="post-date">
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>
      <button type="button" className="btn btn-light">
        <i className="fas fa-thumbs-up"></i>
        {like.length > 0 && <span> {like.length}</span>}
      </button>
      <button type="button" className="btn btn-light">
        <i className="fas fa-thumbs-down"></i>
      </button>
      <Link to={`post/${_id}`} className="btn btn-primary">
        Discussion{" "}
        {comment.length > 0 && (
          <span className="comment-count">{comment.length}</span>
        )}
      </Link>
      {!auth.loading && user === auth.user._id && (
        <button type="button" className="btn btn-danger">
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  </div>
);

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PostItem);