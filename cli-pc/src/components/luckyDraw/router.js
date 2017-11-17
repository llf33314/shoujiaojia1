const index = ()=>import( '@/components/luckyDraw/vue/index')
const update = ()=>import( '@/components/luckyDraw/vue/update')
export const luckyDraw = [
    {
        path:'/luckyDraw/index',
        component: index,
        name:'index'
    },
    {
        path:'/luckyDraw/update',
        component: update,
        name:'update'
    }
]