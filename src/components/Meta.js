import Head from 'next/head'

export default function Meta({ title, meta, links }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={meta?.name} content={meta?.description} />
      {links}
    </Head>
  )
}
