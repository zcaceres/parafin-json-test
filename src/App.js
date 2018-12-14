import React, { Component } from 'react';
import logo from './logo.svg';
import SAMPLE_DATA from './sample/sample.json'
import './App.css';

const labels = Object.keys(SAMPLE_DATA[0])

class App extends Component {
  state = {
    searchVal: '',
    data: SAMPLE_DATA.slice(0, 500)
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchVal: value })
  }

  search = () => {
    const { searchVal, data } = this.state
    return data.filter(entry => {
      const values = Object.values(entry)
      return values.some(val => val.toString().includes(searchVal))
    })
  }

  render() {
    const data = this.state.searchVal ? this.search() : this.state.data
    return (
      <div className="App">
        <div style={{ position: 'fixed', textAlign: 'center', top: 0, color: '#fff', width: '100vw', padding: '1rem', backgroundColor: '#009AB2' }}>
          <h2>Total Records: {data.length}</h2>
          <input onChange={this.handleChange} style={{ padding: '5px', borderRadius: '4px', width: '20vw' }} />
        </div>
        <div style={{ marginTop: '10vw' }}>
          <table>
            <thead>
              <tr>
                {labels.map(label => <th>{label}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map(row => {
                const values = Object.values(row)
                return (
                  <tr>
                  {values.map(val => <td style={{ padding: '0 20px' }}>{val}</td>)}
                  </tr>
                )
              })}
            </tbody>
          </table>
      </div>
    </div>
    );
  }
}

export default App;
