<template>
    <div class="row justify-content-center">
        <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Entry Name</th>
                    <th>Topic</th>
                    <th>Text</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in Posts" :key="post._id">
                    <td>{{post.entryName}}</td>
                    <td>{{post.topic}}</td>
                    <td>{{post.text}}</td>
                    <!-- Add View, Edit, Delete buttons -->
                    <td>
                        <router-link :to="{name: 'edit-post', params: {id:post.entryName}}" class="btn btn-success">Edit</router-link>
                        <button @click.prevent="deletePost(post.entryName)" class="btn btn-danger mx-1">Delete</button>
                    </td>
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
            let apiURL = 'http://localhost:3001/entries';
            axios.get(apiURL).then(res => {
                this.Posts = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            // Delete post method using the posts' entryName
            deletePost(entryName) {
                let apiURL = `http://localhost:3001/entries/${entryName}`
                let indexOfArrayItem = this.Posts.findIndex(i => i.entryName === entryName);

                if (window.confirm("Delete this post?")) {
                    axios.delete(apiURL).then(() => {
                        this.Posts.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
            // Create post method
        }
    }


</script>