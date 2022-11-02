<template>
  <div class="row justify-content-center">
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Entry ID</th>
          <th>Entry Name</th>
          <th>Text</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="entry in Entries" :key="entry._id">
          <td>{{ entry.entryID }}</td>
          <td>{{ entry.entryName }}</td>
          <td>{{ entry.text }}</td>
          <!-- <td>
            <router-link :to="{name: 'program-services', params: { id: program.programID }}" class="btn btn-success ">View Services</router-link>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        Entries: []
      }
    },
    created() {
      let apiURL = `http://localhost:3001/topics/topic-entry/${this.$route.params.topicID}`
      axios.get(apiURL).then(res => {
        this.Entries = res.data[0].Entries;
        console.log(this.Entries)
      }).catch(error => {
          console.log(error)
      })
    }
  }
</script>