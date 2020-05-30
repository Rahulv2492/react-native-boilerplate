import styled from 'styled-components/native';
import { DEFAULT_FONT_SIZE } from './../../styles';

const CustomText = styled.Text`
    font-size: ${({ type }) =>
        DEFAULT_FONT_SIZE[type] || DEFAULT_FONT_SIZE.body};
    ${({ type }) =>
        ['h1', 'h2', 'h3'].includes(type) ? 'font-weight: bold;' : null}
`;

export default CustomText;
