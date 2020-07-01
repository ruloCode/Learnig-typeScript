function showInfo(user: any): any{
  console.log(`
  User info:
  ${user.name}
  `)
}

let unusable: void;
unusable = null;
unusable = undefined
// never

function handleError(code: number, message: string): never{

  // Process
  // Generate a message
  throw new Error(`${message}. code: ${code}`)
}