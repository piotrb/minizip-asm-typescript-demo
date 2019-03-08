declare module "minizip-asm.js" {
  interface ListResult {
    filepath: string;
    crypt: boolean;
  }

  type StringType = string | Buffer | Uint8Array;

  class Minizip {
    constructor(buffer?: Buffer | Uint8Array);
    list(options?: { encoding?: "utf8" | "buffer" }): ListResult[];
    extract(
      filepath: StringType,
      options?: { encoding?: "utf8" | "buffer"; password?: StringType }
    ): Buffer;
    append(
      filepath: StringType,
      data: StringType,
      options?: {
        password?: StringType;
        compressLevel?: number;
      }
    ): void;
    zip(): Buffer;
  }
  export = Minizip;
}
