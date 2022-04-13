import axios from 'axios';

export default {
  name: 'DeleteTrackButton',
  props: ['id'],
  methods: {
    toDeleteTrack: function () {
      axios
        .delete(`${window.location.origin}/api/track`, {
          data: { id: this.id },
        })
        .then(() => {
          this.$el.parentElement.parentElement.remove();
        });
    },
  },
};
