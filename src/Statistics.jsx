import PropTypes from 'prop-types'
import st from './statistics.module.css'

function Statistics({title, stats}){
    return(
      <section class={st.statistics}>
      
       {title.length > 0 && (<h2 class={st.title}>{title}</h2>
       )}
      <ul class={st.stat_list}>
        {stats.map(item=>(
        <li class={st.item} key = {item.id}>
          <span class={st.label}>{item.label}</span>
          <span class={st.percentage}>{item.percentage}%</span>
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
