import Layout from "../components/Layout";
// import { ThemeContext } from "../context/Theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <ThemeContext> */}
      <Component {...pageProps} />
      {/* </ThemeContext> */}
    </Layout>
  );
}

export default MyApp;
