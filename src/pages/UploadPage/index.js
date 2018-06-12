import React from 'react';
import { connect } from 'react-redux';

import { uploadFile } from 'modules/upload';
import { Button, TextInput } from 'lib';

class UploadPage extends React.Component {
  state = {
    error: '',
    name: '',
    file: null,
  };

  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
  }

  uploadVideo = e => {
    e.preventDefault();

    const { file, name } = this.state;
    if (file) {
      this.props.uploadFile({ file, name });
    } else {
      this.setState({ error: 'No file is selected' });
    }
  };

  handleFileSelect = e => {
    this.setState({
      file: e.target.files[0],
      name: e.target.files[0].name,
    });
  };

  render() {
    const { error, name } = this.state;
    return (
      <form method="post" onSubmit={this.uploadVideo}>
        <input
          type="file"
          ref={this.fileInput}
          accept="image/*"
          onChange={this.handleFileSelect}
          style={{ display: 'none' }}
        />
        <Button
          type="button"
          onClick={() => this.fileInput.current.click()}
          outline
        >
          Select File
        </Button>
        <TextInput
          label="File name"
          type="text"
          placeholder="name..."
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        {error.length > 0 && <p style={{ color: 'red' }}>{error}</p>}
        {this.props.uploading && <p>Uploading</p>}
        <Button type="submit" colorType="primary">
          Submit
        </Button>
      </form>
    );
  }
}

export default connect(
  state => ({ uploading: state.upload.requesting }),
  { uploadFile },
)(UploadPage);
