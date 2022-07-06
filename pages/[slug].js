import React from 'react';
import { useRouter } from 'next/router';

import { getPages, getPageDetails } from '../services/'
import { PageDetail, Loader } from '../components';

const PageDetails = ({ page }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-12">
              <PageDetail page={page} />
          </div>
        </div>
      </div>
    </>
  );
};
export default PageDetails;

// Fetch data at build time
export async function getServerSideProps({ params }) {
  const data = await getPageDetails(params.slug);
  return {
    props: {
      page: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const pages = await getPages();
  return {
    paths: pages.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}