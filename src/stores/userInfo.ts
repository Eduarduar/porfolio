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
    "I'm a software engineering student with experience in web development.",
    'Passionate about creating interactive and dynamic user experiences.',
    'Skilled in TypeScript, React, and Node.js.',
    'Always eager to learn and take on new challenges.'
  ],
  statusWork: true,
  cv: 'https://google.com',
  image: '/avatar.webp'
}
