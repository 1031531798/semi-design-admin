import LayoutIndex from './pages/layout'
import { LocaleProvider } from '@douyinfe/semi-ui'
import {IntlProvider } from 'react-intl'
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';
import {localeConfig} from './locales'
import './styles/common.scss'

const locale = 'zh_CN'

function App() {
  return (
    <div id="app">
      <LocaleProvider locale={en_GB}>
        <IntlProvider locale={locale.split('_')[0]} messages={localeConfig[locale]}>
          <LayoutIndex></LayoutIndex>
        </IntlProvider>
      </LocaleProvider>
    </div>
  );
}

export default App;
