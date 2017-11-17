const index = ()=>import( '@/components/bigScreenLottery/vue/index')
const update = ()=>import( '@/components/bigScreenLottery/vue/update')
export const bigScreenLottery = [
    {
        path:'/bigScreenLottery/index',
        component: index,
        name:'index'
    },
    {
        path:'/bigScreenLottery/update',
        component: update,
        name:'update'
    }
]