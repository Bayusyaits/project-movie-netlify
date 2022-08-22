import {
  Items
} from '../../redux/movies/reducer'
export interface ViewProps {
  handleClick: (id: string) => void
}

type PropsData = {
  isLoading: boolean
  items: Items[]
}

type Props = ViewProps & PropsData

function MovieView({isLoading, items, handleClick}: Props) {
  const notFound = () => {
    return (<><div>Not Found</div></>)
  }
  const getItems = ((data: Items[]) => {
    let a: any = []
    for (let i = 0; i < data.length; i++) {
      const el: Items = data[i]
      a.push(
        <>
          <div 
            key={`${i}-${el.imdbID}`} 
            onClick={() => handleClick(el.imdbID)} 
            className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 cursor-pointer">
              <div className="card border-0 shadow bg-danger thumbnail">
                <div className="container-img image">
                  <img src={el.Poster} className="card-img-top" alt={el.Title}/>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0 text-white">{ el.Title }</h5>
                </div>
              </div>
            </div>
        </>
      )
    }
    return a
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
        <section data-bs-spy="scroll" data-bs-target="#movie" data-bs-offset="0" id="movie">
          <div className="my-4 mb-5 px-md-4 px-sm-4">
            <h5 className={'font-sub_header'}>Show Your Favorite Movies</h5>
          </div>
          <div className="row px-xl-5 px-lg-5 mb-3">
            {
              items && items.length > 0 ? getItems(items) : notFound()
            }
          </div>
        </section>
      </>
    )
  }
}

export default MovieView
