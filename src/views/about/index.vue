<template>
    <div class="com-container">
        <el-card>
            <ul class="list">
                <li>
                    姓名：***
                </li>
                <li>
                    昵称：踩蘑菇的怪蜀黍
                </li>
                <li>
                    职业：高级前端开发工程师
                </li>
            </ul>
        </el-card>
        <el-card>
            <h3 class="contact-me-title h3">联系我</h3>
            <div class="contact-me-content">
                <a href="https://github.com/lovely-man" title="https://github.com/lovely-man">
                    <img src="/static/images/github.png" alt="github">
                </a>
                <a :href="'tel:'+tel" :title="tel">
                    <img src="/static/images/phone.png" alt="phone">
                </a>
                <a :href="'mailto:'+mail" :title="mail">
                    <img src="/static/images/mail.png" alt="mail">
                </a>
            </div>
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
        return {
            tel: '175********',
            mail: 'l***@163.com'
        };
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
@import url('../../less/modules/color.less');
.list{
    >li{
        padding: 5px;
    }
}
.contact-me-title{
    text-align: center;
}
.contact-me-content{

    display: flex;
    justify-content:  center;
    a{
        width: 32px;
        height: 32px;
        margin: 0 15px;
        // float: left;
        background: #24292e;
        border-radius: 50% 50%;
    }
    img{
        margin: 8px auto;
    }
}
</style>
