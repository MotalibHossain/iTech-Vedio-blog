
import { configureStore } from '@reduxjs/toolkit';
import blogPostSlice from '../features/blogPostSlice';

export const store = configureStore({
	reducer:{
		post:blogPostSlice,
	}
})
