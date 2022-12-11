import styled from 'styled-components'

export const Box = styled.div`
    background-color: ${props => props.color};
    width: ${props => props.width};
    height: ${props => props.height};
    flex-wrap: ${props => props.wrap};
    min-width: ${props => props.min_width};
    overflow: ${props => props.overflow};
    min-height: ${props => props.min_height};
    position: ${props => props.position};
    display: ${props => props.display};
    opacity: ${props => props.opacity};
    justify-content: ${props => props.justify};
    border: ${props => '1px solid ' + props.borderColor};
    border-top: ${props => '1px solid ' + props.borderTopColor};
    border-bottom: ${props => '1px solid ' + props.borderBottomColor};
    border-radius: ${props => props.br};
    top: ${props => props.top};
    position: ${props => props.position};
    background: ${props => props.background};
    align-items: ${props => props.items};
    flex-direction: ${props => props.direction};
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
    cursor: ${props => props.pointer && 'pointer'};
    z-index: ${props => props.z};
    box-shadow: ${props => props.shadow && '10px 10px 10px rgb(0 0 0 / 0.5)'};
`
export const AnimatedText = styled.text`
    font-size: 18px;
    color: white;
    :hover  {
        color: #48a0f8;
    }
    :after {    
        background: none repeat scroll 0 0
        transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 3px;
        left: 50%;
        background: #48a0f8;
        transition: width 0.3s ease 0s, left 0.3s 
        ease 0s;
        width: 0;
    }
    :hover:after { 
        width: 100%; 
        left: 0;
    }
    `