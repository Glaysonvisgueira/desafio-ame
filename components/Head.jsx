import Head from "next/head";

export default function Home(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.metaDescription} />
      <meta name="keywords" content={props.keywords} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
      <link rel="icon" href="/favicon.ico" />

      {/*<meta name="theme-color" content={theme.colors.branding} /> <!-- Chrome, Firefox OS and Opera -->
			<meta name="msapplication-navbutton-color" content={theme.colors.branding} />  <!-- Windows Phone -->
        <meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.branding} /><!-- iOS Safari -->*/}
    </Head>
  );
}
