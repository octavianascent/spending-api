import Router from 'next/router'

import Layout from '../components/common/layout';
import SignForm from "../components/user/sign-form";
import PageTitle from "../components/common/pageTitle";

const user = {
  email: '',
  password: ''
};

const Login = () => (
  <Layout>
    <PageTitle pageTitle="Login"/>
    <div className="row">
      <div className="col-md" />
      <div className="col-md">
        <SignForm submitAction={loginUser} inputHandle={updateUser} buttonText="Login"/>
      </div>
      <div className="col-md" />
    </div>
  </Layout>
);

const loginUser = async (e) => {
  e.preventDefault();
  const res = await fetch('/login', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(user)
  });

  const loggedInUser = await res.json();

  if (loggedInUser) {
    Router.push('/all-spending')
  }
};

const updateUser = (e) => {
  user[e.target.name] = e.target.value;
};

export default Login;