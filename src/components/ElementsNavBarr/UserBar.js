

export const UserBar = () => {
  return (
    <>
        <div className={'linex'}>
            <div className={'photoUser'}>
                <p>C</p>
            </div>
            <div className="nameUser_MACS">
                <span><p>160 MACS</p></span>
                <span><p>Carlos Rosales</p></span>
            </div>
        </div>
        <div className="linexx optionsLine borderBYT">
            <ul>
                <li><a><p>Agregar mas MACS</p></a> <span>1MAC=1.00USD</span></li>
                <li><a><p>Depositar</p></a></li>
            </ul>
        </div>
        <div className="linexx optionsLine">
            <ul>
                <li><a><p>Ayuda</p></a></li>
                <li><a><p>Ajustes</p></a></li>
                <li><a><p>Salir</p></a></li>
            </ul>
        </div>
    </>
  )
}