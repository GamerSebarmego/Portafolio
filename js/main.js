function mostrarInfo(tecnologia) {
  const info = {
    spring: {
      icon: "devicon-spring-plain colored",
      title: "Spring Boot",
      desc: "Framework para crear APIs y microservicios en Java."
    },
    java: {
      icon: "devicon-java-plain colored",
      title: "Java",
      desc: "Lenguaje robusto, orientado a objetos y multiplataforma."
    },
    csharp: {
      icon: "devicon-csharp-plain colored",
      title: "C#",
      desc: "Lenguaje moderno de Microsoft, muy usado en backend y juegos."
    },
    dotnet: {
      icon: "devicon-dotnetcore-plain colored",
      title: ".NET Core",
      desc: "Framework multiplataforma para aplicaciones backend."
    },
    python: {
      icon: "devicon-python-plain colored",
      title: "Python",
      desc: "Lenguaje versátil, usado en data science, IA y backend."
    },
      html: {
      icon: "devicon-html5-plain colored",
      title: "HTML5",
      desc: "Estructura fundamental de todas las páginas web."
    },
    css: {
      icon: "devicon-css3-plain colored",
      title: "CSS3",
      desc: "Lenguaje de estilos para diseñar interfaces modernas y responsivas."
    },
    javascript: {
      icon: "devicon-javascript-plain colored",
      title: "JavaScript",
      desc: "Lenguaje dinámico del lado del cliente para interacción y lógica."
    },
    angularjs: {
      icon: "devicon-angularjs-plain colored",
      title: "AngularJS",
      desc: "Framework frontend basado en JavaScript para SPAs."
    },
    bootstrap: {
      icon: "devicon-bootstrap-plain colored",
      title: "Bootstrap",
      desc: "Framework CSS para interfaces modernas y responsivas."
    },
    mysql: {
      icon: "devicon-mysql-plain colored",
      title: "MySQL",
      desc: "Sistema de gestión de bases de datos relacional muy usado en aplicaciones web."
    },
    postgresql: {
      icon: "devicon-postgresql-plain colored",
      title: "PostgreSQL",
      desc: "Base de datos avanzada, open source y con gran soporte de transacciones."
    },
    git: {
      icon: "devicon-git-plain colored",
      title: "Git",
      desc: "Sistema de control de versiones distribuido."
    },
    github: {
      icon: "devicon-github-original colored",
      title: "GitHub",
      desc: "Plataforma de colaboración para proyectos con Git."
    },
    gitlab: {
      icon: "devicon-gitlab-plain colored",
      title: "GitLab",
      desc: "Plataforma DevOps para repositorios, CI/CD e integración con Git."
    }
  };

  document.getElementById("infoIcon").className = info[tecnologia].icon + " fa-10x mb-3";
  document.getElementById("infoTitle").innerText = info[tecnologia].title;
  document.getElementById("infoDesc").innerText = info[tecnologia].desc;
}
