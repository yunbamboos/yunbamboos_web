const userList = [
    {
        user_id: '1',
        user_name: 'admin',
        user_nickname: 'admin',
        role: 'admin',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '2',
        user_name: 'text2',
        user_nickname: 'text2',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '3',
        user_name: 'text3',
        user_nickname: 'text3',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '4',
        user_name: 'text4',
        user_nickname: 'text4',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '5',
        user_name: 'text5',
        user_nickname: 'text5',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '6',
        user_name: 'text5',
        user_nickname: 'text5',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '7',
        user_name: 'text5',
        user_nickname: 'text5',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '8',
        user_name: 'text5',
        user_nickname: 'text5',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '9',
        user_name: 'text5',
        user_nickname: 'text5',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '10',
        user_name: 'text5',
        user_nickname: 'text5',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    },
    {
        user_id: '11',
        user_name: 'text5',
        user_nickname: 'text5',
        role: 'common',
        status: true,
        des: '',
        create_time: '2022-04-14 00:00:00'
    }
];

export default [
    {
        url: '/api/user/qryPage',
        method: 'post',
        timeout: 10,
        statusCode: 200,
        response: ({body}) => {
            const list = [];
            let statr: number, end: number;
            const total = userList.length;
            const pageNum = body.page_num;
            const pageSize = body.page_size;
            statr = (pageNum - 1) * pageSize;
            end= pageNum * pageSize;
            if(end > total){
                end = total;
            }
            for(let i=statr; i<end;i++){
                list.push(userList[i]);
            }
            return {
                code: 200,
                message: '登录成功',
                data: {
                    page:{
                        total: total,
                        data: list,
                        page_num: body.page_num,
                        page_size: body.page_size
                    }
                }
            }
        }
    }
]
