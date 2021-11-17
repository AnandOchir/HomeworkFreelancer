import styled from 'styled-components'

export const Box = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    flex-wrap: ${props => props.wrap};
    min-width: ${props => props.min_width};
    overflow: ${props => props.overflow};
    min-height: ${props => props.min_height};
    position: ${props => props.position};
    display: ${props => props.display};
    justify-content: ${props => props.justify};
    border: ${props => '1px solid ' + props.borderColor};
    border-top: ${props => '1px solid ' + props.borderTopColor};
    border-bottom: ${props => '1px solid ' + props.borderBottomColor};
    border-radius: ${props => props.br};
    background: ${props => props.background};
    align-items: ${props => props.items};
    flex-direction: ${props => props.direction};
    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    cursor: ${props => props.pointer && 'pointer'}
`