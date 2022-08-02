export type SidebarProps = {
  data: {
  headerTitle: string,
  headerID: string
}[]}
export const sidebarData: SidebarProps['data'] = [
  {
    headerTitle: "About",
    headerID: "about"
  },
  {
    headerTitle: "Experience",
    headerID: "experience"
  },
  {
    headerTitle: "Education",
    headerID: "education"
  },
  {
    headerTitle: "Skills",
    headerID: "skill"
  }
  ,
  {
    headerTitle: "Interests",
    headerID: "interest"
  },
  {
    headerTitle: "Awards",
    headerID: "award"
  }
]

const SidebarComponent = () => {
  return (
  <nav id="sidebar">
    <div className="sidebar-header">
        <h4>Bayu</h4>
    </div>
    <div className="sidebar-menu">
      <ul className="list-unstyled components">
        {
          sidebarData.map((el, key) => {
            return (<li key={key}>
              <a href={`#${el.headerID}`}>{el.headerTitle}</a>
            </li>)
          })
        }
      </ul>
    </div>
</nav>
)}
export default SidebarComponent
