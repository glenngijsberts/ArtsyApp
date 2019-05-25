import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../theme'

const StyledButton = styled.button`
    background-color: ${props => props.active ? colors['earth'] : colors['grey']};
    color: ${props => props.active ? 'white' : colors['black']};
    border-radius: 8px;
    position: relative;
    font-weight: ${props => props.active ? '600' : '400'};
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    align-items: center;
    background-image: linear-gradient(rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0));
    text-shadow: rgba(0, 19, 25, 0.1) 0px 1px 0px;
    line-height: 1;
    font-size: 16px;
    width: auto;
    cursor: pointer;
    height: 3.5rem;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 0px 1.5rem;
    text-decoration: none;
    transition: color 200ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, background-color 200ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, text-shadow 200ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    text-transform: lowercase;

    &::first-letter {
        text-transform: capitalize;
    }
`

const Button = (props) => {
    const { children, onClick } = props

    return (
        <StyledButton
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledButton>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
