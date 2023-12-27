import { yarg } from "./config/plugins/args.plugin";
import { serverApp } from "./presentation/server-app";

(async () => {
  await Main();
})();

async function Main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;
  serverApp.run({ base, limit, showTable, fileName, fileDestination });
}
