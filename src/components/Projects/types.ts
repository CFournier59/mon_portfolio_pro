export type TagImage = {
   text: string
   icon: string
   type: 'image'
}

export type TagIcon = {
   text: string
   icon: React.ComponentType<{ size?: number }>
   type: 'component'
}

export type Tag = TagImage | TagIcon

export type Project = {
   title: string
   description: string
   image: { src: string; alt: string }
   tags: Tag[]
   liveUrl: string
   githubUrl: string
}
