import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = ({ total, spent }) => {
  if (typeof total !== 'number' || typeof spent !== 'number') {
    return <div>Invalid data</div>;
  }

  const remaining = total - spent;

  const data = {
    labels: ['Spent', 'Remaining'],
    datasets: [
      {
        data: [spent, remaining],
        backgroundColor: ['#F8E559', '#864AF9'],
        hoverBackgroundColor: ['#F8E559', '#864AF9']
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#dcf2f1'
        }
      }
    }
  };

  return (
    <div className='chart'>
      <h2>Budget Chart</h2>
      <Doughnut data={data}  options={options}/>
    </div>
  );
};

export default BudgetChart;
