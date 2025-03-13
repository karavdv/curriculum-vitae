/**
 * Component: Referentie.jsx
 * ---------------------
 * Toont de referentie van mijn leraar tijdens de opleiding Full-stack web development.
 */
import React from "react";

export const Referentie = () => {
    return (
        <section className="referentie">
            <h2>Referentie</h2>
            <div className="referentie-card">
                <blockquote>
                    <p>
                       " Van 10 juni 2024 tot en met 21 februari 2025 was Kara bij mij in opleiding "Full Stack PHP Ontwikkeling".
                    </p>
                    <p>
                        Kara heeft tijdens de opleiding meerdere malen getoond dat ze heeft wat nodig is om
                        als Full Stack Ontwikkelaar aan de slag te gaan. Ze beschikt over een analytische
                        geest die haar in staat stelt om complexe vraagstukken om te zetten in kwaliteitsvolle
                        code.
                    </p>
                    <p>
                        Tijdens de opleiding viel het me op dat Kara zich erg snel nieuwe technologieën en
                        vaardigheden eigen maakt en daarbij uitdagingen niet uit de weg gaat.
                    </p>
                    <p>
                        Samenwerken met Kara werd door haar medecursisten als zeer aangenaam ervaren. Zij is
                        altijd respectvol en hulpvaardig. Kara is in staat de leiding te nemen en de groep mee
                        te trekken, maar ze kan net zo goed meedraaien onder leiding van iemand anders. Ze
                        staat altijd open voor ideeën die collega’s (medecursisten) aanbrengen, ze kan heel
                        goed meedenken met de groep om zo tot oplossingen te komen. Ze levert werk af van een
                        hoge standaard.
                    </p>
                    <p>Met vriendelijke groeten, <br />
                        Bart Roosen"
                    </p>
                </blockquote>
                <div>
                    <h3>Download referentie</h3>
                    <p>U kan het originele pdf bestand met de contactgegevens van Bart Roosen downloaden via onderstaande knop.</p>
                    <a href="/referentieKaraVandeVelde.pdf" download="referentieKaraVandeVelde.pdf" className="download">
                        <button>Download referentie</button>
                    </a>
                </div>
            </div>
        </section>
    );
};
