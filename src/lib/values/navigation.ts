type Item = {
  title: string
  mark: string
  href: string
  links: Array<LinkItem>
}

type LinkItem = {
  name: string
  href: string
  mark: string
}

export const navigation: Array<Item> = [
  {
    title: 'CONTENTS',
    mark: 'contents',
    href: '/contents',
    links: [
      {
        name: '기사 재전송',
        href: '/contents/articles',
        mark: 'articles',
      },
      {
        name: '기사 수정 로그 보기',
        href: '/contents/logs',
        mark: 'logs',
      },
    ],
  },
  {
    title: 'NEWS',
    mark: 'news',
    href: '/news',
    links: [
      { name: '기사 모니터링', href: '/news/articles', mark: 'articles' },
    ],
  },
  {
    title: 'NEWSAPP',
    mark: 'newsapp',
    href: '/newsapp',
    links: [
      {
        name: '기사 모니터링',
        href: '/newsapp/articles',
        mark: 'articles',
      },
    ],
  },
  {
    title: 'H21',
    mark: 'h21',
    href: '/h21',
    links: [{ name: '기사 모니터링', href: '/h21/articles', mark: 'articles' }],
  },
]
