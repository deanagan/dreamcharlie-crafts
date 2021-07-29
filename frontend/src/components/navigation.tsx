import {Text, ViewBox} from '../design-system/atoms';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkWrapper = styled(NavLink)`
    padding: 10px;
`;
export const NavBar: React.FC = () => {
    return (
        <ViewBox>
            <NavLinkWrapper to={'/'}>
                <Text>Home</Text>
            </NavLinkWrapper>
            <NavLinkWrapper to={'/contact'}>
                <Text>Contact</Text>
            </NavLinkWrapper>
        </ViewBox>
    );
};
