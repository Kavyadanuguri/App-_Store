// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, getResult, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateId = () => {
    getResult(tabId)
  }
  const activeTabBtn = isActive ? 'active-tab' : ''

  return (
    <div>
      <li className="list-con">
        <button
          onClick={updateId}
          className={`tab-button ${activeTabBtn}`}
          type="button"
        >
          <p className={activeTabBtn}>{displayText}</p>
        </button>
        <hr />
      </li>
    </div>
  )
}

export default TabItem
