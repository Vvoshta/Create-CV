export enum SkillsOptions {
    React = 'React',
    Angular = 'Angular',
    Vue = 'Vue',
    Typescript = 'Typescript',
    Sass = 'Sass/Scss',
    StyledComponents = 'Styled components',
    MaterialUI = 'Material UI',
    RestAPI = 'Rest API',
    Webpack = 'Webpack',
    Vite = 'Vite'
}

export const selectOptions = Object.keys(SkillsOptions).map((key) => ({
    value: SkillsOptions[key as keyof typeof SkillsOptions],
    label: SkillsOptions[key as keyof typeof SkillsOptions]
}));
