import Header from '@components/Header';

const Layout: React.FC = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
