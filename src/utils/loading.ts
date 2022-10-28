import {nextTick} from 'vue';

/**
 * 页面全局 Loading
 * @method start 创建 loading
 * @method done 移除 loading
 */
export default {
    // 创建 loading
    start: () => {
        const el: Element = document.body;
        const div = <HTMLElement>document.createElement('div');
        div.setAttribute('class', 'loading-next');
        div.innerHTML = `
			<div class="loading-next-box">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
			</div>
		`;
        el.insertBefore(div, el.childNodes[0]);
        // @ts-ignore
        window.nextLoading = true;
    },
    // 移除 loading
    done: () => {
        nextTick(() => {
            // @ts-ignore
            window.nextLoading = false;
            const el = <HTMLElement>document.querySelector('.loading-next');
            el?.parentNode?.removeChild(el);
        }).then(() => {
        });
    },
};
