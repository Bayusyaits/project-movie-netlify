import { useRef } from 'react'

const SkillComponent = ({}) => {
  const skill = useRef(null)
  return (<>
    <section ref={skill} data-bs-spy="scroll" data-bs-target="#skill" data-bs-offset="0" id="skill">
    <div className="container">
        <h3 className="display-5">Skills</h3>
        <p className="text-uppercase">PROGRAMMING LANGUAGE AND TOOLS</p>
        <div className="row">
          <div className="col-sm-6">
            <ul>
              <li><p className="text-gray-dark">HTML5</p></li>
              <li><p className="text-gray-dark">Javascript</p></li>
              <li><p className="text-gray-dark">NodeJS</p></li>
              <li><p className="text-gray-dark">CSS</p></li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul>
              <li><p className="text-gray-dark">ReactJs</p></li>
              <li><p className="text-gray-dark">React Native</p></li>
              <li><p className="text-gray-dark">PHP</p></li>
              <li><p className="text-gray-dark">VueJs</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
export default SkillComponent
