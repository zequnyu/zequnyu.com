import Layout from '../components/Layout.js'
import styled from 'styled-components'

const Content = styled.div`
    background-color: aliceblue;
`;

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <Content>
                    <p>Hello Next.js</p>
                </Content>
            </Layout>
        );
    }
}

export default Index