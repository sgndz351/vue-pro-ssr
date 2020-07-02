export default {
    data: () => ({
        __fetched: false,
    }),

    serverPrefetch () {
        return this.fetchPrecept()
    },

    mounted () {
        if (!this.__fetched) {
            this.fetchPrecept()
            this.__fetchWorker().then(obj => {
                window.document.title = obj.title
            })
        }
    },

    methods: {
        fetchPrecept () {
            if (!this.__fetched) {
                this.__fetched = true

                return this.__fetchWorker().then(({ title, metas }) => {
                    this.$store.dispatch('fetchPrecept', {
                        title, metas
                    })
                })
            }
        }
    }
}