import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "_/components/Footer";
import { NextSeo } from "next-seo";
import Header from "_/components/Header";

export default function Container(props: { [x: string]: any; children: any }) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Aman Jha | Founder. Designer. Everlasting.",
    description: `Making tangie.ai, a platform for tangies.`,
    image: "https://amanjha.dev/static/images/banner.png",
    canonical: "https://amanjha.dev",
    type: "website",
    date: undefined,
    ...customMeta,
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://amanjha.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://amanjha.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Aman Jha" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@amanjha__" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: "en",
          site_name: "Aman Jha",
        }}
      />
      <div className="flex flex-col justify-center px-8">
        <Header />
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
