import { getReactionSymbol } from "./utils";

describe("Render the correct Reaction Symbol", () => {
  it("Should Render LIKE", () => {
    expect(getReactionSymbol("LIKE")).toEqual("👍");
  });

  it("Should Render LOVE", () => {
    expect(getReactionSymbol("LOVE")).toEqual("❤️");
  });

  it("Should Render HAHA", () => {
    expect(getReactionSymbol("HAHA")).toEqual("😂");
  });

  it("Should Render WOW", () => {
    expect(getReactionSymbol("WOW")).toEqual("😮");
  });

  it("Should Render SAD", () => {
    expect(getReactionSymbol("SAD")).toEqual("😢");
  });

  it("Should Render ANGRY", () => {
    expect(getReactionSymbol("ANGRY")).toEqual("😡");
  });

  it("Should Render CARE", () => {
    expect(getReactionSymbol("CARE")).toEqual("🤗");
  });

  it("Should Render a question mark", () => {
    expect(getReactionSymbol("INVALID YEP")).toEqual("❔");
  });
});
