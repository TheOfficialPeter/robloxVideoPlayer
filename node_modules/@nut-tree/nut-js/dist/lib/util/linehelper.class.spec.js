"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_class_1 = require("../point.class");
const linehelper_class_1 = require("./linehelper.class");
describe("LineHelper", () => {
    it("should return a diagonal line from (0,0) to (10,10)", () => {
        const SUT = new linehelper_class_1.LineHelper();
        const from = new point_class_1.Point(0, 0);
        const to = new point_class_1.Point(10, 10);
        const expected = [];
        for (let idx = 0; idx <= to.x; ++idx) {
            expected.push(new point_class_1.Point(idx, idx));
        }
        const result = SUT.straightLine(from, to);
        expect(result.length).toBe(expected.length);
        for (let idx = 0; idx < result.length; ++idx) {
            expect(result[idx]).toEqual(expected[idx]);
        }
    });
    it("should return a diagonal line from (10,10) to (0,0)", () => {
        const SUT = new linehelper_class_1.LineHelper();
        const from = new point_class_1.Point(10, 10);
        const to = new point_class_1.Point(0, 0);
        const expected = [];
        for (let idx = 10; idx >= to.x; --idx) {
            expected.push(new point_class_1.Point(idx, idx));
        }
        const result = SUT.straightLine(from, to);
        expect(result.length).toBe(expected.length);
        for (let idx = 0; idx < result.length; ++idx) {
            expect(result[idx]).toEqual(expected[idx]);
        }
    });
});
//# sourceMappingURL=linehelper.class.spec.js.map