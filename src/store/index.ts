import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
// 导入用户相关的reducer
import userReducer from '@/store/slices/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  devTools: import.meta.env.VITE_SHOW_DEVTOOLS === 'true',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch