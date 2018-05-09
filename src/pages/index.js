import React from 'react';
import Link from 'gatsby-link';
import { Card } from 'semantic-ui-react';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Card
              key={post.id}
              fluid
              as={Link}
              to={post.frontmatter.path}
            >
              <Card.Content>
                <Card.Header>
                  {post.frontmatter.title}
                </Card.Header>
                <Card.Meta>
                  <span>
                    Published on  {post.frontmatter.date}
                  </span>
                </Card.Meta>
                <Card.Description>
                {post.excerpt}
                </Card.Description>
              </Card.Content>
            </Card>
          );
        })}
    </div>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
