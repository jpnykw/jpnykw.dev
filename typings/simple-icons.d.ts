declare module 'simple-icons/icons/*' {
  interface Icon {
    title: string
    slug: string
    svg: string
    source: string
    hex: string
    path: string
  }
  const icon: Icon
  export = icon
}
