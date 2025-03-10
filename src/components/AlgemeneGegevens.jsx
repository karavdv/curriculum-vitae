/**
 * Component: AlgemeneGegevens.jsx
 * ----------------------------------
 * Dit component rendert de algemene persoons- en contactgegevens.
 * Het bevat een downloadknop voor het downloaden van een printbare versie van het CV als PDF.
 */

import { PdfDownload } from "./PdfDownload";


export const AlgemeneGegevens = () => {
    return (
        <section className="algemene-gegevens">
            <h2>Algemene gegevens</h2>

            <div>
                <p>Van de Velde Kara</p>
                <p>04/12/1987</p>
                <p>Rijbewijs B en eigen wagen.</p>

            </div>

            <h3>Over mij</h3>
            <p>
                Nu ik mijn herscholing tot full-stack developer heb afgerond, ben ik enthousiast op zoek naar een professionele kans om mijn kennis verder uit te breiden.
                Hoewel ik een beginner ben op vlak van coderen, heb ik uitgebreide ervaring in probleemoplossend werken, zowel zelfstandig als in teamverband.
                Daarnaast ben ik eindeloos nieuwsgierig en leergierig.
                Aangezien coderen grotendeels bestaat uit het oplossen van problemen en het continu bijleren van nieuwe technologieën, weet ik zeker dat ik goed zal passen in deze sector.
            </p>
            <p>
                Wil je alvast een voorbeeld van wat ik kan? In het menu vind je de Github repositories terug van deze site en van mijn afstudeerproject.
            </p>
            <p>
                Als afstudeerproject heb ik een crypto trading bot gemaakt voor het Kraken platform. 
                Ik kreeg 30 dagen om aan het project te werken met als doel een framework te leren gebruiken. 
                Omdat mijn opleiding full-stack is heb ik er voor gekozen 2 frameworks te combineren; Laravel en React. 
                Ik maak ook gebruik van Node.js voor een websocket verbinding te maken met Kraken.
                Het idee van een trading bot te maken is ontstaan omdat ik ervaring wou opdoen met API's. 
                Ik pas in het project Websocket en Rest (private en public) API verbindingen toe.
                De trading bot is zeker nog een work in process maar het kan hoop ik wel al een beeld geven van wat ik kan leren op welke tijdsspanne.
                De code in de repositorie kan enkel volledig uitgetest worden door het toevoegen van je eigen API keys.
                Wegens overduidelijke redenenen laat ik mijn eigen keys niet in de openbare code staan.
                Binnenkort zal ik het project wel online zetten zodat je het kan testen zonder zelf keys te moeten toevoegen.
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

