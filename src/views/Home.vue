<template>
    <div>
      <IncomeExpenses :transactions="transactions" />
      <ChartComponent :transactions="transactions" />
      <TransactionList :transactions="transactions" @delete-transaction="deleteTransaction" />
      <AddTransaction @add-transaction="addTransaction" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import IncomeExpenses from '../components/IncomeExpenses.vue';
  import ChartComponent from '../components/ChartComponent.vue';
  import TransactionList from '../components/TransactionList.vue';
  import AddTransaction from '../components/AddTransaction.vue';
  
  const transactions = ref([]);
  
  const addTransaction = (transaction) => {
    transactions.value.push(transaction);
  };
  
  const deleteTransaction = (id) => {
    transactions.value = transactions.value.filter(transaction => transaction.id !== id);
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>
  