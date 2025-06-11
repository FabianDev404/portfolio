import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: { 
      navigation: {
        home: "Home",
        about: "About",
        experience: "Experience",
        work: "Work",
        contact: "Contact",
      },
      buttons: {
        contactMe: "Contact Me",
        downloadCV: "Download CV",
        scrollDown: "Scroll down",
        submit: "Submit",
        startProject: "Start project",
      },
      hero: {
        availableForWork: "Available for work",
        headline:
          "Full-Stack Developer Transforming Ideas into Modern Web Solutions",
      },
      about: {
        welcomeText:
          "Welcome! I'm Fabián Espinoza, a full-stack developer who takes ideas from concept to deployment. I start by understanding what users really need, then build complete end-to-end applications that businesses can actually rely on.",
        toolkitText:
          "My toolkit includes React, Next.js, Supabase and modern web technologies across the entire development stack. I focus on creating scalable, maintainable, and efficient applications that deliver real value to users.",
        yearsExperience: "Years of experience",
        projectsDone: "Projects done",
      },
      experience: {
        title: "My experience",
        freelance: {
          title: "Freelance Developer",
          period: "January 2025",
          description:
            "Development of custom solutions for independent clients. Focused on creating functional and modern products using technologies such as Next.js, Tailwind CSS, and Supabase. I work across the full development lifecycle—from gathering requirements and designing interfaces to coding, testing, and deployment.",
        },
        terumoJr: {
          title: "Software Engineer Jr - Terumo Neuro",
          period: "2022 - 2024",
          description:
            "Developed In-House web applications using React.js to automate manufacturing workflows and reporting systems. Built reusable components, improved app performance, and maintained critical tools used daily across departments. Collaborated with cross-functional teams to translate business needs into scalable technical solutions.",
        },
        terumoIntern: {
          title: "Software development Intern - Terumo Neuro",
          period: "2021 - 2022",
          description:
            "Added new features and enhancing existing modules. Provided technical support to staff in both the United States and Costa Rica, helping resolve issues and maintain daily operations. Gained hands-on experience in debugging, maintaining codebases, and understanding enterprise workflows.",
        },
      },
      tools: {
        title: "Essential Tools I use",
        subtitle:
          "Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.",
        categories: {
          structure: "Structure",
          styling: "Styling",
          programmingLanguage: "Programming Language",
          versionControl: "Version Control",
          serverSideLanguage: "Server-side Language",
          framework: "Framework",
          uiLibrary: "UI Library",
          cssFramework: "CSS Framework",
          staticTyping: "Static Typing",
          backendAsService: "Backend as a Service",
          database: "Database",
          authentication: "Authentication",
        },
      },
      portfolio: {
        title: "My portfolio highlights",
        projects: {
          musicApp: "Full stack music app",
          stockPhotoApp: "Free stock photo app",
          recipeApp: "Recipe app",
          realEstateWebsite: "Real state website",
          ecommerceWebsite: "eCommerce website",
          personalPortfolio: "vCard Personal portfolio",
        },
        tags: {
          api: "API",
          mvc: "MVC",
          development: "Development",
          spa: "SPA",
          webDesign: "Web-design",
          ecommerce: "eCommerce",
        },
      },
      contact: {
        title: "Contact me for collaboration",
        subtitle:
          "Reach out today to discuss your project needs or job opportunities and start collaborating on something amazing!",
        form: {
          name: "Name",
          namePlaceholder: "Erwin Smith",
          email: "Email",
          emailPlaceholder: "erwin@example.com",
          message: "Message",
          messagePlaceholder: "Hi!",
        },
      },
      footer: {
        cta: "Let's work together today!",
        sitemap: "Sitemap",
        socials: "Socials",
        copyright: "© 2025 Fabian Espinoza",
      },
    }
  },
  es: {
    translation: { 
      navigation: {
        home: "Inicio",
        about: "Acerca de",
        experience: "Experiencia",
        work: "Trabajo",
        contact: "Contacto",
      },
      buttons: {
        contactMe: "Contáctame",
        downloadCV: "Descargar CV",
        scrollDown: "Desplazar hacia abajo",
        submit: "Enviar",
        startProject: "Iniciar proyecto",
      },
      hero: {
        availableForWork: "Disponible para trabajar",
        headline:
          "Desarrollador Full-Stack Transformando Ideas en Soluciones Web Modernas",
      },
      about: {
        welcomeText:
          "¡Bienvenido! Soy Fabián Espinoza, un desarrollador full-stack que lleva las ideas desde el concepto hasta el despliegue. Comienzo entendiendo lo que los usuarios realmente necesitan, luego construyo aplicaciones completas de extremo a extremo en las que las empresas pueden confiar realmente.",
        toolkitText:
          "Mi conjunto de herramientas incluye React, Next.js, Supabase y tecnologías web modernas en toda la pila de desarrollo. Me enfoco en crear aplicaciones escalables, mantenibles y eficientes que entregan valor real a los usuarios.",
        yearsExperience: "Años de experiencia",
        projectsDone: "Proyectos realizados",
      },
      experience: {
        title: "Mi experiencia",
        freelance: {
          title: "Desarrollador Freelance",
          period: "Enero 2025",
          description:
            "Desarrollo de soluciones personalizadas para clientes independientes. Enfocado en crear productos funcionales y modernos utilizando tecnologías como Next.js, Tailwind CSS y Supabase. Trabajo en todo el ciclo de vida del desarrollo—desde la recopilación de requisitos y el diseño de interfaces hasta la codificación, pruebas y despliegue.",
        },
        terumoJr: {
          title: "Ingeniero de Software Jr - Terumo Neuro",
          period: "2022 - 2024",
          description:
            "Desarrollé aplicaciones web internas usando React.js para automatizar flujos de trabajo de manufactura y sistemas de reportes. Construí componentes reutilizables, mejoré el rendimiento de las aplicaciones y mantuve herramientas críticas utilizadas diariamente en todos los departamentos. Colaboré con equipos multifuncionales para traducir necesidades empresariales en soluciones técnicas escalables.",
        },
        terumoIntern: {
          title: "Interno de desarrollo de software - Terumo Neuro",
          period: "2021 - 2022",
          description:
            "Agregué nuevas características y mejoré módulos existentes. Proporcioné soporte técnico al personal tanto en Estados Unidos como en Costa Rica, ayudando a resolver problemas y mantener las operaciones diarias. Obtuve experiencia práctica en depuración, mantenimiento de bases de código y comprensión de flujos de trabajo empresariales.",
        },
      },
      tools: {
        title: "Mis herramientas esenciales",
        subtitle:
          "Descubre las poderosas herramientas y tecnologías que uso para crear sitios web y aplicaciones excepcionales de alto rendimiento.",
        categories: {
          structure: "Estructura",
          styling: "Estilos",
          programmingLanguage: "Lenguaje de Programación",
          versionControl: "Control de Versiones",
          serverSideLanguage: "Lenguaje de Programación",
          framework: "Framework",
          uiLibrary: "Librería de UI",
          cssFramework: "Framework CSS",
          staticTyping: "Tipado Estático",
          backendAsService: "Backend como Servicio",
          database: "Base de Datos",
          authentication: "Autenticación",
        },
      },
      portfolio: {
        title: "Destacados de mi portafolio",
        projects: {
          musicApp: "Aplicación de música full stack",
          stockPhotoApp: "Aplicación de fotos de archivo gratuitas",
          recipeApp: "Aplicación de recetas",
          realEstateWebsite: "Sitio web inmobiliario",
          ecommerceWebsite: "Sitio web de comercio electrónico",
          personalPortfolio: "Portafolio personal vCard",
        },
        tags: {
          api: "API",
          mvc: "MVC",
          development: "Desarrollo",
          spa: "SPA",
          webDesign: "Diseño Web",
          ecommerce: "Comercio Electrónico",
        },
      },
      contact: {
        title: "Contáctame para colaborar",
        subtitle:
          "¡Ponte en contacto hoy para discutir las necesidades de tu proyecto u oportunidades laborales y comienza a colaborar en algo increíble!",
        form: {
          name: "Nombre",
          namePlaceholder: "Erwin Smith",
          email: "Correo electrónico",
          emailPlaceholder: "erwin@ejemplo.com",
          message: "Mensaje",
          messagePlaceholder: "¡Hola!",
        },
      },
      footer: {
        cta: "¡Trabajemos juntos hoy!",
        sitemap: "Mapa del sitio",
        socials: "Redes sociales",
        copyright: "© 2025 Fabian Espinoza",
      },
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'translation', // Explicitly set default namespace
    ns: ['translation'], // Available namespaces
    debug: true,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      // Handle language code variations
      convertDetectedLanguage: (lng) => {
        // Convert en-US, en-GB, etc. to just 'en'
        if (lng.startsWith('en')) return 'en';
        if (lng.startsWith('es')) return 'es';
        return lng;
      }
    }
  });

export default i18n;