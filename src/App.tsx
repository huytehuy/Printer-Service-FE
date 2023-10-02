// import LanguageProvider from 'mf-share/src/components/localization';
// import { useSearchParams } from 'react-router-dom';
import ContextMonitor from './Context/ContextMonitor';
// import ContextChangeCols from './Context/SettingChangeCols';
// import { monitorKeys, monitorQueries } from './features/monitor';
// import i18n from './localization/i18n';
import { routes } from './routes';
// import ContextHubs from './Context/ContextHubs';

function App() {
  // const [searchParams] = useSearchParams();
  // const language = searchParams.get('lng') || 'vi';

  // const options = {
  //   queryKey: monitorKeys.listLanguage('648aadc8ad0d6607f685ded8'),
  //   queryFn: monitorQueries.getLanguageQueryFn,
  // };

  return (
      <ContextMonitor>
          {/* <LanguageProvider
            i18n={i18n}
            optionsLoad={options}
            language={language}
          > */}
            {routes}
          {/* </LanguageProvider> */}
      </ContextMonitor>
  );
}

export default App;
