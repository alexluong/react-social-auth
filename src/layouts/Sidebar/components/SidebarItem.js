import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import { Icon } from 'elements';

const propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const SidebarItem = ({ open, path, icon, label }) => (
  <NavLink
    to={path}
    style={
      !open
        ? {
            justifyContent: 'center',
            paddingLeft: 0,
          }
        : {}
    }
  >
    <Route path={path}>
      {({ match }) => (
        <span>
          <Icon name={icon} color={match ? 'white' : 'primary'} />
          {open && <span style={{ marginLeft: '1rem' }}>{label}</span>}
        </span>
      )}
    </Route>
  </NavLink>
);
SidebarItem.propTypes = propTypes;

export default SidebarItem;
