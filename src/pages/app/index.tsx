import './index.less';

import logo from '@/asset/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          欢迎来到HuTaoShell,本项目还在初步学习和开发中,若是有兴趣请在
          <a className="App-link" href="https://github.com/EasilyNET" target="_blank">
            GitHub
          </a>
          一起研究.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className="App-link" href="https://www.electronjs.org/zh/docs/latest" target="_blank" rel="noopener noreferrer">
          Learn Electron
        </a>
        <a className="App-link" href="https://www.electronforge.io/" target="_blank" rel="noopener noreferrer">
          Learn Electron Forge
        </a>
        <p>
          我们也用到了
          <a className="App-link" href="https://webpack.docschina.org/concepts" target="_blank">
            WebPack 5
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
