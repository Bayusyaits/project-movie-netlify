import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Movie from '../movie'
import MovieDetail from '../movie/detail'
import NotFound from '../notFound'

function RouteView() {
  return (
    <Suspense>
      <Routes>
        <Route path="/:id" element={<MovieDetail />} />
        <Route path="/" element={<Movie />} />
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default RouteView
