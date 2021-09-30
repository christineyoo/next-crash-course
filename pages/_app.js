import Layout from '../components/Layout'
import '../styles/globals.css'
// This _app.js wraps around all your page components
// We could wrap a layout around it so we can have a header, footer, nav etx

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
