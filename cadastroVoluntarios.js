document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formVoluntario");
  const cepInput = document.getElementById("cep");
  const enderecoInput = document.getElementById("endereco");

  cepInput.addEventListener("blur", async () => {
    const cep = cepInput.value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
          alert("CEP não encontrado.");
          enderecoInput.value = "";
        } else {
          enderecoInput.value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        }
      } catch (error) {
        alert("Erro ao buscar o CEP.");
      }
    }
  });

  function salvarVoluntario(voluntario) {
    const voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];
    voluntarios.push(voluntario);
    localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cep = cepInput.value.trim();
    const endereco = enderecoInput.value.trim();

    if (nome && email && cep && endereco) {
      salvarVoluntario({ nome, email, cep, endereco });
      alert("Voluntário cadastrado com sucesso!");
      form.reset();
      enderecoInput.value = "";
    } else {
      alert("Preencha todos os campos corretamente.");
    }
  });
});
