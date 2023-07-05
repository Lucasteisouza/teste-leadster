# Repositório para teste **Leadster**
## Desenvolvedor Front-end

Esse repositório foi criado como requisito para participar do processo seletivo da empresa Leadster em Julho de 2023.

Foi desenvolvido um projeto utilizando Next.js e desenvolvido utilizando TypeScript.

### Organização
Por se tratar de uma única página, mantive a estrutura padrão do Next, não havendo a necessidade de criação de rotas/subdiretórios de roteamento.
A estrutura da página foi dividade em 6 componentes: Header, Hero, Biblioteca, Card, CTACard e Footer. Sendo todos eles inseridos na pasta components para possivel reutilização eu outra página no futuro.

As imagens, icones e etc foram organizadas na pasta *assets*. E os arquivos de estilização (CSS) na pasta *styles*.

### Explicando decisões
#### Endpoint
Devido a ausência de um endpoint real para o desenvolvimento da página, utilizei um placeholder disponível em https://jsonplaceholder.typicode.com/, foi utilizado o endpoint /posts por ser o que mais se assemelha ao objetivo da página real.
#### Filtros e ordenador
Como desenvolvi a aplicação usando um endpoint mock, a aplicação de filtros na biblioteca de vídeos fica um pouco comprometida, no entando, deixei indicado e comentado no código a ideia da lógica que seria aplicada. Esse trecho encontra-se no componente Biblioteca.

### Rodando o projeto
#### Para rodar o projeto localmente: 
1. crie um clone desse repositório `git clone git@github.com:Lucasteisouza/teste-leadster.git`
2. acesse a pasta do projeto `cd teste-leadster` 
3. instale as dependencia `npm install`
4. inicio o servidor local `npm start`
5. acesse pelo navegador de sua escolha pelo endereço http://localhost:3000

#### Visualizar página diretamente no navegador

Esse projeto também foi deployado pelo Vercel, podendo ser acessado diretamente pelo link: https://teste-leadster-r4suyoo25-lucasteisouza.vercel.app/

Me coloco a disposição para responder quaisquer dúvidas que venham a surgir. Posso ser contatado por:

Email: lucasteisouza@gmail.com

WhatsApp: (31) 97544-1211
