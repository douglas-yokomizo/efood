export interface Restaurant
  {
    id: number,
    title: string,
    spotlight: string,
    category?: string,
    score?: number,
    description: string,
    cover: string,
    menu?: [
      {
        photo: string,
        price: number,
        id: number,
        name: string,
        description: string,
        size: string,
      }
    ]
  }

