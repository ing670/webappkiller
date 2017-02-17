/**
 * Created by liuqingling on 17/2/17.
 */
export const recordPosition = {

    created(){
    },
    beforeRouteLeave(to, from, next){
        from.meta.scrollPosition = this.$el.querySelector('.wk-scroll-content').scrollTop;
        next();
    },
    mounted(){
        this.$el.querySelector('.wk-scroll-content').scrollTop = this.$router.app.$route.meta.scrollPosition;
    }
}
