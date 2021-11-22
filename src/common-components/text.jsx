import styled from 'styled-components'

export const Text = styled.div`
    font-size: ${props => props.fs};
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
    opacity: ${props => props.opacity};
    font-weight: ${props => props.fw};
    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
`