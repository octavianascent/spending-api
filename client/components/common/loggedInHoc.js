import React, {Component} from 'react';
import {connect} from 'react-redux';
import Router from 'next/router'

export default LoggedInComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.token) {
        Router.push('/login');
      }
    }

    render() {
      return <LoggedInComponent />
    }
  }

  const mapStateToProps = state => {
    return {token: state.token}
  };

  return connect(mapStateToProps, null)(ComposedComponent);
}
