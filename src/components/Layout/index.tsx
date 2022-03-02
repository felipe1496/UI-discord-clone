import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import Channelinfo from '../Channelinfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <Channelinfo />
            <ChannelList />
            <UserInfo />
            <ChannelData />
            <UserList />
        </Grid>
    )
};

export default Layout;