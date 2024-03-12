import React, { PropsWithChildren } from 'react';

import * as S from './style';

export interface InfoBlockProps {
    label: string;
}

const InfoBlock: React.FC<PropsWithChildren<InfoBlockProps>> = ({
    children,
    label
}) => {
    return (
        <S.StyledLine>
            <label>
                <p>{label}</p>
                {children}
            </label>
        </S.StyledLine>
    );
};

export { InfoBlock };
