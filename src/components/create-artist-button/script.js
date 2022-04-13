import axios from 'axios';

export default {
  name: 'EditArtistButton',
  data() {
    return {
      textModal: 'Имя нового исполнителя',
      nameArtist: null,
    };
  },
  mounted() {},
  methods: {
    toEditTrack: function () {
      axios
        .post(`${window.location.origin}/api/artist`, {
          data: { name: this.nameArtist },
        })
        .then((res) => {
          this.$emit('createArtist', res.data);
        });
    },
  },
};
