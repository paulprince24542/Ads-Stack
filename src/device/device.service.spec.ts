import { io, Socket } from "socket.io-client";

describe("Device Socket Test", () => {

  let socket: Socket;

  const DEVICE_ID = "TV-123";
  const API_KEY =
    "27b920feaa89977885d3980cf8205c6a1e499f8ac8059c2201ed305f529b1145";

  beforeAll((done) => {

    socket = io("http://localhost:4001", {
      query: {
        deviceId: DEVICE_ID,
        apiKey: API_KEY
      }
    });

    socket.on("connect", () => {
      console.log("Test device connected:", socket.id);
      done();
    });

  });

  afterAll(() => {
    socket.disconnect();
  });

  it("should receive playlist update event", (done) => {

    const timeout = setTimeout(() => {
      done.fail("playlist_updated event not received");
    }, 5000);

    socket.once("playlist_updated", (data) => {

      clearTimeout(timeout);

      expect(data).toBeDefined();
      expect(data.message).toBe("New video added to playlist");

      done();

    });

  });

});