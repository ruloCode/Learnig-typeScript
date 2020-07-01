export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}
// super clase
class Item {
  protected _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }
 get id() {
      return this._id;
    }
    set id(id: number) {
      this._id = id;
    }
}

class Picture extends Item {
  //propiedades

  orientation: PhotoOrientation;

  constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation
    ) {
      super(id, title);
      this.orientation = orientation;
    }
    toString() {
      return `[
                id: ${this.id},
                title: ${this.tile},
                orientation: ${this.orientation}]`;
    }
}

export class Album extends Item {
  pictures: Picture[];

  constructor(
    id: number,
    title: string,
  ){
    super(id, title);
    this.pictures = []
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal profile');
const picture: Picture = new Picture(1,'photo1', PhotoOrientation.Landscape)
album.addPicture(picture)