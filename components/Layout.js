import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import styled from 'styled-components'

const MyLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const Layout = (props) => (
    <MyLayout>
        <Header />
        {props.children}
        <Footer />
    </MyLayout>
);

export default Layout