import Layout from '../components/Layout.js'
import styled, { ThemeProvider, keyframes } from "styled-components"
import Link from 'next/link'
import avatarImg from '../static/avatar.png'
import uscImg from '../static/usc.png'
import theme from '../components/theme.js'


const moveFromUp = keyframes`
    from {
        margin-top: -20px;
    }
    
    to {
        margin-top: 0;
    }
`;

const moveFromUpDouble = keyframes`
    from {
        margin-top: -40px;
    }
    
    to {
        margin-top: 0;
    }
`;

const Content = styled.div`
    //max-width: 960px;
    //min-width: 700px;
    margin: 0 auto;
    height: 60vh;
    
    display: flex;
    flex-flow: column nowrap;
`;

const NavBar = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
    @media (max-width: ${props => props.theme.mobile}) {
        width: 100%;
    }
    @media (min-width: ${props => props.theme.mobile}) {
        width: 60%;
    }
    @media (min-width: ${props => props.theme.desktop}) {
        width: 60%;
    }
    
    align-items: center;
    margin: 0 auto;
    
    font-family: 'Open Sans', sans-serif;
    color: #666666;
`;

const LinkText = styled.a`
    padding: 20px;
    transition: all 0.3s linear;
    
    &:hover {
        cursor: pointer;
        color: #999999;
        transition: all 0.3s linear;
        -webkit-transition: all 0.3s linear;
        -moz-transition: all 0.3s linear;
        opacity: 0.8;
    }
    
    @media (max-width: ${props => props.theme.mobile}) {
        font-size: 1.5em;
    }
`;

const AboutDiv = styled.div`
    flex: 1;
    
    display: flex;
    
    @media (max-width: ${props => props.theme.mobile}) {
        flex-flow: column nowrap;
    }
    @media (min-width: ${props => props.theme.mobile}) {
        flex-flow: row wrap;
    }
    @media (min-width: ${props => props.theme.desktop}) {
        flex-flow: row wrap;
    }
`;

const AvatarDiv = styled.div`
    flex: 2;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    
    @media (max-width: ${props => props.theme.mobile}) {
        padding-top: 25px;
    }
    @media (min-width: ${props => props.theme.mobile}) {
        padding-bottom: 40px;
    }
    @media (min-width: ${props => props.theme.desktop}) {
        padding-bottom: 40px;
    }
`;

const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    
    box-shadow: 0 0 20px rgba(172,168,90,0.2);
    
    @media (max-width: ${props => props.theme.mobile}) {
        align-items: center;
        animation: ${moveFromUp} .5s ease-out;
    }
    @media (min-width: ${props => props.theme.mobile}) {
        align-items: start;
        animation: ${moveFromUpDouble} .5s ease-out;
    }
    @media (min-width: ${props => props.theme.desktop}) {
        align-items: start;
        animation: ${moveFromUpDouble} .5s ease-out;
        
    }
    animation: ${moveFromUp} .5s ease-out;
`;

const InfoDiv = styled.div`
    flex: 3;
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    
    @media (max-width: ${props => props.theme.mobile}) {
        align-items: center;
        animation: ${moveFromUp} .5s ease-out;
    }
    @media (min-width: ${props => props.theme.mobile}) {
        align-items: start;
        animation: ${moveFromUpDouble} .5s ease-out;
    }
    @media (min-width: ${props => props.theme.desktop}) {
        animation: ${moveFromUpDouble} .5s ease-out;
        align-items: start;
    }
    
    padding-bottom: 60px;
`;

const HiText = styled.h1`
    font-family: 'Francois One', sans-serif;
    font-size: 2.4em;
    color: ${props => props.theme.gray3};
    
    #darkred {
        color: #8e191c;
    }
`;

const StatusSpan = styled.span`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    
    
`;

const StatusText = styled.h3`
    flex: 0 0 200px;
    color: #333333;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    font-size: 1em;
    text-align: left;
    margin-right: 5px;
`;

const USCLogo = styled.img`
    flex: 1;
    height: 80px;
    width: auto;
`;

const SocialIconDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 30px;
`;

const SocialLink = styled.a`
    padding-right: 10px;
    font-size: 36px;
    color: #333333;
    opacity: 0.8;
    
    &:hover {
        color: #999999;
        transition: all 0.3s linear;
    }
    
    @media (max-width: ${props => props.theme.mobile}) {
        font-size: 48px;
    }
    
    transition: all 0.3s linear;
`;

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Layout>
                    <Content>
                        <NavBar>
                            <Link href={`/project`}>
                                <LinkText>PROJECT</LinkText>
                            </Link>
                            {/*<Link href={`/code`}>*/}
                                {/*<LinkText>CODE</LinkText>*/}
                            {/*</Link>*/}
                            <Link href={`/static/cv.pdf`}>
                                <LinkText>CV</LinkText>
                            </Link>
                            {/*<Link href={`/writing`}>*/}
                                {/*<LinkText>WRITING</LinkText>*/}
                            {/*</Link>*/}
                        </NavBar>
                        <AboutDiv>
                            <AvatarDiv>
                                <Avatar src={avatarImg} alt="Avatar" />
                            </AvatarDiv>
                            <InfoDiv>
                                <HiText><span id="darkred">Hi,</span> I'm Anthony</HiText>
                                <StatusSpan>
                                    <StatusText>Currently a MSc student at </StatusText>
                                    <USCLogo src={uscImg} alt="USCLogo" />
                                </StatusSpan>
                                <SocialIconDiv>
                                    <SocialLink href={`https://facebook.com/anthonyyu.11`}>
                                        <i className="fab fa-facebook-square" />
                                    </SocialLink>
                                    <SocialLink href={`https://github.com/zequnyu`}>
                                        <i className="fab fa-github-square" />
                                    </SocialLink>
                                    <SocialLink href={`https://www.linkedin.com/in/anthony-yu-015266145/`}>
                                        <i className="fab fa-linkedin" />
                                    </SocialLink>
                                    <SocialLink href={`mailto:zequnyu11@gmail.com`}>
                                        <i className="fas fa-envelope-square"/>
                                    </SocialLink>
                                </SocialIconDiv>
                            </InfoDiv>
                        </AboutDiv>
                    </Content>
                </Layout>
            </ThemeProvider>
        );
    }
}

export default Index