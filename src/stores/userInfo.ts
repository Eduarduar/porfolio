interface UserInfo {
  name: string
  descHero: string[]
  statusWork: boolean
  cv: string
  image: string
}

export const userInfo: UserInfo = {
  name: 'Eduarduar AR',
  descHero: [
    'I am a software engineering student with experience in web development.',
    'Passionate about creating interactive and dynamic user experiences.',
    'Specialized in TypeScript, React, and Vue for modern applications.',
    'Transforming ideas into interactive experiences.',
    'Always eager to learn and take on new challenges.',
    'Building the future, one line of code at a time.',
    'Combining creativity and technology for innovative solutions.',
    'A passion for learning and growth defines my journey.',
    'Every project is an opportunity to overcome new challenges.',
    'Explore my work and discover what we can achieve together.'
  ],
  statusWork: true,
  cv: 'https://google.com',
  image: '/avatar.webp'
}
