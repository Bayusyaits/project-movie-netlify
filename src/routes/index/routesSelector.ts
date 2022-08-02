import { AppState } from 'redux/configureStore'

export const selectRoutesData = ({ auth }: AppState) => ({
  profile: auth.profile
})
