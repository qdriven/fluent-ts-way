import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "@/components/Layout/Layout";

export default function FirstPage() {
  return (
    <Layout>
      <Head>
        <title>First Blog</title>
      </Head>
      <Script data-domain="fluentqa.github.io"
              src="https://plausible.io/js/plausible.js"
              strategy="lazyOnload"
              onLoad={() => {
                console.log(`script loaded correctly for plausible`)
              }
              }
      />
      <h1>First Blog</h1>
    </Layout>
  );
}
