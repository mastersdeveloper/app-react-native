
export const TiposBasicos = () => {

    let nombre: string = 'Fernando';
    const edad = 35;

    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre}
            <br />
            {poderes.join(',')}
        </>
    )
}
