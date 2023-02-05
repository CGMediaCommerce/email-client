module.exports = {
  packagerConfig: {
    icon: './assets/icon'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        title: 'Email Client',
        version: '1.0.0',
        setupExe: 'Setup',
        exe: 'Email Client',
        authors: 'Colin Grahm & Marius May',
        iconUrl: './assets/icon.ico',
        setupIcon: './assets/icon.ico',
      },
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        name: 'Email Client',
        version: '1.0.0',
        exe: 'Email Client',
        icon: './assets/icon.ico',
        language: 1033,
        manufacturer: 'MayCo'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: './assets/icon.icns',
      },
    },
  ],
};
