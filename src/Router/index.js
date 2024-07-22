import { createRouter, createWebHashHistory } from "vue-router";
import EnterGame from "@/Views/EnterGame.vue";
import Login from "../Components/Login.vue";
import Cquestion from "@/Views/Cquestion.vue";
import Cquestion2 from "@/Views/Cquestion2.vue";
import divideClass from "@/Components/DivideClass.vue";
import Front from "@/Components/questions/front.vue";
import AnQuan1 from "@/Components/questions/AnQuan1.vue";
import AnQuan2 from "@/Components/questions/AnQuan2.vue";
import AnQuan3 from "@/Components/questions/AnQuan3.vue";
import AnQuan4 from "@/Components/questions/AnQuan4.vue";
import AnQuan5 from "@/Components/questions/AnQuan5.vue";
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
            path: '/safe/question1',
            component: AnQuan1
        },
        {
            path: '/safe/question2',
            component: AnQuan2
        },
        {
            path: '/safe/question3',
            component: AnQuan3
        },
        {
            path: '/safe/question4',
            component: AnQuan4
        },
        {
            path: '/safe/question5',
            component: AnQuan5
        },
    ]
})

export default router;