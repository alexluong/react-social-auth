import React from 'react';
import { Link } from 'react-router-dom';
import SidebarLayout from 'layouts/Sidebar';
import { Typography, Button } from 'elements';

class Stuff extends React.Component {
  render() {
    return (
      <SidebarLayout style={{ paddingLeft: '5rem' }}>
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
