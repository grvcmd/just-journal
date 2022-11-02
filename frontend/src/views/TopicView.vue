<template>
    <div class="row justify-content-center">
        <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Topic ID</th>
                    <th>Topic Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="topic in Topics" :key="topic._id">
                    <td>{{topic.topicID}}</td>
                    <td>{{topic.topicName}}</td>
                    <!-- Edit and Delete buttons -->
                    <td>
                        <router-link :to="{name: 'topic-entries', params: { topicID: topic.topicID }}" class="btn btn-info mx-1">Entries</router-link>
                        <router-link :to="{name: 'edit-topic', params: {id:topic.topicID}}" class="btn btn-success">Edit</router-link>
                        <button @click.prevent="deleteTopic(topic.topicID)" class="btn btn-danger mx-1">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    // Importing Axios which we will use to  call our backend API
    import axios from 'axios';
    export default {
        data() {
            return {
                Topics: []
            }
        },
        created() {
            let apiURL = 'http://localhost:3001/topics';
            axios.get(apiURL).then(res => {
                this.Topics = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            // Deletes topic method using the topicID
            deleteTopic(topicID) {
                let apiURL = `http://localhost:3001/topics/id/${topicID}`
                let indexOfArrayItem = this.Topics.findIndex(i => i.topicID === topicID);

                if (window.confirm("Delete this topic?")) {
                    axios.delete(apiURL).then(() => {
                        this.Topics.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
            // Create post method
        }
    }


</script>