module.exports = {
  buildIdentifier: 'test',
  packagerConfig: {
    asar: true,
    icon: '/path/to/icon'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://url/to/icon.ico',
        setupIcon: '/path/to/icon.ico'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: 'public/assets/logo/icon.png'
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: '/path/to/icon.icns'
      }
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        icon: '/path/to/icon.ico'
      }
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './public/index.html',
              js: './src/index.js',
              name: 'task manager',
            },
          ],
        },
      },
    },
  ],
};
