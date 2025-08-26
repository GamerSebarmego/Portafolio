function mostrarInfo(tecnologia) {
  const info = {
    spring: {
      icon: "fa-brands fa-java",
      title: "Spring Boot",
      desc: "Framework para crear APIs y microservicios en Java."
    },
    java: {
      icon: "fa-brands fa-java",
      title: "Java",
      desc: "Lenguaje robusto, orientado a objetos y multiplataforma."
    },
    angular: {
      icon: "fa-brands fa-angular text-danger",
      title: "Angular",
      desc: "Framework frontend basado en TypeScript y muy usado para SPAs."
    }
  };

  document.getElementById("infoIcon").className = info[tecnologia].icon + " fa-6x mb-3";
  document.getElementById("infoTitle").innerText = info[tecnologia].title;
  document.getElementById("infoDesc").innerText = info[tecnologia].desc;
}
