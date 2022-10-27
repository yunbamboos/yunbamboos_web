import store from '@/store';

/**权限验证*/
export async function auth() {
    let accountToken = store.getters['token/getAccountToken']();
    if(!accountToken){
        await store.dispatch("token/setTokenFromSession");
        accountToken = store.getters['token/getAccountToken']();
    }
    if(!accountToken){
        return false;
    }
    return !!accountToken;
}
