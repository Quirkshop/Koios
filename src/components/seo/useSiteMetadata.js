import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            siteLang
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
