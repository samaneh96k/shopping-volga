import '../styles/globals.css'
import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.min.css";
// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import "swiper/css/thumbs";
import Layout from '../Componnents/Layout';


import { Provider } from 'react-redux'
import store from '../redux/store'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
         <NextNProgress color="#29D"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}/>
  <Layout>
  <Component {...pageProps} />
      </Layout>
   
      </Provider>
    )
}

export default MyApp
