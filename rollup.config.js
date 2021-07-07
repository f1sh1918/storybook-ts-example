import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import multiInput from "rollup-plugin-multi-input";

import pkg from "./package.json";

export default {
    input: ["src/index.ts", "src/components/index.ts", "src/constants/index.ts", "src/utils/index.ts"],
    output: [
        {
            format: "esm",
            dir: "lib",
        },
    ],
    plugins: [
        multiInput({ relative: "src/" }),
        typescript({ useTsconfigDeclarationDir: false }),
        json(),
        external(),
        babel({
            exclude: "node_modules/**",
        }),
        commonjs(),
        del({ targets: ["lib/*"] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
