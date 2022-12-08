declare module '*.webp' {
  const path: string
  export = path
}

declare module '*.svg' {
    const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
    export default value;
}

