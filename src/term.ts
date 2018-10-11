"use strict";

import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";
import * as term from "page/term.md";

const isDev = () => process.env.NODE_ENV === 'development';
const directory = isDev() ? path.join(process.cwd(), 'dist') : app.getAppPath();

app.on("ready", () => {
  const win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(
    url.format({
      pathname: path.join(directory, term),
      protocol: "file:",
      slashes: true,
    }),
  );
});
