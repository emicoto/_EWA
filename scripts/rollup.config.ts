import { Plugin, RollupOptions } from "rollup";
// TODO: Replace this when "rollup-plugin-esbuild" fixes their sourcemap issues.
import esbuild, { Options } from "rollup-plugin-esbuild-transform";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { IIFE } from "./plugin";
import multiInput from "rollup-plugin-multi-input";
import del from "rollup-plugin-delete";
// import { partytownRollup } from '@builder.io/partytown/utils';
// import path from 'path'

const env = process.env.NODE_ENV;
const isProduction = env === "production";

const sharedOptions: Options = {
	minify: isProduction,
	target: "es2020",
	define: {
		// Avoids issues with the Node-specific variable `process`.
		"process.env.NODE_ENV": JSON.stringify(env),
	},
};
const plugins: Plugin[] = [
	esbuild([
		{ loader: "json", ...sharedOptions },
		{ loader: "ts", ...sharedOptions },
	]),
	nodeResolve({ browser: true }),
	commonjs({ extensions: [".js", ".json"] }),
	IIFE.createPlugin(),
];

export const configs: RollupOptions[] = [
	{
		input: "src/main.ts",
		plugins,
		external: ["phaser"],
		output: {
			format: "iife",
			file: "src/init.js",
			sourcemap: "inline",
			globals: { phaser: "Phaser" },
		},
	},
	{
		input: "Lib/Data/index.ts",
		plugins,
		output: {
			format: "iife",
			file: "src/Lib.js",
			sourcemap: "inline",
		},
	},

	{
		input: ["Lib/Module/**/*.ts"],
		plugins: [multiInput({ relative: "Lib/Module/" }), ...plugins, del({ targets: "modules/Lib/" })],
		output: {
			format: "commonjs",
			dir: "modules/Lib",
			sourcemap: "inline",
		},
	},
];
//export const configs: RollupOptions[] = [
// {
//   input: 'src/main.ts',
//   plugins,
//   external: ['@lib'],
//   output: { format: 'iife', file: 'src/init.js', globals: { '@lib': 'lib' }, sourcemap: 'inline' }
// },
// {
//   input: 'lib/index.ts',
//   external: ['rita'],
//   plugins,
//   output: { format: 'iife', file: './gh-pages/main.js', globals: { rita: 'RiTa' }, name: 'lib', sourcemap: true }
// },
// {
//   input: 'lib/sentry.ts',
//   plugins,
//   output: { format: 'iife', file: './gh-pages/sentry.js', sourcemap: false }
// },
// {
//   input: 'rita',
//   plugins,
//   output: { format: 'iife', file: './gh-pages/rita.js', name: 'RiTa', sourcemap: false }
// }
//]
