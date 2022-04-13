import axios from 'axios';

export default {
  name: 'CreateTrackButton',
  data() {
    return {
      textModal: 'Выберете исполнителя и введите имя трека',
      nameTrack: null,
      artistId: null,
      artistName: null,
      listArtists: []
    };
  },
  methods: {
    toCreateTrack: function () {
      this.artistName = document.querySelector(
        `select > option[value="${this.artistId}"]`
      ).text;

      axios
        .post(`${window.location.origin}/api/track`, {
          data: { name: this.nameTrack, artistID: this.artistId },
        })
        .then(() => {
          this.$emit('createTrack', {
            'tracks.id': this.id,
            'tracks.name': this.nameTrack,
            id: this.artistId,
            name: this.artistName,
          });
        });
    },
  },
  mounted() {
    axios
      .get(`${window.location.origin}/api/artist/all`)
      .then((res) => {
       this.listArtists= res.data;
      })
  },
};
