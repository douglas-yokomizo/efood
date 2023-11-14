class Restaurant {
  title: string
  score: number
  image: string
  description: string
  category: string
  id: number
  spotlight: string

  constructor (id:number, category:string, description:string, image: string, score: number, title: string, spotlight: string) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.score = score
    this.title = title
    this.spotlight = spotlight
  }
}

export {Restaurant}
