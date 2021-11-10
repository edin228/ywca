import { FeaturedPosts, HomeHero, ActionItems, ProgramsAndServices, UpcomingEvents } from '../sections/index';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-4 mb-8 z-10">
      <div className="hidden md:flex relative pb-80 -mb-4 overflow-hidden">
        <HomeHero />
      </div>
      <div className="z-50">
        <ActionItems />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 col-span-1">
          <ProgramsAndServices />
        </div>
        <div className="lg:col-span-4 col-span-1 md:py-4">
          <div className="lg:col-span-6 col-span-1 md:mb-4">
            <UpcomingEvents />
          </div>
          <div className="lg:col-span-6 col-span-1">
            <FeaturedPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}