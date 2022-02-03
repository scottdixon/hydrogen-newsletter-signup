import {DefaultRoutes} from '@shopify/hydrogen';
import {Suspense} from 'react';

import DefaultSeo from './components/DefaultSeo.server';
import AppClient from './App.client';

export default function App({log, pages, ...serverState}) {
  return (
    <Suspense>
      <AppClient helmetContext={serverState.helmetContext}>
        <DefaultSeo />
        <DefaultRoutes pages={pages} serverState={serverState} log={log} />
      </AppClient>
    </Suspense>
  );
}
