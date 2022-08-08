const fileRegex = /\.lang\.json$/

export default function translationStripper() {
    return {
        name: 'vite-plugin-strip-translation',

        transform(src, id) {
            if (fileRegex.test(id)) {
                let json = JSON.parse(src);

                Object.keys(json).forEach(key => {
                    if (!key.startsWith("figura.docs")) {
                        delete json[key]
                    }
                })

                return {
                    // we're doing this before the built-in plugins
                    // and since we're targetting .json files
                    // the builtin JSON parser will parse our output
                    // so instead of outputting straight JS code
                    // we just output JSON code for the
                    // builtin JSON parser to read
                    code: JSON.stringify(json),
                    map: null
                }
            }
        },

        enforce: "pre"
    }
}