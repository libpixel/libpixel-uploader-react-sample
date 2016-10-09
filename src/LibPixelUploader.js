import React, { Component } from 'react';
import Uploader from "libpixel-uploader";

const noop = function() {};

class LibPixelUploader extends Component {
  componentDidMount() {
    window.LibPixelUploader = Uploader;
    this.uploader = Uploader({
      host: this.props.host,
      source: this.props.source,
      element: this.input
    })
    .start(this.props.onStart)
    .progress(this.props.onProgress)
    .success(this.props.onSuccess)
    .error(this.props.onError);
  }

  upload() {
    this.uploader.upload();
  }

  render() {
    return (
      <input type="file" ref={(input) => this.input = input} onChange={this.props.onChange.bind(this)} />
    );
  }
}

LibPixelUploader.defaultProps = {
  onStart: noop,
  onProgress: noop,
  onSuccess: noop,
  onError: noop,
  onChange: noop
};

LibPixelUploader.propTypes = {
  host: React.PropTypes.string.isRequired,
  source: React.PropTypes.string.isRequired,
  onStart: React.PropTypes.func,
  onProgress: React.PropTypes.func,
  onSuccess: React.PropTypes.func,
  onError: React.PropTypes.func,
  onChange: React.PropTypes.func
};

export default LibPixelUploader;
