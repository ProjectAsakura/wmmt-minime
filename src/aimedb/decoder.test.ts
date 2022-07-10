import { Decoder } from "./decoder";

function decode(req) {
    const decoder = new Decoder();

    decoder.write(req);

    return decoder.read();
}

test("decode hello", () => {
    const req = Buffer.from([
        0x3e,
        0xa1,
        0x87,
        0x30,
        0x64,
        0x00,
        0x20,
        0x00,
        0x00,
        0x00,
        0x53,
        0x44,
        0x42,
        0x54,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x41,
        0x36,
        0x39,
        0x45,
        0x30,
        0x31,
        0x41,
        0x39,
        0x39,
        0x39,
        0x39,
        0x00,
    ]);

    const obj = decode(req);

    expect(obj.type).toBe("hello");
    expect(obj.gameId).toBe("SDBT");
    expect(obj.keychipId).toBe("A69E01A9999");
});

test("decode lookup", () => {
    const req = Buffer.from([
        0x3e,
        0xa1,
        0x87,
        0x30,
        0x0f,
        0x00,
        0x30,
        0x00,
        0x00,
        0x00,
        0x53,
        0x44,
        0x42,
        0x54,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x41,
        0x36,
        0x39,
        0x45,
        0x30,
        0x31,
        0x41,
        0x39,
        0x39,
        0x39,
        0x39,
        0x00,
        0x01,
        0x03,
        0x64,
        0x95,
        0x85,
        0x05,
        0x23,
        0x03,
        0x06,
        0x76,
        0x01,
        0x02,
        0x22,
        0xc6,
        0x4e,
        0x00,
    ]);

    const obj = decode(req);

    expect(obj.type).toBe("lookup2");
    expect(obj.gameId).toBe("SDBT");
    expect(obj.keychipId).toBe("A69E01A9999");
    expect(obj.luid).toBe("01036495850523030676");
});
