import style from "./style/style.module.scss";

type TypeTableStats = {
    stats: {
        base_stat: number;
        effort: number;
        stat: {
          name: string;
          url: string;
        };
      }[];
}

const SingleTableStats: React.FC <TypeTableStats> = ({stats}) => {
  return (
   <table className={style.sprites_stats}>
          <tr>
            <th>Base</th>
            <th>Stats</th>
          </tr>
          {stats.map((i) => (
            <tr>
              <td> {i.stat.name.toUpperCase()}</td>
              <td>{i.base_stat}</td>
            </tr>
          ))}
        </table>
  )
}

export default SingleTableStats