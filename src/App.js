import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  state = {
    progress: 30,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    const pageSize = 10;
    const apiKey = process.env.REACT_APP_API_URL;
    return (
      <div>
        <Router>
          {console.log(process.env.REACT_APP_API_URL)}
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              key={1}
              path="/"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={this.setProgress}
                  pageSize={pageSize}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              key={2}
              path="/business"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              key={3}
              path="/entertainment"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              key={4}
              path="/general"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              key={5}
              path="/health"
              element={
                <News
                  apiKey={apiKey}
                  setProgess={this.setProgress}
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"health"}
                />
              }
            />

            <Route
              exact
              key={6}
              path="/science"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              key={7}
              path="/sports"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              key={8}
              path="/technology"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
