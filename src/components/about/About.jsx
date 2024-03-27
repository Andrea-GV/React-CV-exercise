
export default function About({hero}) {
  return (
    <div>
      <div className="about">
        {hero.aboutMe.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.info}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
