export const GATag = ({ code }) => (
  <>
    <script src={`https://www.googletagmanager.com/gtag/js?id=${code}`} async />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${code}');
        `,
      }}
    />
  </>
)
