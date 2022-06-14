<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update Post content -->
            <h3 class="text-center">Update Post</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Post Name</label>
                    <input type="text" class="form-control" v-model="post.entryName" required>
                </div>

                <div class="form-group">
                    <label>Text</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="post.text" required></textarea>
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
                // Post object
                post: { }
            }
        },
        created() {
            let apiURL = `http://localhost:3001/entries/${this.$route.params.id}`;

            // Fills out fields with current data
            axios.get(apiURL).then((res) => {
                this.post = res.data;
            })
        },
        methods: {
            handleUpdateForm() {
                let apiURL = `http://localhost:3001/entries/${this.$route.params.id}`;

                // put the new data into the db using the api url
                axios.put(apiURL, this.post).then((res) => {
                    console.log(res)
                    this.$router.push('/posts')
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>