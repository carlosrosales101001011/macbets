export const randomNumber = (cantidad, posibles) => {
    const possible = posibles;
    let randomNumber = '';
    for (let i = 0; i < cantidad; i++) {
      randomNumber += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );
    }
    return randomNumber;
  };
export const randomDate = (date11, date22)=>{
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date11 || '01-01-1970'
    var date2 = date22 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1>date2){
        return new Date(getRandomArbitrary(date2,date1)).toLocaleDateString()   
    } else{
        return new Date(getRandomArbitrary(date1, date2)).toLocaleDateString()  

    }
}
export const yourRandomGenerator=(rangeOfDays,startHour,hourRange)=>{
  var today = new Date(Date.now());
  return new Date(today.getYear()+1900,today.getMonth(), today.getDate()+Math.random() *rangeOfDays, Math.random()*hourRange + startHour, Math.random()*60)
}
export const randomDate2 = (start, end, startHour, endHour)=>{
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}