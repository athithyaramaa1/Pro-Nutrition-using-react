import React, { Component } from 'react';

export default class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countEach: 1,
      CalorieState: this.props.Calorie,
    };
  }

  render() {
    let Name = this.props.Name;
    let Image = this.props.Image;
    let Index = this.props.Index;
    let Calorie = this.props.Calorie;

    const handleClick = () => {
      let settingState = {
        countEach: this.state.countEach + 1,
        CalorieState: (this.state.countEach + 1) * this.state.CalorieState,
      };
      this.setState(settingState);
    };

    return (
      <div>
        <div key={Index}>
          <article>
            <div>
              <figure>
                <img src={Image} alt={Index} />
              </figure>
            </div>
            <div>
              <div>
                <strong>{Name}</strong> <br />
                <small>{Calorie} cal</small>
              </div>
            </div>
            <div>
              <div>
                <input
                  type="number"
                  value={this.state.countEach}
                />
              </div>
              <div>
                <button onClick={handleClick}>+</button>
              </div>
            </div>
          </article>
          <div>
            <div>
              {this.state.countEach} {Name} ={' '}
            </div>
            <div>{this.state.CalorieState} Calorie</div>
          </div>
        </div>
      </div>
    );
  }
}