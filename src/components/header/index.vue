<template>
    <div class="header-wrapper">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-content"
            mode="horizontal"
            @select="handleSelect"
            router
        >
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item
                index="/color/rgb_16"
            >颜色转换工具</el-menu-item>
            <el-submenu
                index="2"
                disabled
            >
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="/about">关于我</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    // 组件名
    name: "com-header",
    // 实例的数据对象
    data() {
        return {
            activeIndex: "/index"
        };
    },
    // 数组或对象，用于接收来自父组件的数据
    props: {},
    // 计算
    computed: {},
    // 方法
    methods: {
        handleSelect(key, keyPath) {
            console.log('handleSelect', key, keyPath);
        }
    },
    // 生命周期函数 请求写在created中
    created() {
        this.activeIndex = this.$route.path;
        console.log(this.activeIndex, this.$route.path);
    },
    beforeMount() {},
    mounted() {},
    // 组件
    components: {},
    // 监视
    watch: {},
    // 过滤器
    filters: {},
    // 自定义指令
    directive: {}
};
</script>

<style lang="less">
.header-wrapper{
    position: relative;
    margin: 0 0 10px;
    // background: #fff;
    &::before{
        content: ' ';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #e6e6e6;
    }

}
.el-menu-content{
    margin: 0 auto;
    width: 1200px;

}
</style>
