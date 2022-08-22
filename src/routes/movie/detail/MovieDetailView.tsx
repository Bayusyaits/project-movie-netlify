import {
  Items
} from '../../../redux/movies/reducer'
import { Link } from 'react-router-dom';
export interface ViewProps {
  handleClick: (id: string) => void
}
type PropsData = {
  isLoading: boolean
  item: Items
  items: Items[]
}

type Props = PropsData & ViewProps

function MovieDetailView({isLoading, item, items, handleClick}: Props) {
  const notFound = () => {
    return (<><div>Not Found Bos</div></>)
  }
  const getItems = ((data: Items[]) => {
    let a: any = []
    for (let i = 0; i < 4; i++) {
      const el: Items = data[i]
      a.push(
        <>
          <div 
            key={el.imdbID} 
            onClick={() => handleClick(el.imdbID)} 
            className="col mb-2 cursor-pointer">
            <img src={el.Poster}
              alt={el.Title} className="w-100 rounded-3"/>
          </div>
        </>
      )
    }
    return a
  })
  const getItem = ((el: Items) => {
    return (
      <>
        <div className="rounded-top text-white border-0">
          <div className="d-flex flex-column">
            <img src={el.Poster}
              alt={el.Title} className="border-0 img-fluid img-thumbnail mt-4 mb-2"/>
          </div>
          <div className="ms-3">
            <h5>{ el.Title }</h5>
            <p className="font-normal mt-1 mb-3 text-black">
              { el.Plot }
            </p>
            <table className="table">
              <tbody>
                <tr>
                  <td>Director</td>
                  <td>{el.Director}</td>
                </tr>
                <tr>
                  <td>Writer</td>
                  <td>{el.Writer}</td>
                </tr>
                <tr>
                  <td>Actors</td>
                  <td>{el.Actors}</td>
                </tr>
                <tr>
                  <td>BoxOffice</td>
                  <td>{el.BoxOffice}</td>
                </tr>
                <tr>
                  <td>Metascore</td>
                  <td>{el.Metascore}</td>
                </tr>
                <tr>
                  <td>imdbRating</td>
                  <td>{el.imdbRating}</td>
                </tr>
                <tr>
                  <td>Awards</td>
                  <td>{el.Awards}</td>
                </tr>
                <tr>
                  <td>Ratings</td>
                  <td>
                    <div className="text-black">
                      <div className="d-flex justify-content-start flex-column text-left py-1">
                        {
                          el.Ratings && el.Ratings.length > 0 ? el.Ratings.map((d, key) => (
                            <>
                              <div key={key}>
                                <p className="mb-1">
                                  { d.Source }</p>
                                <p className="small text-muted mb-0">{ d.Value }</p>
                              </div>      
                            </>
                          )) : '-'
                        }
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  })
  if (isLoading) {
    return (<>
      <div className="loading-spinner h-100 py-5 justify-content-center align-items-center d-flex">
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>)
  }
  else {
    return (
      <>
        <section className="h-100 gradient-custom-2">
          <div className="container h-100 mb-3">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-9 col-xl-7">
                <div className="card border-0">
                  {
                    item && item.Title ? getItem(item) : notFound()
                  }
                </div>
                <div className="card-body p-4 text-black">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent photos</p>
                    <Link to="/">Show all</Link>
                  </div>
                  <div className="row g-2">
                    {
                      items && items.length > 0 ? getItems(items) : '-'
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
    )
  }
}

export default MovieDetailView
