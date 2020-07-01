export {}
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Entity {
  id: number;
  title: string;
}
interface Album extends Entity {
  description: string;
}
interface Picture extends Entity {
  orientation: PhotoOrientation
}
const album: Album = {
  id: 1,
  title: 'titanic',
  description: 'blabla'
}
const picture: Picture = {
  id: 2,
  title: 'photo1',
  orientation: PhotoOrientation.Landscape
}

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'soon';

