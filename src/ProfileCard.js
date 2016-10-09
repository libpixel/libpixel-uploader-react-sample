import React from 'react';
import './ProfileCard.css';
import Spinner from "react-spinkit";

export default function ProfileCard(props) {
  let loadingScreen = null;

  if (props.loading) {
    loadingScreen = (
      <div className="ProfileCard-spinner-wrapper">
        <Spinner spinnerName="double-bounce" className="ProfileCard-spinner" noFadeIn />
      </div>
    )
  }

  return (
    <div className="ProfileCard">
      {loadingScreen}
      <img className="ProfileCard-background" src={props.background} role="presentation" />
      <img className="ProfileCard-avatar" src={props.avatar} role="presentation" />
      <p className="ProfileCard-name">{props.name}</p>
      <p className="ProfileCard-bio">{props.bio}</p>
    </div>
  )
}
