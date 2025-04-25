const header = () => {
    return (  
        <header className='flex flex-wrap flex-column h-3 w-12 m-0 p-0 align-content-center'>
            <div className='flex flex-wrap flex-row justify-content-center align-content-center'>
                <Button className='block m-3 p-2 justify-content-center align-content-center hover:bg-black h-2rem w-2rem pi pi-list'onClick={mudar_visibilidade} label="" rounded />
                <h1 className=' m-3 mx-auto p-0 bg-blue-400'> Luis Carlos o fera   </h1>
            </div>
            <h3 className='inline mx-auto h-min w-100'> ⏩ Bem Vindo ao meu Portfólio 🎃💻🎯 </h3>
        </header>
    );
}
 
export default header;