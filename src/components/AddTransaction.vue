<template>
  <div>
    <h3>Add new transaction</h3>
    <form id="form" @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="text">Text</label>
        <input type="text" id="text" v-model="text" placeholder="Enter text..." />
      </div>
      <div class="form-control">
        <label for="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input type="text" id="amount" v-model="amount" placeholder="Enter amount..." />
      </div>
      <div class="form-control">
        <label for="category">Category</label>
        <select id="category" v-model="category">
          <option v-for="category in categories" :key="category">{{ category }}</option>
        </select>
      </div>
      <button class="btn">Add transaction</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const text = ref('');
const amount = ref('');
const category = ref('');
const categories = ref(['Food', 'Utilities', 'Entertain', 'Salary', 'Miscellan']); // Example categories

const emit = defineEmits(['transactionSubmitted']);
const toast = useToast();

const onSubmit = () => {
  if (!text.value || !amount.value || !category.value) {
    toast.error('All fields must be filled');
    return;
  }

  const transactionData = {
    id: Date.now(), // Use current timestamp as a unique ID
    text: text.value,
    amount: parseFloat(amount.value),
    category: category.value,
  };

  emit('transactionSubmitted', transactionData);

  text.value = '';
  amount.value = '';
  category.value = ''; // Clear the fields after submission
};
</script>

