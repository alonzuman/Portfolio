import { ThemeProvider, CssBaseline } from '@material-ui/core'
import Layout from '../src/components/Layout'
import '../styles/globals.css'
import { motion } from 'framer-motion'
import Constants from '../src/constants'
import useDarkMode from 'use-dark-mode'

export default function MyApp({ Component, pageProps, router }) {
  const { value } = useDarkMode(true)

  return (
    <ThemeProvider theme={Constants.Themes?.[value ? 'dark' : 'light']}>
      <CssBaseline />
      <Layout>
        <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{ pageInitial: { opacity: 0 }, pageAnimate: { opacity: 1 } }}>
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </ThemeProvider>
  )
}
