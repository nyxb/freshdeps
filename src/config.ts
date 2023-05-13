import deepmerge from 'deepmerge'
import _debug from 'debug'
import { loadConfig } from 'configerium'
import type { CommonOptions } from './types'
import { toArray } from './utils/toArray'

const debug = _debug('fresh:config')

export const LOGLEVELS = ['debug', 'info', 'warn', 'error', 'silent']

function normalizeConfig<T extends CommonOptions>(options: T) {
   options.ignorePaths = toArray(options.ignorePaths)
   options.exclude = toArray(options.exclude)
   options.include = toArray(options.include)

   if (options.silent)
      options.loglevel = 'silent'

   return options
}

export async function resolveConfig<T extends CommonOptions>(options: T): Promise<T> {
   options = normalizeConfig(options)

   const { config: loadedConfig, configFile } = await loadConfig({
      cwd: options.cwd || process.cwd(),
      name: 'fresh',
      defaults: {},
   })

   if (!configFile)
      return options

   debug(`config file found ${configFile}`)
   const configOptions = normalizeConfig(loadedConfig as T)

   return deepmerge(configOptions, options) as T
}
