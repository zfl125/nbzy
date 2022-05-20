import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './globalStyle/global.scss';
import moment from 'moment'
Vue.config.productionTip = false;

Vue.prototype.$stringSub = (text, lent, isEllipsis) => {
    let ellipsis = '...';
    if (isEllipsis) ellipsis = '';
    if (text && text.length > lent) return text.substr(0, lent) + ellipsis;
    return text
}

Vue.prototype.$setTime = (date) => {
    return moment(date).format('YYYY-MM-DD')
}
Vue.prototype.$setTimes = (date) => {
    return moment(date).format('MM-DD HH:mm:ss')
}



Vue.directive('scrolls', {
    inserted: (el) => {
        const {
            scrollHeight,
            scrollTop,
            offsetHeight
        } = el;
        // console.dir(el.children[0].offsetHeight)
        const startScroll = (scrollHeight, heightOfect) => {
            return setInterval(() => {
                heightOfect = heightOfect + Number(el.children[0].offsetHeight);
                el.scrollTop = heightOfect;
                if (heightOfect + offsetHeight >= scrollHeight) {

                    heightOfect = -Number(el.children[0].offsetHeight);
                    el.style = 'display:none'
                    setTimeout(() => { el.style = 'display:black' }, 10)
                }
            }, 2000);
        }

        let intiScroll = startScroll(scrollHeight, scrollTop);

        el.onmouseover = function() {
            clearInterval(intiScroll)
        }
        el.onmouseout = function() {
            const {
                scrollHeight,
                scrollTop
            } = el;
            intiScroll = startScroll(scrollHeight, scrollTop);
        }
    },
});

Vue.directive('Xscrolls', {
    inserted: function(el) {
        const {
            offsetWidth
        } = el;
        let widthOfect = 0;
        setInterval(() => {
            widthOfect = widthOfect + 1;
            el.scrollLeft = widthOfect;
            if (widthOfect == offsetWidth) widthOfect = 0;
        }, 100);
    },
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')