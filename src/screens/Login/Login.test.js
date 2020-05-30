import React from 'react';

import Login from './Login';
import store from './../../redux/store';
import { render } from 'react-native-testing-library';
import { createRequestTypes } from './../../utils/helpers';

describe('Login', () => {
    it('should match to snapshot', () => {
        const tree = render(<Login store={store} />).toJSON();
        console.log('tree', tree);
        expect(tree).toMatchSnapshot();
    });

    it('should match to request types', () => {
        expect(createRequestTypes('DEMO')).toStrictEqual({
            REQUESTING: 'REQUESTING_DEMO',
            SUCCESS: 'SUCCESS_DEMO',
            FAILED: 'FAILED_DEMO',
            INVALIDATE: 'INVALIDATE_DEMO',
        });
    });
});
