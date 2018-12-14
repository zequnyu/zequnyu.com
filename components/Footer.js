import styled from 'styled-components'
import heartImg from '../static/heart.png'


const FooterDiv = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    
    bottom: 0;
    left: 0;
`;

const Line = styled.hr`
    margin-top: 15px;
    margin-bottom: -25px;
    width: 70px;
    border-bottom: 5px solid #112088;
    border-radius: 5px;
`;

const TextDiv = styled.div`
    font-family: 'Open Sans', sans-serif;
    color: #666666;
    
    
    width: 100%;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const TextLeft = styled.span`
    margin-right: -30px;
`;

const HeartIcon = styled.span`
    width: 100px;
    height: 100px;
    
    background: url(${heartImg}) no-repeat 0 0;
    opacity: 0.8;
    
    &:hover {
        background-position: -2800px 0;
        transition: background 1s steps(28);
    }
    
    @keyframes fave-heart {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: -2800px 0;
        }
    }
`;

const TextRight = styled.span`
    margin-left: -30px;
`;

const Footer = () => (
    <FooterDiv>
        <Line />
        <TextDiv>
            <TextLeft>© Copyright 2018 </TextLeft>
            <HeartIcon />
            <TextRight> Zequn Yu</TextRight>
        </TextDiv>

    </FooterDiv>
);

export default Footer

