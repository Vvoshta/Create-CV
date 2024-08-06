import React from 'react';
import * as S from './style';

interface PreviewBlockProps {
    componentRef: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
}

export const PreviewBlock: React.FC<PreviewBlockProps> = ({
    componentRef,
    children
}) => {
    return <S.Wrapper ref={componentRef}>{children}</S.Wrapper>;
};
