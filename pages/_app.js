import { ThemeProvider, CssBaseline } from '@material-ui/core'
import Layout from '../src/components/Layout'
import '../styles/globals.css'
import { motion } from 'framer-motion'
import useLocalTheme from '../src/hooks/useLocalTheme'

export default function MyApp({ Component, pageProps, router }) {
  const { theme } = useLocalTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{ pageInitial: { opacity: 0 }, pageAnimate: { opacity: 1 } }}>
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </ThemeProvider>
  )
}
