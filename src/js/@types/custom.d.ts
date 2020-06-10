declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.md' {
  const content: string
  export default content
}

declare module '*.json' {
  const content: any
  export default content
}

declare module '*tailwind' {
  const content: any
  export default content
}

declare module '*.mdx' {
  let MDXComponent: (props: { components: any }) => JSX.Element;
  export default MDXComponent;
}