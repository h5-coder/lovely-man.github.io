<template>
    <div class="com-container">
        <el-card>
            <ul class="list">
                <li>
                    昵称：踩蘑菇的怪蜀黍
                </li>
                <li>
                    职业：高级前端开发工程师
                </li>
                <li>
                    Github：<a href="https://github.com/lovely-man">Github</a>
                </li>
            </ul>
        </el-card>

    </div>
</template>

<script>
// import apiService from "@/services/API-service";

export default {
    // 组件名
    name: "about",
    // 实例的数据对象
    data() {
        return {};
    },
    // 数组或对象，用于接收来自父组件的数据
    props: {},
    // 计算
    computed: {},
    // 方法
    methods: {},
    // 生命周期函数 请求写在created中
    created() {},
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
.list{
    >li{
        padding: 5px;
    }
}
</style>
