import type { PropsFromSelector } from './homeSelector'
import About from '../../components/home/About'
import Experience from '../../components/home/Experience'
import Education from '../../components/home/Education'
import Skill from '../../components/home/Skill'
import Interest from '../../components/home/Interest'
import Award from '../../components/home/Award'
export interface ViewProps {
  handleClick: (params: unknown) => void
}

type Props = ViewProps & PropsFromSelector

function HomeView({}) {
    return (
      <>
        <About />  
        <Experience />
        <Education />
        <Skill />
        <Interest />
        <Award />
      </>
    )
}

export default HomeView
