import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApplyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speed-description">Speed is {speed}mph</h1>
        <p className="warning-description">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            type="button"
            onClick={this.onAccelerate}
            className="btn accelerate-button"
          >
            Accelerate
          </button>
          <button
            type="button"
            onClick={this.onApplyBreak}
            className="btn break-button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
