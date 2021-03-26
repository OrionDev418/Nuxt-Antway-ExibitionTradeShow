<template>
<div class="bg-white p-2">
    <div class="card-container-2col mt-1">
        <div v-for="vi in video" :key="vi.id">
            <card-video-c :title="vi.title" subTitle="" :poster="vi.poster" @click="handleVideoPlay(video)"></card-video-c>
        </div>
    </div>
    <client-only>
        <light-box ref="lightbox" :showLightBox='false' :media="media" :disableScroll='false' class="ku-no-thumb-bar"></light-box>
    </client-only>
</div>
</template>

<script>
import CardVideoC from '~/components/Card/CardVideoC'

export default {
    name: 'VideoCompany',
    components: { CardVideoC },
    data() {
        return {
            video: [],
            media: [{
                thumb: "",
                sources: [{
                    src: "",
                    type: 'video/webm'
                }],
                type: 'video',
                width: '100%',
                height: 'auto',
                autoplay: true
            }]
        }
    },
    methods: {
        handleTabChange() {

        },
        handleVideoPlay(item) {
            this.media[0]['sources'][0]["src"] = item['url']
            this.media[0]['sources'][0]["type"] = item['content_type']
            this.video_key = +new Date()
            setTimeout(() => {
                this.$refs.lightbox.showImage(0)
            }, 100)
        },
    }
}
</script>