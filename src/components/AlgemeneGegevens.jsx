import { PdfDownload } from "./PdfDownload";


export const AlgemeneGegevens = () => {
    return (
        <section className="algemene-gegevens">
            <h2>Algemene gegevens</h2>

            <div>
                <p>Van de Velde Kara</p>
                <p>04/12/1987</p>

            </div>

            <h3>Over mij</h3>
            <p>
                Nu ik mijn herscholing tot full-stack developer heb afgerond, ben ik enthousiast op zoek naar een professionele kans om mijn kennis verder uit te breiden.
                Hoewel ik een beginner ben op vlak van coderen, heb ik uitgebreide ervaring in probleemoplossend werken, zowel zelfstandig als in teamverband.
                Daarnaast ben ik eindeloos nieuwsgierig en leergierig.
                Aangezien coderen grotendeels bestaat uit het oplossen van problemen en het continu bijleren van nieuwe technologieën, weet ik zeker dat ik goed zal passen in deze sector.
            </p>

            <div>
                <h3>Contact</h3>
                <p>0472/29.26.70</p>
                <p>vandeveldekara4@gmail.com</p>
            </div>

            <div>
                <h3>Download CV</h3>
                <p>U kan mijn cv downloaden in een pdf om eenvoudig aan uw dossier te kunnen toevoegen.</p>
                <PdfDownload />
            </div>
        </section>
    );
};

