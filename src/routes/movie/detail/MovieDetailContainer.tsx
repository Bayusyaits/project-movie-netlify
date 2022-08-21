import React, { useEffect, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import MovieDetailView from "./MovieDetailView";
import { movieDetailFetch, movieFetch } from "../../../redux/movies/actions";
import { selectMovieDetailData } from "./movieDetailSelector";

function MovieDetailContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let {id} = useParams();
  const movieDetailState = useSelector(selectMovieDetailData, shallowEqual);
  useEffect(() => {
    const obj = {
      uri: '',
      params: '',
      query: {
          apiKey: import.meta.env.VITE_APP_API_KEY,
          r:'json',
          ...movieDetailState.query
      }
    };
    dispatch(movieDetailFetch({...obj, query:{
      ...obj.query,
      i: id
    }}));
    dispatch(movieFetch({...obj, query:{
      ...obj.query,
      s: 'man',
      limit: 4
    }}));
    //
  }, []);
  const handleClick = useCallback((id: string) => {
    const obj = {
      uri: '',
      params: '',
      query: {
          i: id,
          apiKey: import.meta.env.VITE_APP_API_KEY,
          r:'json',
          ...movieDetailState.query
      }
    };
    dispatch(movieDetailFetch(obj));
    navigate(`/${id}`, { replace: true });
  }, [])
  return (
    <MovieDetailView 
      {...movieDetailState}
      handleClick={handleClick}
    />
  );
}

export default MovieDetailContainer;
