import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout: React.FC = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
