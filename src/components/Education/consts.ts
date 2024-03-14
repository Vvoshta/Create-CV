export enum DegreeOptions {
    Bachelor = 'Бакалавриат',
    Master = 'Магистратура'
}

export const degreeOptions = Object.keys(DegreeOptions).map((key) => ({
    value: DegreeOptions[key as keyof typeof DegreeOptions],
    label: DegreeOptions[key as keyof typeof DegreeOptions]
}));
