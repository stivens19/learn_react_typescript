const TiposBasicos = () => {
    let nombre:string='Fernado';
    const edad:number=30;
    const estaActivo:boolean=true;

    const poderes:string[]=['Volar','Rayos X','Super Aliento'];
    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre}-{edad}-{JSON.stringify(estaActivo)}
            <br />
            {
                poderes.join(' - ')
            }
        </>
    );
};

export default TiposBasicos;
