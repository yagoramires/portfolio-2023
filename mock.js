export const projects = [
  {
    id: 1,
    url: 'https://github.com/yagoramires/order-simulator-react-ts',
    name: 'Gerador de pedidos D2B',
    thumb: '/thumbs/salesplatform.png',
    demo: 'https://github.com/yagoramires/order-simulator-react-ts/raw/master/src/assets/readme.gif',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    features: [
      'Login e Cadastro de Clientes/Admins',
      'Admins podem criar, editar e remover indústrias, produtos e descontos',
      'Admins podem visualizar e remover pedidos',
      'Clientes podem criar e visualizar pedidos',
      'Preços são baseados no desconto de cada cliente/produto',
      'Todos os usuários podem editar seus perfis',
    ],
    description:
      'Este aplicativo foi criado para facilitar a criação de pedidos, com ele os clientes podem gerar novos pedidos e os administradores tem controle total sobre os mesmos.',
  },
  {
    id: 2,
    name: 'Video Platform',
    url: 'https://github.com/yagoramires/fabrika-devs',
    thumb: '/thumbs/videoplatform.PNG',
    demo: 'https://github.com/yagoramires/fabrika-devs/raw/main/src/assets/user.gif',
    technologies: ['React', 'JavaScript', 'Tailwind', 'Firebase'],
    features: [
      'Login e Cadastro de Usuários',
      'Admins podem adicionar, editar e remover videos e categorias',
      'Admins podem gerenciar os usuários',
      'Usuários visualizar as aulas gravadas',
      'Usuários baixar o material disponibilizado',
      'Todos os usuários podem editar seus perfis',
    ],
    description:
      'Este aplicativo oferece uma plataforma de vídeos para um curso de programação, nela os alunos podem assistir os conteúdos gravados e baixar o material disponibilizado das aulas. Os administradores possuem um dashboard no qual podem adicionar vídeos, criar categorias e gerenciar os usuários. ',
  },
  {
    id: 3,
    name: 'Movie Reviews',
    url: 'https://github.com/yagoramires/movie-reviews-project',
    thumb: '/thumbs/moviesreviews.png',
    demo: 'https://github.com/yagoramires/movie-reviews-project/raw/master/src/assets/readme.gif',
    technologies: ['React', 'JavaScript', 'Tailwind', 'Firebase'],
    features: [
      'Login e Cadastro de Usuários',
      'Usuários podem adicionar filmes que assistiram recentemente',
      'Usuários podem criar e deletar comentários sobre os filmes adicionados',
      'Usuários podem favoritar os filmes que mais gostam',
      'Usuários podem editar seus perfis',
    ],
    description:
      'Este aplicativo foi criado com intuito que o usuário possa compartilhar os filmes que assistiu recentemente e os outros usuários deixem seus comentários a respeito deles.',
  },
  {
    id: 4,
    name: 'Rick and Morty Universe',
    url: 'https://github.com/yagoramires/rick-n-morty-project',
    thumb: '/thumbs/ricknmorty.PNG',
    demo: 'https://github.com/yagoramires/rick-n-morty-project/raw/master/src/assets/readme.gif',
    technologies: ['React', 'JavaScript', 'CSS', 'Axios'],
    features: [
      'Pesquisa de personagens, locais e episódios',
      'Detalhes de personagens, locais e episódios',
    ],
    description:
      'Esse aplicativo foi criado para demonstrar uma integração completa com uma API em GraphQL, nele o usuário pode visualizar todos os detalhes dos personagens, localizações e episódios da série animada Rick and Morty.',
  },
  {
    id: 5,
    name: 'Food Commerce',
    url: 'https://github.com/yagoramires/kenzie-burger',
    thumb: '/thumbs/foodcommerce.png',
    demo: 'https://github.com/yagoramires/kenzie-burger/raw/master/src/assets/readme.gif',
    technologies: ['React', 'JavaScript', 'Styled-Components', 'Firebase'],
    features: [
      'Adicionar e remover produtos do carrinho',
      'Pesquisar por produtos',
    ],
    description:
      'Este aplicativo foi criado como exercício do curso Kenzie, no qual seu objetivo era simular um app de delivery de comida. O App foi criado todo por mim, sem auxilio de instrutores ou tutoriais.',
  },
  {
    id: 6,
    name: 'Bikes Map',
    url: 'https://github.com/yagoramires/bike-map-react-project',
    thumb: '/thumbs/bikesmap.PNG',
    demo: 'https://github.com/yagoramires/bike-map-react-project/raw/master/src/assets/readme.gif',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Usuário pode filtrar por país',
      'Usuário pode Filtrar por estado',
      'Usuário pode ver as informações de cada estação de bicicletas',
    ],
    description:
      'Este aplicativo foi criado com a intenção de localizar as bicicletas disponiveis nos aplicativos de aluguel, como a Bike do Itau, porém no mundo todo.',
  },
];

