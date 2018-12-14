import Layout from '../components/Layout.js'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard.js'
import urankImg from '../static/urank.png'
import dtImg from '../static/dt.png'
import diamondImg from '../static/diamond.png'


const Content = styled.div`
    max-width: 960px;
    min-width: 700px;
    margin: 30px auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
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
                        intro="The ultimate collection of university rankings by React.js"
                        bgImg={urankImg}
                        url="https://urank.zequnyu.com"
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