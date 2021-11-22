import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.bcolor};
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => '1px solid ' + props.borderColor};
    border-top: ${props => '1px solid ' + props.borderTopColor};
    border-bottom: ${props => '1px solid ' + props.borderBottomColor};
    border-radius: ${props => props.br};
    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    padding: ${props => props.p};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};
    font-size: ${props => props.fs};
    color: ${props => props.color};
    font-weight: ${props => props.fw};
`
