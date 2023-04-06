import { MenuItem, MenuItemConstructorOptions, app } from 'electron';

export const menu: Array<MenuItemConstructorOptions | MenuItem> = [
  {
    label: '会话',
    submenu: [
      {
        label: '新建会话'
      },
      {
        label: '退出',
        accelerator: 'CmdOrCtrl+Q',
        click: () => app.quit()
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '复制'
      },
      {
        label: '粘贴'
      }
    ]
  },
  {
    label: '搜索',
    submenu: [
      {
        label: '查找'
      },
      {
        label: '在线查找',
        submenu: [
          {
            label: 'Bing',
            toolTip: '使用Bing查找'
          }
        ]
      }
    ]
  },
  {
    label: '工具',
    submenu: [
      {
        label: '同步输入'
      },
      {
        label: '隧道'
      }
    ]
  },
  {
    label: '帮助',
    submenu: [
      {
        label: '报告问题',
        type: 'normal'
      },
      {
        label: '检查更新...',
        type: 'normal'
      },
      {
        type: 'separator'
      },
      {
        label: '关于',
        type: 'normal'
      }
    ]
  }
];
