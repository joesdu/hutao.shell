import type { ForgeConfig } from '@electron-forge/shared-types';
import MakerDeb from '@electron-forge/maker-deb';
import MakerRpm from '@electron-forge/maker-rpm';
import MakerSquirrel from '@electron-forge/maker-squirrel';
import MakerWix from '@electron-forge/maker-wix';
import MakerZIP from '@electron-forge/maker-zip';

export const makers: ForgeConfig['makers'] = [
  new MakerSquirrel({
    setupIcon: './public/images/icon.ico'
  }),
  new MakerWix({
    // https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/70feba9f-294e-491e-b6eb-56532684c37f?redirectedfrom=MSDN
    language: 0x0804,
    manufacturer: 'EasilyNET'
  }),
  new MakerZIP({}, ['darwin']),
  new MakerRpm({
    options: {
      icon: './public/images/icon.png'
    }
  }),
  new MakerDeb({
    options: {
      icon: './public/images/icon.png'
    }
  })
];
