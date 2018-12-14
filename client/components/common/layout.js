import Header from './header';

import '../../styles/styles.scss';

const Layout = (props) => (
  <div className="container">
    <Header />
    {props.children}
  </div>
);

export default Layout;