export const BackTopMixin = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            // console.log(1);
            this.$refs.scroll.scroll.scrollTo(0, 0, 1000)
        },
        scroll(position) {
            // console.log(position);
            // console.log(position.y);
            // console.log(this.tabOffsetTop);
            this.isShowBackTop = position.y < -1500
            this.isFixed = position.y < -this.tabOffsetTop
        },
    },

}