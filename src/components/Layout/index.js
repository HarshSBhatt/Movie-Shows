const { default: Footer } = require("components/Footer");
const { default: Header } = require("components/Header");

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
