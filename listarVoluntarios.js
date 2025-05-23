const accessKey = "5M0fVhB53ap7pQaEySO9Xt5kTONKYiaMF9Npn4eZJUs";

async function buscarFotoAleatoria() {
  try {
    const response = await fetch("https://api.unsplash.com/photos/random", {
      headers: { Authorization: `Client-ID ${accessKey}` }
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data.urls.small;
  } catch (error) {
    console.error("Erro ao buscar foto aleatória:", error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("containerCards");
  const filtroNome = document.getElementById("filtroNome");
  const btnLimpar = document.getElementById("btnLimpar");

  let voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [
    { nome: "Ana Silva", email: "ana@email.com", cep: "12345-678", endereco: "Rua A, 100" },
    { nome: "João Souza", email: "joao@email.com", cep: "23456-789", endereco: "Rua B, 200" }
  ]; 

  async function renderVoluntarios(lista) {
    container.innerHTML = "";
    if (lista.length === 0) {
      container.innerHTML = "<p>Nenhum voluntário cadastrado.</p>";
      return;
    }

    const fotos = [];
    for (let i = 0; i < lista.length; i++) {
      const url = await buscarFotoAleatoria();
      fotos.push(url);
    }

    lista.forEach((voluntario, index) => {
      const card = document.createElement("div");
      card.className = "card";

      const fotoUrl = fotos[index] || "https://via.placeholder.com/160";

      card.innerHTML = `
        <img src="${fotoUrl}" alt="Foto de perfil aleatória" />
        <h3>${voluntario.nome}</h3>
        <p><strong>Email:</strong> ${voluntario.email}</p>
        <p><strong>CEP:</strong> ${voluntario.cep}</p>
        <p><strong>Endereço:</strong> ${voluntario.endereco}</p>
        <button class="btn-excluir">Excluir</button>
      `;

      card.querySelector(".btn-excluir").addEventListener("click", () => {
        voluntarios.splice(voluntarios.indexOf(voluntario), 1);
        localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
        aplicarFiltro();
      });

      container.appendChild(card);
    });
  }

  function aplicarFiltro() {
    const filtroTexto = filtroNome.value.toLowerCase();
    const filtrados = voluntarios.filter(v =>
      v.nome.toLowerCase().includes(filtroTexto)
    );
    renderVoluntarios(filtrados);
  }

  filtroNome.addEventListener("input", aplicarFiltro);

  btnLimpar.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja apagar todos os cadastros?")) {
      voluntarios = [];
      localStorage.removeItem("voluntarios");
      filtroNome.value = "";
      renderVoluntarios([]);
    }
  });

  renderVoluntarios(voluntarios);
});
