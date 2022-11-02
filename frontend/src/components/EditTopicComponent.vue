<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Topic content -->
            <h3 class="text-center">Update Topic</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Topic Name</label>
                    <input type="text" class="form-control" v-model="topic.topicName" required>
                </div>

                <button class="btn btn-danger mt-3">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                // Topic object
                topic: { }
            }
        },
        created() {
            let apiURL = `http://localhost:3001/topics/id/${this.$route.params.id}`;

            // Fills out fields with current data
            axios.get(apiURL).then((res) => {
                this.topic = res.data;
            })
        },
        methods: {
            handleUpdateForm() {
                let apiURL = `http://localhost:3001/topics/id/${this.$route.params.id}`;

                // put the new data into the db using the api url
                axios.put(apiURL, this.topic).then((res) => {
                    console.log(res)
                    this.$router.push('/view-topics')
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>