export default function PokemonStats(props) {
  return (
    <div className="row">
      {
        props.stats.map(stat =>
          <div className="col" key={stat.stat.name}>{stat.stat.name} : {stat.baseStat}</div>
        )
      }
    </div>
  );
}
