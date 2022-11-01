<template>
  <el-avatar class="layout-nav-bars-user-bar-link-photo" :size="32" :src="image"/>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted} from 'vue';
import {userImage} from '@/api';

export default defineComponent({
  name: "UserAvatar",
  props:{
    user_id: {
      type: Number,
      default: ()=>0,
    }
  },
  setup(props){
    const state = reactive({
      image: 'data:image/jpeg;base64,'
    });
    const qryImage = ()=>{
      userImage.queryUserImageBase64({
        user_id: props.user_id
      }).then(result=>{
        if(result.code == 200){
          state.image = 'data:image/jpeg;base64,'+result.data.user_image.image;
        }
      });
    };
    onMounted(()=>{
      qryImage();
    });
    return {
      src:'/user/image',
      ...toRefs(state)
    }
  }
});
</script>

<style scoped>

</style>