import React, { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { 
  useNavigate,
  useLocation
} from "react-router-dom";

import MovieView from "./MovieView";
import { movieFetch } from "../../redux/movies/actions";
import { selectMovieData } from "./movieSelector";

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function MovieContainer() {
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const movieState = useSelector(selectMovieData, shallowEqual);
  useEffect(() => {
    const obj = {
        uri: '',
        params: '',
        query: {
            s: query.get('search') || 'man',
            apiKey: import.meta.env.VITE_APP_API_KEY,
            r:'json',
            ...movieState.query
        }
    };
    dispatch(movieFetch(obj));
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
            ...movieState.query
        }
      };
      dispatch(movieFetch(obj));
      navigate(`/${id}`, { replace: true });
    }, [])
    return (
        <MovieView 
          {...movieState}
          handleClick={handleClick}
        />
    );
}

export default MovieContainer;
