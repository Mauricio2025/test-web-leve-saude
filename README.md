```md
# FeedbackHub - Painel Web | Leve Saúde 💬🧑‍⚕️

Aplicação web desenvolvida com **React + TypeScript + Vite + Firebase**, para administração e visualização de feedbacks enviados por usuários através do aplicativo mobile da Leve Saúde.

## 🔗 Link do Deploy

> ✅ Disponível em: https://test-web-leve-saude-three.vercel.app

---

## ✨ Funcionalidades

- 🔐 **Autenticação Firebase** (email e senha)
- 📋 **Dashboard de feedbacks** com:
  - Nome do usuário
  - Nota (1 a 5 estrelas)
  - Comentário
  - Data e hora de envio
- 🔎 Filtro de **busca por nome ou comentário**
- 🔄 Ordenação por **data** ou **nota**
- 🎨 **Estilização com Tailwind CSS + Flowbite**
- 🧭 Navegação com **rotas protegidas**

---

## 🛠️ Tecnologias utilizadas

- [React + Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Firebase Auth & Firestore](https://firebase.google.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons)

---

## 📁 Estrutura de diretórios

```

src/
├── assets/             # Imagens e ícones
├── pages/              # Telas (Login, Dashboard)
├── services/           # Integração com Firebase
├── App.tsx             # Rotas protegidas
├── main.tsx            # Entrada da aplicação
└── index.css           # Estilos globais

````

---

## ▶️ Como rodar o projeto localmente

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/test-web-leve-saude.git
cd test-web-leve-saude
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Firebase

Crie um arquivo `src/services/firebase.ts` com sua configuração do Firebase (Auth + Firestore).

### 4. Rode o projeto

```bash
npm run dev
```

---

## 📦 Build para produção

```bash
npm run build
```

---

## ✅ Requisitos atendidos (conforme desafio)

* [x] Autenticação Firebase
* [x] Dashboard com listagem de feedbacks
* [x] Busca e filtros
* [x] Estilização com Tailwind CSS + Flowbite
* [x] Deploy com histórico de commits limpo e organizado

---

## 👨‍💻 Desenvolvido por

**Maurício Souza**
[https://github.com/mauriciosouza-dev](https://github.com/mauriciosouza-dev)
[https://jmscode.com.br](https://jmscode.com.br)

```

Se você quiser, posso incluir automaticamente o link real do deploy assim que estiver pronto. Deseja isso?
```
