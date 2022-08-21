import { 
  MOVIE_FETCH,
  MOVIE_DETAIL_FETCH 
} from './types';
export const  movieFetch = (payload: any) => ({
  type: MOVIE_FETCH,
  payload
})
export const  movieDetailFetch = (payload: any) => ({
  type: MOVIE_DETAIL_FETCH,
  payload
})