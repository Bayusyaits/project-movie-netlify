import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Front
import Movies from "./movies/reducer";
const rootPersistConfig = {
  key: 'bayu-syaits-movie-project',
  storage,
  whitelist: ['Movies']
}
const rootReducer = combineReducers({
  // public
  Movies
});

export default persistReducer(rootPersistConfig, rootReducer);
