import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#181a1b" />
        <meta name="description" content="Retro neon API monitoring dashboard" />
      </Head>
      <body className="bg-[color:var(--color-bg)] text-[color:var(--color-neon-green)] font-mono">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 