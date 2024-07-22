import { createRouter, createWebHashHistory } from "vue-router";
import EnterGame from "@/Views/EnterGame.vue";
import Login from "../Components/Login.vue";
import Cquestion from "@/Views/Cquestion.vue";
import Cquestion2 from "@/Views/Cquestion2.vue";
import divideClass from "@/Components/DivideClass.vue";
import Front from "@/Components/questions/front.vue";
import ChanPin1 from "@/Components/questions/ChanPin1.vue";
import ChanPin2 from "@/Components/questions/ChanPin2.vue";
import ChanPin3 from "@/Components/questions/ChanPin3.vue";
import WuLian1 from "@/Components/questions/WuLian1.vue";
import WuLian3 from "@/Components/questions/WuLian3.vue";
import WuLian2 from "@/Components/questions/WuLian2.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/entergame',
            component: EnterGame
        },
        {
            path: '/',
            component: Login
        },
        {
            path: '/Cquestion',
            component: Cquestion
        },
        {
            path: '/Cquestion2',
            component: Cquestion2
        },
        {
            path: '/divideClass',
            component: divideClass
        },
        {
            path: '/front/question1',
            component: Front
        },
        {
            path: '/product/question1',
            component: ChanPin1
        },
        {
            path: '/product/question2',
            component: ChanPin2
        },
        {
            path: '/product/question3',
            component: ChanPin3
        },
        {
            path: '/lot/question1',
            component: WuLian1
        },
        {
            path: '/lot/question2',
            component: WuLian2
        },
        {
            path: '/lot/question3',
            component: WuLian3
        },
    ]
})

export default router;