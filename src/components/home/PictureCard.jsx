import React, { Component } from "react";

export class PictureCard extends Component {
  // picture card
  render() {
    const { picture } = this.props;
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
        <div className="card card-body text-center h-100">
          <img className="w-100 mb-2" src={picture.largeImageURL} alt="Pic" />
        </div>
      </div>
    );
  }
}

export default PictureCard;
