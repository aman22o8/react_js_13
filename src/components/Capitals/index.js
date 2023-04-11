import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    initalcapital: countryAndCapitalsList[0].id,
  }

  current = event => {
    this.setState({initalcapital: event.target.value})
    console.log(event.target.value)
  }

  updating = () => {
    const {initalcapital} = this.state
    const filtered = countryAndCapitalsList.filter(
      each => each.id === initalcapital,
    )
    return filtered
  }

  render() {
    const {initalcapital} = this.state
    console.log(initalcapital)
    const filteredcountry = this.updating()
    console.log(filteredcountry)
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="main_heading">Countries And Capitals</h1>
          <div className="different">
            <form className="form_container">
              <select
                onChange={this.current}
                className="selectedoptionsfirst"
                id="cars"
                name="cars"
              >
                {countryAndCapitalsList.map(each => (
                  <option
                    className="selectedoption"
                    key={each.id}
                    value={each.id}
                  >
                    {each.capitalDisplayText}
                  </option>
                ))}
              </select>
            </form>
            <p className="options">is the Capital of Which country?</p>
          </div>
          <ul className="country">
            {filteredcountry.map(each => (
              <p key={each.id} className="country">
                {each.country}
              </p>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Capitals
