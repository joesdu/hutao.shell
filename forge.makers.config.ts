import type { ForgeConfig } from '@electron-forge/shared-types';
import MakerDeb from '@electron-forge/maker-deb';
import MakerSquirrel from '@electron-forge/maker-squirrel';
import MakerZIP from '@electron-forge/maker-zip';

export const makers: ForgeConfig['makers'] = [
  new MakerSquirrel({
    setupIcon: './public/images/icon.ico'
  }),
  new MakerZIP({}, ['darwin']),
  new MakerDeb({
    options: {
      icon: './public/images/icon.png'
    }
  })
];
