import "./../css/download.css";


export const PdfDownload = () => {
    return (
        <a href="/CVKaraVandeVelde.pdf" download="CVKaraVandeVelde.pdf" className="download">
            <button>Download CV</button>
        </a>
    );
};

