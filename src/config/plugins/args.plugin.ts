import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "base of table to multiply",
  })
  .options("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "limite of table to multiply",
  })
  .options("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show table to multiply",
  })
  .options("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "File name",
  })
  .options("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })
  .check((argv, options) => {
    // console.log({ argv, options });
    const { b } = argv;
    if (typeof b !== "number") {
      throw "La base tiene que ser un numero";
    }
    if (b < 1) {
      throw "La base tiene que ser un numero y mayor a cero";
    }
    return true;
  })
  .parseSync();
