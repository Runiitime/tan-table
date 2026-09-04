import { faker } from '@faker-js/faker';

const personStatus = ['relationship', 'complicated', 'single'];

export interface IPerson {
    firstName: string;
    lastName: string;
    age: string;
    visits: string;
    progress: string;
    status: string;
}

export const newPerson = (): IPerson => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40).toString(),
    visits: faker.number.int(1000).toString(),
    progress: faker.number.int(100).toString(),
    status: faker.helpers.shuffle<IPerson['status']>(personStatus)[0]!,
});

export const makeData = (): IPerson[] => {
    let data: IPerson[] = [];
    for (let i = 0; i < 200; i++) {
        data.push(newPerson());
    }

    return data;
};
