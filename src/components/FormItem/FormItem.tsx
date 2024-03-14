import React, { PropsWithChildren } from 'react';

import * as S from './style';

interface FormItemProps {
    label: string;
}

const FormItem: React.FC<PropsWithChildren<FormItemProps>> = ({
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

export { FormItem };
