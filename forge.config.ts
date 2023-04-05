import type { ForgeConfig } from '@electron-forge/shared-types';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';
import { mainConfig } from './webpack.main.config';
import { makers } from './forge.makers.config';
import { rendererConfig } from './webpack.renderer.config';

const config: ForgeConfig = {
  packagerConfig: {
    icon: './public/images/icon'
  },
  rebuildConfig: {},
  makers,
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './public/index.html',
            js: './public/renderer.ts',
            name: 'main_window',
            preload: {
              js: './public/preload.ts'
            }
          }
        ]
      }
    })
  ]
};

export default config;
