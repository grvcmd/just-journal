<template>
    <div class="row justify-content-center">
        <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Entry Name</th>
                    <th>Topic</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in Posts" :key="post._id">
                    <td>{{post.entryName}}</td>
                    <td>{{post.topic}}</td>
                    <td>{{post.text}}</td>
                    <!-- Add View, Edit, Delete buttons -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    // Importing Axios to call our backend API
    import axios from 'axios';
    export default {
        data() {
            return {
                Posts: []
            }
        },
        created() {
            let apiURL = 'http://localhost:3000/entries';
            axios.get(apiURL).then(res => {
                this.Posts = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            // Delete post method

            // Create post method
        }
    }


</script>