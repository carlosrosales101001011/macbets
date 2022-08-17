export const NewArray = (Row)=>{
    const arrayMap = Row.map((item) => {
        return [item.codigo, item];
      });
      const countriesMapArr = new Map(arrayMap);
      
      const uniqArr = [...countriesMapArr.values()];
    
      const newArr = uniqArr.map((e) => {
        return {
          codigo: e.codigo,
          comienza: e.comienza,
          n_bet: e.n_bet,
          bets: Row
            .filter((item) => item.codigo === e.codigo)
            .map(({codigo, comienza, n_bet, idAccordion, statement, accordionStatement, multiplicador, codeBet}) => {return {idAccordion, statement, accordionStatement, multiplicador, codeBet}}),
        };
      });
      return newArr;
}