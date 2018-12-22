import Layout from '../components/Layout.js'
import styled, { keyframes } from "styled-components"
import ProjectCard from '../components/ProjectCard.js'
import urankImg from '../static/urank.png'
import dtImg from '../static/dt.png'
import diamondImg from '../static/diamond.png'
import travelImg from '../static/traveldashboard.png'


const moveFromUp = keyframes`
    from {
        margin-top: -20px;
    }
    
    to {
        margin-top: 0;
    }
`;

const Content = styled.div`
    max-width: 960px;
    min-width: 700px;
    
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    
    animation: ${moveFromUp} .5s ease-out;
    -webkit-animation: ${moveFromUp} .5s ease-out;
    -moz-animation: ${moveFromUp} .5s ease-out;
`;

const Card = styled(ProjectCard)`
`;

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Content>
                    <Card
                        title="uRank (2018)"
                        intro="The ultimate collection of university rankings"
                        bgImg={urankImg}
                        url="https://github.com/zequnyu/uRank"
                        suppressClassNameWarning
                    />
                    <Card
                        title="Undergraduate Thesis (2017-2018)"
                        intro="Analysis of facial expression and mental workload"
                        bgImg={dtImg}
                        url="https://github.com/zequnyu/ugthesis"
                        suppressClassNameWarning
                    />
                    <Card
                        title="Travel Dashboard (2016-2017)"
                        intro="Data analysis tool built for Atos UK"
                        bgImg={travelImg}
                        url="https://github.com/zequnyu/Diamond-Hunter"
                        suppressClassNameWarning
                    />
                    <Card
                        title="Diamond Hunter (2016)"
                        intro="A 2D-RPG diamond hunter game written in Java"
                        bgImg={diamondImg}
                        url="https://github.com/zequnyu/Diamond-Hunter"
                        suppressClassNameWarning
                    />
                </Content>
            </Layout>
        );
    }
}

export default Project