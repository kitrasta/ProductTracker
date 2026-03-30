import './StatCards.css'

function StatCard({type, count}) {
    const map = {
        warning: {
            icon: '',
            label: 'Скоро испортится',
            className:'stat-card stat-card--warning'
        },

        expired: {
            icon: '',
            label: 'Просрочено',
            className: 'stat-card stat-card--expired'
        },

        ok: {
            icon: '',
            label: 'Всё в порядке',
            className: 'stat-card stat-card--ok'
        },
    }
    const {icon, label, className} = map[type]
    return (
        <div className={className}>
        <span className='stat-card__icon'>{icon}</span>
        <div>
          <div className='stat-card__count'>{count} продукта</div>
          <div className='stat-card__label'>{label}</div>
        </div>
      </div>
    )
  }
  
  export default StatCard