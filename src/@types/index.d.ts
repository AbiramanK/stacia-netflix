declare module "*.m4v";

interface AppMenuInterface {
  title: string;
  link: string;
}

interface CategoryInterface {
  id: number;
  slug: string;
  name: string;
}

interface GenreInterface {
  id: number;
  slug: string;
  name: string;
}

interface MovieCertificateInterface {
  id: number;
  slug: string;
  name: string;
}

interface CoverPictureInterface {
  desktop: string;
  mobile: string;
}

interface MovieInterface {
  id: number;
  category: CategoryInterface;
  slug: string;
  name: string;
  thumbnail: string;
  coverPicture: CoverPictureInterface;
  titleImage: string;
  releaseYear: number;
  genre: GenreInterface;
  certificate: MovieCertificateInterface;
  duration?: number;
  description: string;
  starring: string;
  creators?: string;
  numberOfSeasons?: number;
}
