import { configureStore } from '@reduxjs/toolkit';
import leadersReducer from './leadersSlice';
import ceilingsReducer from './ceilingsSlice';
import descriptionReducer from './descriptionSlice';

export default configureStore({
  reducer: {
    leaders: leadersReducer,
    ceilings: ceilingsReducer,
    description: descriptionReducer,
  },
});
