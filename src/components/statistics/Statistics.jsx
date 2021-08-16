import PropTypes from 'prop-types'
import st from './statistics.module.css'

function Statistics({title, stats}){
    return(
      <section className={st.statistics}>
      
        {title && <h2 className={st.title}>{title}</h2>}
        
      <ul className={st.stat_list}>
        {stats.map(item=>(
        <li className={st.item} key = {item.id}>
          <span className={st.label}>{item.label}</span>
          <span className={st.percentage}>{item.percentage}%</span>
        </li>))}
      </ul>
    </section>)
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}



export default Statistics;
