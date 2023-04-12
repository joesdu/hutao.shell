import { BrowserWindow, Menu, app } from 'electron';

import icon from './images/icon.png';
import { menu } from './menu';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Disable default menu (https://github.com/electron/electron/issues/35512)
Menu.setApplicationMenu(null);

if (process.platform === 'darwin') {
  menu.unshift({
    label: app.getName(),
    submenu: [
      {
        label: '退出',
        accelerator: 'CmdOrCtrl+Q',
        click: () => app.quit()
      }
    ]
  });
}
const appMenu = Menu.buildFromTemplate(menu);
Menu.setApplicationMenu(appMenu);

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    backgroundColor: '#282c34',
    icon,
    title: 'HuTao',
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    },
    // 是否隐藏默认的标题栏,后期为了好看,需要自己自己写
    frame: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
