

declare module "docs:all" {
    import type { Docs } from "./rewrite_docs";

    const value: Record<string, () => Promise<Docs>>;
    export default value;
}

declare module "docs:v-*" {
    import { Docs } from "./rewrite_docs";

    export default Docs;
}

declare module "docs:latest" {
    export default string;
}