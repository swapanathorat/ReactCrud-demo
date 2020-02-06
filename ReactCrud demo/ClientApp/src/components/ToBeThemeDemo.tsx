import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { color } from 'styled-system'
import theme from 'styled-theming'

const button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius:3px;

/*color the border and text with teme.main */
color: $(props) => props.theme.main;
border : 2px solid $(props => props.theme.main);
`
const Wrapper = styled.div` 
display: flex:
padding: 1em;
`
export class ToBeThemeDemo extends React.Component<RouteComponentProps<{}> > {
    constructor(props) {
        super(props);

    }
}