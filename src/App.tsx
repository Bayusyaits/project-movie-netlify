import RoutesView from './routes/index'
import Header from './components/layout/Header'
function App() {
  return (
    <>
      <Header/>
      <div id="content">
        {/* <Header /> */}
        <div className="container-fluid py-2 section-content">
          <RoutesView />
        </div>
      </div>
    </>
  )
}

export default App
