// ===== 配置区域 =====

// 背景音乐链接
// 请替换为你的音乐文件链接（支持 mp3 格式）
// 例如：const MUSIC_URL = 'https://example.com/我们俩.mp3';
const MUSIC_URL = '';  // 在这里填入音乐链接

// ===== 照片配置 =====
// 在这里添加你们的照片
// url: 照片的网络地址（上传到云存储后会获得）
// desc: 照片描述/备注（可选）

const PHOTOS = [
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/F374ACF95A885D44224E37BC1A648478.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/F9E3E1F59D82052A321DF59642826B94.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/f8e821ec23e519f0e36bb7de0159c42b.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/F2FAE58B5CB498E6D172D84F5A953AAF.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/F2E08F875F14EB31D12A5D2795CB3D3F.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/F0C67D3F441EE40C25B237CAD0FED4D0.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/ef6e6e245057252f685dc9431f8968a9.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/eec4c8461e285640e26537de421a31d0.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/ede6ff90a73010265acc365e00e46fb3.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/ecae55c9b934b23f635c438f336b7085.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/EC79C82BE0C3DFDEF9005EF87457CEF7.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/eb567e8dbdfb4c8e9f6156184d27b4c6.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/EB23F6D406DD3522616A0128A06AFB32.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/e52496167b52d8aad0042ed471f217b4.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/E9452C4C6B8A8CB35B000C1A1C139A29.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/e89a97ec0a0a39eeeb00c175a4d04478.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/E7EB36973B5FC6509554D8D326229A29.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/E2A89AD10DAE7C717467087BD5926903.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/DFFC9AAF732DBC099D49FE6763D4E8AD.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/df530a3bb3739fed2f5d2bc6f6db7cee.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/dc8a4cec28a22663833fa44c426a87e5.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/DBEDB4F1EBE42225100D4709996BB656.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/DB6E90D957737F72760F8B83C6DBEDC5.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/DAC9755D81091E761908431D13E54D9A.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/DA52E5CCB9689C6582DB3CC98D96DF63.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/D49749B295C4343B16DEA5A3F76A3CD4.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/d84d7d79cf94ce69f3e1e74e7b242c07.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/d9a9be7cd88818445b6eeaf1d75b9cc8.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/D4EADB109F847C7C1545DF3978CFFCC1.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/cf650e00e6ae33a1b595948e41919639.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/CD86E1B5F194526822EEA39A47036DA3.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/CC494DFF2F3470AC6BF08CA9CB2F7E23.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/C6942F199682413B60B7B2D1A68FCD72.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/c505fab52c62780ce54b89027fddd47e.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/C023C972693EBCB540C04AE41897EFCA.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/C7BCE783C38436D600EBD2F3C9CE5DF6.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/c6dfe177fef7c7dc1123ba7d83edead0.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/C6DC351524DBA9E00E4353FAC2C7560E.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/C6C2701EBE87D651D226A734FADB64FD.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/C3FE2C8E8B00BD61AD9F425994810A4C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/C3F40B801656C3141A25C9CCCE5D4829.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/BE7694B0B950C2D01F47B7F28A02F57C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/be483d07548b7ce27f32ee8a738d08d9.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/be0f22a41af6d1de601b80e795cd1e9c.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/bc941ec2cff5518fd5e3e95d97e9615a.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/bae6d406855ac71a00e926f7d3db3922.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/BA049162E55BF157B8C40154DA106BBC.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/B1706473523AADA632657AA72355058C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/b518e56d17bac5bd73e53e4d7491a1de.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/b72def38077c054e2577a6ce7dea1a31.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/b59f08a944b2c9c1b9f380ef48fde909.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/B5F8FD670A6F21539355AE201FC8D753.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/b5da211556eb528f8de652be3544e8a1.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/B1B6E9AD2E2047B465AB9BC49024227C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/afc6bbd7674433370913c0274e414fe1.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/AFABA94FA10644B041F898CBB2E54A81.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/AD5C41D9BB0CF78F2C495DFFE75DEFD3.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/AB8F4B8AF83916DCF92CB4F0A8A44ED8.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/a621806895ec01234ce413a598edd42f.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/A9472DE0BC2D1A04E8331686FD6115DF.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/a993fa7da5cabb15e1512b2b2764a41c.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/a02f43eda6718f3ae72c913b701d78f8.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/A02D11CE4A8233B043FA2E4B6362FE96.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/456215456159D8B5D73A48417525D771.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/88837586d1827523a212788996cf099f.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/65018902FFBE31AEE276DC1A05D27C65.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/21421630b028fe070fdc28b8feac644d.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9941402B867D76B4DE2A9266B5698A2F.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/02680078e16ac811cd5960dfa76b5001.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/817714AF8AF413D3B4213961FD06100B.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/804771C320A778B31A9EE13B4D33485C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/792202cb0158108c6cd6ef9ab7749cc3.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/666582E5E443E85757027381CD8D5EEC.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/86530B726445F2B517BD5454A2A31D9E.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/84671af20bbf087eb41092a3ae796976.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/61849E97D14740A5A5A71E428705B8E5.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/61634b62d685c6949ecaf6f5f6db7a42.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/036648d466b7bc873b699517e5a9ec40.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/32099C2EA09C88DFB88C05FD7F5DAE6E.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9798B65C2CB2F0F905DDD1E50491EAA1.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9321b184c3d28e48ca0d28e5c1bfafef.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9076e016298dcb12429b54e3e4cb3ea8.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/8937d5d80e8acdb3c6874704f11f0555.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/7923b122c39abf18e71ffb8b27465f02.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/7677DFBC10FF2DB7855AD23B3E973CEF.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/7220EF574D79489794CB35A4FCBEA41F.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/6965cc924dbffd8a1366b2935dca5a54.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/6475ACDB4895B35959D525D3B0677431.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/6154b61bd5d4c3a73e16626ba1462ede.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/5460B8D61B243857488896249385299B.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/04591CF54E3FBB9FBD372AA9C444ABEA.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/4476B37F4116E9F8EDA3A0A3DDA68B75.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/4190E79C98BE1B738C8601D906842030.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/1285f330e49a95363dfbe989d557b1f8.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/1081fcee0c498e8bef662fcbc3295ec8.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/918AE5BB684607B342DF72BCEB71C9BD.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/874D0872BB0BEFE740BC3ACBA40DEA2D.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/847A21D19C26E814A386F6212FCAA01E.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/635D95B292461832DFF8A500A214E1F4.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/623F4C25313678CB1360D2261E44A6CD.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/604A0C18AE5CCC32FBAEEFE79BEE151C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/593F11B4AC68FED2CEBD1DF71733465C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/509ADA26B53A43EAFB9944C31BB2F995.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/506E2F846D08C3B2192303EE75A603E9.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/441c5f9d82b8276d038be21dd6bb4225.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/409b55e72fabbad7fd107a57668e7872.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/408d7a5675b268b3ef3243dfdc893b00.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/386F4F792A25BE7284E3C1B55BCC9BD3.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/0372e849a3b2b5049f98276cffe8b8c5.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/353a3c82fe4c7e843c8296473a58d4d4.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/297A8161A34AA7442D1B78308536A2FC.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/263F35AFADF8BE8AA107C0F521692D56.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/238D3BED9A7E46E4AE60FEA9A0912FC6.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/174cdaf8ffe35caaee5df5b3e514337d.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/117B5638ACA1FC2843735A056977BB42.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/99F1B285A2D46D0DC8266911CD16F1C7.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/95ED7DA08A50AEC73906B46D2FE04B6E.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/93CC9A64B57F264A01F86BE816C41212.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/92FEB6C1F2F901741C18D164DEAE9510.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/91F7C58C2B26A03F88D1994BC18544BC.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/91b69517d69de3c380373abff8f6bb44.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/86C03BD2DFD8481C552DB0410FEDC840.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/82B7FC9E01549A37FBD3D0C7C168D273.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/81F520FFF79D5B64DE521222735707C0.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/80ba3c1fcddd48a1b54e998c409d0039.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/79E652D89EFF37EE363D74815DCB9445.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/76EF85AE03E7333870782D06E230B8EB.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/072CB56A24DF840C94EC1D4944E83A6B.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/71CD719544433688E1D45A8DF05C33FF.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/71acb3b6702802869d17a9740e60d946.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/67F204B3CF8F35D47A5E187E8C370261.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/65E862182F7A869E44EEF6DE14EBACBC.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/63F0B0A9E48E058BE6C739D84CA97AE8.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/61F1EAE153C0CA47472986CE175E7814.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/61A34E00777FE7161E9636C4C451E426.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/60C018683A48879AD88E0200F88F61A4.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/56C5C2DDA13549607296BF94C3F3C13C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/55D412E483EC424B365D8C3534C4D7EE.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/54fb1f5791670994645dbbe086947f67.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/52E5F83F0BB3FA0D090C439D4D0445BF.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/48A047A42F8F9EAE464B8D44267475C0.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/47fa6c6f83bc03f208865b615647532b.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/44B64D6475142345E1C93ECF4F0DF009.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/38C2D2316B262D312802B4E09D47A110.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/38ba29c8d64ca0a165b03641de6e6e0c.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/038cb3e51e019365ba02ac655c4693cb.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/36C8FDBA6A46E1C8920FAF2A79ED64E5.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/35a205a70af495514874b93f21a03455.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/32B4FD2BA5A1306BDD2B62D274A38BCD.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/29e9b50aa7f353d2e582a87d4066773c.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/11fe8949099b3aa780a55f6eed87924e.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/10C1B15EA1DC3678FFCF08D265ED24CA.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9f89cd9ae9f2feeb45f0b3b819f70af1.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9E88B401F643E143E3CF72C5FB975A7B.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9DB678F6F794B88C7D88E5522B6ADB6C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9CEC79E05BBE21DF3D6B7F65722F169F.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9c3758d47038503dc46a39ee8d62a601.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/9a9990c201259ad8868a913e4d821157.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/8f9a2fe5bad92097aa2e6ed6281271ea.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/8DA9F5E06ADF592D151724391C03C233.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/8D8283D6637AAA0B6E66D02D30B4C30C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/8cc349fb3bf8d2090b9e49b712810fce.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/8AEFD80D7F273E4CC01BA340DDCFCB14.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/08A66C7B077CC268E06B5E6D0DD8DEDC.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/7DEA6C6CA4BECD699EF8F8C0D1872D69.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/7DB55BC054EC415DDE20A753DBE8C7E5.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/7D6D53AA5EB65065172AE69E0E46D2E0.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/07B6D998D2BA6896CCD56D39FB1D9E36.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/6e5373b2dfcf0c161295fa53d72cccf4.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/6e0e198c36db3e82681b87bdc50507f5.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/6DCDCF178C6F5E3A090013E3F8F2A312.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/6B58B64F26A0064D1CCAC4DFD0158198.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/6B013AA40482FB7BB66428854227047B.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/06ED713E1B53FAA81976D411B9608F22.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/5D4D8BF13A499368EEFA34392F1CDD7A.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/5be2403be65dd6242b81b16106126aaf.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/5BDB8DD9C55377CADB80C10E3A518849.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/4eefae4cd205ee9c8ec4131630602492.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/4e53142cab9097dd2479ee0402868265.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/4D6BD5492B5485F0F138311AA6D60165.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/04cfe8b9174092176cf097225dc0b168.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/3CE23C9D6E21040A9B2E0E291B4ADAD1.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/3A7E098362AFD7F7A2FB0FB92B55E006.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/3a4b0bf6561fbc241bd4ebe4b83c203d.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/2F10D967D7A82D5FF49B06BA508D8870.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/2F5E352E0C19B93BC201A73716B56F07.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/2edbf47c3d4cabd568184a1a372eeaed.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/2ec48ebccc2da1a01ca4a74b6a502c8c.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/2E42E53BB1330C5F570204F30B1044A3.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/2D7B0F3F41042C5ECD09424EB8045604.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/2BAC196EBC67B5B1F6A3FC3A873373B7.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/2A4A9F9828871891C3AAB2FC802638AB.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/02bc4b3948089ffdfbedbd42efc6cf69.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/1f7f026e00d59af0cb072405df1cb6bf.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/1DF41BD9C55CF1E17DD8DC26A1A5F85C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/1B3A053012D35EB060ECECDB4C15605C.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/1B3A053012D35EB060ECECDB4C15605C(1).jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/1AE694F107217B36897FC349812410F6.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/1A988F18C8E7E49268157F961BF947B3.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/0F159C762BD2EE96C92D003AB418BCB6.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/0f03f9328c937fe1853a437c8fb5857f.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/0E1162556A0D62F9CBE1B53DBACF6C4B.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/0E1B65D521794E2BC97CD126371AE2F8.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/0D52172547220C4FB876A6C9962CA3FF.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/0D585E04B51266B5E8CF3AE392928750.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/0C68232CD6E9C8423D06684C0E3E23CC.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/0b59a91fd76fa00e3f7a914444cb65a1.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/_e044bc10ff9a744a93f592a39bbec03e_-1128062490_Cache_-6f75ceeda837c5b7.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/_2058601603__4c49ecf53d71dc9d7041a7e53d79a0f4_-224946278_Cache_-774fbc0c1179b79a_0_xg_0.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/_1902410611__3168d306ccf782424dca877cff477eb0_652699674_Cache_-62a2356ca00baeaf_0_xg_0.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/_-1055805168__e189b0af65afddc99464eb0542c7795e_-986066256_Cache_-401fcc6b6abb7b19_0_xg_0.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/_2e90452797a5f064b9dc743ff36083c9_1580734_Cache_4bbcaabfca1891b2.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/FED843D318E2B218AA9E335622A99429.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/FE48DA7E6754F49E6F99A0EB238843E7.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/FA070C2DF61086F11920238683FC7885.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/f81326969fcb8db90bcd7e102b0e41ee.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/f5811ffe26b9df4d6bfa807490a2c08c.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/f989df6499c1268ce381e9b70928a457.jpg',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/%E9%83%AD%E9%A1%B6%20-%20%E6%88%91%E4%BB%AC%E4%BF%A9.mp3',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/fccfffd43bb0508bd59e65d61d973573.png',
        desc: '我们的照片'
    },
    {
        url: 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/ffc7202ee2e52deb6a2399d6bfe3d74a.jpg',
        desc: '我们的照片'
    }
];


// ===== 添加照片说明 =====
/* 
如何添加新照片：

1. 使用 PicList 上传照片到云存储
2. 上传成功后会自动复制图片链接
3. 在上面的 PHOTOS 数组中添加：
   {
       url: '刚才复制的图片链接',
       desc: '照片描述'
   }

提示：
- desc 可以为空或不填
- 照片按照添加的顺序显示
*/

/* 
如何添加背景音乐：

1. 找到歌曲的 MP3 文件链接（可以从网易云音乐、QQ音乐等平台获取）
2. 将链接填入上面的 MUSIC_URL 变量中

例如：
const MUSIC_URL = 'https://love-photos.oss-cn-chengdu.aliyuncs.com/photos/%E9%83%AD%E9%A1%B6%20-%20%E6%88%91%E4%BB%AC%E4%BF%A9.mp3';

注意：
- 链接必须是直接的 MP3 文件链接
- 部分平台可能有防盗链，建议使用 OSS 或其他云存储托管音乐文件
*/
