<template>
  <div>
    <h1>Detail Buku</h1>
    <div v-if="book">
      <p><strong>Judul:</strong> {{ book.title }}</p>
      <p><strong>Penulis:</strong> {{ book.author }}</p>
      <p><strong>Tahun:</strong> {{ book.year }}</p>
    </div>
    <router-link to="/">Kembali ke Daftar Buku</router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    book() {
      const books = JSON.parse(localStorage.getItem('books')) || [];
      return books.find(book => book.id == this.id);
    }
  }
};
</script>
