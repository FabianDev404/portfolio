import { useTranslation } from 'react-i18next'; 
const About = () => {
  const { t } = useTranslation();
  const aboutItems = [
    {
      label: t("about.yearsExperience"),
      number: 4,
    },
    {
      label: t("about.projectsDone"),
      number: 2,
    }
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] ">
          {t("about.welcomeText")}
          </p>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] ">
          {t("about.toolkitText")}
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
