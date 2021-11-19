import styled from 'styled-components'

export const Text = styled.div`
    font-size: ${props => props.fs};
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    opacity: ${props => props.opacity};
`