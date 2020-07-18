import { useStaticQuery, graphql } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              tags
              author
              description
              banner {
                file {
                  url
                }
                fluid {
                  srcSet
                }
              }
              content {
                json
              }
              date
            }
          }
        }
      }
    `
  );
  return data;
};

export default useBlogPosts;
