import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../theme'

const StyledRow = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px;
    box-sizing: border-box;

    div {
        h3 {
            font-size: 18px;
            color: ${colors['black']};
            margin: 0 0 4px 0;
            font-weight: 400;
        }

        h4 {
            color: ${colors['greyLight']};
            font-size: 16px;
            font-weight: 400;
            margin: 0;
            text-transform: lowercase;

            &::first-letter {
                text-transform: capitalize;
            }
        }
    }

    img {
        width: 48px;
        height: 48px;
        display: block;
        border-radius: 48px;
    }
`

const Row = (props) => {
    const { type, label, img } = props;

    return (
        <StyledRow>
            <div>
                <h3>{label}</h3>
                <h4>{type}</h4>
            </div>

            {img ? (
                <img src={img} alt={label} />
            ) : (
                <img src="http://placehold.it/48x48" alt={label} />
            )}
        </StyledRow>
    )
}

Row.defaultProps = {
    img: null,
}

Row.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    img: PropTypes.string,
}

export default Row
