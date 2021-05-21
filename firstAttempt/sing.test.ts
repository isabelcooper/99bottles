import {Bottles} from "./sing";

describe("sing", () => {
  const song: string[] = new Bottles().sing();

  it("looks about right", () => {
    expect(song.length).toEqual(200);
    expect(song[0]).toEqual('99 bottles of beer on the wall, 99 bottles of beer.');
    expect(song[1]).toEqual('Take one down and pass it around, 98 bottles of beer on the wall.');
  })
  it("handles the single bottle", () => {
    expect(song[196]).toEqual('1 bottle of beer on the wall, 1 bottle of beer.');
  })

  it("completes the song", () => {
    expect(song[197]).toEqual('Take one down and pass it around, no more bottles of beer on the wall.');
    expect(song[198]).toEqual('No more bottles of beer on the wall, no more bottles of beer.');
    expect(song[199]).toEqual('Go to the store and buy some more, 99 bottles of beer on the wall.');
  })
});
