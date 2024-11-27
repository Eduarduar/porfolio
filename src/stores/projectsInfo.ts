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
      { name: 'node.js', cdn: 'https://icons.ly/nodedotjs?viewbox=auto&size=20' }
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
    name: 'Light-Out',
    desc: 'Un juego sobre el cuidado de la luz y el consumo responsable.',
    repo: 'https://github.com/Eduarduar/LightsOut',
    image: '/projects/LightsOut.webp',
    techs: [{ name: 'python', cdn: 'https://icons.ly/python?viewbox=auto&size=20' }],
    pined: true
  }
]
