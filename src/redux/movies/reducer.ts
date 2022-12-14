import {
  MOVIE_FETCH,
  MOVIE_FETCH_SUCCESS,
  MOVIE_FETCH_FAILURE,
  MOVIE_DETAIL_FETCH,
  MOVIE_DETAIL_FETCH_SUCCESS,
  MOVIE_DETAIL_FETCH_FAILURE
} from './types'
export interface Query {
  limit: number;
  sortBy: string;
}
export interface Items {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string
  Poster: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Country: string
  Awards: string
  Language: string
  Metascore: string
  imdbRating: string
  BoxOffice: string
  Ratings: {
    Source: string
    Value: string
  }[]
}
export interface Query {
  limit: number;
  sortBy: string;
}
export interface Params {
  uri: string;
  params: string;
}
export interface MovieState {
    isLoading: boolean;
    query: Query;
    items: Items[];
    item: Items | null;
    params: string;
}

const INITIAL_STATE: MovieState = {
    isLoading: false,
    query: {
        limit: 20,
        sortBy: '',
    },
    params: '',
    items: [],
    item: null
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case MOVIE_FETCH: {
      state.isLoading = true
      return {...state};
    }
    case MOVIE_FETCH_SUCCESS: {
      state.isLoading = false
      const { data } = action
      if (data && data.length > 0) {
        state.items = data;
      }
      return {...state};
    }
    case MOVIE_FETCH_FAILURE: {
      state.isLoading = false
      state.items = [];
      return {...state};
    }
    case MOVIE_DETAIL_FETCH: {
      state.isLoading = true
      return {...state};
    }
    case MOVIE_DETAIL_FETCH_SUCCESS: {
      state.isLoading = false
      const { data } = action
      state.item = data;
      return {...state};
    }
    case MOVIE_DETAIL_FETCH_FAILURE: {
      state.isLoading = false
      state.item = null;
      return {...state};
    }
    default:
      return state;
  }
}