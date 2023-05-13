import { loadConfig } from 'configerium'

export default async () => {
   const { config } = await loadConfig({
      cwd: process.cwd(),
      name: 'fresh',
      defaults: {
         exclude: [
            'lodash',
         ],
         packageMode: {
            'typescript': 'major',
            'unocss': 'ignore',
            '/vue/': 'latest',
         },
      },
   })

   return config
}
