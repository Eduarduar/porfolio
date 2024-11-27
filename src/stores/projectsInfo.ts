interface Tech {
  cdn: string
  name: string
}

interface ProjectInfo {
  name: string
  desc: string
  repo?: string
  live?: string
  image?: string
  techs?: Tech[]
  pined: boolean
}

export const projectsInfo: ProjectInfo[] = [
  {
    name: 'SummerLearn',
    desc: 'A platform for managing educational programs and resources to support low-income communities.',
    repo: 'https://github.com/cristaalm/frontend-summerlearn',
    live: 'http://summerlearn.org/',
    image: '/projects/SummerLearn.webp',
    techs: [
      { name: 'typescript', cdn: 'https://icons.ly/typescript?viewbox=auto&size=20' },
      { name: 'javascript', cdn: 'https://icons.ly/javascript?viewbox=auto&size=20' },
      { name: 'vue.js', cdn: 'https://icons.ly/vuedotjs?viewbox=auto&size=20' },
      { name: 'jwt', cdn: 'https://icons.ly/jsonwebtokens/gray?viewbox=auto&size=20' },
      { name: 'node.js', cdn: 'https://icons.ly/nodedotjs?viewbox=auto&size=20' },
      { name: 'tailwindcss', cdn: 'https://icons.ly/tailwindcss?viewbox=auto&size=20' },
      { name: 'vite', cdn: 'https://icons.ly/vite?viewbox=auto&size=20' }
    ],
    pined: true
  },
  {
    name: 'SummerLearn [Backend]',
    desc: 'API Custom for SummerLearn project.',
    repo: 'https://github.com/cristaalm/backend-summerlearn',
    techs: [
      { name: 'Django', cdn: 'https://icons.ly/django/green?viewbox=auto&size=20' },
      { name: 'Python', cdn: 'https://icons.ly/python?viewbox=auto&size=20' },
      { name: 'JWT', cdn: 'https://icons.ly/jsonwebtokens/gray?viewbox=auto&size=20' },
      { name: 'PostgreSQL', cdn: 'https://icons.ly/postgresql?viewbox=auto&size=20' }
    ],
    pined: false
  },
  {
    name: 'Lights-Out',
    desc: 'A game about light care and responsible consumption.',
    repo: 'https://github.com/Eduarduar/LightsOut',
    image: '/projects/LightsOut.webp',
    techs: [{ name: 'python', cdn: 'https://icons.ly/python?viewbox=auto&size=20' }],
    pined: true
  },
  {
    name: 'Deep Ocean',
    desc: 'A web blog about news related to the ocean and its creatures.',
    repo: 'https://github.com/Eduarduar/blogMarino',
    image: '/projects/DeepOcean.webp',
    techs: [
      { name: 'php', cdn: 'https://icons.ly/php?viewbox=auto&size=20' },
      { name: 'mysql', cdn: 'https://icons.ly/mysql?viewbox=auto&size=20' },
      { name: 'javascript', cdn: 'https://icons.ly/javascript?viewbox=auto&size=20' },
      { name: 'jquery', cdn: 'https://icons.ly/jquery?viewbox=auto&size=20' },
      { name: 'tailwindcss', cdn: 'https://icons.ly/tailwindcss?viewbox=auto&size=20' },
      { name: 'html5', cdn: 'https://icons.ly/html5?viewbox=auto&size=20' }
    ],
    pined: true
  },
  {
    name: 'CETIs 84 credentials',
    desc: 'A web app for managing credentials of the students of the CETIs 84.',
    repo: 'https://github.com/Eduarduar/credenciales',
    image: '/projects/Credenciales.webp',
    techs: [
      { name: 'php', cdn: 'https://icons.ly/php?viewbox=auto&size=20' },
      { name: 'mysql', cdn: 'https://icons.ly/mysql?viewbox=auto&size=20' },
      { name: 'javascript', cdn: 'https://icons.ly/javascript?viewbox=auto&size=20' },
      { name: 'jquery', cdn: 'https://icons.ly/jquery?viewbox=auto&size=20' },
      { name: 'html5', cdn: 'https://icons.ly/html5?viewbox=auto&size=20' },
      { name: 'css3', cdn: 'https://icons.ly/css3?viewbox=auto&size=20' }
    ],
    pined: false
  },
  {
    name: 'This portfolio',
    desc: 'A portfolio for showing my projects and information.',
    repo: 'https://github.com/Eduarduar/portfolio',
    techs: [
      { name: 'typescript', cdn: 'https://icons.ly/typescript?viewbox=auto&size=20' },
      { name: 'react', cdn: 'https://icons.ly/react?viewbox=auto&size=20' },
      { name: 'tailwindcss', cdn: 'https://icons.ly/tailwindcss?viewbox=auto&size=20' },
      { name: 'vite', cdn: 'https://icons.ly/vite?viewbox=auto&size=20' },
      { name: 'node.js', cdn: 'https://icons.ly/nodedotjs?viewbox=auto&size=20' }
    ],
    pined: false
  }
]