export const abilities = [
  {
    id: 1,
    icon: 'react',
    title: 'React',
    description:
      'Tenho experiência em desenvolvimento de aplicativos web usando React, uma biblioteca JavaScript amplamente utilizada para construir interfaces de usuário. Com React, sou capaz de criar componentes reutilizáveis e escaláveis, tornando o processo de desenvolvimento mais eficiente. Além disso, tenho habilidade em integrar o React com outras bibliotecas e ferramentas para criar uma experiência de usuário excepcional.',
  },
  {
    id: 2,
    icon: 'react',
    title: 'React Native Expo',
    description:
      'Também tenho experiência em desenvolvimento de aplicativos mobile usando React Native, um framework para criar aplicativos nativos para iOS e Android com uma única base de código. Com React Native, sou capaz de criar interfaces de usuário ricas e nativas usando JavaScript, o que acelera o processo de desenvolvimento. Além disso, tenho habilidade em trabalhar com recursos nativos, como a câmera e o GPS, para criar experiências de usuário personalizadas.',
  },
  {
    id: 3,
    icon: 'next',
    title: 'Next JS',
    description:
      'Possuo habilidades em Next.js, um framework React que permite a criação de aplicativos web com renderização no lado do servidor. Com o Next.js, sou capaz de construir aplicativos escaláveis e otimizados para a web, com uma arquitetura que permite o carregamento rápido de páginas e uma melhor experiência do usuário. Além disso, tenho habilidade em usar recursos avançados do Next.js, como roteamento dinâmico e geração estática de páginas.',
  },
  {
    id: 4,
    icon: 'html',
    title: 'HTML, CSS & JavaScript',
    description:
      'Tenho habilidades em desenvolvimento web usando HTML, CSS e JavaScript. Com HTML, sou capaz de estruturar e criar conteúdo em páginas web, usando tags semânticas para melhorar a acessibilidade e SEO. Com CSS, sou capaz de estilizar e posicionar elementos na página, tornando-a visualmente atraente e responsiva em diferentes dispositivos. Com JavaScript, sou capaz de adicionar interatividade e dinamismo às páginas, com a criação de funções e eventos para manipulação do DOM e o uso de bibliotecas e frameworks para criar aplicativos mais complexos. Além disso, tenho habilidade em trabalhar com ferramentas e técnicas para otimização de performance e acessibilidade, garantindo uma melhor experiência do usuário.',
  },
  {
    id: 5,
    icon: 'tailwind',
    title: 'CSS Frameworks',
    description:
      'Tenho habilidades em desenvolvimento web usando o Tailwind, um framework CSS que facilita a criação de estilos personalizados em páginas web. Com o Tailwind, sou capaz de criar classes de estilo reutilizáveis e aplicá-las em diferentes elementos HTML, permitindo um processo de desenvolvimento mais rápido e consistente. Além disso, tenho habilidade em usar as ferramentas do Tailwind para personalizar o estilo de acordo com as necessidades do projeto, como cores, tamanhos e espaçamentos. Também tenho experiência em desenvolvimento web usando Styled Components, uma biblioteca JavaScript para criar estilos em componentes React. Com o Styled Components, sou capaz de criar estilos encapsulados e reutilizáveis que são aplicados dinamicamente aos componentes React, tornando o código mais modular e fácil de manter. Além disso, tenho habilidade em usar recursos avançados do Styled Components, como temas e props, para criar estilos personalizados e responsivos para diferentes dispositivos.',
  },
  {
    id: 6,
    icon: 'axios',
    title: 'API Rest',
    description:
      'Tenho habilidades em consumir APIs de serviços web, permitindo a integração de dados e funcionalidades de outros aplicativos em projetos que estou trabalhando. Sou capaz de usar bibliotecas e ferramentas para consumir APIs RESTful, como axios e fetch, e integrá-las em aplicativos web ou móveis usando React e React Native. Além disso, tenho habilidade em trabalhar com documentação de APIs para entender como fazer solicitações e receber dados em formato JSON.',
  },
];
export const education = [
  {
    id: 1,
    name: 'Formação em Programação',
    label: 'Kenzie Academy Brasil',
    date: '2023',
    description:
      ' HTML, CSS, JavaScript, TypeScript, React, Redux, GitHub. Curso focado em desenvolvimento fullstack, porém só realizei a parte de front-end. ',
  },
  {
    id: 2,
    name: 'Next.js e React',
    label: 'Udemy - Cod3r Cursos Online',
    date: '2022',
    description: 'Curso focado em Next JS. Carga horária 28h. ',
  },
  {
    id: 3,
    name: 'React do Zero a Maestria',
    label: 'Udemy - Matheus Battisti ',
    date: '2022',
    description:
      'Curso focado em react para aprofundar meus conhecimentos e conhecer novas funcionalidades. Carga horária 28h.',
  },
  {
    id: 4,
    name: 'HTML, CSS, JavaScript, GitHub, React',
    label: 'Frontbase - Gabriel Salvador',
    date: '2022',

    description:
      'Bootcamp de desenvolvimento para aprimorar e solidificar meus conhecimentos no básico do front-end. Carga horária de 32h.',
  },
  {
    id: 5,
    name: 'JavaScript e TypeScript do básico ao avançado',
    label: 'Udemy - Luiz Otávio Miranda',
    date: '2022',

    description:
      'Curso para aprimorar meus conhecimentos em JavaScript. Carga horária 44h.',
  },

  {
    id: 6,
    name: 'Discover',
    label: 'RocketSeat',
    date: '2021',
    description:
      'Curso de introdução ao desenvolvimento web, introduzindo HTML, CSS e Javascript. Com carga horaria de 50h.',
  },
  {
    id: 7,
    name: 'Ciências Contábeis',
    label: 'Universidade do Estado do Rio de Janeiro - UERJ',
    date: '2015-2021',
    description:
      'Sou formado em contabilidade, porém apaixonado por programação.',
  },
];

export const experience = [
  {
    id: 1,
    name: 'D2B Representações',
    label: 'Assistente administrativo de TI',
    date: 'Fev 2021 - Atualmente',
    description:
      'Atuando na área de TI, sou responsável por desenvolver soluções relacionadas a automações de processos e também manutenção dessas soluções utilizando Python. Também faço a manutenção e automação de planillhas utilizando VBA. Atualmente estou desenvolvendo um projeto como desenvolvedor para a a empresa, no qual consiste em uma plataforma de  pedidos online, utilizando React e Firebase.',
  },
  {
    id: 2,
    name: 'DATAPREV',
    label: 'Estagiário',
    date: 'Jan 2019 - Jun 2021',
    description:
      'Atuando na área contábil, desenvolvi soluções de automação por meio de planilhas para suportar às análises das contas contábeis. Efetuei lançamentos contábeis, realizei a conciliação e análise de contas patrimoniais, como por exemplo: retenção de ISS e INSS na fonte de fornecedores, ISS sobre o faturamento, depósitos judiciais a restituir e aluguéis a pagar. Além disso, fui usuário dos sistemas ERP Protheus e FLUIG (TOTVs).',
  },
];
