// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  displayFirstName = () => {
    const {firstname} = this.state
    this.setState({firstname: !firstname})
  }

  displayLastName = () => {
    const {lastname} = this.state
    this.setState({lastname: !lastname})
  }

  render() {
    const {firstname, lastname} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="title">Show/Hide</h1>
          <div className="show-hide-containers">
            <div className="show-hide-container">
              <button type="button" onClick={this.displayFirstName}>
                Show/Hide Firstname
              </button>
              {firstname && <p className="show-hide-desc">Joe</p>}
            </div>
            <div className="show-hide-container">
              <button type="button" onClick={this.displayLastName}>
                Show/Hide Lastname
              </button>
              {lastname && <p className="show-hide-desc">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
