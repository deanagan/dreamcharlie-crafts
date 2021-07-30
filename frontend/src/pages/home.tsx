import React from 'react';
import styled from 'styled-components';
import {ViewBox} from '../design-system/atoms';

const Wrapper = styled(ViewBox)`
    justify-content: center;
    background-color: ${({ theme }) => theme.Colors.grey300 };
`;

export const Home = () => {
    return (
        <Wrapper w={600} h={600}>Home</Wrapper>
    );
};
