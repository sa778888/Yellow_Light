import React, { Component } from 'react'
import Style from './s.css';
import axios from 'axios';
class Mainp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        output1: null,
        output2: null,
      };
    }
  
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = async (event) => {
      event.preventDefault();
      const { input1, input2, input3, input4 } = this.state;
  
      // Replace 'API_URL' with the actual API endpoint
      const apiUrl = 'url';
  
      try {
        const response = await axios.post(apiUrl, { input1, input2, input3, input4 });
      
      if (response.status === 200) {
        const data = response.data;
        this.setState({ output1: data.output1, output2: data.output2 });
      } else {
        // Handle error responses
        console.error('API request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
    render() {
      return (
        <div>
            <div className='hea'>Enter the Values To Check For Leak</div>
          <form onSubmit={this.handleSubmit} className='fo'>
            <label htmlFor="input1">Input 1:</label>
            <input
              type="text"
              id="input1"
              name="input1"
              value={this.state.input1}
              placeholder="Pressure 1"
              onChange={this.handleInputChange}
              required
            /><br /><br />
  
            <label htmlFor="input2">Input 2:</label>
            <input
              type="text"
              id="input2"
              name="input2"
              value={this.state.input2}
              placeholder="Flow 1"
              onChange={this.handleInputChange}
              required
            /><br /><br />
  
            <label htmlFor="input3">Input 3:</label>
            <input
              type="text"
              id="input3"
              name="input3"
              value={this.state.input3}
              placeholder="Pressure 2"
              onChange={this.handleInputChange}
              required
            /><br /><br />
  
            <label htmlFor="input4">Input 4:</label>
            <input
              type="text"
              id="input4"
              name="input4"
              value={this.state.input4}
              placeholder="Flow 2"
              onChange={this.handleInputChange}
              required
            /><br /><br />
  
            <button type="submit" className='sub' >Submit</button>
          </form>
  
          {this.state.output1 && (
          <div>
            <h3>Output 1:</h3>
            <p>{this.state.output1}</p>
          </div>
        )}

        {this.state.output2 && (
          <div>
            <h3>Output 2:</h3>
            <p>{this.state.output2}</p>
          </div>
        )}
        </div>
      );
    }
  }

export default Mainp