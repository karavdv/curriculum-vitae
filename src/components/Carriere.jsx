/**
 * Component: Carriere.jsx
 * ---------------------
 * Dit component rendert de gegevens van de professionele carrière .
 * De werkervaringen worden dynamisch gegenereerd vanuit een array 'werkervaring'.
 */

export const Carriere = () => {
  const werkervaring = [
    {
      bedrijf: "Corbel",
      sector: "Lingerie speciaalzaak, specialisatie in grote maten",
      periode: "2012 - 2022",
      rollen: [
        "2012 - 2019: Alle aspecten van het familiebedrijf leren kennen",
        "2019 - 2022: Zaakvoerder van het familiebedrijf",
        "2022: Stopzetting wegens corona",
      ],
    },
    {
      bedrijf: "'t Gepeld Ajuintje",
      sector: "Verpakkingsvrije winkel, alles om duurzaam te leven",
      periode: "2019 - 2022",
      rollen: [
        "15 december 2019: Opening",
        "2022: Stopzetting wegens corona",
      ],
    },
  ];

  return (
    <section className="carriere">
      <h2>Professionele carrière</h2>
      <ul>
        {werkervaring.map((werk, index) => (
          <li key={index} className="carriere-item">
            <h3>{werk.bedrijf}</h3>
            <p><strong>{werk.sector}</strong></p>
            <p>{werk.periode}</p>
            <ul>
              {werk.rollen.map((rol, i) => (
                <li key={i}>{rol}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

