import './App.css';
import FoodData from '../../resources/FoodData';
import { Component } from 'react';
import Food from './Components/Food';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodArray: FoodData,
    };
  }

  handleInputRec = (event) => {
    if (event.target.value === '') {
      return this.setState({ foodArray: FoodData });
    }

    const inputValue = event.target.value.toLowerCase();

    const modifiedArray = this.state.foodArray.filter((ele) =>
      ele.name.toLowerCase().includes(inputValue)
    );

    this.setState({ foodArray: modifiedArray });
  };

  render() {
    const { foodArray } = this.state;

    return (
      <div className="app-container">
        <div>
          <h3>Search</h3>
          <input
            type="text"
            placeholder="Search for Food Item..."
            onChange={this.handleInputRec}
            style={{width: '500px'}}
          />
        </div>

        {foodArray.map((element, index) => (
          <div key={index}>
            <Food
              Name={element.name}
              Calorie={element.cal}
              Image={element.img}
              Index={index}
            />
          </div>
        ))}
      </div>
    );
  }
}
