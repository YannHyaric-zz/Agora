const data = {
    products: [
      {
        _id: "1",
        nome: "Detergente Marina",
        categoria: "Detergente",
        imagem: "/imagems/p1.jpg",
        preco: "R$1.99",
        countInStock: 10,
        Marca: "Marina",
        estrelas: 4.5,
        numReviews: 10,
        descricao:
          "Detergente da marca Marina nos aromas neutro, maça, limão e clear.",
        temPromo: true,
        promo: (
          <span>
            <s>R$1.99</s> <span>R$1,29</span>
          </span>
        ),
      },
      {
        _id: "2",
        nome: "Água Sanitária Clarix",
        categoria: "água sanitária",
        imagem: "/imagems/p2.jpg",
        preco: "R$1.89",
        countInStock: 20,
        Marca: "Clarix",
        estrelas: 4.0,
        numReviews: 10,
        descricao: "Água Sanitária da marca Clarix",
        temPromo: false,
      },
      {
        _id: "3",
        nome: "Sabonete Liquido Linn Spa",
        categoria: "Sabonete",
        imagem: "/imagems/p3.jpg",
        preco: "R$15.00",
        countInStock: 0,
        Marca: "Lacoste",
        estrelas: 4.8,
        numReviews: 17,
        descricao:
          "Sabonetes para mãos, rosto e corpo, que proporcionam maciez e hidratação. Qual o seu preferido?",
        temPromo: true,
        promo: (
          <span>
            <s>R$22.00</s> <span>R$15.99</span>
          </span>
        ),
      },
      {
        _id: "4",
        nome: "Água Sanitária Classic",
        categoria: "Água Sanitária",
        imagem: "/imagems/p4.jpg",
        preco: "R$12.99",
        countInStock: 15,
        Marca: "Classic",
        estrelas: 4.5,
        numReviews: 14,
        descricao: "high quality product",
        temPromo: false,
      },
      {
        _id: "5",
        nome: "DetMol Sandet",
        categoria: "Carros",
        imagem: "/imagems/p5.jpg",
        preco: "25.89",
        countInStock: 5,
        Marca: "Puma",
        estrelas: 4.5,
        numReviews: 10,
        descricao:
          "Produto de qualidade para limpeza automotiva e que não danifica a pintura.",
        temPromo: false,
      },
      {
        _id: "6",
        nome: "Span Desinfetante",
        categoria: "Pants",
        imagem: "/imagems/p6.jpg",
        preco: "R$139.99",
        countInStock: 12,
        Marca: "Adidas",
        estrelas: 4.5,
        numReviews: 15,
        temPromo: false,
        descricao: "high quality product",
      },
      {
        _id: "7",
        nome: "Lixeiras X",
        categoria: "Lixeiras",
        imagem: "/imagems/p7.jpg",
        preco: "R$19.90 a R$99.90",
        countInStock: 12,
        Marca: "X",
        estrelas: 4.5,
        numReviews: 15,
        temPromo: false,
        descricao: "Lixeiras tamanho P, M, G e GG",
      },
    ],
  };
  export default data;
  