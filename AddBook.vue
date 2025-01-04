<template>
  <div>
    <h1>Tambah Buku</h1>
    <BookForm :onSave="addBook" />
  </div>
</template>

<script>
import BookForm from '../components/BookForm.vue';

export default {
  components: { BookForm },
  methods: {
    addBook(book) {
      const books = JSON.parse(localStorage.getItem('books')) || [];
      book.id = Date.now();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
      this.$router.push('/');
    },
  },
};
</script>
