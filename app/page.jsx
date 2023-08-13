import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className='flex-center w-full flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share <br className='max-md:hidden' />
        <span className='blue_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        PromptWave is an open-source AI prompting tool for modern world to
        discover, create and chare creative prompts.
      </p>
      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
