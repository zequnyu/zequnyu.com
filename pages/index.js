import Header from '../components/Header.js'


class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <p>Hello Next.js</p>
            </div>
        );
    }
}

export default Index