// ==UserScript==
// @name         Humble Choice Get Key
// @namespace    http://tampermonkey.net/
// @version      0.15
// @description  HB月包选择游戏(只选不刮),刮开游戏，刮开dlc，IG慈善包一键刮key
// @author       ku mi
// @include      /https:\/\/www\.humblebundle\.com\/subscription\/.*?/
// @include      /https:\/\/www\.indiegala\.com\/(gift-bundle\/|gift\?gift_id=).*?/
// @grant        GM_addStyle
// @require      https://cdn.staticfile.org/html2canvas/0.5.0-beta4/html2canvas.min.js
// ==/UserScript==
//https:\/\/www\.(indiegala|humblebundle)\.com\/(subscription\/|gift-bundle\/|gift\?gift_id=).*?
(async () => {
    const countryMap = {
        AD: '安道尔',
        AE: '阿拉伯联合酋长国',
        AF: '阿富汗',
        AG: '安提瓜和巴布达',
        AI: '安圭拉',
        AL: '阿尔巴尼亚',
        AM: '亚美尼亚',
        AO: '安哥拉',
        AQ: '南极洲',
        AR: '阿根廷',
        AS: '美属萨摩亚',
        AT: '奥地利',
        AU: '澳大利亚',
        AW: '阿鲁巴',
        AX: '奥兰群岛',
        AZ: '阿塞拜疆',
        BA: '波斯尼亚和黑塞哥维那',
        BB: '巴巴多斯',
        BD: '孟加拉',
        BE: '比利时',
        BF: '布基纳法索',
        BG: '保加利亚',
        BH: '巴林',
        BI: '布隆迪',
        BJ: '贝宁',
        BL: '圣巴托洛缪岛',
        BM: '百慕大',
        BN: '文莱',
        BO: '玻利维亚',
        BQ: '博奈尔',
        BR: '巴西',
        BS: '巴哈马',
        BT: '不丹',
        BU: '缅甸',
        BV: '布韦岛',
        BW: '博兹瓦纳',
        BY: '白俄罗斯',
        BZ: '伯利兹',
        CA: '加拿大',
        CC: '科科斯（基林）群岛',
        CD: '刚果（金）',
        CF: '中非共和国',
        CG: '刚果（布）',
        CH: '瑞士',
        CI: '科特迪瓦',
        CK: '库克群岛',
        CL: '智利',
        CM: '喀麦隆',
        CN: '中国',
        CO: '哥伦比亚',
        CR: '哥斯达黎加',
        CS: '塞尔维亚和黑山',
        CU: '古巴',
        CV: '佛得角',
        CW: '库拉索',
        CX: '圣诞岛',
        CY: '塞浦路斯',
        CZ: '捷克',
        DE: '德国',
        DJ: '吉布提',
        DK: '丹麦',
        DM: '多米尼克',
        DO: '多米尼加',
        DZ: '阿尔及利亚',
        EC: '厄瓜多尔',
        EE: '爱沙尼亚',
        EG: '埃及',
        EH: '西撒哈拉',
        ER: '厄立特里亚',
        ES: '西班牙',
        ET: '埃塞俄比亚',
        FI: '芬兰',
        FJ: '斐济',
        FK: '福克兰群岛',
        FM: '密克罗尼西亚',
        FO: '法罗群岛',
        FR: '法国',
        GA: '加蓬',
        GB: '英国',
        GD: '格林纳达',
        GE: '格鲁吉亚',
        GF: '法属圭亚那',
        GG: '根西',
        GH: '加纳',
        GI: '直布罗陀',
        GL: '格陵兰',
        GM: '冈比亚',
        GN: '几内亚',
        GP: '瓜德鲁普',
        GQ: '赤道几内亚',
        GR: '希腊',
        GS: '南乔治亚岛和南桑威奇群岛',
        GT: '危地马拉',
        GU: '关岛',
        GW: '几内亚比绍',
        GY: '圭亚那',
        HK: '香港',
        HM: '赫德岛和麦克唐纳群岛',
        HN: '洪都拉斯',
        HR: '克罗地亚',
        HT: '海地',
        HU: '匈牙利',
        ID: '印尼',
        IE: '爱尔兰',
        IL: '以色列',
        IM: '马恩岛',
        IN: '印度',
        IO: '英属印度洋领地',
        IQ: '伊拉克',
        IR: '伊朗',
        IS: '冰岛',
        IT: '意大利',
        JE: '泽西岛',
        JM: '牙买加',
        JO: '约旦',
        JP: '日本',
        KE: '肯尼亚',
        KG: '吉尔吉斯',
        KH: '柬埔寨',
        KI: '基里巴斯',
        KM: '科摩罗',
        KN: '圣基茨和尼维斯',
        KP: '朝鲜',
        KR: '韩国',
        KW: '科威特',
        KY: '开曼群岛',
        KZ: '哈萨克斯坦',
        LA: '老挝',
        LB: '黎巴嫩',
        LC: '圣卢西亚',
        LI: '列支敦士登',
        LK: '斯里兰卡',
        LR: '利比里亚',
        LS: '莱索托',
        LT: '立陶宛',
        LU: '卢森堡',
        LV: '拉脱维亚',
        LY: '利比亚',
        MA: '摩洛哥',
        MC: '摩纳哥',
        MD: '摩尔多瓦',
        ME: '黑山',
        MF: '法属圣马丁',
        MG: '马达加斯加',
        MH: '马绍尔群岛',
        MK: '马其顿',
        ML: '马里',
        MM: '缅甸',
        MN: '蒙古',
        MO: '澳门',
        MP: '北马里亚纳群岛',
        MQ: '马提尼克',
        MR: '毛里塔尼亚',
        MS: '蒙塞拉特',
        MT: '马耳他',
        MU: '毛里求斯',
        MV: '马尔代夫',
        MW: '马拉维',
        MX: '墨西哥',
        MY: '马来西亚',
        MZ: '莫桑比克',
        NA: '纳米比亚',
        NC: '新喀里多尼亚',
        NE: '尼日尔',
        NF: '诺福克岛',
        NG: '尼日利',
        NI: '尼加拉瓜',
        NL: '荷兰',
        NO: '挪威',
        NP: '尼泊尔',
        NR: '瑙鲁',
        NU: '纽埃',
        NZ: '新西兰',
        OM: '阿曼',
        PA: '巴拿马',
        PE: '秘鲁',
        PF: '法属波利尼西亚a',
        PG: '巴布亚新几内亚',
        PH: '菲律宾',
        PK: '巴基斯坦',
        PL: '波兰',
        PM: '圣皮埃尔和密克隆',
        PN: '皮特凯恩群岛',
        PR: '波多黎各',
        PS: '巴勒斯坦',
        PT: '葡萄牙',
        PW: '帕劳',
        PY: '巴拉圭',
        QA: '卡塔尔',
        RE: '留尼旺島',
        RO: '罗马尼亚',
        RS: '塞尔维亚',
        RU: '俄罗斯',
        RW: '卢旺达',
        SA: '沙特阿拉伯',
        SB: '所罗门群岛',
        SC: '塞舌尔',
        SD: '苏丹',
        SE: '瑞典',
        SG: '新加坡',
        SH: '圣赫勒拿、阿森松与特斯坦达库尼亚',
        SI: '斯洛文尼',
        SJ: '斯瓦尔巴群岛和扬马延岛',
        SK: '斯洛伐克',
        SL: '塞拉利昂',
        SM: '圣马力诺',
        SN: '塞内加尔',
        SO: '索马里',
        SR: '苏里南',
        SS: '南苏丹',
        ST: '圣多美和普林西比',
        SV: '萨尔瓦多',
        SX: '荷属圣马丁',
        SY: '叙利亚',
        SZ: '斯威士兰',
        TC: '特克斯和凯科斯群岛',
        TD: '乍得',
        TF: '法属南部领土',
        TG: '多哥',
        TH: '泰国',
        TJ: '塔吉克斯坦',
        TK: '托克劳',
        TL: '东帝汶',
        TM: '土库曼斯坦',
        TN: '突尼斯',
        TO: '汤加',
        TR: '土耳其',
        TT: '特立尼达和多巴哥',
        TV: '图瓦卢',
        TW: '台湾',
        TZ: '坦桑尼亚',
        UA: '乌克兰',
        UG: '乌干达',
        UM: '美国本土外小岛屿',
        US: '美国',
        UY: '乌拉圭',
        UZ: '乌兹别克斯坦',
        VA: '圣座',
        VC: '圣文森特和格林纳丁斯',
        VE: '委内瑞拉',
        VG: '英属维尔京群岛',
        VI: '美属维尔京群岛',
        VN: '越南',
        VU: '瓦努阿图',
        WF: '瓦利斯和富图纳群岛',
        WS: '萨摩亚',
        XK: '科索沃',
        YE: '也门',
        YT: '马约特',
        ZA: '南非',
        ZM: '赞比亚',
        ZW: '津巴布韦'
    }
    async function http(data, flag) {
        const res = await fetch(data.url, {
            method: data.method || 'GET',
            body: data.body || null,
            headers: data.headers
        })
        if (res.status !== 200) return {}
        return await flag ? res.text() : res.json()
    }
    getInitData(new DOMParser().parseFromString(await http({ url: location.href }, true), 'text/html'))
    function getInitData(el) {
        const script = el.getElementById('webpack-monthly-product-data') || el.getElementById('webpack-subscriber-hub-data')
        if (!script) return
        const { contentChoiceOptions: { contentChoiceData: { extras, initial: { content_choices, display_order, total_choices } }, gamekey, contentChoicesMade, downloadPageUrl }, csrfTokenInput } = JSON.parse(script.innerText.trim())
        const [, csrfToken] = csrfTokenInput.match(/value='([\w-_]+)'.+/)
        console.log(JSON.parse(script.innerText.trim()).contentChoiceOptions)
        if (!gamekey) return
        const extrasUrl = { url: `https://www.humblebundle.com/api/v1/order/${gamekey}?wallet_data=true&all_tpkds=true` }
        const selecedGame = contentChoicesMade ? contentChoicesMade.initial.choices_made : []
        const extrasSteam = extras.filter(item => item.types.includes('steam'))
        const allGame = display_order.map(name => {
            let obj = {}
            if(content_choices[name].tpkds) {
                const { machine_name, human_name: title, exclusive_countries: exclusive, disallowed_countries: disallowed, redeemed_key_val: key = '', steam_app_id: appid = '' } = content_choices[name].tpkds[0]
                obj = {
                    parent_identifier: '',
                    parent_identifierChild: '',
                    machine_name,
                    title,
                    exclusive,
                    disallowed,
                    appid,
                    name,
                    key
                }
            } else if(content_choices[name].nested_choice_tpkds) {
                let childName = Object.keys(content_choices[name].nested_choice_tpkds).find(item => item.includes('steam'))
                if(!childName) {
                    return alert('数据有问题, 脚本不可用！๐·°(৹˃̵﹏˂̵৹)°·๐')
                }
                const { machine_name, human_name: title, exclusive_countries: exclusive, disallowed_countries: disallowed, redeemed_key_val: key = '', steam_app_id: appid = '' } = content_choices[name].nested_choice_tpkds[childName][0]
                obj = {
                    parent_identifier: name,
                    parent_identifierChild: childName,
                    machine_name,
                    title,
                    exclusive,
                    disallowed,
                    appid,
                    name,
                    key
                }
            }
            return obj
        })
        const gameBox = document.createElement('div')
        const optionBox = document.createElement('div')
        gameBox.innerHTML = `<div class="_mask_"><div class="_alert_"></div></div><div class="_sh_box_"><button class="_sh_hd_ current">隐藏锁区信息</button><span style="margin-left: 20px; font-size: 20px; color: #c93756;">注: 锁区信息仅供参考，以激活后的SUB为准！</span><a class="_down_page_" target="_blank" href=${downloadPageUrl}>Download页面</a/></div><ul class="_self_view_"></ul>`
        optionBox.innerHTML = `<div class="_option_ul_"></div><div class="_select_ul_"></div><div style="display: flex;"><textarea class="_key_value_"></textarea><div><button class="_copy_">复制</button><button class="_clear_">清空</button></div></div>`
        const gamelist = gameBox.querySelector('._self_view_')
        const sButton = gameBox.querySelector('._sh_hd_')
        const sMask = gameBox.querySelector('._mask_')
        const sAlert = sMask.firstElementChild
        const textArr = ['选择游戏(只选不刮)', '刮开/提取', '全选高亮', '取消高亮', '多选高亮截图']
        const classArr = ['._copy_', '._clear_', '._option_ul_', '._select_ul_', '._key_value_']
        const [cButton, clearKey, optionUl, selectUl, keyValue] = classArr.map(item => optionBox.querySelector(item))
        const [selectKey, getKey, allLight, noLight, screenShot] = createButton()
        const liChild = createLiChild(allGame)
        setNum()
        eventInt()
        gameBox.insertBefore(optionBox, sMask)
        appendLi(allGame)
        const selectList = gamelist.querySelectorAll('li button:nth-child(2n+1)')
        const getList = gamelist.querySelectorAll('li button:nth-child(2n)')
        const view = document.querySelector('.content-choices-view')
        const list = document.querySelector(".content-choice-tiles.js-content-choice-tiles")
        view.insertBefore(gameBox, list)
        selectList.forEach(item => item.addEventListener('click', function (e) {
            if (this.classList.contains('current')) return
            sendRquest(true, [this], e)
        }))
        getList.forEach(item => item.addEventListener('click', seake))
        checkHaveDlc(extrasSteam)
        async function seake(e) {
            if (this.classList.contains('current')) return
            if (this.dataset.name && !selecedGame.includes(this.dataset.name)) {
                const res = await sendRquest(false, [this], e)
                if (!res) return alertFun(`刮开失败！๐·°(৹˃̵﹏˂̵৹)°·๐`)
            }
            sendKeyRquest([this], e)
        }
        function getZhName(arr) {
            return arr.map(item => {
                if (/\u53f0\u6e7e|\u4e2d\u56fd|\u9999\u6e2f|\u6fb3\u95e8/.test(countryMap[item])) return `<span style="color: #c93756; font-size: 20px;">${countryMap[item]}</span>`
                return countryMap[item]
            }).join('、')
        }
        function getLock(game) {
            if (game.exclusive.length) return `<span style="color: #cc6699"><span style="color: #c93756; font-size: 20px;">只能在</span>以下激活:  ${getZhName(game.exclusive)}</span>`
            if (game.disallowed.length) return `<span style="color: #B0E2FF"><span style="color: #c93756; font-size: 20px;">不能在</span>以下地区激活: ${getZhName(game.disallowed)}<span>`
            return `<span style="color: #279b61">无限制激活</span>`
        }
        function alertFun(msg, flag) {
            sAlert.innerHTML = msg
            sMask.style.display = 'block'
            sAlert.classList.add('_bunceIn_')
            if (flag) return
            let time = setTimeout(() => {
                sMask.style.display = 'none'
                sAlert.classList.remove('_bunceIn_')
                clearTimeout(time)
            }, 1200)
        }
        async function selectGet(flag) {
            if (flag && selecedGame.length >= total_choices) return alertFun(`已经没得选择了！(｡•ˇ‸ˇ•｡)`)
            const newliChild = selectUl.querySelectorAll('button')
            const noSelect = []
            const noSelectLi = []
            const selected = []
            const no = flag ? selectList : getList
            const arr = liChild.filter((li, index) => {
                if (li.classList.contains('current') && (selected.length + noSelect.length < total_choices)) {
                    if (!flag && selecedGame.includes(li.dataset.name) && !li.dataset.key) selected.push(no[index])
                    else if (!selecedGame.includes(li.dataset.name) && (noSelect.length + selecedGame.length < total_choices)) {
                        noSelect.push(no[index])
                        noSelectLi.push(li)
                    }
                }
                return li.classList.contains('current')
            })
            if (arr.length > total_choices) return alertFun(`最多选${total_choices}个！ヽ(#\`Д´)ﾉ`)
            if (flag && !noSelect.length) return alertFun(`已经选过了！ヽ(#\`Д´)ﾉ`)
            if (!flag && newliChild.length !== liChild.length) {
                newliChild.forEach((li, index) => {
                    if (li.classList.contains('current') && !li.dataset.name) {
                        arr.push(li)
                        if (!li.dataset.key) selected.push(no[index])
                    }
                })
            }
            if (!arr.length) return
            noLight.click()
            if (noSelect.length) {
                const res = await sendRquest(flag, noSelect)
                if (!res && !flag) return alertFun(`刮开失败！๐·°(৹˃̵﹏˂̵৹)°·๐`)
                if (flag) return arr.forEach(item => selecedGame.includes(item.dataset.name) && (keyValue.value += `${item.dataset.title}: 选择成功\n`))
            }
            if (selected.length || noSelect.length) await sendKeyRquest(selected.concat(noSelect))
            keyValue.value = ''
            arr.forEach(item => item.dataset.key && (keyValue.value += `${item.dataset.title}\t${item.dataset.key}\n`))
        }
        async function sendKeyRquest(arr, e) {
            alertFun(`正在努力请求...！(,,•́ . •̀,,)`, true)
            if (!e) keyValue.value = ''
            const res = await Promise.all(arr.map(item => {
                return http({
                    url: 'https://www.humblebundle.com/humbler/redeemkey',
                    body: `keytype=${item.dataset.machine_name}&key=${gamekey}&keyindex=0`,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    },
                    method: 'POST'
                })
            }))
            alertFun(`已经刮好了！(๑˃́ꇴ˂̀๑)`)
            arr.forEach((item, index) => {
                const newliChild = [...selectUl.querySelectorAll('button')]
                newliChild.find(it => it.dataset.machine_name === item.dataset.machine_name).dataset.key = res[index].key || '刷新重试'
                item.innerText = '已刮开'
                item.className = 'current'
                const input = item.nextElementSibling.nextElementSibling
                input.style.display = 'block'
                input.value = res[index].key || '刷新重试'
                if (e) keyValue.value += `${item.dataset.title}\t${res[index].key}\n`
            })
        }
        async function sendRquest(flag, arr, e) {
            keyValue.value = ''
            let url = ''
            const twice = []
            function getHttp(url, parent_identifier = 'initial') {
                return http(
                    {
                        method: 'POST',
                        url: 'https://www.humblebundle.com/humbler/choosecontent',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            'csrf-prevention-token': csrfToken,
                            'x-requested-with': 'XMLHttpRequest'
                        },
                        body: `gamekey=${gamekey}&parent_identifier=${parent_identifier}${url}`,
                    })
            }
            arr.forEach(item => {
                if(item.dataset.parent_identifier)  {
                    twice.push({
                        parent_identifier: item.dataset.parent_identifier,
                        name: item.dataset.parent_identifierchild
                    })
                }
                url += `&chosen_identifiers[]=${item.dataset.name}`
            })
            alertFun(`正在努力请求...！(,,•́ . •̀,,)`, true)

            let res = await getHttp(url)

            if(twice.length && res.force_refresh) await Promise.all(twice.map(it => getHttp('&chosen_identifiers[]=' + it.name, it.parent_identifier)))

            if (flag) alertFun(res.force_refresh ? `已经选择好了！(๑˃́ꇴ˂̀๑)` : `选择失败！๐·°(৹˃̵﹏˂̵৹)°·๐`)
            if (res.force_refresh) {
                const titles = arr.map(item => {
                    const itemName = item.dataset.name
                    if (flag) {
                        item.innerText = '已选择'
                        item.className = 'current'
                    } else {
                        const next = item.nextElementSibling
                        next.innerText = '已选择'
                        next.className = 'current'
                    }
                    selecedGame.push(itemName)
                    if (e && flag) keyValue.value += `${item.dataset.title}: 选择成功\n`
                    return item.dataset.title.toLocaleLowerCase()

                })
                checkHaveDlc(titles, true)
            } else {
                arr.forEach(item => {
                    if (e && flag) keyValue.value += `${item.dataset.title}: 选择失败\n`
                })
            }
            return res.force_refresh
        }
        async function checkHaveDlc(arr, flag) {
            if (!arr.length) return
            const extrasRes = await http(extrasUrl)
            let dlc = flag ? extrasRes.tpkd_dict.all_tpks.filter(item => arr.some(it => it !== item.human_name.toLocaleLowerCase() && item.human_name.toLocaleLowerCase().indexOf(it) === 0)) : extrasRes.tpkd_dict.all_tpks.filter(item => arr.some(it => it.machine_name === item.machine_name))
            dlc = dlc.map(item => ({
                machine_name: item.machine_name,
                title: item.human_name,
                exclusive: item.exclusive_countries,
                disallowed: item.disallowed_countries,
                appid: item.steam_app_id || '',
                name: '',
                key: item.redeemed_key_val || ''
            }))
            if (!dlc.length) return
            createLiChild(dlc, true)
            appendLi(dlc)
        }
        function appendLi(data) {
            const fragment = document.createDocumentFragment()
            data.forEach(item => {
                const li = document.createElement('li')
                li.innerHTML = `<div><a style="text-decoration: none; color: #169fe3" ${item.appid && `href="https://store.steampowered.com/app/${item.appid}"`} target="_blank">${item.title}</a><button class="${item.key ? 'current' : ''}" data-name="${item.name}" data-machine_name="${item.machine_name}" data-parent_identifier="${item.parent_identifier}" data-parent_identifierChild="${item.parent_identifierChild}"  data-title="${item.title}">${item.key ? '已刮开' : '未刮开'}</button><button ${item.name ? '' : `style="visibility: hidden"`} class="${selecedGame.includes(item.name) ? 'current' : ''}" data-name="${item.name}" data-parent_identifier="${item.parent_identifier}" data-parent_identifierChild="${item.parent_identifierChild}" data-machine_name="${item.machine_name}" data-title="${item.title}">${selecedGame.includes(item.name) ? '已选择' : '未选择'}</button><input type="text" class="_click_key_" ${item.key ? '' : `style="display: none"`} value=${item.key}><p style="margin: 15px 15px 15px 0; ">${getLock(item)}</p></div>`
                fragment.appendChild(li)
                li.querySelector('button').addEventListener('click', seake)
            })
            gamelist.appendChild(fragment)
        }
        function createButton() {
            const fragment = document.createDocumentFragment()
            const buttonList = textArr.map((item, index) => {
                const button = document.createElement('button')
                button.innerText = item
                fragment.appendChild(button)
                return button
            })
            optionUl.appendChild(fragment)
            return buttonList
        }
        function createLiChild(arr, flag) {
            const fragment = document.createDocumentFragment()
            const liChild = arr.map((item, index) => {
                const button = document.createElement('button')
                button.innerText = flag ? 'DLC' : index + 1
                Object.assign(button.dataset, {
                    name: item.name,
                    title: item.title,
                    key: item.key,
                    machine_name: item.machine_name
                })
                fragment.appendChild(button)
                return button
            })
            selectUl.appendChild(fragment)
            return liChild
        }
        function setNum() {
            const els = document.querySelectorAll('.js-content-choices .choice-image-container')
            els.forEach((item, index) => {
                let div = document.createElement('div')
                div.setAttribute('class', '_game_num_')
                div.innerText = index + 1
                item.appendChild(div)
            })
        }
        function eventInt() {
            optionUl.onselectstart = () => false
            selectUl.onselectstart = () => false
            selectUl.addEventListener('click', (e) => { if (e.target.nodeName === 'BUTTON') e.target.classList.toggle('current') })
            allLight.addEventListener('click', () => selectUl.querySelectorAll('button').forEach(item => item.classList.add('current')))
            noLight.addEventListener('click', () => selectUl.querySelectorAll('button').forEach(item => item.classList.remove('current')))
            clearKey.addEventListener('click', () => (keyValue.value = ''))
            cButton.addEventListener('click', () => {
                if (!keyValue.value.length) return
                keyValue.select()
                document.execCommand('copy')
            })
            sButton.addEventListener('click', function () {
                const flag = this.classList.contains('current')
                gamelist.classList.remove(flag ? '_slide_down_' : '_slide_up_')
                gamelist.classList.add(flag ? '_slide_up_' : '_slide_down_')
                this.innerText = flag ? '显示锁区信息' : '隐藏锁区信息'
                this.classList.toggle('current')
            })
            getKey.addEventListener('click', () => selectGet())
            selectKey.addEventListener('click', () => selectGet(true))
            screenShot.addEventListener('click', () => {
                let flag
                const newButton = selectUl.querySelectorAll('button')
                if (!sButton.classList.contains('current')) sButton.click()
                const arr = [...gamelist.children].filter((item, index) => !newButton[index].classList.contains('current'))
                if (arr.length !== newButton.length) arr.forEach(item => (item.style.display = 'none'))
                alertFun(`正在截图...(,,•́ . •̀,,)`, true)
                sMask.onclick = () => {
                    arr.forEach(item => (item.style.display = 'block'))
                    sMask.style.display = 'none'
                    flag = true
                    sMask.onclick = null
                }
                html2canvas(gamelist).then(canvas => {
                    if (flag) return
                    sAlert.style.backgroundColor = '#494f5c'
                    alertFun(`<img src=${canvas.toDataURL()}>`, true)
                    sMask.onclick = () => {
                        arr.forEach(item => (item.style.display = 'block'))
                        sMask.style.display = 'none'
                        sAlert.style.backgroundColor = '#c93756'
                        sMask.onclick = null
                        noLight.click()
                    }
                })
            })
        }
        GM_addStyle(`
        ._click_key_ {
            border-radius: 4px;
            outline: none;
            border: none;
            background-color: #454c5e;
            width: 250px;
            padding: 5px 0;
            text-align: center;
            float: right;
        }

        ._mask_ {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            display: none;
            background-color: rgba(0,0,0,.3);
            z-index: 999;
        }

        ._alert_ {
            background-color: #c93756;
            border-radius: 8px;
            box-shadow: 0 0 15px #c93756;
            font-size: 1.5em;
            position: absolute;
            text-align: center;
            left: 50%;
            top: 50%;
            padding: 0 30px;
            line-height: 3em;
            transform: translate(-50%,-50%);
        }

        ._alert_ img {
            display: block;
        }

        ._bunceIn_ {
            animation: bunceIn .3s forwards;
        }

        ._sh_hd_ {
            border: none;
            outline: none;
            color: #A4D7F5;
            background-image: linear-gradient( to bottom,rgba(47,137,188,1) 5%,rgba(23,67,92,1) 95%);
            margin: 20px 0 0 20px;
            border-radius: 5px;
            line-height: 50px;
            padding: 0 20px;
        }

        ._slide_down_ {
            animation: slideDown .3s forwards;
        }

        ._slide_up_ {
            animation: slideUp .3s forwards;
        }

        @keyframes bunceIn {
            0% {
                transform: translate(-50%,-50%)  scale(.8);
            }

            50% {
                transform: translate(-50%,-50%) scale(1.2);
            }

            100% {
                transform: translate(-50%,-50%) scale(1);
            }
        }

        @keyframes slideUp {
            0% {
                max-height: 2000px;
            }

            100% {
                max-height: 0;
            }
        }

        @keyframes slideDown {
            0% {
                max-height: 0;
            }

            100% {
                max-height: 2000px;
            }
        }

        ._down_page_ {
            float: right;
            padding: 0 20px;
            border-radius: 5px;
            height: 50px;
            margin: 20px 20px 0 0;
            line-height: 50px;
            background: linear-gradient( to bottom,rgba(47,137,188,1) 5%,rgba(23,67,92,1) 95%);
            color: #A4D7F5;
            text-decoration: none;
        }

        ._key_value_ {
            margin: 20px 0 0 20px;
            width: 650px;
            height: 200px;
            resize: none;
            font-size: 18px;
            color: #fff;
            outline: none;
            background-color: #454c5e;
            border: none;
        }

        ._option_ul_,._select_ul_ {
            margin: 0 0 0 20px;
            line-height: 50px;
        }

        ._option_ul_>button,._select_ul_>button {
            border: none;
            outline: none;
            padding: 0 20px;
            margin: 20px 20px 0 0;
            border-radius: 5px;
            font-size: 16px;
            background-image: linear-gradient( to bottom,rgba(47,137,188,1) 5%,rgba(23,67,92,1) 95%);
        }

        ._select_ul_>button {
            background: #454c5e;
        }

        ._select_ul_> button.current {
            background-image: linear-gradient(to top,#0c3483 0%,#a2b6df 100%,#6b8cce 100%,#a2b6df 100%);
        }

        ._game_num_ {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            background-color: rgba(0,0,0,.3);
            text-align: center;
            font-size: 100px;
        }

        ._sh_hd_.current {
            background-image: linear-gradient(to top,#c71d6f 0%,#d09693 100%);
            color: #fff;
        }

        ._self_view_ {
            max-height: 2000px;
            list-style: none;
            margin: 20px 0 0 0;
            padding: 0;
            overflow: hidden;
            background-color: #363c49;
        }
        ._self_view_>li > div {
            width: 100%;
        }
        ._self_view_>li {
            font-size: 16px;
            padding: 20px 0 0px 20px;
            border-bottom: 10px solid #454c5e;
            display: flex;
            justify-content: space-between;
        }

        ._self_view_>li button {
            border: none;
            outline: none;
            background-image: linear-gradient( to bottom,rgba(47,137,188,1) 5%,rgba(23,67,92,1) 95%);
            color: #A4D7F5;
            margin: 0 10px;
            font-size: 16px;
            border-radius: 0.8em;
            padding: 5px 15px;
            width: 100px;
            float: right;
        }

        ._copy_,._clear_ {
            background: linear-gradient( to bottom,rgba(47,137,188,1) 5%,rgba(23,67,92,1) 95%);
            color: #A4D7F5;
            border-radius: 5px;
            border: none;
            outline: none;
            font-size: 16px;
            line-height: 50px;
            text-align: center;
            margin: 170px 0 0 20px;
            width: 70px;
        }

        ._self_view_>li .current {
            opacity: 0.45;
        }

        ._self_view_>li:last-child {
            border: none;
        }`
        )
    }
})();