import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import tw from "twin.macro";

export default function Gig({
  data: {
    gig: { html, meta: gig },
  },
}) {
  return (
    <Layout>
      <main>
        {/* <pre>{JSON.stringify({ id: gig.file.name, ...gig.meta }, null, 2)}</pre> */}
        <h1 tw="text-4xl mb-4">
          <span tw="text-gray-600 ml-4 float-right text-2xl"># {gig.id}</span>
          {gig.title}
        </h1>
        <div tw="flex items-center space-x-4 capitalize border-b border-gray-200 pb-10 mb-10">
          <div>
            <span tw="text-gray-600">Author</span> {gig.author}
          </div>
          <div>
            <span tw="text-gray-600">Created</span> {gig.created}
          </div>
          <div>
            <span tw="text-gray-600">Updated</span> {gig.updated}
          </div>
          <div>
            <span tw="text-gray-600">Status</span> {gig.status}
          </div>
          <div>
            <span tw="text-gray-600">Category</span> {gig.category}
          </div>
        </div>
        <div tw="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    gig: markdownRemark(id: { eq: $id }) {
      meta: frontmatter {
        id
        title
        author
        category
        status
        created(formatString: "MM-DD-YYYY")
        updated(formatString: "MM-DD-YYYY")
      }
      file: parent {
        ... on File {
          name
        }
      }
      html
    }
  }
`;
