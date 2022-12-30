"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libnut = require("@nut-tree/libnut");
const button_enum_1 = require("../../button.enum");
const point_class_1 = require("../../point.class");
const libnut_mouse_class_1 = __importDefault(require("./libnut-mouse.class"));
jest.mock("@nut-tree/libnut");
beforeEach(() => {
    jest.resetAllMocks();
});
describe("libnut mouse action", () => {
    describe("leftClick", () => {
        it("should forward leftClick call to libnut", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            // WHEN
            SUT.leftClick();
            // THEN
            expect(libnut.mouseClick).toBeCalledTimes(1);
            expect(libnut.mouseClick).toBeCalledWith("left");
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.mouseClick = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.leftClick()).rejects.toThrowError(error);
        });
    });
    describe("middleClick", () => {
        it("should forward middleClick call to libnut", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            // WHEN
            SUT.middleClick();
            // THEN
            expect(libnut.mouseClick).toBeCalledTimes(1);
            expect(libnut.mouseClick).toBeCalledWith("middle");
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.mouseClick = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.middleClick()).rejects.toThrowError(error);
        });
    });
    describe("rightClick", () => {
        it("should forward rightClick call to libnut", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            // WHEN
            SUT.rightClick();
            // THEN
            expect(libnut.mouseClick).toBeCalledTimes(1);
            expect(libnut.mouseClick).toBeCalledWith("right");
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.mouseClick = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.rightClick()).rejects.toThrowError(error);
        });
    });
    describe("pressButton", () => {
        it("should forward pressButton call to libnut with state 'down'", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            // WHEN
            SUT.pressButton(button_enum_1.Button.LEFT);
            // THEN
            expect(libnut.mouseToggle).toBeCalledTimes(1);
            expect(libnut.mouseToggle).toBeCalledWith("down", expect.any(String));
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.mouseToggle = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.pressButton(button_enum_1.Button.LEFT)).rejects.toThrowError(error);
        });
    });
    describe("releaseButton", () => {
        it("should forward pressButton call to libnut with state 'up'", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            // WHEN
            SUT.releaseButton(button_enum_1.Button.LEFT);
            // THEN
            expect(libnut.mouseToggle).toBeCalledTimes(1);
            expect(libnut.mouseToggle).toBeCalledWith("up", expect.any(String));
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.mouseToggle = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.releaseButton(button_enum_1.Button.LEFT)).rejects.toThrowError(error);
        });
    });
    describe("scrollUp", () => {
        it("should forward scrollUp call to libnut with positive y value", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const scrollAmount = 5;
            // WHEN
            SUT.scrollUp(scrollAmount);
            // THEN
            expect(libnut.scrollMouse).toBeCalledTimes(1);
            expect(libnut.scrollMouse).toBeCalledWith(0, scrollAmount);
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.scrollMouse = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.scrollUp(100)).rejects.toThrowError(error);
        });
    });
    describe("scrollDown", () => {
        it("should forward scrollDown call to libnut with negative y value", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const scrollAmount = 5;
            // WHEN
            SUT.scrollDown(scrollAmount);
            // THEN
            expect(libnut.scrollMouse).toBeCalledTimes(1);
            expect(libnut.scrollMouse).toBeCalledWith(0, -scrollAmount);
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.scrollMouse = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.scrollDown(100)).rejects.toThrowError(error);
        });
    });
    describe("scrollLeft", () => {
        it("should forward scrollLeft call to libnut with negative x value", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const scrollAmount = 5;
            // WHEN
            SUT.scrollLeft(scrollAmount);
            // THEN
            expect(libnut.scrollMouse).toBeCalledTimes(1);
            expect(libnut.scrollMouse).toBeCalledWith(-scrollAmount, 0);
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.scrollMouse = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.scrollLeft(100)).rejects.toThrowError(error);
        });
    });
    describe("scrollRight", () => {
        it("should forward scrollRight call to libnut with negative x value", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const scrollAmount = 5;
            // WHEN
            SUT.scrollRight(scrollAmount);
            // THEN
            expect(libnut.scrollMouse).toBeCalledTimes(1);
            expect(libnut.scrollMouse).toBeCalledWith(scrollAmount, 0);
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.scrollMouse = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.scrollRight(100)).rejects.toThrowError(error);
        });
    });
    describe("currentMousePosition", () => {
        it("should return the current mouse position via libnut", async () => {
            // GIVEN
            libnut.getMousePos = jest.fn(() => ({ x: 10, y: 100 }));
            const SUT = new libnut_mouse_class_1.default();
            // WHEN
            const currentPosition = await SUT.currentMousePosition();
            // THEN
            expect(currentPosition.x).toEqual(10);
            expect(currentPosition.y).toEqual(100);
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.getMousePos = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.currentMousePosition()).rejects.toThrowError(error);
        });
    });
    describe("setMousePosition", () => {
        it("should set the current mouse position via libnut", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            // WHEN
            SUT.setMousePosition(new point_class_1.Point(10, 100));
            // THEN
            expect(libnut.moveMouse).toBeCalledTimes(1);
            expect(libnut.moveMouse).toBeCalledWith(10, 100);
        });
        it("should reject on libnut errors", () => {
            // GIVEN
            const SUT = new libnut_mouse_class_1.default();
            const error = "Test error";
            libnut.moveMouse = jest.fn(() => {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.setMousePosition(new point_class_1.Point(100, 100))).rejects.toThrowError(error);
        });
    });
});
//# sourceMappingURL=libnut-mouse.class.spec.js.map