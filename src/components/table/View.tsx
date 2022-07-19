interface AppHookProps {
  data: {
    currency: string,
    weBuy: string,
    exchange: string,
    weSell: string
  }[]
}

export type Props = {
  data: AppHookProps
}

const TableComponent = ({
  data
}: Props) => (
  <>
    <table>
      <thead>
        <tr>
        {(() => {
            let td = [];
            const header = ['Currency', 'We Buy', 'Exchange Rate', 'We Sell']
            for (let i = 0; i <= header.length; i++) {
              td.push(<th key={i}>{header[i]}</th>);
            }
            return td;
          })()}
        </tr>
      </thead>
      <tbody>
      {
        data.data.map((el, key) => {
          return (
            <tr key={key}>
              <td>{el.currency}</td>
              <td>{el.weBuy}</td>
              <td>{el.exchange}</td>
              <td>{el.weSell}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  </>
)
export default TableComponent
