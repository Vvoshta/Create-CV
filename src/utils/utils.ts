import dayjs, { Dayjs } from 'dayjs';

export const dateFormatted = (date: string | Dayjs): string =>
    dayjs(date).format('DD.MM.YYYY');

export const agesFormatted = (date: string | Dayjs): number => {
    const birthday = dayjs(date);
    const ageInMilliseconds = dayjs().diff(birthday, 'millisecond');
    return Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
};
