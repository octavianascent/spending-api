import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Layout from '../components/common/layout';
import SignForm from "../components/user/sign-form";
import PageTitle from "../components/common/pageTitle";


import {loginUser} from '../actions/auth-action';

const user = {
  email: '',
  password: ''
};

class Login extends Component {
  constructor() {
    super();

    this.login = this.login.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(e) {
    user[e.target.name] = e.target.value;
  }

  login(e) {
    e.preventDefault();
    this.props.loginUser(JSON.stringify(user));
  }

  render() {
    return (
      <Layout>
        <PageTitle pageTitle="Login"/>
        <div className="row">
          <div className="col-md" />
          <div className="col-md">
            <SignForm submitAction={this.login} inputHandle={this.updateUser} buttonText="Login"/>
          </div>
          <div className="col-md" />
        </div>
      </Layout>
    )
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
      loginUser: loginUser
    },
    dispatch
  );
};


export default connect(null, matchDispatchToProps)(Login);