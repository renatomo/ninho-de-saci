import CoverImage from './cover.png';
import CoverText from './cover-text.png';
import Page1 from './pagina1.jpg';
import Page1Text from './pagina1-texto1.png';

const images = {
  cover: { image: CoverImage, text: CoverText },
  pages: [
    {
      order: 1,
      image: Page1,
      text: Page1Text,
    },
  ],
  Page1,
};

export default images;
