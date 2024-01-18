// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <div>
      <li className="list-container1">
        <img className="image1" alt={appName} src={imageUrl} />
        <p className="p1">{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
