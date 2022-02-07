import React from "react";
import { graphql, Link } from "gatsby";
import "twin.macro";

import Layout from "../components/Layout";

export default function IndexPage({
  data: {
    gigs: { edges: gigs },
  },
}) {
  return (
    <Layout>
      <p>
        ETCDAO Gigs is brand new and under construction. Please check back later
        for more information and exciting new opportunities!
      </p>
      <div tw="border-gray-200 border divide-gray-200 divide-y rounded mt-10">
        {gigs.map(
          ({
            node: {
              gig: { excerpt, meta: gig },
            },
          }) => {
            return (
              <div tw="p-3 space-y-2">
                <div tw="text-lg">
                  <span tw="text-gray-500 ml-2 float-right"># {gig.id}</span>
                  <Link tw="hover:underline" to={`/gigs/${gig.id}`}>
                    {gig.title}
                  </Link>
                </div>
                <div tw="flex items-center space-x-2 text-sm capitalize">
                  <div>{gig.created}</div>
                  <div>{gig.status}</div>
                  <div>{gig.category}</div>
                </div>
                <div tw="text-gray-700 text-sm">{excerpt}</div>
              </div>
            );
          }
        )}
      </div>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </Layout>
  );
}

export const query = graphql`
  query {
    gigs: allFile(
      filter: { sourceInstanceName: { eq: "gigs" } }
      sort: { fields: childMarkdownRemark___frontmatter___id, order: DESC }
    ) {
      edges {
        node {
          gig: childMarkdownRemark {
            meta: frontmatter {
              id
              title
              author
              category
              status
              created(formatString: "MM-DD-YYYY")
              updated(formatString: "MM-DD-YYYY")
            }
            excerpt
          }
        }
      }
    }
  }
`;
