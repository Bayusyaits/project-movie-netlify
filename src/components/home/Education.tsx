import { useRef } from 'react'

const EducationComponent = ({}) => {
  const education = useRef(null)
  return (<>
    <section ref={education} data-bs-spy="scroll" data-bs-target="#education" data-bs-offset="0" id="education">
      <div className="container">
        <h3 className="display-5">Education</h3>
        <div>
          <div className="pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <h4 className="text-gray-dark">Gunadarma University</h4>
                <p className="text-gray-dark text-uppercase">Bachelor of Technology</p>
              </div>
              <a href="#">Aug 2013 - Nov 2017</a>
            </div>
            <span className="d-block">12.34</span>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
export default EducationComponent
