import axios from 'axios'
import { takeEvery, call, put } from "redux-saga/effects"
import {
  Query,
  Items,
  movieFetchSuccess,
  movieFetchFailure,
  movieDetailFetchSuccess,
  movieDetailFetchFailure
} from './reducer'
import {
  MOVIE_FETCH,
  MOVIE_FETCH_FAILURE,
  MOVIE_DETAIL_FETCH,
  MOVIE_DETAIL_FETCH_FAILURE
} from './types'
type Props = Query & any

const generateUrl = (uri: string, query: any) => {
  let url = import.meta.env.VITE_APP_API_HOST
  const esc = encodeURIComponent
  const q = Object.keys(query)
        .map((k) => `${esc(k)}=${esc(query[k])}`)
        .join('&')

    let operator = '?'
    if (uri && uri.indexOf('?') !== -1) {
        operator = '&'
    }
    return `${url}${operator}${q}`
}


const getData = (payload: Props) => {
  const { uri, params, query } = payload
    let url = generateUrl(uri, query)
    const timeout = 60 * 2 * 1000
    const action = () => (new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(
              axios({
                method: 'get',
                url,
                params,
                timeout,
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
              })
              .then((response) => {
                const data: Items[] | [] | {} = response.data?.Search
                return data
              })
              .catch(() => reject)
          ), timeout
      })
  }))
  return action()
}

const getDetail = (payload: Props) => {
  const { uri, params, query } = payload
    let url = generateUrl(uri, query)
    const timeout = 60 * 2 * 1000
    const action = () => (new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(
              axios({
                method: 'get',
                url,
                params,
                timeout,
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
              })
              .then((response) => {
                const data: Items = response.data 
                return data
              })
              .catch(() => reject)
          ), timeout
      })
  }))

  return action()
}

function* movieFetch({ payload }: Props): any {
  try {
    const response = yield call(getData, payload)
    yield put(movieFetchSuccess(response))
  } catch (error) { 
    yield put(movieFetchFailure())
  }
}

function* movieDetailFetch({ payload }: Props): any {
  try {
    const response = yield call(getDetail, payload)
    yield put(movieDetailFetchSuccess(response))
  } catch (error) { 
    yield put(movieDetailFetchFailure())
  }
}
/* eslint-disable */
function* MovieSaga() {
  yield takeEvery(MOVIE_FETCH, movieFetch)
  yield takeEvery(MOVIE_FETCH_FAILURE, movieFetchFailure)
  yield takeEvery(MOVIE_DETAIL_FETCH, movieDetailFetch)
  yield takeEvery(MOVIE_DETAIL_FETCH_FAILURE, movieDetailFetchFailure)
}

export default MovieSaga
