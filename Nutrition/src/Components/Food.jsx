import React, { Component } from 'react';

export default class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countEach: 1,
      CalorieState: this.props.Calorie,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      countEach: prevState.countEach + 1,
      CalorieState: (prevState.countEach + 1) * this.state.CalorieState,
    }));
  };

  handleReset = () => {
    this.setState({
      countEach: 1,
      CalorieState: this.props.Calorie,
    });
  };

  render() {
    const { Name, Image, Index, Calorie } = this.props;

    return (
      <div className="food-item">
        <article>
          <div>
            <figure>
              <img src={Image} alt={Index} />
            </figure>
          </div>
          <div>
            <div className='food-detail'>
              <strong>{Name}</strong> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <small>{Calorie} cal</small>
            </div>
          </div>
          <div>
            <div className='numb'>
              <input type="number" value={this.state.countEach} style={{width: '200px'}}/>
            </div>
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={this.handleIncrement}>+</button>
              <button onClick={this.handleReset}>Reset</button>
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
    );
  }
}
