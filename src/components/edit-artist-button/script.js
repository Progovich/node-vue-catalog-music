import axios from 'axios';

export default {
  name: 'EditArtistButton',
  props: ['id', 'rowIndex', 'artistName'],
  data() {
    return {
      textModal: 'Новое имя для исполнителя',
      newName: null,
    };
  },
  methods: {
    toEditTrack: function () {
      axios
        .put(`${window.location.origin}/api/artist`, {
          data: { id: this.id, newName: this.newName },
        })
        .then(() => {
          this.$emit('renamedArtist', { id: this.id, name: this.newName });
        });
    },
  },
};
