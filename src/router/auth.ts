import store from '@/store';

/**权限验证*/
export async function auth() {
    let authorization = store.getters['config/getAuthorization']();
    if(!authorization){
        return false;
    }
    if(!authorization.account_token){
        await store.dispatch("config/setConfigFromSession");
        authorization = store.getters['config/getAuthorization']();
    }
    return !!authorization.account_token;
}
