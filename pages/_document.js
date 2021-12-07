import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                {/* Bootstrap */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
               
                {/* Core UI Icons */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />

                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=RocknRoll+One&display=swap" rel="stylesheet" />

                {/* Favicons */}
                <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
                <link rel="manifest" href="images/site.webmanifest" />
                

                {/* Bootstrap Javascript */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
                
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script 
                  async 
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />

                <script
                  dangerouslySetInnerHTML={{
                    __html:`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { page_path: window.location.pathname });
                    `,
                  }}
                />

            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html> 
    )
  }
}


export default MyDocument