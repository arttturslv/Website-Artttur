export default function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center items-center gap-6" >
            <button onClick={() => console.log("ir para git")} type="button" className="ba hover:bg-jet hover:text-platinum  max-w-[500px]">
                Veja mais no github!
            </button>
            <h6>
                Este site não utiliza 🍪 :)
            </h6>
        </footer>
    )
}