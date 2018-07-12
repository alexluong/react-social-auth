import React from 'react';
import { connect } from 'react-redux';
import { updateAvatar } from 'modules/user';
// UIs
import SidebarLayout from 'layouts/Sidebar';
import Input from 'elements/Input';
import AccountSection from './sections/Account';
import SecuritySection from './sections/Security';
import AvatarPlaceholder from './components/AvatarPlaceholder';

class SettingsPage extends React.Component {
  state = {
    file: null,
    accountErrorMessage: '',
    securityErrorMessage: '',
  };

  handleFileSelect = files => {
    this.props.updateAvatar({ avatar: files[0] });
  };

  changeAccount = (values, actions) => {
    const { user } = this.props;
    if (values.email === user.email && values.username === user.username) {
      this.setState(
        { accountErrorMessage: 'You need to change the values before saving.' },
        actions.setSubmitting(false),
      );
      return;
    }
    this.setState({ accountErrorMessage: '' });
    console.log({ values });
  };

  changePassword = (values, actions) => {
    console.log({ password: values });
  };

  render() {
    const { user } = this.props;

    return (
      <SidebarLayout style={{ padding: '4rem' }}>
        <AccountSection
          user={user}
          onSubmit={this.changeAccount}
          errorMessage={this.state.accountErrorMessage}
        />

        <SecuritySection
          onSubmit={this.changePassword}
          errorMessage={this.state.securityErrorMessage}
        />

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
