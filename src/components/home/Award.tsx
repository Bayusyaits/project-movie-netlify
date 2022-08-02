import { useRef } from 'react'

const AwardComponent = ({}) => {
  const award = useRef(null)
  return (<>
    <section ref={award} data-bs-spy="scroll" data-bs-target="#award" data-bs-offset="0" id="award">
    <div className="container">
        <h3 className="display-5">Awards & Certifications</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
            <span className="badge badge-primary badge-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span className="badge badge-primary badge-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span className="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </div>
    </section>
  </>
  )
}
export default AwardComponent
