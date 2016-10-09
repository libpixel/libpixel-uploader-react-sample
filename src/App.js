import React, { Component } from 'react';
import './App.css';
import ProfileEditor from "./ProfileEditor";
import ProfileCard from "./ProfileCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: ProfileEditor.DEFAULT_STATE
    };
  }

  get dpr() {
    return window.devicePixelRatio || 1;
  }

  profileChanged(profile) {
    this.setState({ profile });
  }

  render() {
    const avatar = `${this.state.profile.image}?width=100&height=100&mode=crop&dpr=${this.dpr}`;
    const background = `${this.state.profile.image}?width=280&height=120&blur=80&mode=crop&dpr=${this.dpr}`;

    return (
      <div className="App">
        <ProfileCard name={this.state.profile.name} bio={this.state.profile.bio} avatar={avatar} background={background} loading={this.state.profile.saving} />
        <ProfileEditor onChange={this.profileChanged.bind(this)} />
      </div>
    );
  }
}

export default App;
