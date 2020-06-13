<template>
    <div>
        <b-col>
            <b-card :title="job.name"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Job-info"
                    img-top
                    tag="article"
                    style="max-width: 20rem"
                    class="mb-2"
            footer="Card Footer">
                <b-card-text>
                    Yo Yo Yo Yo!
                </b-card-text>
                <b-button variant="primary">Apply</b-button>
            </b-card>
        </b-col>
    </div>
</template>

<script>
    export default {
        props: {
            job: {}
        }
    }
</script>

<style scoped>

</style>