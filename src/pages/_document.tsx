import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
  } from 'next/document';
  
  class MyDocument extends Document {
  
  
    static async getInitialProps(
      ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
      const originalRenderPage = ctx.renderPage;
  
      ctx.renderPage = () =>
        originalRenderPage({
          // Useful for wrapping the whole react tree
          enhanceApp: (App) => App,
          // Useful for wrapping in a per-page basis
          enhanceComponent: (Component) => Component,
        });
  
      const initialProps = await Document.getInitialProps(ctx);
  
      return initialProps;
    }
  
    render() {
      return (
        <Html lang="en">
          <Head>
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" 
              href="/favicon.ico" />
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;