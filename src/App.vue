// src/App.vue
<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <div>
      <label for="filter-category">Filter by Category:</label>
      <select v-model="selectedCategory">
        <option value="">All</option>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
    </div>
    <ChartComponent :transactions="filteredTransactions" />
    <TransactionList :transactions="filteredTransactions" @transactionDeleted="handleTransactionDeleted" />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import ChartComponent from './components/ChartComponent.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';

import { ref, computed, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();
const transactions = ref([]);
const selectedCategory = ref('');
const categories = ref(['Food', 'Utilities', 'Entertain', 'Salary', 'Miscellan']);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
});

const income = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
});

const expenses = computed(() => {
  return transactions.value.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);
});

const filteredTransactions = computed(() => {
  if (selectedCategory.value) {
    return transactions.value.filter((transaction) => transaction.category === selectedCategory.value);
  }
  return transactions.value;
});

const handleTransactionSubmitted = (transaction) => {
  transactions.value.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
  toast.success('Transaction added successfully');
};

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
  toast.success('Transaction deleted successfully');
};
</script>




