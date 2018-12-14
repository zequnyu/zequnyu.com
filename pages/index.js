import Layout from '../components/Layout.js'
import styled from 'styled-components'
import Link from 'next/link'
import avatarImg from '../static/avatar.png'
import uscImg from '../static/usc.png'

const Content = styled.div`
    max-width: 960px;
    min-width: 600px;
    margin: 0 auto;
    height: 600px;
    
    display: flex;
    flex-flow: column nowrap;
`;

const NavBar = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    
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
`;

const AboutDiv = styled.div`
    flex: 1;
    
    display: flex;
    flex-flow: row wrap;
`;

const AvatarDiv = styled.div`
    flex: 2;
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
`;

const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    
    box-shadow: 0 0 20px rgba(172,168,90,0.2);
`;

const InfoDiv = styled.div`
    flex: 3;
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: start;
    padding-bottom: 60px;
`;

const HiText = styled.h1`
    font-family: 'Francois One', sans-serif;
    font-size: 2.4em;
    color: #333333;
    
    #darkred {
        color: #8e1a1d;
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
        -webkit-transition: all 0.3s linear;
        -moz-transition: all 0.3s linear;
    }
    
    transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
`;

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <Content>
                    <NavBar>
                        <Link href={`/project`}>
                            <LinkText>PROJECT</LinkText>
                        </Link>
                        <Link href={`/code`}>
                            <LinkText>CODE</LinkText>
                        </Link>
                        <Link href={`/cv`}>
                            <LinkText>CV</LinkText>
                        </Link>
                        <Link href={`/writing`}>
                            <LinkText>WRITING</LinkText>
                        </Link>
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
        );
    }
}

export default Index