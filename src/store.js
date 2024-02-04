import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import goodsReducer from './reducers';
import { goodsSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    goods: goodsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(goodsSaga);

export default store;
