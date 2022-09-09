import { spawn } from "child_process";
import * as path from "path";
import { platform, arch } from "os";
const _resolve = (...w: string[]) => path.resolve(__dirname, `../`, ...w);

const SYSTEM = {
	platform: platform(),
	arch: arch(),
};
console.log(SYSTEM);
const tweego = () => {
	const system: any = {
		win32: "win",
		linux: "linux",
		darwin: "osx",
	};
	if (!system[SYSTEM.platform])
		throw new Error("请用 Windows系统, Linux系统 或 Mac系统");
	return _resolve(
		`devTools/tweego/tweego_${system[SYSTEM.platform]}${
			SYSTEM.arch.includes("64") ? "64" : "86"
		}${SYSTEM.platform === "win32" ? ".exe" : ""}`
	);
};
const COMMANDS = [tweego()];
const TWEEGO_PATH = _resolve("devTools/tweego/StoryFormats");
const Options: { [key: string]: any } = {
	html: `-o ${_resolve("public/index.html")}`,
	Head: `--head ${_resolve("devTools/head.html")}`,
	src: _resolve("src"),
	isWatch: process.argv.includes("-w") ? "-w" : "",
	modules: `--module ${_resolve("modules")}`,
	// ...getJS(),
};
for (const key in Options) {
	COMMANDS.push(Options[key]);
}

const string = COMMANDS.join(" ");
const result = spawn("cmd.exe", ["/c", string], {
	env: {
		TWEEGO_PATH,
	},
});
result.stdout.on("data", (data: { toString: () => any }) => {
	console.log(data.toString());
});

result.stderr.on("data", (data: { toString: () => any }) => {
	console.error(data.toString());
});
