import Layout from '../components/Layout.js'
import styled from 'styled-components'


const Text = styled.div`
    text-align: center;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    padding: 50px;
`;

class Writing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Text>I'm doing very hard to construct this page xD...</Text>
            </Layout>
        );
    }
}

export default Writing