import { Link, useLocation } from 'react-router-dom';
import qs from 'query-string';

const STEP_SIZE = 20;

const getQueryParamsForNext = (currentOffset) => {
  const currentOffsetParsed = parseInt(currentOffset);
  const newOffset = !currentOffsetParsed ? STEP_SIZE : currentOffsetParsed + STEP_SIZE;
  return qs.stringify({offset: newOffset, limit: STEP_SIZE});
};

const getQueryParamsForPrevious = (currentOffset) => {
  const currentOffsetParsed = parseInt(currentOffset);
  const newOffset = currentOffsetParsed <= STEP_SIZE ? 0 : currentOffsetParsed - STEP_SIZE;
  return qs.stringify({offset: newOffset, limit: STEP_SIZE});
};

export default function PokemonListNavigate(props) {
  const { offset } = qs.parse(useLocation().search);

  return (
    <div className="row">
      <div className="col text-left">
        <Link to={`/pokemons?${getQueryParamsForPrevious(offset)}`}>
          <button className="btn btn-primary">Previous</button>
        </Link>
      </div>
      <div className="col text-right">
        <Link to={`/pokemons?${getQueryParamsForNext(offset)}`}>
          <button className="btn btn-primary">Next</button>
        </Link>
      </div>
    </div>
  );
}
