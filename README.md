```md
![Leve Saúde Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Health_Mark_Logo.svg/2048px-Health_Mark_Logo.svg.png){width=120px align="center"}
<img width="165" height="87" alt="34ce9776-eb58-42e5-90d5-d3079d8b7dbc" src="https://github.com/user-attachments/assets/c452a7c1-242c-4bd2-a263-90dd27f68bd5" />

# FeedbackHub - Painel Web | Leve Saúde 💬🧑‍⚕️

**Sistema web para administração de feedbacks enviados por usuários do app mobile da Leve Saúde.**

**Desenvolvido com:** React · TypeScript · Vite · Firebase

---

## 🔗 Link do Deploy

[🔗 Acessar Deploy Web](https://test-web-leve-saude-three.vercel.app)

---

## ✨ Funcionalidades

- 🔐 **Autenticação Firebase** (email e senha)
- 📋 **Dashboard de feedbacks**:
  - Nome do usuário
  - Nota (1 a 5 estrelas)
  - Comentário
  - Data e hora de envio
- 🔎 **Busca** por nome ou comentário
- 🔄 **Ordenação** por data ou nota
- 🎨 **Estilização** com Tailwind CSS + Flowbite
- 🛡️ **Rotas protegidas** para usuários autenticados

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta              | Descrição                          |
|:-----------------------:|:----------------------------------:|
| React + Vite            | Framework SPA moderno             |
| TypeScript              | Tipagem estática no JavaScript     |
| Firebase (Auth + Firestore) | Autenticação e Banco NoSQL     |
| Tailwind CSS + Flowbite | Estilização responsiva             |
| React Router DOM        | Roteamento de páginas              |
| React Icons             | Biblioteca de ícones               |

---

## 📁 Estrutura de Diretórios

```

src/
├─ assets/      # Logos e ícones
├─ pages/       # Telas: Login e Dashboard
├─ services/    # Configuração Firebase
├─ App.tsx      # Definição de rotas
├─ main.tsx     # Ponto de entrada
└─ index.css    # Estilos globais Tailwind

````

---

## ▶️ Como Rodar Localmente

1. **Clone** o repositório

   ```bash
git clone https://github.com/seu-usuario/test-web-leve-saude.git
cd test-web-leve-saude
````

2. **Instale** as dependências

   ```bash
   ```

npm install

````

3. **Configure** o Firebase

   Crie `src/services/firebase.ts` com suas credenciais:

   ```ts
export const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID",
};
````

4. **Inicie** o projeto

   ```bash
   ```

npm run dev

````

---

## 📦 Build para Produção

```bash
npm run build
````

---

## ✅ Requisitos Atendidos

* [x] Autenticação Firebase
* [x] Dashboard com listagem, busca e filtros
* [x] Ordenação por data ou nota
* [x] Estilização com Tailwind CSS + Flowbite
* [x] Deploy público com commits organizados

---

## 👨‍💻 Desenvolvedor

**Maurício Souza**
GitHub: [https://github.com/mauriciosouza-dev](https://github.com/mauriciosouza-dev)
Site: [https://jmscode.com.br](https://jmscode.com.br)

```
```
