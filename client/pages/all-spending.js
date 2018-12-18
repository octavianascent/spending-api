import Layout from "../components/common/layout";
import PageTitle from "../components/common/pageTitle";
import LoggedIn from '../components/common/loggedInHoc';

const AllSpending = () => (
  <Layout>
    <PageTitle pageTitle="Spending"/>
  </Layout>
);

export default LoggedIn(AllSpending);