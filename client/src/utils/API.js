import axios from "axios";

export default {
  // Gets all journal entries
  getEntries: function() {
    return axios.get("/api/entries");
  },
  // Gets an entry with the given id
  getEntry: function(id) {
    return axios.get("/api/entries/" + id);
  },
  // Deletes the entry with the given id
  deleteEntry: function(id) {
    return axios.delete("/api/entries/" + id);
  },
  // Saves an entry to the database
  saveEntry: function(entryData) {
    return axios.post("/api/entries", entryData);
  },

  getPhotos: function(){
    return axios.create({
      baseURL: `https://api.pexels.com`,
      headers: {
          Authorization: '563492ad6f91700001000001927c79f1b1dd445aa14fee7b9150cc15'
      }
    })
  }
};
