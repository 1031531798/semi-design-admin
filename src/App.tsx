import { LocaleProvider } from "@douyinfe/semi-ui";
import { IntlProvider } from "react-intl";
import { localeConfig } from "./locales";
import { BrowserRouter } from "react-router-dom";
import { RenderRouter } from "./router";
import "./styles/tailwind.css";
import "./styles/common.scss";
import useStore from "src/store";
import zh_CN from "@douyinfe/semi-ui/lib/es/locale/source/zh_CN";
import en_GB from "@douyinfe/semi-ui/lib/es/locale/source/en_GB";
import "animate.css";

function App() {
  const locale: string = useStore((state) => state.localeMode);
  const localeStr =
    locale === "zh_CN" ? localeConfig.zh_CN : localeConfig.en_GB;
  return (
    <div id="app">
      <LocaleProvider locale={locale === "zh_CN" ? zh_CN : en_GB}>
        <IntlProvider locale={locale.split("_")[0]} messages={localeStr}>
          <BrowserRouter>
            <RenderRouter></RenderRouter>
          </BrowserRouter>
        </IntlProvider>
      </LocaleProvider>
    </div>
  );
}

export default App;
