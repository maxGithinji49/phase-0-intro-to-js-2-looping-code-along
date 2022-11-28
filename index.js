// Code your solutions in this file
const names= ['Guadalupe', 'Olie', 'Aki']
function writeCards(names){
    const messages = []
     
    for(let i = 0; i < names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        messages.push(message);
    }
    return messages
 }

 function countDown (num) {
    while (num>=0)
   {
       console.log(num--)
   }
}