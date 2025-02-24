export const Vaardigheden = () => {
  const technischeVaardigheden = [
    "Front-end ontwikkeling: HTML, CSS, JavaScript, React",
    "Back-end ontwikkeling: PHP, Node.js, Laravel",
    "Databases: Basiskennis van MySQL",
    "Versiebeheer: Git (in VS Code) en GitHub",
    "API-integratie: Werken met REST en Websocket API’s en AJAX",
  ];

  const zakelijkeVaardigheden = [
    "Projectbeheer & organisatie: Ervaring met eventorganisatie en voorraadbeheer",
    "Ondernemersmentaliteit: Ervaring met zelfstandig werken en zakelijke besluitvorming",
    "Klantgerichtheid: Ervaring in verkoop, klantenservice en adviesverlening",
    "Snel leren en aanpassen: Ervaring met het snel leren van nieuwe vaardigheden en werken in verschillende sectoren",
    "Zelfstandigheid & teamwerk: Ervaring met het runnen van een bedrijf met een team"
  ];

  const talen = [
    "Nederlands: Moedertaal",
    "Engels: Zeer goed",
    "Frans: Beperkt"
  ];

  return (
    <section className="vaardigheden">
      <h2>Vaardigheden</h2>

      <h3>Technische vaardigheden</h3>
      <ul>
        {technischeVaardigheden.map((vaardigheid, index) => (
          <li key={index}>{vaardigheid}</li>
        ))}
      </ul>

      <h3>Zakelijke en persoonlijke vaardigheden</h3>
      <ul>
        {zakelijkeVaardigheden.map((vaardigheid, index) => (
          <li key={index}>{vaardigheid}</li>
        ))}
      </ul>

      <h3>Taalvaardigheden</h3>
      <ul>
        {talen.map((taal, index) => (
          <li key={index}>{taal}</li>
        ))}
      </ul>
    </section>
  );
};

