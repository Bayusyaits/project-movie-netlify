import React, { useCallback } from "react";
import { 
  shallowEqual, 
  useDispatch, 
  useSelector 
} from "react-redux";
import { 
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";
import { movieFetch } from "../../redux/movies/actions";
import { selectMovieData } from "../../routes/movie/movieSelector";
const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const search: string | null = query.get('search')
  const movieState = useSelector(selectMovieData, shallowEqual);
  const handleSearch = useCallback((e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const obj = {
      uri: '',
      params: '',
      query: {
          s: formData.get('search'),
          apiKey: import.meta.env.VITE_APP_API_KEY,
          r:'json',
          ...movieState.query,
      }
    };
    const pathname: string = '/'
    navigate({
      pathname,
      search: `?search=${formData.get('search')}`,
    }, { replace: true });
    dispatch(movieFetch(obj));
  }, [])
  return (
  <nav className="navbar navbar-light bg-danger">
    <Link to="/" className="navbar-brand font-weight-bold h4 m-0">FinProH8</Link>
    <form onSubmit={handleSearch} className="form-inline">
      <input 
        className="form-control" 
        type="search" 
        name="search"
        id="search"
        defaultValue={search || ''}
        placeholder="Search" 
        aria-label="Search"/>
      <button 
        className="btn btn-dark my-2 my-sm-0" 
        type="submit">Search</button>
    </form>
  </nav>
)}
export default HeaderComponent
