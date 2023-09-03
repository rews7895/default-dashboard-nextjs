import { navigation } from './navigation'

type Props = {
  pathname: string
}

type Result = {
  depth: number
  splitUrl: Array<string>
}

type BreadCrumbItem = {
  title: string
  href: string
  current: boolean
}

export function getPathnameInfo({ pathname }: Props): Result {
  let result: Result = {
    depth: 0,
    splitUrl: [],
  }

  if (pathname) {
    result.splitUrl = pathname.split('/').filter((element) => element !== '')
    result.depth = result.splitUrl.length
  }

  return result
}

export function getBreadCrumbsInfo({ pathname }: Props): Array<BreadCrumbItem> {
  let result: Array<BreadCrumbItem> = []
  if (pathname) {
    const getPathnameInfoObj = getPathnameInfo({ pathname })
    navigation.map((item) => {
      let current = false
      if (item.mark === getPathnameInfoObj.splitUrl[0]) {
        // 1depth 처리
        if (getPathnameInfoObj.depth === 1) {
          current = true
        }
        result.push({ title: item.title, href: item.href, current: current })

        // 2depth 처리
        if (item.links.length > 0) {
          item.links.map((linkItem) => {
            if (linkItem.mark === getPathnameInfoObj.splitUrl[1]) {
              if (getPathnameInfoObj.depth === 2) {
                current = true
              }
              result.push({
                title: linkItem.name,
                href: item.href,
                current: current,
              })
            }
          })
        }

        // 3depth 처리
        if (getPathnameInfoObj.depth === 3) {
          current = true
          result.push({
            title: getPathnameInfoObj.splitUrl[2],
            href: pathname,
            current: current,
          })
        }
      }
    })
  }

  return result
}
