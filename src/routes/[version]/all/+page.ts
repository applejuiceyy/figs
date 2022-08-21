
import type { PageLoad } from "./$types";

let load: PageLoad = function ({params}) {
    return {
        base: `/${params.version}/all#`,
        showingEverything: true,
        everythingSwitcher: `/${params.version}/`
    };
};

export { load };
