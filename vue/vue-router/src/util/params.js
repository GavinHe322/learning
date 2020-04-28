import { warn } from './warn'
import Regexp from 'path-to-regexp'

const regexpCompileCache: {
  [key: string]: Function
} = Object.create(null)

export function fillParams (
  path: string,
  params: ?Object,
  routeMsg: string
): string {
  params = params || {}

  try {
    const filler = 
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = Regexp.compile(path))

      if (typeof params.pathMatch === 'string') params[0] = params.pathMatch
      return filler(params, { pretty: true})
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(typeof params.pathMatch === 'string', `missing param for ${routeMsg}: ${e.message}`)
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0]
  }
}