import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcons, HeadphoneIcon, SettingsIcons } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>felip</strong>
                    <span>#7984</span>
                </UserData>
            </Profile>


            <Icons>
                <MicIcons />
                <HeadphoneIcon />
                <SettingsIcons />
            </Icons>
        </Container>
    )
};

export default UserInfo;