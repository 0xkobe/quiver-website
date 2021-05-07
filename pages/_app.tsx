import Navigation from "../components/layouts/navigation/navigation";
import Footer from "../components/layouts/footer/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
