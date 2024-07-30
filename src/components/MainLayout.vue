<template>
  <!-- 使用 Element Plus 的布局容器 -->
  <el-container style="height: 100vh;">
    <!-- 侧边栏 -->
    <el-aside :width="isCollapsed ? '64px' : '200px'" class="sidebar">
      <!-- 菜单组件 -->
      <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical-demo"
          @select="handleMenuSelect"
          collapse-transition
          :collapse="isCollapsed"
      >
        <!-- 主菜单项 -->
        <el-sub-menu index="1">
          <template #title>
            <i class="el-icon-menu"></i>
            <span>主菜单1</span>
          </template>
          <!-- 子菜单项 -->
          <el-menu-item index="ComponentA">子菜单1-1</el-menu-item>
          <el-menu-item index="ComponentB">子菜单1-2</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <i class="el-icon-menu"></i>
            <span>主菜单2</span>
          </template>
          <!-- 子菜单项 -->
          <el-menu-item index="ComponentC">子菜单2-1</el-menu-item>
          <el-menu-item index="ComponentD">子菜单2-2</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 顶部栏 -->
      <el-header>
        <!-- 切换侧边栏折叠状态的按钮 -->
        <el-button @click="toggleCollapse" type="primary">
          <i :class="isCollapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
        </el-button>
        <span>Dashboard</span>
      </el-header>
      <!-- 主内容区 -->
      <el-main>
        <!-- 根据当前选中的菜单项动态渲染对应的组件 -->
        <component :is="currentComponent"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {ref} from 'vue';
// 导入子组件
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import ComponentC from './ComponentC.vue';
import ComponentD from './ComponentD.vue';

export default {
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
    ComponentD,
  },
  setup() {
    // 定义侧边栏折叠状态
    const isCollapsed = ref(false);
    // 当前显示的组件
    const currentComponent = ref('ComponentA');
    // 活动菜单项
    const activeMenu = ref('ComponentA');

    // 切换侧边栏折叠状态的方法
    const toggleCollapse = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    // 处理菜单项选择的方法
    const handleMenuSelect = (index) => {
      currentComponent.value = index;
      // 在此处不自动折叠侧边栏
    };

    return {
      isCollapsed,
      currentComponent,
      activeMenu,
      toggleCollapse,
      handleMenuSelect,
    };
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f4f4f4;
}

.el-header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #409EFF;
  color: #fff;
}

.el-main {
  padding: 20px;
}
</style>
