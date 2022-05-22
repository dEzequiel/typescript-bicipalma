import { Bycicle } from "../../src/domain/bycicle";
const bycicle = new Bycicle(1);

test('das 1', () => {
    expect(bycicle.getId()).toBe(1);
})
