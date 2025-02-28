import "./../css/vaardigheden.css";


export const Vaardigheden = () => {
  const technischeVaardigheden = {
    "Front-end ontwikkeling": ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    "Back-end ontwikkeling": ["PHP", "Node.js", "Laravel"],
    "Databases": ["Basiskennis SQL", "MySQL", "SQLite", "Redis"],
    "Versiebeheer": ["Git (in VS Code)", "GitHub"],
    "API-integratie": ["REST API’s (private en public)", "Websocket API’s", "AJAX"],
    "Methodologiëen": ["SCRUM", "Agile", "Mobile first"],
    "Tools": ["Trello", "Kittl", "Canva"]
  };

  const zakelijkeVaardigheden = {
    "Projectbeheer & organisatie": ["Eventorganisatie", "Voorraadbeheer"],
    "Ondernemersmentaliteit": ["Zaakvoerster", "Zakelijke besluitvorming"],
    "Klantgerichtheid": ["Verkoop", "Klantenservice", "Adviesverlening"],
    "Snel leren en aanpassen": ["Snel leren van nieuwe vaardigheden", "Werken in verschillende sectoren"],
    "Zelfstandigheid & teamwerk": ["Zelfstandig werken", "Werken in teamverband", "Teamleader"]
  };

  const talen = ["Nederlands: Moedertaal", "Engels: Zeer goed", "Frans: Beperkt"];

  return (
    <section className="vaardigheden">
      <h2>Vaardigheden</h2>
      <p className="info">Klik op de vaardigheden voor meer informatie.</p>

      <h3>Technische vaardigheden</h3>
      {Object.entries(technischeVaardigheden).map(([categorie, vaardigheden], index) => (
        <details key={index}>
          <summary>{categorie}</summary>
          <ul className="vaardigheden-lijst">
            {vaardigheden.map((vaardigheid, idx) => (
              <li key={idx}>{vaardigheid}</li>
            ))}
          </ul>
        </details>
      ))}

      <h3>Zakelijke en persoonlijke vaardigheden</h3>
      {Object.entries(zakelijkeVaardigheden).map(([categorie, vaardigheden], index) => (
        <details key={index}>
          <summary>{categorie}</summary>
          <ul className="vaardigheden-lijst">
            {vaardigheden.map((vaardigheid, idx) => (
              <li key={idx}>{vaardigheid}</li>
            ))}
          </ul>
        </details>
      ))}

      <h3>Taalvaardigheden</h3>
      <ul>
        {talen.map((taal, index) => (
          <li key={index}>{taal}</li>
        ))}
      </ul>
    </section>
  );
};
