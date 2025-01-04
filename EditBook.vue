<template>
  <div>
    <h1>Edit Buku</h1>
    <BookForm :book="book" :onSave="editBook" />
  </div>
</template>

<script>
import BookForm from '../components/BookForm.vue';

export default {
  components: { BookForm },
  data() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    return {
      book: books.find((b) => b.id == this.$route.params.id),
    };
  },
  methods: {
    editBook(updatedBook) {
      const books = JSON.parse(localStorage.getItem('books')) || [];
      const index = books.findIndex((b) => b.id == this.book.id);
      books[index] = { ...updatedBook, id: this.book.id };
      localStorage.setItem('books', JSON.stringify(books));
      this.$router.push('/');
    },
  },
};
</script>
