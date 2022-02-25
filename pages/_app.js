import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Layout children={<Component {...pageProps} />} /> SAMA AJA :D*/}
      <Component {...pageProps} />
    </Layout> 
  )
}

export default MyApp
