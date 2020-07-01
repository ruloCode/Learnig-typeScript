let username : any ;

username = 'camilo';

let message : string = (<string>username).length > 5 ?
  `Welcome ${username}`:
  'User is too short';
console.log('message', message);

message  = (username as string).length > 5 ?
  `Welcome ${username}`:
  'User is too short';
console.log('message', message);