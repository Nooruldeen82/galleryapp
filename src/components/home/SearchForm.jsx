import React, { Component } from "react";

import { connect } from "react-redux";

import {
  searchPicture,
  fetchPictures,
  setLoading
} from "../../actions/searchActions";

export class SearchForm extends Component {
  handleChange = e => {
    this.props.searchPicture(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchPictures(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-info mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for beautiful images
          </h1>
          <form id="searchForm" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Type here: Animals, flowers, . . ."
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-dark btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.pictures.text
});

export default connect(mapStateToProps, {
  searchPicture,
  fetchPictures,
  setLoading
})(SearchForm);
