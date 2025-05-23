function cadastrarAdm() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos");
    return;
  }

  if (localStorage.getItem(email)) {
    alert("Este e-mail já está cadastrado!");
    return;
  }

  const admin = { nome, email, senha };
  localStorage.setItem(email, JSON.stringify(admin));

  alert("Cadastro concluído");
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  window.location.href = "login.html";
}

function login() {
    const email = document.getElementById("email").value.trim();
    const senhaInput = document.getElementById("senha").value.trim();

    if (!email || !senhaInput) {
        alert("Preencha todos os campos");
        return;
    }

    const adminString = localStorage.getItem(email);
    if (!adminString) {
        alert("Usuário não encontrado");
        return;
    }

    const adminBase = JSON.parse(adminString);
    
    if (adminBase.senha === senhaInput) {
        alert("Seja bem-vindo");
        window.location.href = "menu.html"; 
    } else {
        alert("Senha incorreta");
    }
}

