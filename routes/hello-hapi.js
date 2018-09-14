//分离路由配置
module.exports=[
    {
        method:'GET',
        path:'/',
        handler:(request,reply)=>{
            reply('hello hapi');
        }
    },
]