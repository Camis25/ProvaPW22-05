# Plataforma de Cadastro de Voluntários - ONG

## Descrição

Este projeto é uma aplicação web simples para uma ONG que permite o cadastro, listagem e gerenciamento de voluntários. A plataforma conta com sistema de login para administradores, cadastro de voluntários com consulta automática de endereço pelo CEP, e funcionalidades para filtrar e excluir voluntários.

---

## Funcionalidades Principais

### 1. Sistema de Login e Controle de Acesso

- O administrador pode se cadastrar na plataforma, fornecendo nome, email e senha.
- O cadastro verifica se o email já está registrado para evitar duplicidade.
- Após o cadastro, o administrador deve fazer login para acessar o menu principal.
- A sessão do administrador é controlada, e em caso de logout ou inatividade de 5 minutos, o sistema redireciona para a página de login.
- É necessário fornecer email e senha para entrar no sistema após o logout.

### 2. Menu Principal

- Após o login, o usuário tem acesso a um menu com as opções:
  - Cadastro de voluntário
  - Lista de voluntários


### 3. Cadastro de Voluntário

- O formulário exige os seguintes campos obrigatórios: Nome, Email e CEP.
- Ao digitar o CEP e sair do campo, o sistema consulta automaticamente a API pública ViaCEP para preencher o endereço completo.
- Os dados do voluntário são salvos no LocalStorage do navegador.
- Após o cadastro, o formulário é limpo para um novo cadastro.

### 4. Listagem e Gerenciamento de Voluntários

- A lista de voluntários é exibida em formato de cards, contendo:
  - Foto de perfil aleatória (buscada via API do Unsplash com tema “voluntário”)
  - Nome
  - Email
  - CEP
  - Endereço completo
- É possível filtrar os voluntários pelo nome em tempo real.
- Cada card possui um botão para excluir aquele voluntário individualmente.
- Também há um botão para "Limpar Tudo", que apaga todos os cadastros do LocalStorage e limpa a tela.
- Os dados permanecem armazenados mesmo após recarregar a página.

### 5. Segurança e Usabilidade

- O sistema evita cadastro duplicado de administradores com mesmo email.
- O sistema redireciona para login após 5 minutos de inatividade, prevenindo acesso indevido.
- Após logout, o usuário só pode acessar o menu novamente fazendo login com email e senha.

---

## Tecnologias Utilizadas

- HTML5, CSS3 e JavaScript puro (ES6+)
- APIs externas:
  - [ViaCEP](https://viacep.com.br) para consulta de endereço via CEP
  - [Unsplash API](https://unsplash.com/developers) para fotos aleatórias de perfil
- Armazenamento local via LocalStorage para dados de voluntários e administradores
- Controle simples de sessão via sessionStorage/localStorage

---

## Como Usar

1. **Cadastro do Administrador**  
   Acesse a página de cadastro do administrador (`cadastroAdm.html`), preencha nome, email e senha e registre-se.

2. **Login**  
   Após o cadastro, faça login com seu email e senha na página de login (`login.html`).

3. **Menu Principal**  
   No menu, escolha entre cadastrar voluntários ou visualizar a lista de voluntários.

4. **Cadastro de Voluntários**  
   Preencha os dados, informe o CEP e aguarde o preenchimento automático do endereço. Envie o formulário para salvar.

5. **Lista de Voluntários**  
   Visualize os voluntários cadastrados, filtre pelo nome, exclua voluntários individualmente ou limpe toda a lista.

---

## Estrutura do Código

- `cadastroAdm.html` / `login.html` — páginas para cadastro e login de administradores
- `menu.html` — página principal após login com menu de navegação
- `cadastroVoluntarios.html` — formulário para cadastro dos voluntários com integração ViaCEP
- `listarVoluntarios.html` — página que lista os voluntários cadastrados com filtro e exclusão
- `menu.js` — lógica para controle de sessão, redirecionamento por inatividade
- Outros scripts JS para manipulação do formulário e armazenamento de dados

---

## Observações

- As fotos dos voluntários são buscadas aleatoriamente na API do Unsplash com a chave de acesso fornecida.
- O sistema não possui backend e depende totalmente do armazenamento local do navegador (LocalStorage).
- Por questões de segurança, em um ambiente real, a autenticação deve ser implementada em backend e dados sensíveis protegidos.

---
