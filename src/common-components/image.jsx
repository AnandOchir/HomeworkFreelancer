import styled from 'styled-components';

export const Image = styled.img`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    border-radius: ${props => props.br};
`