import { useRef } from 'react'

const InterestComponent = ({}) => {
  const interest = useRef(null)
  return (<>
    <section ref={interest} data-bs-spy="scroll" data-bs-target="#interest" data-bs-offset="0" id="interest">
      <div className="container">
        <h3 className="display-5">Interest</h3>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content.<br/>Use it as a starting point to create something more unique.</p>
      </div>
    </section>
  </>
  )
}
export default InterestComponent
