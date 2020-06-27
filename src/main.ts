
 // TIPO: NUMBER
 // Explicito

let phone : number;
phone = 555555;
 // phone = 'hola'; // Error

 // Inferido
let phoneNumber = 55555;

let hex: number = 0x5ffa;
let binary: number = 0b101010;
let octal: number = 0o744;

// TIPO: BOOLEAN
 // Explicito
let isPro: boolean;
isPro = false;

let isUserPro = false;

//TIPO: STRING

let userName: string = 'camilo'

// template String

let userInfo: string;
userInfo = `
  Hola mundo soy ${userName}
  mi numero es ${phone}
`