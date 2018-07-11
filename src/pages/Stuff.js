import React from 'react';
import { Link } from 'react-router-dom';
import SidebarLayout from 'layouts/Sidebar';
import { Typography, Button, Icon } from 'elements';

class Stuff extends React.Component {
  render() {
    return (
      <SidebarLayout style={{ paddingLeft: '5rem' }}>
        <Icon name="home" size={100} color="secondary" />
        <Icon name="close" size={100} color="secondary" />
        <Icon name="arrow-left" size={100} color="secondary" />
        <Icon name="search" size={100} color="secondary" />

        <br />

        <Button variant="link" color="primary" tag={Link} to="/sign-out">
          Sign out
        </Button>

        <Button
          variant="icon"
          name="close"
          onClick={() => console.log('icon')}
        />

        <Button color="secondary" onClick={() => console.log('normal')}>
          Click
        </Button>

        <br />
        <br />

        <Button variant="outlined" onClick={() => console.log('outlined')}>
          Outlined
        </Button>

        <br />
        <br />

        <Button disabled>Disabled</Button>

        <Typography tag="h1" color="primary">
          Hi there
        </Typography>
      </SidebarLayout>
    );
  }
}

export default Stuff;
