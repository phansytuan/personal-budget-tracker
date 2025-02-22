<template>
  <div>
    <h3>History</h3>
    <ul class="list">
      <li v-for="transaction in transactions" :key="transaction.id" v-bind:class="transaction.amount < 0 ? 'minus' : 'plus' ">
        {{ transaction.text }} <span>{{ transaction.amount }} đ</span> 
        <span :class="['category', 'category-' + transaction.category]">{{ transaction.category }}</span>
        <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['transactionDeleted']);

const deleteTransaction = (id) => {
  emit('transactionDeleted', id);
};
</script>
<style>
/* Add your styles here */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#filter-category {
  margin: 20px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.list {
  list-style-type: none;
  padding: 0;
}

.list li {
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin: 10px 0;
  padding: 10px;
  border-left: 5px solid #007bff;
  border-radius: 4px;
}

.list li span {
  margin-left: 10px;
}

.list li .delete-btn {
  background: transparent;
  border: none;
  color: #ff0000;
  cursor: pointer;
  font-size: 18px;
}

.list li span.category {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
}

.category-Food {
  background-color: #ff6347;
}

.category-Utilities {
  background-color: #4682b4;
}

.category-Entertain {
  background-color: #32cd32;
}

.category-Salary {
  background-color: #ffa500;
}

.category-Miscellan {
  background-color: #9400d3;
}
</style>