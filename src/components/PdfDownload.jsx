/**
 * Component: PdfDownload.jsx
 * ----------------------
 * Toont een knop waarmee gebruikers een printbare versie van het CV kunnen downloaden als PDF-bestand.
 */

import "./../css/download.css";


export const PdfDownload = () => {
    return (
        <a href="/CVKaraVandeVelde.pdf" download="CVKaraVandeVelde.pdf" className="download">
            <button>Download CV</button>
        </a>
    );
};

