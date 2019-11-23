import React, { Component } from "react";

import { connect } from "react-redux";

import PictureCard from "./PictureCard";

export class PicturesContainer extends Component {
  render() {
    const { pictures } = this.props;
    let content = "";

    content =
      pictures.length > 0
        ? pictures.map((picture, index) => (
            <PictureCard key={index} picture={picture} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  pictures: state.pictures.pictures
});

export default connect(mapStateToProps)(PicturesContainer);
