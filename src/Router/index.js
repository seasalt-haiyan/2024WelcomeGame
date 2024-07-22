import { createRouter, createWebHashHistory } from "vue-router";
import EnterGame from "@/Views/EnterGame.vue";
import Login from "../Components/Login.vue";
import Cquestion from "@/Views/Cquestion.vue";
import Cquestion2 from "@/Views/Cquestion2.vue";
import divideClass from "@/Components/DivideClass.vue";
import Front from "@/Components/questions/front.vue";
import QianDuan2 from "@/Components/questions/QianDuan2.vue";
import QianDuan3 from "@/Components/questions/QianDuan3.vue";
import QianDuan4 from "@/Components/questions/QianDuan4.vue";
import QianDuanEnd from "@/Components/questions/QianDuanEnd.vue";
import HouDuan1 from "@/Components/questions/HouDuan1.vue";
import HouDuan2 from "@/Components/questions/HouDuan2.vue";
import HouDuan3 from "@/Components/questions/HouDuan3.vue";
import HouDuan4 from "@/Components/questions/HouDuan4.vue";
import SuanFa1 from '@/Components/questions/SuanFa1.vue'
import SuanFa2 from '@/Components/questions/SuanFa2.vue'
import SuanFa3 from '@/Components/questions/SuanFa3.vue'
import YouXi1 from '@/Components/questions/YouXi1.vue'
import YouXi2 from '@/Components/questions/YouXi2.vue'
import YouXi3 from '@/Components/questions/YouXi3.vue'
import ChanPin1 from "@/Components/questions/ChanPin1.vue";
import ChanPin2 from "@/Components/questions/ChanPin2.vue";
import ChanPin3 from "@/Components/questions/ChanPin3.vue";
import WuLian1 from "@/Components/questions/WuLian1.vue";
import WuLian3 from "@/Components/questions/WuLian3.vue";
import WuLian2 from "@/Components/questions/WuLian2.vue";
import AnQuan1 from "@/Components/questions/AnQuan1.vue";
import AnQuan2 from "@/Components/questions/AnQuan2.vue";
import AnQuan3 from "@/Components/questions/AnQuan3.vue";
import AnQuan4 from "@/Components/questions/AnQuan4.vue";
import AnQuan5 from "@/Components/questions/AnQuan5.vue";
import EndL from "@/Components/EndL.vue";
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
            path:'/front/question1',
            component:Front
        },
        {
            path:'/front/question2',
            component:QianDuan2
        },
        {
            path:'/front/question3',
            component:QianDuan3
        },
        {
            path:'/front/question4',
            component:QianDuan4
        },
        /*{
            path:'/front/questionEnd',
            component:QianDuanEnd
        }*/
        {
            path:'/back/question1',
            component:HouDuan1
        },
        {
            path:'/back/question2',
            component:HouDuan2
        },
        {
            path:'/back/question3',
            component:HouDuan3
        },
        {
            path:'/back/question4',
            component:HouDuan4
        },
        {
            path:'/acm/question1',
            component:SuanFa1
        },
        {
            path:'/acm/question2',
            component:SuanFa2
        },
        {
            path:'/acm/question3',
            component:SuanFa3
        },
        {
            path:'/game/question1',
            component:YouXi1
        },
        {
            path:'/game/question2',
            component:YouXi2
        },
        {
            path:'/game/question3',
            component:YouXi3
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
          {
            path:'/end',
            component:EndL
          }
    ]
})

export default router;