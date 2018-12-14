import styled from 'styled-components'
import Link from 'next/link'
import logo from '../static/logo.png'


// 1st #fc3805
// 2nd #112088
// 3rd #feb8aa

const HeaderDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;

const LogoDiv = styled.div`
    position: relative;
    width: 100px; 
    height: 57.74px;
    margin: 28.87px 0;
    background-image: url(${logo});
    background-size: auto 115.4701px;
    background-position: center;
    box-shadow: 0 0 20px rgba(252,56,5,0.2);
    opacity: 0.9;
    
    &:after {
        content: "";
        position: absolute;
        top: 0.0000px;
        left: 0;
        width: 100.0000px;
        height: 57.7350px;
        z-index: 2;
        background: inherit;   
    }
    
    &:hover {
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.3s linear;
        -webkit-transition: all 0.3s linear;
        -moz-transition: all 0.3s linear;
    }
    
    transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
`;

const LogoDivTop = styled.div`
    position: absolute;
    z-index: 1;
    width: 70.71px;
    height: 70.71px;
    overflow: hidden;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    left: 14.64px;
    box-shadow: 0 0 20px rgba(252,56,5,0.2);
    
    &:after {
        content: "";
        position: absolute;
        width: 100.0000px;
        height: 57.73502691896258px;
        -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-28.8675px);
        -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-28.8675px);
        transform:          rotate(45deg) scaleY(1.7321) translateY(-28.8675px);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        background: inherit;
    }
    
    top: -35.3553px;
    
    &:after {
        background-position: center top;
    }
`;

const LogoDivBottom = styled.div`
    position: absolute;
    z-index: 1;
    width: 70.71px;
    height: 70.71px;
    overflow: hidden;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    left: 14.64px;
    box-shadow: 0 0 20px rgba(252,56,5,0.2);

    &:after {
        content: "";
        position: absolute;
        width: 100.0000px;
        height: 57.73502691896258px;
        -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-28.8675px);
        -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-28.8675px);
        transform:          rotate(45deg) scaleY(1.7321) translateY(-28.8675px);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        background: inherit;
    }
      
    bottom: -35.3553px;
      
    &:after {
        background-position: center bottom;
    }
`;

const Line = styled.hr`
    margin-top: 15px;
    width: 70px;
    border-bottom: 5px solid #112088;
    border-radius: 5px;
`;

const Header = () => (
    <HeaderDiv>
        <Link href="/">
            <a>
                <LogoDiv>
                    <LogoDivTop />
                    <LogoDivBottom />
                </LogoDiv>
            </a>
        </Link>
        <Line />
    </HeaderDiv>
);

export default Header