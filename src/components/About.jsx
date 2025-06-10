const About = () => {
  const aboutItems = [
    {
      label: "Years of experience",
      number: 4,
    },
    {
      label: "Projects done",
      number: 2,
    }
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] ">
          Welcome! I'm Fabián Espinoza, a full-stack developer who takes ideas from concept to deployment.
          I start by understanding what users really need, then build complete end-to-end applications that businesses can actually rely on.
          </p>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] ">
          My toolkit includes React, Next.js, Supabase and modern web technologies across the entire development stack. 
          I focus on creating scalable, maintainable, and efficient applications that deliver real value to users.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map((item, key) => (
              <div key={key} className="about-item">
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl pr-0.5">{item.number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{item.label}</p>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
