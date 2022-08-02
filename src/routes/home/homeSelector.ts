import { AppState } from 'redux/configureStore'

export const selectHomeData = ({ auth }: AppState) => ({
  isAuthenticated: auth.profile.isAuthenticated,
  email: auth.profile.email,
})

export type PropsFromSelector = ReturnType<typeof selectHomeData>
