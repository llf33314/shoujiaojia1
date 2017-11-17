const index = ()=>import( '@/components/bigScreenInteract/vue/index')
const update = ()=>import( '@/components/bigScreenInteract/vue/update')
export const bigScreenInteract = [
    {
        path:'/bigScreenInteract/index',
        component: index,
        name:'index'
    },
    {
        path:'/bigScreenInteract/update',
        component: update,
        name:'update'
    }
]