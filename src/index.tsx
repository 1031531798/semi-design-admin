import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setCache } from './hook/useCache';
import { CacheEnum } from './enum/cache';
import { ColorModeType } from './config/type';

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 设置跟随浏览器主题
const mql: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
matchMode(mql)
function matchMode(e: {matches: boolean, media: string}) {
  const body = document.body;
  const colorMode = e.matches ? ColorModeType.dark : ColorModeType.light
  if (e.matches) {
    if (!body.hasAttribute('theme-mode')) {
      body.setAttribute('theme-mode', 'dark');
    }
  } else {
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    }
  }
  setCache({
    key: CacheEnum.colorMode,
    value: colorMode,
    storage: localStorage
  })
}

mql.addListener(matchMode);
