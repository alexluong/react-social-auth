import React from 'react';
import { connect } from 'react-redux';
import { updateAvatar } from 'modules/user';
// UIs
import Input from 'elements/Input';
import AvatarPlaceholder from './AvatarPlaceholder';

class SettingsPage extends React.Component {
  state = {
    file: null,
  };

  handleFileSelect = files => {
    this.props.updateAvatar(files[0]);
  };

  render() {
    return (
      <React.Fragment>
        <Input
          variant="file"
          show={false}
          accept="image/*"
          onChange={this.handleFileSelect}
        >
          <AvatarPlaceholder />
        </Input>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { updateAvatar },
)(SettingsPage);
