import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import useSiteMetadata from './useSiteMetadata';

type Props = {
  description?: String,
  lang?: String,
  meta: [],
  title: String,
};

function SEO({
  description,
  lang,
  meta,
  title,
  image,
  pathname,
  children,
}: Props) {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;
  const metaURL = `${siteMetadata.siteUrl}${pathname || ``}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}>
      <html lang={lang} />
      <meta name='description' content={metaDescription} />
      <meta name='image' content={image} />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={metaURL} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:image' content={image} />
      <meta property='og:type' content='website' />
      <meta property='og:image:alt' content={metaDescription} />
      <meta name='twitter:card' content='website' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={metaURL} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:creator' content={siteMetadata.author} />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={withPrefix(`/favicon-32x32.png`)}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={withPrefix(`/favicon-16x16.png`)}
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={withPrefix(`/apple-touch-icon.png`)}
      />
      {children}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
