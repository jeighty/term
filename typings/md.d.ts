declare module "*.md" {
    const content: string;
    export = content;
}

declare module "*.md?url" {
    const content: string;
    export = content;
}

declare module "*.md?content" {
    const content: string;
    export = content;
}

