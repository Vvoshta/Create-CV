import React, { PropsWithChildren } from 'react';
import * as S from './style';

export const PreviewBlock: React.FC<PropsWithChildren> = ({ children }) => {
    return <S.Wrapper>{children}</S.Wrapper>;
};
