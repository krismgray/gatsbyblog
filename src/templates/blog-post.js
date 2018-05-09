import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { Header, Label, Segment, Button, Divider } from 'semantic-ui-react';

const Template = ({ data }) => {
  // we get data back from the graphsql query about blog post.
  // we can use the frontmatter to build our template.
  const { markdownRemark: post } = data;

  return (
    <div>
      <Helmet title={`Kris's Blog - ${post.frontmatter.title}`} />
      <div>
        <Button as={Link} to='/' color='blue'>Back</Button>
        <Segment textAlign='center' basic>
          <Header as='h1'>{post.frontmatter.title}</Header>
          <Header as='h4' color='grey'>{post.frontmatter.date}</Header>
          {
            post.frontmatter.tags.map( (tag, i) =>
              <Label key={i} size='large' color='blue'>
                {tag}
              </Label>
            )
          }
        </Segment>
        <br />

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Divider />
      </div>
    </div>
  );
}

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`;
