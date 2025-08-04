interface ArticleInterface {
    id: number;
    title: string;
    description: string;
    author: string;
    coverImage: string;
    publishedAt: string;
}
interface PublicationInterface {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    isbn: string;
    pages: number;
    publicationDate: string;
    publisher: string;
    price: number;
    coverImage: string;
    storeLinks:Object;
}