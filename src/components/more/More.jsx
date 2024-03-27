
export default function More({languages, habilities, volunteer}) {
  return (
    
    <section>

      <div className="leng-card">
        <h3>Lenguages</h3>
        <h4> {languages.language} </h4>
        <p>🗣️{languages.splevel} </p>
        <p>✏️{languages.wrlevel}</p>
      </div>

      <div className="hab-card">
        <h3>Habilities</h3>
        {habilities.map((item, i) => {
          return (
            <div key={i}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>

      <div className="vol-card">
        <h3>Volunteer</h3>
        {volunteer.map((item, i) => {
          return (
            <div key={i}>
              <h4>{item.name}</h4>
              <p className="where">{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}
