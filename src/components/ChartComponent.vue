<template>
  <canvas id="myChart"></canvas>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const chartInstance = ref(null);

const chartData = ref({
  labels: [],
  datasets: [{
    label: 'Expenses and Income',
    data: [],
    backgroundColor: [],
    borderColor: [],
    borderWidth: 1,
  }],
});

const updateChartData = () => {
  const categories = [...new Set(props.transactions.map(t => t.category))];
  const data = categories.map(category => {
    return props.transactions.filter(t => t.category === category).reduce((sum, t) => sum + t.amount, 0);
  });

  chartData.value.labels = categories;
  chartData.value.datasets[0].data = data;
  chartData.value.datasets[0].backgroundColor = data.map(amount => amount < 0 ? 'rgba(255, 99, 132, 0.2)' : 'rgba(75, 192, 192, 0.2)');
  chartData.value.datasets[0].borderColor = data.map(amount => amount < 0 ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)');
};

const renderChart = () => {
  const ctx = document.getElementById('myChart').getContext('2d');
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }
  chartInstance.value = new Chart(ctx, {
    type: 'bar',
    data: chartData.value,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

watch(() => props.transactions, () => {
  updateChartData();
  renderChart();
});

onMounted(() => {
  updateChartData();
  renderChart();
});
</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
