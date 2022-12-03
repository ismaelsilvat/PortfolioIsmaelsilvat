/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Olá 👋.",
  title2: "Ismael",
  logo_name: "ismaelsilvat()",
  nickname: "ismaelsilvat / mdirekt",
  full_name: "Ismael Teixeira da Silva",
  subTitle: " Desenvolvedor Full Stack 🔥. Sempre aprendendo.",
  resumeLink:
    "https://drive.google.com/file/d/1d6YYukdol6h_wZO8-gwgSvkZWcfQsols/view?usp=sharing",
  mail: "mailto:ismaelteixeiradas@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/ismaelsilvat",
  linkedin: "https://www.linkedin.com/in/ismaelsilvat/",
  gmail: "ismaelteixeiradas@gmail.com",
};

const skills = {
  data: [
    {
      title: "Desenvolvimento Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Desenvolvimento de interfaces altamente interativas para os usuários",
        "⚡ Construção de sites responsivos com React",
        "⚡ Desenvolvimento mobile utilizando AndroidStudio e React",
        "⚡ Criação de aplicações backend em Node, Express, Spring e SpringBoot",
        "⚡ Integração de serviços de terceiros como Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#613F8E",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#4AACAE",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#2F74C0",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Arquitetura-infra em nuvem",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experiência trabalhando com multiplas plataformas em nuvem",
        "⚡ Experiência subindo e gerenciando aplicações",
        "⚡ Experiência com Integração contínua",
      ],
      softwareSkills: [
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Conclusão de Ensino Técnico - Programação de Jogos Digitais",
      subtitle: "Ensino Técnico",
      logo_path: "senai.jpg",
      alt_name: "SENAI",
      duration: "2017 - 2017",
      descriptions: ["⚡ Conclusão de Curso Técnico."],
      website_link: "https://cursos.sesisenai.org.br/tubarao",
    },
    {
      title: "Conclusão do Ensino Fundamental",
      subtitle: "Educação Básica",
      logo_path: "santaTerezinha.png",
      alt_name: "SSTZ",
      duration: "2011 - 2019",
      descriptions: ["⚡ Conclusão do Ensino Fundamental."],
      website_link: "https://www.colegiosantaterezinha.com/",
    },
    {
      title: "Conclusão de Nível Básico - Língua Estrangeira",
      subtitle: "Desenvolvimento Pessoal",
      logo_path: "wizard.png",
      alt_name: "WZD",
      duration: "2021 - 2022",
      descriptions: ["⚡ Conclusão de curso de Língua Estrangeira Inglesa."],
      website_link: "https://www.wizard.com.br/",
    },
    {
      title: "Conclusão de Curso Técnico",
      subtitle: "Educação Técnica",
      logo_path: "senai.jpg",
      alt_name: "SENAI",
      duration: "2021 - 2022",
      descriptions: ["⚡ Conclusão de Ensino Técnico."],
      website_link: "https://sc.senai.br/",
    },
    {
      title: "Conclusão de Ensino Médio",
      subtitle: "Educação Básica",
      logo_path: "senai.jpg",
      alt_name: "SENAI",
      duration: "2020 - 2022",
      descriptions: ["⚡ Conclusão de Ensino Médio."],
      website_link: "https://sc.senai.br/",
    },
    {
      title: "Conclusão de Nível Intermediário - Língua Estrangeira",
      subtitle: "Desenvolvimento Pessoal",
      logo_path: "wizard.png",
      alt_name: "WZD",
      duration: "2022",
      descriptions: ["⚡ Conclusão de curso de Língua Estrangeira Inglesa."],
      website_link: "https://www.wizard.com.br/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Programador de Sistemas de Informação",
      subtitle: "SENAI",
      logo_path: "senai.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1DFAJHDHVk-rvll4WZlZSoI6vL9YPERTJ/view?usp=share_link",
      alt_name: "SENAI",
      color_code: "#E3405F",
    },
    {
      title: "Nível Básico - Língua Estrangeira Inglesa",
      subtitle: "Wizard",
      logo_path: "wizard.png",
      certificate_link:
        "https://drive.google.com/file/d/1DFAJHDHVk-rvll4WZlZSoI6vL9YPERTJ/view?usp=share_link",
      alt_name: "Wizard",
      color_code: "#E3405F",
    },
    {
      title: "Programador de Jogos Digitais",
      subtitle: "SENAI",
      logo_path: "senai.jpg",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "SENAI",
      color_code: "#E3405F",
    },
    {
      title: "Certificado de Conclusão do Ensino Fundamental",
      subtitle: "Santa Terezinha",
      logo_path: "santaTerezinha.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Santa Terezinha",
      color_code: "#E3405F",
    },
    {
      title: "Certificado de Conclusão do Ensino Médio",
      subtitle: "Senai",
      logo_path: "senai.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "SENAI",
      color_code: "#E3405F",
    },
    {
      title: "Nível Intermediário - Língua Estrangeira Inglesa",
      subtitle: "Wizard",
      logo_path: "wizard.png",
      certificate_link:
        "https://drive.google.com/file/d/1DFAJHDHVk-rvll4WZlZSoI6vL9YPERTJ/view?usp=share_link",
      alt_name: "Wizard",
      color_code: "#E3405F",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiência",
  subtitle: "Estudar, Desenvolver, Repetir",
  description:
    "Em todo o período que passei no senai, desenvolvi ínumeros projetos aos quais sempre tive que buscar novos conhecimentos e manter uma rotina constante de estudo",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experiência Profissional",
      experiences: [
        {
          title: "Desenvolvimento E-commerce",
          company: "Senai",
          company_url: "https://moskashoes.netlify.app/",
          logo_path: "senai.jpg",
          duration: "Jul 2021 - Set 2021",
          location: "Híbrido",
          description: `Desenvolvimento de um e-commerce com ferramentas unicamente
          de front-end, sendo as mesmas: javascript, html e css. Seguindo a
          proposta, Moska Shoes tinha como objetivo entregar um lugar onde
          pudesse ser acessado tênis dos mais diversos estilos e tipos, obtendo
          as novas tendências do varejo de calçados casuais e esportivos.
          Acesse em: moskashoes.netlify.app.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Desenvolvimento Mobile",
          company: "Senai",
          company_url: "https://github.com/ismaelsilvat/HelpNate",
          logo_path: "senai.jpg",
          duration: "Out 2021 - Apr 2022",
          location: "Híbrido",
          description: `Desenvolvimento de um aplicativo mobile que solucionasse uma dor
          da sociedade. Seguindo a proposta, desenvolvi o aplicativo HelpNate,
          que tinha como objetivo entregar um lugar onde a sociedade pudesse
          realizar doações de maneira prática e simples.Tecnologias utilizadas:
          react native, node, heroku , postgresql e postman.  
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Desenvolvimento Web",
          company: "Senai",
          company_url: "https://vacancieswebsite.netlify.app/",
          logo_path: "senai.jpg",
          duration: "Abr 2022 - Set 2022",
          location: "Híbrido",
          description: `Desenvolvimento de uma aplicação web completa que solucionasse
          uma dor da sociedade. Tecnologias utilizadas: typescript, react, node,
          heroku, postgresql e postman. Seguindo a proposta, desenvolvi a
          plataforma Vacancies, que tinha como objetivo entregar um lugar
          onde instituições e futuros estagiários pudessem se conectar de
          maneira prática e simplifciada.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Meus projetos",
  description:
    "Aqui vou apresentar alguns dos projetos escolares que foram solicitados pela banca de professores.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contate-me",
    profile_image_path: "ismael.jpg",
    description: "Você pode me contatar por um dos seguintes métodos. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Todos os projetos que eu faço, costumo documentar no github e postar no linkedin. Acesse-os!🌝",
    link: "https://www.linkedin.com/in/ismaelsilvat/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      backgroundColor: "green",
      name: "Atividade Eletroimã",
      img: "eletroima.jpg",
      url: "https://docs.google.com/document/d/1PT-OvZfRTOBpvLQEMY-iuDf5RU8QQ93rcAG2VjsLFFA/edit?usp=sharing",
      description:
        "Desenvolver na prática os conceitos de Daniell em seu modelo de Pilha e produzir um documento registrando o processo.",
    },
    {
      id: "1",
      backgroundColor: "green",
      name: "Atividade Trimestral - Revista Ambiental",
      img: "RevistaSustentabilidade.PNG",
      url: "https://www.canva.com/design/DAFKJftKjZ4/THubOZ5mD1YP29uhZWh5ZQ/view?utm_content=DAFKJftKjZ4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton#1",
      description:
        "Realizar uma produção de Revista sobre sustentabilidade no aspecto AMBIENTAL, visando boas práticas com o meio ambiente e registrar acontecimentos por parte da humanidade que trouxeram prejuízos à natureza.",
    },
    {
      id: "2",
      backgroundColor: "green",
      name: "Atividade Relações ecológicas",
      img: "Relacoesecologicas.PNG",
      url: "https://www.powtoon.com/online-presentation/bkkQhHkuPJ9/?utm_medium=social-share&utm_campaign=studio+share&utm_source=copy+link&utm_content=bkkQhHkuPJ9&utm_po=31019783&mode=movie",
      description:
        "Produzir um clipe que mostre claramente uma das relações ecológicas apresentadas no plano de aula abordado na aula de relações ecológicas(Esclavagismo, Parasitismo, Predação, Competição Inter).",
    },
    {
      id: "3",
      backgroundColor: "green",
      name: "Atividade Cartaz anti racismo",
      img: "CartazAntirracista.PNG",
      url: "https://www.canva.com/design/DAE7nb50MsE/6CVrjHYVc3pXHJJu5Mt3eQ/watch?utm_content=DAE7nb50MsE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      description:
        "Desenvolver na prática um cartaz com argumentos antirracistas, visando a inserção de conceitos aprendidos nas aulas de herança quantitativa ou poligênica.",
    },
    {
      id: "4",
      backgroundColor: "blue",
      name: "Atividade Filme Quebrando a Banca",
      img: "quebrancoabanca.jpg",
      url: "https://docs.google.com/document/d/12wETP-gfVo9w3UvBtYMmxmGQF9LzI7vWfF4Z89Fwcgw/edit?usp=sharing",
      description:
        "Realizar a produção de um roteiro de filme de hollywood tendo como base o filme quebranco a banca.",
    },
    {
      id: "5",
      backgroundColor: "blue",
      name: "Atividade Animação",
      img: "analiseCombinatoria.PNG",
      url: "https://app.animaker.com/animo/khAAFJEkAuD3z4mL/",
      description:
        "Realizar a produção de um vídeo (animação) entre 3 e 7 minutos demonstrando uma situação envolvendo aplicação de Análise Combinatória.",
    },
    {
      id: "6",
      backgroundColor: "orange",
      name: "Atividade Tecnologias da Primeira Guerra Mundial",
      img: "uboot.PNG",
      url: "https://www.canva.com/design/DAE74-KYMOM/r6dSOoUp5ac2A5i578QbmA/view?utm_content=DAE74-KYMOM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description:
        "Realizar uma apresentação sobre alguma tecnologia desenvolvida no período da Primeira Guerra Mundial.",
    },
    {
      id: "7",
      backgroundColor: "orange",
      name: "Atividade Parte 2 da Avaliação Trimestral do 1º TRI (Jornal)",
      img: "capadejornal.PNG",
      url: "https://drive.google.com/file/d/1Lw7g3DVNw1FW4PNSsX-bbZdydUy02uhb/view?usp=share_link",
      description:
        "Realizar a produção de uma capa de jornal standard de época, seguindo o tamanho, estilo e padrão do começo do século XX.",
    },
    {
      id: "8",
      backgroundColor: "orange",
      name: "Atividade Infográfico República Oligárquica x Era Vargas",
      img: "infograficocomparativo.PNG",
      url: "https://www.canva.com/design/DAFIXN7SRk0/4OxZB4c_52ly9dfddFVwNQ/view?utm_content=DAFIXN7SRk0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      description:
        "Realizar a produção de um Infográfico Comparativo da República Oligárquica x Era Vargas.",
    },
    {
      id: "9",
      backgroundColor: "red",
      name: "Atividade Projeto de vida",
      img: "projetodevida.png",
      url: "https://docs.google.com/document/d/16AUGSlIag_Ey_AxQcvIVzv2nCWqWJlItMP0ZQz2-1GI/edit?usp=sharing",
      description:
        "Realizar a produção de um relato de projeto de vida contando sobre alguns planos futuros e vivências planejadas.",
    },
    {
      id: "10",
      backgroundColor: "red",
      name: "Atividade Trabalho sobre Museus de Santa Catarina",
      img: "museu.jpg",
      url: "https://drive.google.com/file/d/1Ab3mx_tikuzgGDbbomKv2hu0RCsVtmtf/view?usp=sharing",
      description:
        "realizar a produção de um relatório sobre os Museus de Santa Catarina. Tem como objetivo geral apresentar os Museus de Santa Catarina, aos quais têm sido um importante conservador cultural, local e estadual.",
    },
    {
      id: "11",
      backgroundColor: "red",
      name: "Simulado de redação",
      img: "redacao.jpg",
      url: "https://drive.google.com/file/d/1zX2kAmpvDsf9_veNMiKg7URhbITUuxKC/view?usp=share_link",
      description:
        "Realizar a produção de uma redação com o modelo enem sobre um tema escolhido pelo professor na plataforma Redação Online.",
    },
  ],
};

const choosedProjects = {
  data: [
    {
      id: "12",
      backgroundColor: "green",
      name: "Atividade Bixo Doido",
      img: "Trabalho puma natureza Bixo doido.png",
      url: "https://docs.google.com/document/d/1jd8pF9v6rNxOP5qVvz_js7AEKZ45qeGY76TPFr4ypEs/edit?usp=sharing",
      description:
        "criar uma nova espécie, que seja a mistura de no mínimo três seres vivos pertencentes a três reinos distintos e apresentar a classificação e as características gerais da nova espécie. Dar um nome científico.",
    },
    {
      id: "13",
      backgroundColor: "green",
      name: "Atividade Máquina Termodinâmica",
      img: "Site termodinamica.PNG",
      url: "https://sa-termodinamica.netlify.app/",
      description:
        "realizar a produção de uma Máquina Termodinâmica que realize o cálculos de fatores Termodinâmicos como: rendimento, Trabalho e calor. Integrando a uma produçaõ WEB com HTML, CSS E JS.",
    },
    {
      id: "14",
      backgroundColor: "green",
      name: "Atividade Perdidos na Ilha",
      img: "Trimestral Natureza.PNG",
      url: "https://www.canva.com/design/DAEnWznx3EQ/34K6SZYdW13mfyMAajisDg/view?utm_content=DAEnWznx3EQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      description:
        "Ajudar uma pessoa que está perdida em uma ilha a sobreviver e se salvar, utilizando conceitos de Termodinâmica, Inteligência Natural e Química, aprendidos durante o 2 trimestre.",
    },
    {
      id: "15",
      backgroundColor: "green",
      name: "Atividade Trimestral - Desafio Espacial",
      img: "TrimestralNatureza.png",
      url: "https://www.canva.com/design/DAEvPXtkdqc/Z1nSK7XQJM3l6Jd5IS9_fQ/view?utm_content=DAEvPXtkdqc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      description:
        "Realizar uma produção de Como criar condições para sobrevivência em um planeta da galáxia em que vivemos.",
    },
    {
      id: "16",
      backgroundColor: "purple",
      name: "Atividade SA Termodinâmica",
      img: "Site termodinamica.PNG",
      url: "https://sa-termodinamica.netlify.app/",
      description:
        "realizar a produção de uma Máquina Termodinâmica que realize o cálculos de fatores Termodinâmicos como: rendimento, Trabalho e calor. Integrando a uma produçaõ WEB com HTML, CSS E JS.",
    },
    {
      id: "17",
      backgroundColor: "purple",
      name: "Atividade Site contextual",
      img: "SiteCSGO.png",
      url: "https://site-csgo.netlify.app/",
      description:
        "Realizar a construção de um site com HTML, CSS e JS em grupo com algum tema contextualizado por livre escolha do grupo.",
    },
    {
      id: "18",
      backgroundColor: "blue",
      name: "Atividade Tinker Cad",
      img: "tinkercad.png",
      url: "https://docs.google.com/document/d/13NVjl74RXVR1aqcewMA9xmZUggdfyZdIY80OnTRPsts/edit?usp=sharing",
      description:
        "Realizar a construção de um porta lápis, canetas e outros materiais de escritório no software Tinker Cad.",
    },
    {
      id: "19",
      backgroundColor: "blue",
      name: "Atividade Ponte de Macarrão",
      img: "PonteDeMacarrao.jpg",
      url: "https://docs.google.com/document/d/1FAyvM7UY2Sd9UtnjblvwS2SNvPwCkQhRc2k4ui2KT-A/edit?usp=sharing",
      description:
        "Realizar a construção de um projeto de Ponte de Macarrão seguindo etapas cronológicas e interligadas para se realizar um projeto calculado e resistente.",
    },
    {
      id: "20",
      backgroundColor: "orange",
      name: "Atividade Mapa Mundi",
      img: "MapaMundi.PNG",
      url: "https://padlet.com/ismael_t_silva/m8ei22pffurgglyb",
      description:
        "Mapa-múndi clicável seguindo solicitações de: ter um link indicando a localização da cidade de Florença, ter um link em cada continente com as informações pedidas e ter um link em cidades simbolicamente escolhidas que representem, pela sua história e desenvolvimento, os acontecimentos solicitados.",
    },
    {
      id: "21",
      backgroundColor: "red",
      name: "Atividade Semana da Arte",
      img: "POP-ART.png",
      url: "https://docs.google.com/document/d/16yaIhAH7ZYdPlQ5SY9pQ_f6U7a_hhNCnceaXFahDCKQ/edit?usp=sharing",
      description:
        "Realizar a produção de um arte tematizada em Pop Art ou Arte Urbana.",
    },

id: "22",
      backgroundColor: "purple",
      name: "Portfólio 2021",
      img: "portfolio2021.jpg",
      url: "portfolioismael.netlify.app",
      description:
        "Portfólio 2021.",
    },

  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  choosedProjects,
};
