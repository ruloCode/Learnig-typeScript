export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation
}
function showPicture(picture: Picture){
  console.log(`[
    title: ${picture.title},
    date: ${picture.date},
    orientation: ${picture.orientation}]`);
}

let myPic = {
  title: 'title test',
  date: '01/01/0100',
  orientation: PhotoOrientation.Landscape
}
showPicture(myPic);