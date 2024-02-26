import './App.css'
import FoodData from '../../resources/FoodData'
import { Component } from 'react'
import Food from './Components/Food'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       foodArray: FoodData
    }
  }
  
  render() {
    let foodDataArray = this.state.foodArray

    const handleInputRec = (event) => {
      if(event.target.value == ''){
        return this.setState({foodArray: FoodData})
      }
      let inputValue = event.target.value.toLowerCase();

      let modifiedArray = foodDataArray.filter((ele, idx) => {
        let name = ele.name;
        return name.includes(inputValue)
      })
      this.setState({foodArray: modifiedArray})
    }
    return (
      <div>
        <div>
          <h3>Search</h3>
          <input
            type="text"
            placeholder="Search for Food Item..."
            onChange={handleInputRec}
          />
        </div>

        {foodDataArray.map((element, index) => {
          let name = element.name;
          let calorie = element.cal;
          let image = element.img;

          return (
            <div key={index}>
              <Food
                Name={name}
                Calorie={calorie}
                Image={image}
                Index={index}
              />
            </div>
          );
        })}
      </div>
    )
  }
}

