export function ManipulandoEventos() {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Formulário enviado!");
    }

    function handleMouseOver() {
        document.body.style.backgroundColor="red";
    }

    function handleMouseLeave() {
         document.body.style.background="white";
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <button 
                type="submit" 
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                >Enviar Formulário</button>
            </form>
        </>
    );
}