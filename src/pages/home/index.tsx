import { useEmotionCss } from '@ant-design/use-emotion-css';

import logo from '@/asset/logo.svg';

export const Home = () => {
  const app = useEmotionCss(({ token }) => {
    return {
      textAlign: 'center'
    };
  });

  const appHeader = useEmotionCss(({ token }) => {
    return {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white'
    };
  });

  const appLogo = useEmotionCss(({ token }) => {
    return {
      height: '40vmin',
      pointerEvents: 'none',
      '@keyframes spin': {
        from: {
          transform: 'rotate(0deg)'
        },
        to: {
          transform: 'rotate(360deg)'
        }
      },
      animationName: 'spin',
      animationDuration: '20s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite'
    };
  });

  const appLink = useEmotionCss(({ token }) => {
    return {
      color: '#61dafb'
    };
  });

  return (
    <div className={app}>
      <header className={appHeader}>
        <img src={logo} className={appLogo} alt="logo" />
        <p>
          欢迎来到HuTaoShell,本项目还在初步学习和开发中,若是有兴趣请在
          <a className={appLink} href="https://github.com/EasilyNET" target="_blank">
            GitHub
          </a>
          一起研究.
        </p>
        <a className={appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className={appLink} href="https://www.electronjs.org/zh/docs/latest" target="_blank" rel="noopener noreferrer">
          Learn Electron
        </a>
        <a className={appLink} href="https://www.electronforge.io/" target="_blank" rel="noopener noreferrer">
          Learn Electron Forge
        </a>
        <a className={appLink} href="https://webpack.docschina.org/concepts" target="_blank">
          Learn WebPack 5
        </a>
      </header>
    </div>
  );
};
