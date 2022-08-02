import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

import Home from '../home'
import NotFound from '../notFound'

function RouteView() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default RouteView
