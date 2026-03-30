import mockProducts from '../data/mockProducts'
import { getProductStatus } from '../utils/productUtils'
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts'
import './StatisticsPage.css'

const COLORS = ['#4caf8d', '#f5a623', '#e8534a', '#344f6d']

function StatisticsPage() {
  const expired = mockProducts.filter(p => getProductStatus(p.expiryDate) === 'expired').length
  const warning = mockProducts.filter(p => getProductStatus(p.expiryDate) === 'warning').length
  const ok = mockProducts.filter(p => getProductStatus(p.expiryDate) === 'ok').length

  // Данные для pie chart — по категориям
  const categoryData = mockProducts.reduce((acc, product) => {
    const existing = acc.find(item => item.name === product.category)
    if (existing) {
      existing.value++
    } else {
      acc.push({ name: product.category, value: 1 })
    }
    return acc
  }, [])

  // Данные для bar chart — просрочки по датам
  const barData = [
    { date: '26 мар', count: 0 },
    { date: '30 мар', count: 1 },
    { date: '12 апр', count: 0 },
    { date: '22 апр', count: 4 },
    { date: '29 апр', count: 1 },
    { date: '24 апр', count: 2 },
  ]

  return (
    <div className='page'>
      <div className='stats-card'>
        <h2 className='stats-title'>Статистика</h2>
        <p className='stats-subtitle'>Заполните информацию о продукте</p>

        <div className='stat-cards'>
          <div className='stat-card stat-card--warning'>
            <span>⚠️</span>
            <div>
              <div className='stat-card__count'>{warning} продукта</div>
              <div className='stat-card__label'>Скоро испортятся</div>
            </div>
          </div>
          <div className='stat-card stat-card--expired'>
            <span>❗</span>
            <div>
              <div className='stat-card__count'>{expired} продукта</div>
              <div className='stat-card__label'>Просрочено</div>
            </div>
          </div>
          <div className='stat-card stat-card--ok'>
            <span>✅</span>
            <div>
              <div className='stat-card__count'>{ok} продукта</div>
              <div className='stat-card__label'>Всё в порядке</div>
            </div>
          </div>
        </div>

        <div className='charts'>
          <div className='chart-block'>
            <h3>История Просрочек</h3>
            <BarChart width={500} height={250} data={barData}>
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='count' fill='#e8534a' radius={[4, 4, 0, 0]} />
            </BarChart>
          </div>

          <div className='chart-block'>
            <h3>Распределение Продуктов</h3>
            <PieChart width={300} height={250}>
              <Pie
                data={categoryData}
                cx={150}
                cy={120}
                innerRadius={60}
                outerRadius={100}
                dataKey='value'
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticsPage