import { gql } from 'apollo-boost'
import React, { useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { useDebounce } from 'use-debounce'
import styled from 'styled-components'
import Search from './components/Search'
import Button from './components/Button'
import Row from './components/Row'

const GET_SEARCH_RESULTS = gql`
    query getSearchResults($query: String!, $entity: [SearchEntity]) {
        search(query: $query, first: 5, entities: $entity) {
            edges {
                node {
                    imageUrl
                    displayLabel
                }
            }
        }
    }
`

const StyledContainer = styled.main`
    padding: 64px 16px;
    max-width: 544px;
    margin: 0 auto;
    font-family: system-ui;
`

const StyledResults = styled.section`
    margin-top: 16px;
`

const StyledButtonGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 14px;

    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`

const StyledAlert = styled.div`
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    color: black;
    margin-bottom: 24px;

    p {
        margin: 0;
    }
`

const CenteredText = styled.h2`
    text-align: center;
`

const App = () => {
    const [query, setQuery] = useState('')
    const [debouncedQuery] = useDebounce(query, 300)
    const [entity, setEntity] = useState('CITY')

    const entities = ['CITY', 'ARTIST', 'ARTWORK', 'COLLECTION', 'ARTICLE']

    const { data, error, loading } = useQuery(GET_SEARCH_RESULTS, {
        variables: {
            query: debouncedQuery,
            entity,
        },
    })

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    return (
        <StyledContainer>
            {error && (
                <StyledAlert>
                    <p>{error.message}</p>
                </StyledAlert>
            )}

            <Search value={query} loading={loading} onChange={handleChange} />

            <StyledResults>
                <StyledButtonGroup>
                    {entities.map((item, index) => (
                        <Button key={index} onClick={() => setEntity(item)} active={entity === item}>{item}</Button>
                    ))}
                </StyledButtonGroup>

                {data && data.search && data.search.edges && (
                    data.search.edges.map(({ node }, index) => (
                        <Row
                            key={index}
                            type={entity}
                            label={node.displayLabel}
                            img={node.imageUrl}
                        />
                    ))
                )}

                {data && data.search && data.search.edges && (
                    debouncedQuery.length > 0 && !loading && data.search.edges.length < 1 && (
                        <CenteredText>No results <span role="img" aria-label="Whatevs">🤷‍</span></CenteredText>
                    )
                )}
            </StyledResults>
        </StyledContainer>
    )
}

export default App
