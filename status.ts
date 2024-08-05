import { ElysiaApp } from "@/.";

export default (app: ElysiaApp) => app.get("/", { status: "online" });
