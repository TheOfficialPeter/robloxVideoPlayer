const libnut = require("./index.js");

describe("libnut", () => {
  it.each([
    ["captureScreen"],
    ["dragMouse"],
    ["getMousePos"],
    ["getScreenSize"],
    ["getXDisplayName"],
    ["keyTap"],
    ["keyToggle"],
    ["mouseClick"],
    ["mouseToggle"],
    ["moveMouse"],
    ["scrollMouse"],
    ["setKeyboardDelay"],
    ["setMouseDelay"],
    ["setXDisplayName"],
    ["typeString"],
    ["typeStringDelayed"],
    ["getWindows"],
    ["getActiveWindow"],
    ["getWindowRect"],
    ["getWindowTitle"]
  ])("should provide a %s method", method => {
    // GIVEN

    // WHEN

    // THEN
    expect(libnut).toHaveProperty(method, expect.any(Function));
  });

  it("should provide a screen object", () => {
    // GIVEN

    // WHEN

    // THEN
    expect(libnut).toHaveProperty(
      "screen",
    );
  });

  it("screen should provide a capture function", () => {
    // GIVEN
    const screen = libnut.screen;

    // WHEN

    // THEN
    expect(screen).toHaveProperty(
      "capture"
    );
  });

  it("screen should provide a highlight function", () => {
    // GIVEN
    const screen = libnut.screen;

    // WHEN

    // THEN
    expect(screen).toHaveProperty(
      "highlight"
    );
  });
});
