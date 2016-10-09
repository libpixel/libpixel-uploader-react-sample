import React, { Component } from 'react';
import './ProfileEditor.css';
import LibPixelUploader from "./LibPixelUploader";

class ProfileEditor extends Component {
  constructor() {
    super();
    this.state = ProfileEditor.DEFAULT_STATE;
  }

  static get DEFAULT_STATE() {
    return {
      name: "Jaymes Aaron",
      bio: "Hiker and Developer of React apps with LibPixel.",
      image: "http://libpixel.libpx.com/uploader/fb508bcd-a87e-43f6-a0cf-576c47996968.jpg"
    };
  }

  inputChanged(key, e) {
    this.setState({ [key]: e.target.value });
  }

  save(e) {
    e.preventDefault();
    let newState = { ...this.state };

    if (this.state.imageSelected) {
      newState.saving = true;
      this.setState(newState);
      this.uploader.upload();
    }
    this.props.onChange(newState);
  }

  imageChanged() {
    this.setState({ imageSelected: true });
  }

  setImage(e) {
    const newState = {
      ...this.state,
      image: `http://libpixel.libpx.com/uploader/${e.key}`,
      saving: false
    }
    this.setState(newState);
    this.props.onChange(newState);
  }

  render() {
    return (
      <form className="ProfileEditor" onSubmit={this.save.bind(this)}>
        <div className="ProfileEditor-title">Edit Profile</div>
        <label>
          Name
          <input type="text" value={this.state.name} onChange={this.inputChanged.bind(this, "name")} />
        </label>
        <label>
          Bio
          <textarea value={this.state.bio} onChange={this.inputChanged.bind(this, "bio")}></textarea>
        </label>
        <label>
          Image
          <LibPixelUploader
            host="libpixel.libpx.com"
            source="uploader"
            ref={(uploader) => this.uploader = uploader}
            onChange={this.imageChanged.bind(this)}
            onSuccess={this.setImage.bind(this)} />
        </label>
        <input type="submit" value="Save Profile" />
      </form>
    );
  }
}

export default ProfileEditor;
