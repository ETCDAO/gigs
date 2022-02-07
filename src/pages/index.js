import React from "react";
import tw from "twin.macro";

import Button from "../components/Button";
import Layout from "../components/Layout";

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-green-100 to-green-500`,
  ],
};

const IndexPage = () => (
  <Layout>
    <div css={styles.container({ hasBackground: true })}>
      <div tw="flex flex-col justify-center h-full gap-y-5">
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
        <Button isSmall>Close</Button>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
