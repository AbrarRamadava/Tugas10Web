<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>Judul</label>
      <input v-model="formData.title" required />
    </div>
    <div>
      <label>Penulis</label>
      <input v-model="formData.author" required />
    </div>
    <div>
      <label>Tahun</label>
      <input type="number" v-model="formData.year" required />
    </div>
    <button type="submit">Simpan</button>
  </form>
</template>

<script>
export default {
  props: ['book', 'onSave'],
  data() {
    return {
      formData: {
        title: this.book?.title || '',
        author: this.book?.author || '',
        year: this.book?.year || '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.onSave(this.formData);
    },
  },
};
</script>
