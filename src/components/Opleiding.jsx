export const Opleiding = () => {
  const opleidingen = [
    {
      instelling: "Hogeschool Gent",
      diploma: "Professionele bachelor agro- en biotechnologie - dierenzorg",
      periode: "2008 - 2012",
      details: "Met onderscheiding afgestudeerd",
      eindwerk: "Evaluatie van voederrantsoenen voor neushoornvogels en tokken",
    },
    {
      instelling: "VDAB",
      diploma: "Full-stack web development",
      periode: "maart 2024 - februari 2025",
      details: "PHP, JavaScript, CSS, HTML5, scrum, basis SQL, React, Laraval, NodeJs",
      eindwerk: "Crypto tradingbot voor Kraken",

    },
  ];

  return (
    <section className="opleiding">
      <h2>Opleidingsgeschiedenis</h2>
      <ul>
        {opleidingen.toReversed().map((opleiding, index) => (
          <li key={index} className="opleiding-item">
            <h3>{opleiding.instelling}</h3>
            <p><strong>{opleiding.diploma}</strong></p>
            <p>{opleiding.periode}</p>
            {opleiding.details && <p><em>{opleiding.details}</em></p>}
            {opleiding.eindwerk && <p><strong>Eindwerk:</strong> {opleiding.eindwerk}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};


