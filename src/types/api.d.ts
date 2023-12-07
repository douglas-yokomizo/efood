export interface Restaurant
  {
    id?: number,
    titulo: string,
    destacado?: boolean,
    tipo?: string,
    avaliacao?: number,
    descricao: string,
    capa: string,
  }

  export interface MenuItem
    {
      foto: string,
      preco: number,
      id: number,
      nome: string,
      descricao: string,
      porcao: string
    }

export interface Product {
  id: number,
  price: number
}

export interface Purchase {
  products: Product[],
  delivery: {
    receiver: string,
    address: {
      description: string,
      city: string,
      zipCode: string,
      number: number,
      complement?: string
    }
  },
  payment :{
    card: {
      name: string,
      number: string,
      code: number,
      expires: {
        month: number,
        year: number
      }
    }
  }
}


