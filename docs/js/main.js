document.addEventListener("DOMContentLoaded", function () {
    // Repositórios (alterar links para repositórios de DS)
    const repositories = [
        { name: "Repositorio 1", url: "https://github.com/analuizacfreitas", emoji: "🤖" },
        { name: "Repositorio 2", url: "https://github.com/analuizacfreitas" , emoji: "🦾"},
        { name: "Repositorio 3", url: "https://github.com/analuizacfreitas" , emoji: "📊"} 
    ];

    const repoList = document.getElementById("repo-list");

    repositories.forEach(repo => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = repo.url;
        link.target = "_blank";
        link.textContent = repo.name;
        link.setAttribute("data-emoji", repo.emoji); // Defina o emoticon como um atributo personalizado
        listItem.appendChild(link);
        repoList.appendChild(listItem);
    });

    // Resumo sobre mim
    const aboutSection = document.querySelector(".about");
    aboutSection.querySelector("h2").textContent = "Sobre Mim";
    aboutSection.querySelector("p").textContent = "Olá, meu nome é Ana. Sou uma Cientista de Dados apaixonada pela criação de insights valiosos a partir de dados e que impulsionem a tomada de decisões baseadas em evidências. Minhas experiências até então se concentram nos seguintes tópicos: Previsão de Demanda, Sistema de Recomendação, Modelo de Clusterização, Governança de Dados e criação de KPIs de qualidade e, atualmente, Otimização de Rotas.";

});
