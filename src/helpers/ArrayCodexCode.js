export const NewArray = (Row)=>{
    const arrayMap = Row.map((item) => {
        return [item.codeBet, item];
      });
      const countriesMapArr = new Map(arrayMap);
      
      const uniqArr = [...countriesMapArr.values()];
    
      const newArr = uniqArr.map((e) => {
        return {
          codeBet: e.codeBet,
          comienza: e.comienza,
          n_bet: e.n_bet,
          titulo: e.titulo, 
          subTitulo: e.subTitulo,
          bets: Row
            .filter((item) => item.codeBet === e.codeBet)
            .map(({codeBet, comienza, n_bet, idAccordion, statement, accordionStatement, multiplicador, codeBtn}) => {return {idAccordion, statement, accordionStatement, multiplicador, codeBtn}}),
        };
      });
      return newArr;
}