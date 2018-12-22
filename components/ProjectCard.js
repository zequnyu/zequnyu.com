import styled from 'styled-components'


const CardDiv = styled.div`
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    width: 600px;
    
    text-decoration: none;
    padding-top: 40px;
    padding-bottom: 40px;
`;

const Card = styled.div`
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 2) .2s;
    background-color: #ffffff;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 13px 10px -7px rgba(0, 0, 0,0.2);
    width: 85%;
    
    &:hover {
        box-shadow: 0 30px 18px -8px rgba(0, 0, 0,0.2);
        transform: scale(1.02, 1.02);
        cursor: pointer;
    }
    &:hover #hover {
        height: 100%;
        opacity: 0.2;
    }
    
`;

const ImgDiv = styled.div`
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 240px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-image: url(${props => props.bgImg});
`;

const ImgHoverDiv = styled.div`
    transition: 0.3s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 220px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
    background-image: url(${props => props.bgImg});
`;

const InfoDiv = styled.div`
    z-index: 2;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
    
    &:hover {
        background-color: transparent;
        position: relative;
    }
    margin-top: -20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: start;
    
    font-family: 'Open Sans', sans-serif;
`;

const InfoHoverDiv = styled.div`
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
    
    &:hover {
        opacity: 1;
    }
`;

const InfoTitle = styled.h3`
    color: #333333;
`;

const InfoIntro = styled.span`
    color: #666666;
`;


function ProjectCard(props) {
    function handleClick() {
        window.open(props.url, '_blank');
    }
    
    return (
        <CardDiv onClick={handleClick}>
            <Card>
                <ImgDiv bgImg={props.bgImg} />
                <ImgHoverDiv id="hover" bgImg={props.bgImg} />
                <InfoDiv>
                    <InfoTitle>
                        {props.title}
                    </InfoTitle>
                    <InfoIntro>{props.intro}</InfoIntro>
                </InfoDiv>
                <InfoHoverDiv/>
            </Card>
        </CardDiv> 
    );
}

export default ProjectCard