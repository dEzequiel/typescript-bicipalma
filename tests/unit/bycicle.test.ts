import { Bycicle } from "../../src/domain/bycicle";

const bycicle = new Bycicle(1);

test('should return 1', () => {
    expect(bycicle.getId()).toBe(1);
});

test('print ID', () => {
    expect(bycicle.toString()).toBe("ID: 1");
});