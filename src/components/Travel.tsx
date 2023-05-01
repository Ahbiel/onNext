export const Data = {
    travel:[
        {
            id:0,
            label:'Paris',
            locality:'international',
            promotion:true,
            price:{
                portion:3,
                dolar:300,
                cents:99
            }
        },
        {
            id:1,
            label:'Roma',
            locality:'international',
            promotion:false,
        },
        {
            id:2,
            label:'Toronto',
            locality:'international',
            promotion:false,
        },
        {
            id:3,
            label:'São paulo',
            locality:'nacional',
            promotion:true,
            price:{
                portion:5,
                dolar:67,
                cents:99
            }
        },
        {
            id:4,
            label:'Manaus',
            locality:'nacional',
            promotion:true,
            price:{
                portion:3,
                dolar:200,
                cents:99
            }
        },
        {
            id:5,
            label:'Gramado',
            locality:'nacional',
            promotion:false,
        },
    ],
    option:[
        {value:'all', label:'all'},
        {value:'nacional', label:'nacional'},
        {value:'international', label:'international'}
    ],
    about:[
        {
            id:1,
            title:'Cheapest flights anywhere in the world',
            subtitle:'Travel anywhere in the world saving money and having fun'
        },
        {
            id:2,
            title:'greater confidence',
            subtitle:'24-hour service and support, ensuring the safety of your money and information'
        },
        {
            id:3,
            title:'Daily deals for any trip',
            subtitle:'Every day new round trip deals to anywhere in the world'
        },
        {
            id:4,
            title:'Travel agency',
            subtitle:'Complete services for your trip, with partnerships specialized in hotels and executive transport'
        },
    ],
    promotion:[
        'São paulo','Paris','Manaus'
    ],
}