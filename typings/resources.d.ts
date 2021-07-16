declare module '*.png' {
  const path: string
  export = path
}

declare module '*.jpg' {
  const path: string
  export = path
}

declare module '*.jpeg' {
  const path: string
  export = path
}

declare module '*.gif' {
  const path: string
  export = path
}

declare module '*.svg' {
    const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
    export default value;
}

