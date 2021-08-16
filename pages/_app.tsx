import type { AppProps } from 'next/app';
import "../styles/brands.css";
import "../styles/normalize.css";
import "../styles/skeleton.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
};

export default MyApp;
