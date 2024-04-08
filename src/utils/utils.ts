import dayjs, { Dayjs } from 'dayjs';

export const dateFormatted = (date: Dayjs) => dayjs(date).format('DD.MM.YYYY');

export const agesFormatted = (date: Dayjs) => {
    const birthday = dayjs(date);
    const ageInMilliseconds = dayjs().diff(birthday, 'millisecond');
    return Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
};
