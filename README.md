````md
# FeedbackHub - Painel Web | Leve Saúde 💬🧑‍⚕️
````
## Descrição do Projeto

FeedbackHub é um painel web desenvolvido para a administração e visualização de feedbacks enviados pelos usuários do aplicativo mobile da Leve Saúde.  
O sistema está disponível em: https://test-web-leve-saude-three.vercel.app

## Tecnologias Utilizadas

- React  
- Vite  
- TypeScript  
- Tailwind CSS  
- Flowbite  
- Firebase Auth & Firestore  
- React Router DOM  
- React Icons  

## Estrutura do Projeto

- `src/assets/`: Logos e ícones  
- `src/pages/`: Telas (Login, Dashboard)  
- `src/services/`: Configuração do Firebase (Auth + Firestore)  
- `src/App.tsx`: Definição de rotas protegidas  
- `src/main.tsx`: Ponto de entrada da aplicação  
- `src/index.css`: Estilos globais com Tailwind CSS  

## Resultados e Insights

Durante o desenvolvimento, foram aplicadas boas práticas de componentização e responsividade, garantindo:
- Autenticação segura via Firebase  
- Listagem e filtragem eficiente de feedbacks  
- Interface limpa e intuitiva com Tailwind CSS e Flowbite  

## Contribuição

Contribuições são bem-vindas! Para colaborar:
1. Faça um fork do projeto  
2. Crie uma branch: `git checkout -b feature/nova-feature`  
3. Faça suas alterações e commit: `git commit -m "Descrição da feature"`  
4. Envie para o repositório remoto: `git push origin feature/nova-feature`  
5. Abra um Pull Request  

## Autor

Maurício Souza  
- GitHub: https://github.com/mauriciosouza-dev  
- Site: https://jmscode.com.br  

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).  

## Instalação e Execução

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/seu-usuario/test-web-leve-saude.git
   cd test-web-leve-saude


2. **Instale as dependências**

   ```bash
   npm install
   ```
3. **Configure o Firebase**
   Crie `src/services/firebase.ts` com suas credenciais Firebase.
4. **Inicie em modo de desenvolvimento**

   ```bash
   npm run dev
   ```
5. **Build para produção**

   ```bash
   npm run build
   ```

