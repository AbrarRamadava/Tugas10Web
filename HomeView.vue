<template>
  <div>
    <BookList :books="books" />
    <button @click="$router.push('/add')">Tambah Buku</button>
  </div>
</template>

<script>
import BookList from '../components/BookList.vue';

export default {
  components: { BookList },
  data() {
    return {
      books: JSON.parse(localStorage.getItem('books')) || [],
    };
  },
};
</script>
