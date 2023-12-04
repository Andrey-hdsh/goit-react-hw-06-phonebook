import { SectionFormContacts } from './Contacts/Contact';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SectionFormContacts />
      </PersistGate>
    </Provider>
  );
};
