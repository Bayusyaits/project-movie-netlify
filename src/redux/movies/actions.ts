import {
  Query,
  MovieState
} from './reducer'
import { 
  MOVIE_FETCH,
  MOVIE_FETCH_SUCCESS,
  MOVIE_FETCH_FAILURE,
  MOVIE_DETAIL_FETCH,
  MOVIE_DETAIL_FETCH_SUCCESS,
  MOVIE_DETAIL_FETCH_FAILURE
} from './types';

export const movieFetch = (payload: {
  uri: string
  params: string
  query: Query
}) => ({
  type: MOVIE_FETCH,
  payload
})
export const movieFetchSuccess = (data: MovieState["items"]) => ({
    type: MOVIE_FETCH_SUCCESS,
    data
})
export const movieFetchFailure = () => ({
  type: MOVIE_FETCH_FAILURE,
})
export const movieDetailFetch = (payload: {
  uri: string
  params: string
  query: Query
}) => ({
  type: MOVIE_DETAIL_FETCH,
  payload
})
export const movieDetailFetchSuccess = (data: MovieState["items"]) => ({
    type: MOVIE_DETAIL_FETCH_SUCCESS,
    data
})
export const movieDetailFetchFailure = () => ({
  type: MOVIE_DETAIL_FETCH_FAILURE,
})
