import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"

export default {
    entry: "index.js",
    targets: [
        {
            dest: "lib/purifyhtml.es.js",
            format: "es"
        },
        {
            dest: "lib/purifyhtml.js",
            format: "cjs"
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**",
            presets: [["es2015", { modules: false }]]
        })
    ],
    external: ["posthtml"],
    sourceMap: false
}
