export {}


type IdUser = number | string ;
type UserName = string;
let idUser: IdUser ;
idUser = 10;
idUser = '10';


function getUserNameById(id: IdUser ): UserName {
  return 'camilo';
}

// alias
// Tipos literales

type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture : SquareSize = '100x100';

