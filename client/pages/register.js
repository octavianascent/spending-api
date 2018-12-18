import Layout from '../components/common/layout'
import SignForm from '../components/user/sign-form';
import PageTitle from "../components/common/pageTitle";

const newUser = {
  email: '',
  password: ''
};

const Register = () => (
  <Layout>
    <PageTitle pageTitle="Register"/>
    <div className="row">
      <div className="col-md" />
      <div className="col-md">
        <SignForm submitAction={registerUser} buttonText="Register"/>
      </div>
      <div className="col-md" />
    </div>
  </Layout>
);

const registerUser = async (e) => {
  e.preventDefault();

  await fetch('/register', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(newUser)
  });
};


const updateUser = (e) => {
  newUser[e.target.name] = e.target.value;
};


export default Register;