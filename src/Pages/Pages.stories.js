import React from 'react';

import Login from './Login';
import Workspace from './Workspace';
import EditMeeting from './EditMeeting';
import StartMeeting from './StartMeeting';
import ManageOrganization from './ManageOrganization';
import ManageUsers from './ManageUsers';

export default { title: 'Pages' };

export const login = () => <Login />;

export const workspace = () => <Workspace />;

export const editMeeting = () => <EditMeeting />;

export const startMeeting = () => <StartMeeting />;

export const manageOrganization = () => <ManageOrganization />;

export const manageUsers = () => <ManageUsers />;