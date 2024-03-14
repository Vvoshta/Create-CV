import React from 'react';

import * as S from './style';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return <S.StyledP>{title}</S.StyledP>;
};

export { Title };
