import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import vedioFetchSlice from '../features/Videos/VideoSlice'
import TagsSlice from '../features/Tags/TagsSlice';
import relatedVedioSlice from '../features/relatedVedios/relatedVedioSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    vedios:vedioFetchSlice,
    tags:TagsSlice,
    relatedTags:relatedVedioSlice
  },
});
