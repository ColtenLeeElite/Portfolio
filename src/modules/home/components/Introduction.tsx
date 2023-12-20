const Introduction = () => {
  return (
    <section className='space-y-2 bg-no-repeat bg-cover'>
      <div className='flex gap-2 text-2xl font-medium lg:text-3xl font-sora'>
        <h1>Hi, I&apos;m Colten Lee</h1>{' '}
        <div className='ml-1 animate-waving-hand'>👋</div>
      </div>

      <div className='space-y-4'>
        <>
          <ul className='flex flex-col gap-1 ml-5 list-disc lg:flex-row lg:gap-8 text-neutral-700 dark:text-neutral-400'>
            <li>life-long learner</li>
            <li>Mineola, Texas, United States</li>
          </ul>
        </>
        <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
          Creative frontend-focused Full Stack Software Engineer with nearly 8
          years of proven exposure in web and mobile application development in
          various business domains including HR, SaaS, Education, AI industries.
          <br />
          <br />
          Specializations: JavaScript, React, Angular, Vue, HTML5, CSS3, SASS,
          Responsive Web Design, UI/UX, Web Accessibility, Cross-Browser
          Compatibility, and Web Performance Optimization.
          <br />
          <br />
          Key Strengths: I pride myself on my keen attention to detail,
          adaptability, and strong communication skills. This allows me to
          effectively collaborate with diverse teams and seamlessly integrate my
          work with backend systems to ensure a smooth user experience.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
