import styled from 'styled-components';
// import * as variables from './variables';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 2em;
    height: 100vh;
    width: 100vh;
`;

export const Sidebar = styled.div`
    grid-column: 1 / 4;
    grid-row: 1 / -1;    
    box-shadow: 2px 2px 6px 2px #e3e3e3;
    box-shadow: inset -4px -2px 25px -11px #0006;
    background: #5A747F; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #29abe2 0%, #00ffff 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, #29abe2 0%,#00ffff 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #29abe2 0%,#00ffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#29abe2', endColorstr='#00ffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

export const Content = styled.div`
    grid-column: 4 / -1;
    grid-row: 2 / -1;    
    background: #fff; /* Old browsers */
`;

export const ContentHeader = styled.div`
    grid-column: 2 / -1;
    grid-row: 2 / 5;    
`;



