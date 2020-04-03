import Header from '../pages/Header'
import Sidebar from '../pages/Sidebar'
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar/>
      {/* {children} */}
      {/* <p>Footer</p> */}
    </React.Fragment>
  );
};

export default Layout;