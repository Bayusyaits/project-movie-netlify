import './App.css'
import TableComponent from './components/table/View'
import FooterComponent from './components/layout/Footer'
import useApp from './hooks/appHook'
const App = () => {
  const data = useApp({
    currency: 'CAD',
    weBuy: '4',
    exchange: '5',
    weSell: '6'
  })
  return (
    <div className="App">
      <TableComponent data={data} />
      <FooterComponent />
    </div>
  )
}
export default App
