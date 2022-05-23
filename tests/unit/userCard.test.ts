import { UserCard } from "../../src/domain/userCard";

const userCard = new UserCard('Patrick', 11578);

test('default card status is false', () => {
    expect(userCard.checkStatus()).toBeFalsy();
});

test('card status handly activated', () => {
    userCard.setStatus(true);
    expect(userCard.checkStatus()).toBeTruthy();
});

test('should return object and string representation', () => {
    expect(userCard.toString()).toBeInstanceOf(Object);
    expect(userCard.toString()).toStrictEqual({'NAME':'Patrick', 'ID':11578, 'CARD STATUS': true});
});