<template>
  <template v-for="menu in menuList">
    <el-sub-menu :index="menu.path" :key="menu.path" v-if="menu.children && menu.children.length > 0">
      <template #title>
        <SvgIcon :name="menu.meta.icon"/>
        <span>{{ menu.meta.title }}</span>
      </template>
      <sub-item :children="menu.children"/>
    </el-sub-menu>
    <template v-else>
      <el-menu-item :index="menu.path" :key="menu.path">
        <template v-if="!menu.meta.link || (menu.meta.link && menu.meta.iframe)">
          <SvgIcon :name="menu.meta.icon"/>
          <span>{{ menu.meta.title }}</span>
        </template>
        <template v-else>
          <a :href="menu.meta.link" target="_blank" rel="opener" class="w100">
            <SvgIcon :name="menu.meta.icon"/>
            {{ menu.meta.title }}
          </a>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'SubItem',
  props: {
    children: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const menuList = computed(() => {
      return props.children;
    });
    return {
      menuList
    };
  },
}
</script>
