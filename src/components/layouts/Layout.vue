<template>
    <MenuNavVue/>
    <slot name="header"/>
    <slot name="content"/>
    <slot/>
</template>
<script>
import MenuNavVue from './MenuNav.vue'
export default {
    components:{
        MenuNavVue
    }
}
</script>