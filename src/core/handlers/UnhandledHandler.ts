import { PacketHandler, PacketHandlerCallback } from "../network/PacketHandler";
import { Log } from "../utils/Log";

export default class UnhandledHandler extends PacketHandler {
  public static opcodes = [];

  public static handlePacket: PacketHandlerCallback = (client, packet) => {
    Log.warning(
      `Unhandled packet ${
        packet.getBuffer().toJSON().data
      } ${packet.getBuffer()}`,
    );
  };
}