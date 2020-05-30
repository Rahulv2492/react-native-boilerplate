import React from 'react';
import PropTypes from 'prop-types';

import CustomText from './Text.style';
import { DEFAULT_FONT_SIZE } from './../../styles';

const Text = ({ children, type, ...rest }) => {
    return (
        <CustomText type={type} {...rest}>
            {children}
        </CustomText>
    );
};

Text.defaultProps = {
    type: 'body',
};
Text.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(Object.keys(DEFAULT_FONT_SIZE)),
    rest: PropTypes.object,
};

export default Text;
