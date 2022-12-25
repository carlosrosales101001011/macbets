import { randomNumber, yourRandomGenerator } from "../helpers/randomNumber";

export class ModeloApuesta{
    static ID = 0;
    static IDAccordion = 0;
    static IDBet = 0;

    constructor( fecha, hora, titulo, subtitulo, descripcion, codeBet){
        this.id = ++ModeloApuesta.ID;
        this._codeBet =  codeBet;
        this._fecha = fecha;
        this._hora = hora;
        this._titulo = titulo;
        this._subtitulo = subtitulo;
        this._descripcion = descripcion;
        

        this.accordionBet = [];
    }
    

    get fecha(){
    return this._fecha;
    }
    set fecha(fecha){   
        this._fecha = fecha
    }

    get hora(){
    return this._hora;
    }
    set hora(hora){   
        this._hora = hora;
    }

    get titulo(){
    return this._titulo;
    }
    set titulo(titulo){   
        this._titulo = titulo;
    }

    get subtitulo(){
    return this._subtitulo;
    }
    set subtitulo(subtitulo){ 
        this._subtitulo= subtitulo;
    }

    get descripcion(){
    return this._descripcion;
    }
    set descripcion(descripcion){ 
        this._descripcion = descripcion;
    }
    get codeBet(){
    return this._codeBet;
    }
    set codeBet(codeBet){ 
        this._codeBet = codeBet;
    }
    addAccordionName(idAccordion, nameAccordion, bets=null){
        this.accordionBet.push({Index: ++ModeloApuesta.IDAccordion, id: idAccordion, name: nameAccordion, bets});
        return this;
    }
}