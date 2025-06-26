import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserInfo {
  id: string
  name: string
  email: string
  avatar?: string
}

interface UserState {
  userInfo: UserInfo | null
  isLoggedIn: boolean
  loading: boolean
}

const initialState: UserState = {
  userInfo: null,
  isLoggedIn: false,
  loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload
      state.isLoggedIn = true
    },
    clearUserInfo: (state) => {
      state.userInfo = null
      state.isLoggedIn = false
    },
    updateUserInfo: (state, action: PayloadAction<Partial<UserInfo>>) => {
      if (state.userInfo) {
        state.userInfo = { ...state.userInfo, ...action.payload }
      }
    },
  },
})

export const { setLoading, setUserInfo, clearUserInfo, updateUserInfo } = userSlice.actions

export default userSlice.reducer