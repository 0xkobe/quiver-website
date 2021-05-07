import Navigation from "../components/layouts/navigation/navigation";
import Footer from "../components/layouts/footer/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="fixed bg-radial-gradient w-full h-full"></div>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
