/// <reference types="react-scripts" />
declare module "*.md" {
    const src: string;
    export default src;
}
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}