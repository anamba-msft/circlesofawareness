import React, { Component } from 'react'
import './App.css';
import NavigationBar from './Navbar'

class App extends Component {
  render() {
    return (

      <div className="App">
        <NavigationBar />
        <body>
          <div className="App-header">
          <h1>Welcome to Circles of Awareness!</h1><br></br><hr></hr><br></br>
          <h2>
              Our Mission Statement
            </h2><br></br>
            <h3>
            Providing a platform in which individuals can engage with social, historical, and political issues in order to have a better understanding of the communities around us            </h3>
          </div>
          <img src="bookclub.jpg" alt="Book Club" width="500" height="333"></img>
        </body>
      </div>
    )
  }
}

export default App;
