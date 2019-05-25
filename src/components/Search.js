import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import { colors, shadow } from '../theme'

const SearchInput = styled.input`
    background-color: ${colors['grey']};
    padding: 16px 16px 16px 56px;
    width: 100%;
    border: 0;
    font-size: 18px;
    border-radius: 8px;
    color: ${colors['black']};
    outline: 0;
    box-sizing: border-box;

    &:focus,
    &.focus {
        background-color: #ffffff;
        outline: none;
        box-shadow: ${shadow};
    }

    &::placeholder {
        color: ${colors['greyDark']};
    }
`

const StyledInputWrapper = styled.div`
    position: relative;
`

const StyledLoaderWrapper = styled.div`
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
`

const Search = (props) => {
    const { value, loading, onChange } = props;

    return (
        <StyledInputWrapper>
            <SearchInput value={value} onChange={onChange} />

            {loading && (
                <StyledLoaderWrapper>
                    <Loader
                        type="TailSpin"
                        color={colors['greyDark']}
                        height="24"
                        width="24"
                    />
                </StyledLoaderWrapper>
            )}
        </StyledInputWrapper>
    )
}

Search.propTypes = {
    value: PropTypes.string,
    loading: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Search
