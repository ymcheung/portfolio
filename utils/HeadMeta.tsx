import Head from 'next/head'
import * as headMetaDefault from 'constant';

type HeadMetaProps = {
  title: string;
  description: string;
  canonical: string;
  ogCover: string;
} & typeof defaultProps;

const defaultProps = {
  title: headMetaDefault.TITLE,
  description: headMetaDefault.DESCRIPTION,
  canonical: '',
  ogCover: '/home/og-cover.jpg'
};

function HeadMeta({ title, description, canonical, ogCover }: HeadMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOSTNAME}${canonical}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_HOSTNAME}${canonical}`} />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOSTNAME}${ogCover}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  )
}

HeadMeta.defaultProps = defaultProps;
export default HeadMeta;
