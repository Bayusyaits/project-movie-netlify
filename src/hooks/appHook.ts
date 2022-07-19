import axios from 'axios'
import { useEffect, useState } from 'react';

interface AppHookProps {
  currency: string,
  weBuy: string,
  exchange: string,
  weSell: string
}

export type AppHookReturn = {
  data: string[]
  handleAction?: () => void
}
const useApp = ({ }: AppHookProps) => {
  const [data, setData] = useState<AppHookProps[]>([{
    currency: 'CAD',
    weBuy: '1.3130',
    exchange: '1.250442',
    weSell: '1.1909'
  },
  {
    currency: 'EUR',
    weBuy: '0.9272',
    exchange: '0.883064',
    weSell: '0.841'
  },
  {
    currency: 'IDR',
    weBuy: '15076.6350',
    exchange: '14358.7',
    weSell: '13674.9524'
  }])
type Data = {
  currency: string,
  weBuy: any,
  exchange: any,
  weSell: any
}[]

const getData = () => {
  axios('https://api.currencyfreaks.com/latest?apikey=f850a888c2b14fa78aef56c0bdba3936&symbols=CAD,IDR,EUR,JPY,CHF,GBP')
  .then((res) => {
    const r = res.data
    if (r && r.rates) {
      const o = Object.entries(r.rates)
      const d: Data = []
      for (let i = 0; i <= o.length; i++) {
        if (o[i] && o[i][0]) {
          const n = parseFloat(o[i][1]).toFixed(4)
          const weBuy = (parseFloat(n * (5 / 100)) + parseFloat(n)).toFixed(4)
          const weSell = Math.abs(parseFloat(n) - n * parseFloat((5 / 100))).toFixed(4)
          d.push({
            currency: o[i][0],
            weBuy,
            exchange: n,
            weSell
          })
        }
      }
      setData(d)
    }
  }, (err) => {
    Promise.reject(err)
  }).catch((err) => {
    Promise.reject(err)
  })
}
  useEffect(() => {
    getData()
  }, [])
    const handleInputChange = ({ target }: any) => {
      setData({
        ...data,
        [target.name]: target.value
      });
    };
  
    return { data, handleInputChange }
    
}
export default useApp