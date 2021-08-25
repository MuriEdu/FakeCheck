// Fake DataBase

const links = [
  {
    id: 0,
    link: "linkduvidoso.com",
    category: "Notícias",
    reputation: 2,
    status: "Não confiável",
  },
  {
    id: 1,
    link: "linkconfiavel.com",
    category: "Notícias",
    reputation: 5,
    status: "Confiável",
  },
];

const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const input = document.querySelector("#link-search");

let isSearched = false;

const getObject = (link) => {
  const obj = links.filter((value) => {
    return value.link === link;
  });
  return obj;
};

container.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = input.value;

  const obj = getObject(search);

  resultado.classList.remove("resultado-off");
  resultado.classList.add("resultado-on");

  if (isSearched === false) {
    const p = document.createElement("p");
    p.classList.add("response");

    p.innerHTML = `Status: ${obj[0].status.toUpperCase()} <br />
          Categoria: ${obj[0].category.toUpperCase()} <br />
          Avaliação: ${obj[0].reputation}`;

    resultado.appendChild(p);
    isSearched = true;
  } else {
    const data = document.querySelector(".response");
    data.innerHTML = `Status: ${obj[0].status.toUpperCase()} <br />
      Categoria: ${obj[0].category.toUpperCase()} <br />
      Avaliação: ${obj[0].reputation}`;
  }
});

reloadButton.addEventListener("click", (e) => {
  window.location.reload();
});
