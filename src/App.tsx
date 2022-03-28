import LayoutIndex from './pages/layout'
import { LocaleProvider } from '@douyinfe/semi-ui'
import {IntlProvider } from 'react-intl'
import {localeConfig} from './locales'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {RenderRouter} from './router'
import './styles/common.scss'

const locale = 'zh_CN'

function App() {
  return (
    <div id="app">
      <LocaleProvider>
        <IntlProvider locale={locale.split('_')[0]} messages={localeConfig[locale]}>
          <BrowserRouter>
            <RenderRouter></RenderRouter>
          </BrowserRouter>
        </IntlProvider>
      </LocaleProvider>
    </div>
  );
}

export default App;
