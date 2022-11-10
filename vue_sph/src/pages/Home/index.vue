<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- 三级联动已经注册为全局组件 -->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor
            v-for="(floor, index) in floorList"
            :key="floor.id ? floor.id : index"
            :list="floor"
        ></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
    components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
    mounted() {
        this.$store.dispatch("getFloorList");
        this.$store.dispatch("getUserInfo");
        console.log(this.$store.state.user.userInfo)
    },
    computed: {
        ...mapState({ floorList: (state) => state.home.floorList })
    }
};
</script>

<style></style>
