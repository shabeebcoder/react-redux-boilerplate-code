import { configureStore } from '@reduxjs/toolkit';
import reducer from './entities';

export default () => {
  return configureStore({
    reducer,
  });
};
