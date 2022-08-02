import { useRef } from 'react'

const ExperienceComponent = ({}) => {
  const experience = useRef(null)
  return (<>
    <section ref={experience} data-bs-spy="scroll" data-bs-target="#experience" data-bs-offset="0" id="experience">
    <div className="container pt-4">
        <h3 className="display-5 mb-4">Experience</h3>
        <div>
          <div className="pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-top w-100">
              <div>
                <div className="my-2">
                  <h5 className="text-gray-dark text-uppercase">Gunadarma University</h5>
                  <p className="text-gray-dark">Bachelor of Technology</p>
                </div>
                <div><p className="mb-0">Responsibility</p></div>
              </div>
              <a href="#" className="mt-2">Aug 2013 - Nov 2017</a>
            </div>
          </div>
          <div className="pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-top w-100">
              <div>
                <div className="my-2">
                  <h5 className="text-gray-dark text-uppercase">Gunadarma University</h5>
                  <p className="text-gray-dark">Bachelor of Technology</p>
                </div>
                <div><p className="mb-0">Responsibility</p></div>
              </div>
              <a href="#" className="mt-2">Aug 2013 - Nov 2017</a>
            </div>
          </div>
          <div className="pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-top w-100">
              <div>
                <div className="my-2">
                  <h5 className="text-gray-dark text-uppercase">Gunadarma University</h5>
                  <p className="text-gray-dark">Bachelor of Technology</p>
                </div>
                <div><p className="mb-0">Responsibility</p></div>
              </div>
              <a href="#" className="mt-2">Aug 2013 - Nov 2017</a>
            </div>
          </div>
          <div className="pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-top w-100">
              <div>
                <div className="my-2">
                  <h5 className="text-gray-dark text-uppercase">Gunadarma University</h5>
                  <p className="text-gray-dark">Bachelor of Technology</p>
                </div>
                <div><p className="mb-0">Responsibility</p></div>
              </div>
              <a href="#" className="mt-2">Aug 2013 - Nov 2017</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
export default ExperienceComponent
