# Meu Portfólio - Miguel Eduardo

![Portfólio Banner](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37?style=for-the-badge&logo=emailjs&logoColor=white)

> Um portfólio pessoal desenvolvido com React e Tailwind CSS para apresentar meus projetos, habilidades e experiências como desenvolvedor Full Stack.

## 🚀 Demonstração

[![Deploy com Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DoctorSolo/Portfolio)
[![Deploy com Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DoctorSolo/Portfolio)

🔗 **[Ver Demo](https://miguel-eduardo.vercel.app/)**

## ✨ Funcionalidades

- 🎨 **Design Responsivo** - Adaptado para todos os tamanhos de tela
- 🌙 **Modo Escuro** - Tema escuro elegante e profissional
- 📱 **Mobile First** - Otimizado para dispositivos móveis
- 🚀 **Performance** - Carregamento rápido com Vite
- 📧 **Formulário de Contato** - Envio de e-mails via EmailJS
- 🎯 **Scroll Suave** - Navegação fluida entre seções
- ⚡ **Animações** - Efeitos visuais com Tailwind CSS
- 🎨 **Gradientes** - Design moderno com cores personalizadas

## 🛠️ Tecnologias Utilizadas

### Frontend

- [React 19](https://react.dev/) - Biblioteca JavaScript para interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Vite](https://vitejs.dev/) - Build tool e servidor de desenvolvimento
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones

### Integrações

- [EmailJS](https://www.emailjs.com/) - Envio de e-mails sem backend
- [Framer Motion](https://www.framer.com/motion/) (opcional) - Animações avançadas

## 📦 Estrutura do Projeto

```
src/
├── assets/
│   └── Terra5.png          # Imagem de fundo
├── components/
│   ├── Header.jsx          # Navegação
│   ├── Home.jsx            # Página inicial
│   ├── About.jsx           # Sobre mim
│   ├── Skills.jsx          # Habilidades
│   ├── Projects.jsx        # Projetos
│   ├── Certificates.jsx    # Certificados
│   ├── Contact.jsx         # Contato/Formulário
│   └── Footer.jsx          # Rodapé
├── App.jsx                 # Componente principal
├── main.jsx                # Ponto de entrada
├── index.css               # Estilos globais
└── .env                    # Variáveis de ambiente
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/DoctorSolo/Portfolio.git
cd meu-portfolio
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do EmailJS e perfil do GitHub:

```env
#.env

# EmailJS keys
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx

# Github profile
VITE_GITHUB_PROFILE=xxxxxxxxxxxx
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

5. **Abra o navegador**
   Acesse `http://localhost:5173`

### Build para produção

```bash
npm run build
# ou
yarn build
```

## 📧 Configuração do EmailJS

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um Service (Gmail, Outlook, etc.)
3. Crie um Template com as variáveis: `{{name}}`, `{{email}}`, `{{message}}`
4. Copie as chaves:
   - Service ID
   - Template ID
   - Public Key
5. Adicione as chaves no arquivo `.env`

## 🎨 Personalização

### Cores

Edite as cores no `tailwind.config.js` ou diretamente nas classes:

```jsx
// Exemplo: mudar a cor principal
<span className="text-cyan-400"> // Azul claro
<span className="text-emerald-400"> // Verde
<span className="text-rose-400"> // Rosa
```

### Imagem de Fundo

Substitua a imagem em `src/assets/Terra5.png` pela sua.

### Seções

- **Home**: Edite `components/Home.jsx`
- **Sobre**: Edite `components/About.jsx`
- **Habilidades**: Edite `components/Skills.jsx`
- **Projetos**: Edite `components/Projects.jsx`
- **Certificados**: Edite `components/Certificates.jsx`
- **Contato**: Edite `components/Contact.jsx`

## 🌐 Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages

```bash
npm run build
npm run deploy
```

## 📱 Responsividade

| Dispositivo | Breakpoint     | Comportamento          |
| ----------- | -------------- | ---------------------- |
| Mobile      | < 640px        | Layout em coluna única |
| Tablet      | 640px - 1024px | Grids de 2 colunas     |
| Desktop     | > 1024px       | Grids de 3+ colunas    |

## 🤝 Contribuição

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Miguel Eduardo**

- 🌐 [Portfólio](https://github.com/DoctorSolo/Portfolio)
- 📧 [miguel.eduardo.commercial@gmail.com](mailto:miguel.eduardo.commercial@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/migueledu303/)
- 🐙 [GitHub](https://github.com/DoctorSolo)

## 🙏 Agradecimentos

- [React](https://react.dev/) - Framework incrível
- [Tailwind CSS](https://tailwindcss.com/) - Estilização poderosa
- [EmailJS](https://www.emailjs.com/) - Envio de e-mails facilitado
- [Vite](https://vitejs.dev/) - Build tool rápida

## 📜 Creditos

- <img height=30 align=center src="public/racoon.svg" /> Icon created by [juicy_fish](https://www.flaticon.com/br/autores/juicy-fish) available at [Flaticon](https://www.flaticon.com/br/icone-gratis/racoon_1797272?term=racoon&page=1&position=3&origin=search&related_id=1797272)

---

**Feito com muito ☕ por Miguel Eduardo**
