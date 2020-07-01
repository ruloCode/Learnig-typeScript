export{}

function createUser(title?: string, date?: string, size?: number){
  return `User ${title}, ${date}, ${size}`;
}

createUser('tech', '10/10/100', 50);
// parametros opcionales ?

// flat Array function

const createMaster = (name: string, lastname: string): object => {
  return {
    name,
    lastname,
  }
}

const Camilo = createMaster('Camilo', 'Santana')

// tipo de retorno

const handleError = (code: number, message: string ): never | string => {

  if(message == 'error'){
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'An error has occurred';
  }
}