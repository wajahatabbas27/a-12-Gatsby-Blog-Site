import { graphql, Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Layout from "../components/Layout";
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "DD MM YYYY")
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
      }
    }
  }
`;

const blogpost = (props) => {
  console.log(props);
  return (
    <div>
      <Layout>
        <Link to='/'>Visit the Blog Page</Link>
        <br />

        <div className='content'>
          <h1>{props.data.contentfulBlogPost.title}</h1>

          <span className='meta'>
            Post On : {props.data.contentfulBlogPost.publishDate}
          </span>

          {props.data.contentfulBlogPost.images && (
            <Img
              className='featured'
              fluid={props.data.contentfulBlogPost.images.fluid}
              alt={props.data.contentfulBlogPost.title}
            />
          )}

          {/* {documentToReactComponents(props.data.contentfulBlogPost.body.raw)} */}
        </div>
      </Layout>
    </div>
  );
};

export default blogpost;
