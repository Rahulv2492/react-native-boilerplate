import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './Dashboard.style';
import { Text } from './../../components';
import { render } from 'react-native-testing-library';

class Dashboard extends Component {
    componentDidMount() {
        this.props.navigation.setOptions({ headerTitle: 'Updated!' });
    }
    render() {
        return (
            <Container.Wrapper>
                <Text>Withput prop</Text>
                <Text type="h1">Heading 1</Text>
                <Text type="h2">Heading 2</Text>
                <Text type="h3">Heading 3</Text>
                <Container.CustomText>Custom style</Container.CustomText>
            </Container.Wrapper>
        );
    }
}

Dashboard.defaultProps = {};

Dashboard.propTypes = {
    navigation: PropTypes.object,
};

export default Dashboard;
