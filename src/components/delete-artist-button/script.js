import axios from 'axios';

export default {
  name: 'DeleteArtistButton',
  props: ['artistName', 'id', 'rowIndex'],
  data: () => {
    return {
      textModal:
        'Удаление исполнителя приведёт к удалению всех его треков. Вы уверены?',
      nameArtist: null,
    };
  },
  methods: {
    toDeleteTrack: function () {
      axios
        .delete(`${window.location.origin}/api/artist`, {
          data: { id: this.id },
        })
        .then(() => {
          this.$emit('deletedArtist', { id: this.id });
        });
    },
  },
};
