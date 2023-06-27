import Head from 'next/head'
import styles from './social.module.css'
import request from '../../utils/request'
// import '../app/global.css'
import './common.css'

export default function SocialPost({ data }: any) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{data.data?.headline}</title>
        <meta
          name="title"
          property="og:title"
          content={data.data?.headline}
        ></meta>
        <meta
          name="image"
          property="og:image"
          content={data.data?.thumbnail}
        ></meta>
        <meta
          name="description"
          property="og:description"
          content={data.data?.description}
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" key="title" content={data.data?.headline} />
        <meta
          property="og:title"
          key="og:title"
          content={data.data?.headline}
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:description"
          key="og:description"
          content={data.data?.description}
        />
        <meta
          property="og:image"
          key="og:image"
          content={
            data?.thumbnail ? data.data?.thumbnail : data.data?.company_logo
          }
        />
        <meta
          property="og:image:secure_url"
          content={
            data?.thumbnail ? data.data?.thumbnail : data.data?.company_logo
          }
        />
        <meta property="og:image:type" content="image/gif" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          name="twitter:card"
          content={
            data.data?.thumbnail
              ? data.data?.thumbnail
              : data.data?.company_logo
          }
        />
        <meta name="twitter:title" content={data.data?.headline} />
        <meta name="twitter:description" content={data.data?.headline} />
        <meta name="twitter:site" content="The Martec" />
        {/* <meta name="twitter:url" content={window.location.href} /> */}
        <meta
          name="twitter:image"
          content={
            data.data?.thumbnail
              ? data.data?.thumbnail
              : data.data?.company_logo
          }
        />
        {/* <meta property="og:url" content={window.location.href} /> */}
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="470" />
        <meta property="og:video:height" content="264" />
        <meta property="og:video" content={data.data?.video_link} />
        <meta property="og:video:secure_url" content={data.data?.video_link} />
      </Head>

      <div className={styles.container}>
        <div className={styles.header__container}>
          <div className={styles.logo__wrapper}>
            <div className={styles.logo}></div>
          </div>
          <button>LEARN MORE</button>
        </div>
        <div className={styles.video__container}>
          <div className={styles.head__line}>{data.data?.company_name}</div>
          <div className={styles.videoplay__wrapper}>
            <video
              src={data.data?.video_link}
              preload="auto"
              style={{ width: '100%', height: '100%' }}
              controls={true}
            ></video>
          </div>
        </div>
      </div>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const { data, status } = await request({
    url: `/public/play-video?companyId=${
      context.query?.companyId || ''
    }&libraryId=${context.query?.libraryId || ''}&storyId=${
      context.query?.storyId || ''
    }`,
    method: 'GET',
  })

  // Pass data to the page via props
  return { props: { data } }
}
