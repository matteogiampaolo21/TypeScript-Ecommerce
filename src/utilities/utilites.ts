// export function checkScreen(dimension){
//     console.log(window.screen.availWidth)
//     if (window.screen.availWidth <= 535){
//         return [300,198]
//     }else{
//         return [500,330]
//     }
// }

export const smallText = (text:string,limit:number) => {
    let newText = '';
    for (let i = 0;i < limit;i++){
      if(text[i] === undefined){
        return text;
      }else{
        newText += text[i]; 
      }
    }
    newText += '...';
    return newText;
}
export const capFirst = (text:string | undefined) =>{
    if (text === undefined){return}
    return text.charAt(0).toUpperCase() + text.slice(1)
}