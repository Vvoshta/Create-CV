import React, { PropsWithChildren } from 'react';
import { Title } from '../Title/Title';
import * as S from './style';

export interface CardProps {
    title: string;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({ children, title }) => {
    return (
        <div>
            <Title title={title} />
            <S.Wrapper>
                <S.Inner>{children}</S.Inner>
            </S.Wrapper>
        </div>
    );
};

export { Card };
