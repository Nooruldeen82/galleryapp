import React, { Component } from "react";

import { connect } from "react-redux";

import SearchForm from "./SearchForm";
import PicturesContainer from "./PicturesContainer";
import Spinner from "../layout/Spinner";

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <PicturesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.pictures.loading
});

export default connect(mapStateToProps)(Landing);
