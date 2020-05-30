import styled from 'styled-components/native';
import { Text } from './../../components';
import { FontSize } from './../../styles';

export const Container = {
    Wrapper: styled.View`
        flex: 1;
        align-items: center;
        justify-content: center;
    `,
    CustomText: styled(Text)`
        font-size: ${() => FontSize.SIZE_36};
        color: red;
    `,
};
