import {rgbToHex} from "../src";

test('should correctly convert rgb value to hex', () => {
    expect(rgbToHex(0, 0, 0)).toEqual('#000000')
    expect(rgbToHex(255, 255, 255)).toEqual('#FFFFFF')
    expect(rgbToHex(60, 44, 210)).toEqual('#3C2CD2')
    expect(rgbToHex(118, 60, 99)).toEqual('#763C63')
})

test('should return undefined when invalid rgb value is entered', () => {
    expect(rgbToHex(999, 0, 0)).toBeUndefined();
    expect(rgbToHex(0, 999, 0)).toBeUndefined();
    expect(rgbToHex(0, 0, 999)).toBeUndefined();
    expect(rgbToHex(115, -30, 22)).toBeUndefined()
    expect(rgbToHex(256, 244, 110)).toBeUndefined()
})
