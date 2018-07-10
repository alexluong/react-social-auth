import React from 'react';
import { connect } from 'react-redux';
import { updateAvatar } from 'modules/user';
// UIs
import SidebarLayout from 'layouts/Sidebar';
import Input from 'elements/Input';
import AvatarPlaceholder from './components/AvatarPlaceholder';

class SettingsPage extends React.Component {
  state = {
    file: null,
  };

  handleFileSelect = files => {
    this.props.updateAvatar({ avatar: files[0] });
  };

  render() {
    return (
      <SidebarLayout>
        <Input
          variant="file"
          show={false}
          accept="image/*"
          onChange={this.handleFileSelect}
        >
          <AvatarPlaceholder src={this.props.user.photoURL} />
        </Input>
      </SidebarLayout>
    );
  }
}

export default connect(
  state => ({ user: state.user.user }),
  { updateAvatar },
)(SettingsPage);
