const projects = [
    {
        _id:0,
        title:'SH Blog',
        explain:'개인 개발 블로그',
        information:[
            '라이브러리 없이 JavaScript로 SPA 구현',
            'History API 를 이용하여 페이지 이동',
            'fetch 함수를 이용하여 CRUD',
            '재사용 가능한 component 를 만들어 사용',
        ], 
       url:[
        "https://res.cloudinary.com/dhjegsbqv/image/upload/v1641977498/gallery/33CE0E57-6AD7-4FC5-9A0F-07C88B57BAFD_ubx9wn.jpg",
        "https://res.cloudinary.com/dhjegsbqv/image/upload/v1641977499/gallery/62380A35-B07D-4761-AA1B-A84F1AD28DFB_utsiza.jpg",
        "https://res.cloudinary.com/dhjegsbqv/image/upload/v1641977499/gallery/89D0E27C-47A2-4599-A18F-964F27BAE600_vgs7g5.jpg",
        "https://res.cloudinary.com/dhjegsbqv/image/upload/v1641977499/gallery/CB492CA9-BC07-441C-AFC6-8C57F707DB1A_j6nztt.jpg",
        "https://res.cloudinary.com/dhjegsbqv/image/upload/v1641977499/gallery/1FD44AF1-B330-49C6-8571-10C9C9C82185_arq3mj.jpg",
        "https://res.cloudinary.com/dhjegsbqv/image/upload/v1641977499/gallery/7043025C-8BD9-4BDD-9158-821B34AB9958_sux7ux.jpg",
        "https://res.cloudinary.com/dhjegsbqv/image/upload/v1641977499/gallery/E78A4A90-8265-448B-870C-0AA96A128492_bzb7vl.jpg",        
         ],

       tools:['JavaScript','webpack','quill','express','mongoose','cloudinary',],
        details:[],
        github:'https://github.com/SH-Won/SH-blog',
        video:'',
        link:'https://blog-sh.vercel.app/'
    },
    {
        _id:1,
        title:'Food Mall',
        explain:'학습을 위한 쇼핑몰',
        information:[
            'webpack 을 이용하여 React 설정',
            'React Router 사용하여 페이지 이동 처리',
            'Redux 를 사용하여 상태관리',
        ],
       url:[
           'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049451/gallery/mall0_tbsuy4.png',
           'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049451/gallery/mall01_mg3cwf.png',
           'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049453/gallery/mall1_dim5he.png',
           'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049452/gallery/mall2_twhpmq.png',
           'https://res.cloudinary.com/dhjegsbqv/image/upload/v1653049451/gallery/mall3_soqbu6.png'
       ],

       tools:['Webpack','React','Redux','express','mongoose',],
        details:[],
        github:'https://github.com/SH-Won/FoodMall',
        video:'',
        link:''
    },
    {
        _id:2,
        title:'Come to Mind',
        explain:'잡동사니',
        information:[
            '3D 캐러셀 구현',
            '마우스 드래그 드랍을 이용한 퍼즐게임',
            '고전 테트리스 게임',
        ],
        url:[
            'https://res.cloudinary.com/dhjegsbqv/image/upload/v1652938619/gallery/3Dcarousel_ztpflw.png',
            'https://res.cloudinary.com/dhjegsbqv/image/upload/v1652938620/gallery/puzzle_nuwpwh.png',
            'https://res.cloudinary.com/dhjegsbqv/image/upload/v1652938618/gallery/tetris_ecyoag.png',
        ],
        tools:['HTML','CSS','JavaScript'],
        details:[],
        github:'https://github.com/SH-Won/come-to-mind',
        link:'',
    }

]
const skills = [
    {
        title:'HTML',
        url:'https://res.cloudinary.com/dhjegsbqv/image/upload/v1616829884/html_fj9543.png',
        explain:'태그의 기본속성을 이해하고 올바른 사용을 위해 노력합니다. 웹 접근성을 위해 시멘틱 태그를 사용하도록 노력합니다.'
    },
    {
        title:'CSS',
        url:'https://res.cloudinary.com/dhjegsbqv/image/upload/v1616829883/css_ihlsda.png',
        explain:'Element를 원하는곳에 정렬,배치 시킬 수 있습니다. transition, animation 을 이용해 DOM 에 동적으로 효과를 줄 수 있습니다'
    },
    {
        title:'JavaScript',
        url:'https://res.cloudinary.com/dhjegsbqv/image/upload/v1616829884/js.png_dvlh4m.jpg',
        explain:'라이브러리 없이 History API 와 Custom Event Listener 를 활용한 SPA를 구현 가능합니다.\n 비동기 통신으로 CRUD 를 할 수 있고, 재사용 가능한 컴포넌트를 만들 수 있습니다. \n 네이티브 프로토타입 메서드를 잘 알고 있습니다'
    },
    {
        title:'Node',
        url:'https://res.cloudinary.com/dhjegsbqv/image/upload/v1616829884/nodejs_mpfyor.png',
        explain:'',
    },
    {
        title:'React',
        url:'https://res.cloudinary.com/dhjegsbqv/image/upload/v1616829884/react_jwhlhr.png',
        explain:'hooks 를 사용하여 함수형 컴포넌트를 만들 수 있습니다.\n ',
    },
    {                   
        title:'Mongo DB',
        url:'https://res.cloudinary.com/dhjegsbqv/image/upload/v1616829884/mongodb_eahhma.png',
        explain:'',
        
    }
]

// console.log({}.__proto__ === Object.prototype);
// console.log(Object.__proto__ === Function.prototype);
// console.log(Object.prototype.__proto__ === null);
// console.log({}.__proto__.__proto__ === null);
// console.log(Function.prototype.__proto__ === Object.prototype);

export{
    projects,
    skills,
}