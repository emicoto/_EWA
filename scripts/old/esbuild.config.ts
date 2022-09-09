import { build, BuildOptions } from "esbuild";
import { globPlugin } from "esbuild-plugin-glob";
import esbuild from "esbuild";
import serve, { error, log, IStartOptions } from "create-serve";
interface IOptions extends IStartOptions {
	onBeforeRebuild?(): void;
	onAfterRebuild?(): void;
}

const isWatch = process.argv.includes("-w");

const esbuildServe = async (options = {}, serveOptions: IOptions = {}) => {
	const { onAfterRebuild, onBeforeRebuild } = serveOptions;
	esbuild
		.build({
			...options,
			watch: isWatch && {
				onRebuild(err) {
					onBeforeRebuild && onBeforeRebuild();
					serve.update();
					onAfterRebuild && onAfterRebuild();
					err ? error("× Failed") : log("✓ Updated");
				},
			},
		})
		.catch(() => process.exit(1));

	if (isWatch) {
		serve.start(serveOptions);
	}
};
const options: BuildOptions = {
	entryPoints: ["code/**/*.ts"],
	charset: "utf8",
	bundle: true,
	entryNames: "[dir]/[name]",
	outbase: "code",
	outdir: "./modules",
	//outdir: "./src/",
	//outfile: "./src/*.js",
	// tsconfig: "./Code/tsconfig.json",
	target: "chrome58,firefox57,safari11,edge16".split(","),
	plugins: [globPlugin()],
	format: "esm",
};
esbuildServe(options, {
	port: 8008,
	root: "./public",
	live: true,
	onBeforeRebuild,
	onAfterRebuild,
});
function onBeforeRebuild() {}
function onAfterRebuild() {
	console.log("onAfterRebuild");
}
