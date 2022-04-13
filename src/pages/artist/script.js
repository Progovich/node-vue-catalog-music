import axios from 'axios';
import DeleteTrackButton from '../../components/delete-track-button/index.vue';

export default {
  name: 'Artist',
  components: { DeleteTrackButton },
  data: () => {
    return {
      listTracks: [],
      nameArtist: null,
    };
  },
  mounted() {
    axios
      .get(`${window.location.origin}/api/artist/tracks`, {
        params: { id: this.$route.params.id },
      })
      .then((res) => {
        this.listTracks = res.data;
      });

    axios
      .get(`${window.location.origin}/api/artist/`, {
        params: { id: this.$route.params.id },
      })
      .then((res) => {
        this.nameArtist = res.data.name;
      });
  },
};
