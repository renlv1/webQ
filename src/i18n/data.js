/**
 * Created by Ausu on 2018/4/18.
 */
export const messages = {
  CN: {
    header: {
      navList: [
        {name: 'Q百科', path: '/wiki'},
        {name: '资产背书', path: '/strategy/assetRecite'},
        {name: '投资项目', path: '/strategy/investProject'},
        {name: '区块链技术', path: '/blockChain'},
        {name: '新视角', path: '/newView'},
        {
          name: '关于',
          dropDown: [{name: '我们的价值', path: '/about/ourValue'}, {name: '我们的团队', path: '/about/team'}],
          activeClass: false
        }
      ]
    },
    wiki: {
      text1: '一枚值得信赖的',
      text2: '数字货币',
      text3: '对应全球投资组合的数字化资产，源自对冲通胀、伦敦金融城核心商业地产 ',
      text4: '为万千投资者量身定做 , ',
      text5: '让世界属于所有人',
      text6: '对投资者的优势',
      slideArr: [
        {
          imgUrl: require('../assets/images/wiki/a25.png'),
          title: 'Q是什么？',
          textp: '“Q”是2018年春季设计的一种新型加密数字货币，旨在为全球货币提供另一种解决方案：',
          slidetop: '',
          slidebotColor: '获得最高投资标准的确定性，同时确保所有权的安全。',
          slidebotAdd1: '',
          slidebotAdd2: '',
          imgp: 'Q的结构示意图'
        },
        {
          imgUrl: require('../assets/images/wiki/a99.png'),
          title: 'Q价格',
          textp: '首次发行价格: ',
          slidetop: '入: Q (time=0) = 1 GBP = Q.Arthur NAV(0) ',
          slidebot: '首期发行规模：£200,000,000 ',
          slidebotAdd2: '由以太坊（Etherum）链运营',
          imgp: '资金流动示意图'
        }
      ],
      wiListData: [
        {
          imgUrl: require('../assets/images/wiki/a26.svg'),
          title: '最佳选择',
          textp: '数字资产（代币）—Q，提供全球投资组合的选择。它可以自由、稳定地交易；交易成本低；存储安全；透明。',
          btn: '1'
        },
        {
          imgUrl: require('../assets/images/wiki/a27.svg'),
          title: '系统可靠',
          textp: 'Q币将比特币理想的数字特性与让人类感到安全的传统资产的内在价值结合起来，确保所有权的安全并获得最高的投资保证标准。',
          btn: '2'
        },
        {
          imgUrl: require('../assets/images/wiki/a28.svg'),
          title: '价值保存',
          textp: '国际金融中心核心地段的房地产等全球优质资产支持的投资，由Q.Arthur全球资产管理团队经营。',
          btn: '3'
        },
        {
          imgUrl: require('../assets/images/wiki/a29.svg'),
          title: '资金流量',
          textp: '投资者在交易所交易Q代币以换取法定货币，保障高品质全球资产和稳定现金流。',
          btn: '4'
        }
      ],
      investorList: [
        {
          title: '安全性高',
          text: '• 对应资产具备抗通胀属性，安全，收益高。'
        },
        {
          title: '流动性强',
          text: '• 代币跨越了国界限制，资产流动性更强。'
        },
        {
          title: '升值空间',
          text: '• 基于资产背书，加密数字货币升值空间巨大。'
        },
        {
          title: '资产组合',
          text: '• 以全球最高标准认可的优质资产作为后盾，形成对冲消费者价格指数的资产组合。'
        },
        {
          title: '最优选择',
          text: '• 作为成本效益的最优选择，协助企业和个人实现其财富的全球配置、全球获取和全球支付。'
        },
        {
          title: '迅速反应',
          text: '• 资产管理团队可以在优质资产被推向市场的第一时间作出反应，以最优价格和最低财务成本放大投资收益。'
        }
      ]
    },
    assetRecite: {
      text1: '全新理念，',
      text2: '深刻见底',
      text3: '引领数字货币新时代',
      text4: '我们创造的，不仅仅是数字',
      text5: '我们的加密数字货币“像英格兰银行一样安全”，而且从认购之日起即超出账面价值',
      text6: '我们重视的，不仅仅是价值',
      text7: '提供具备真实内在价值、类固定收益的另类投资组合',
      text8: '第一阶段',
      text9: '伦敦金融城核心地段、租户为大型金融机构的写字楼 ',
      text10: '第二阶段',
      text11: '位于国际门户城市黄金地段的零售商业地产、服务式公寓、工业物流地产，拥有稳定租金现金流',
      text12: '第三阶段',
      text13: '建立有效对冲CPI指数的资产池，包括：房产、能源、食品饮料、医院、教育、交通等基础设施',
      text14: '将你的数字资产投资到现实世界的资产中',
      text15: '查看项目',
      text16: '我们关注的，不仅仅是投资',
      text17: 'Q币的远期目标：流通的数字地球',
      text18: '我们相信，',
      text19: 'Q.Arthur的专业价值是无可替代',
      text20: '把投资者放在首位，为他们提供”全天候”的解决方案',
      text21: '分配流程图',
      fourUrlimg1: require('../assets/images/assetRecite/a100.png'),
      fourlisp: [
        {
          text: '如果我们将收入型策略应用于房地产投资作为案例研究，那么这种投资结构将从集合来自租户的租金收入中获益。'
        },
        {
          text: '这消除了处理租金付款和后续再投资的必要性——这不可避免会导致效率低下，特别是涉及多种外汇交易时。'
        },
        {
          text: '相反，目前我们的结构设计使得投资者可以通过Q的交易价格，享受到每一次资本增值。'
        },
        {
          text: 'Q.Token的数量在减少，每个Q.Token的内在价值在增加。'
        }
      ],
      slideArr: [
        {
          imgUrl: require('../assets/images/assetRecite/a34.svg'),
          text: '第一次募集完毕：2 亿英镑'
        },
        {
          imgUrl: require('../assets/images/assetRecite/a33.svg'),
          text: '目标年化收益：5％ '
        }
      ],
      threeLists: [
        {
          img: require('../assets/images/assetRecite/tu94.png'),
          text: '房地产'
        },
        {
          img: require('../assets/images/assetRecite/tu95.png'),
          text: '能源'
        },
        {
          img: require('../assets/images/assetRecite/tu96.png'),
          text: '农业'
        },
        {
          img: require('../assets/images/assetRecite/tu93.png'),
          text: '医疗'
        },
        {
          img: require('../assets/images/assetRecite/tu97.png'),
          text: '教育'
        },
        {
          img: require('../assets/images/assetRecite/tu98.png'),
          text: '交通'
        }
      ]
    },
    investProject: {
      text1: '拥抱',
      text2: '新兴市场',
      text3: '潜在全球资产约5000亿商业地产的区块链解决方案',
      text4: '潜在全球资产约5000亿商业地产的区块链解决方案',
      tabTitleData: [
        {
          title: '正在募集项目'
        },
        {
          title: '已完成项目'
        }
      ],
      tabContentsL: [
        {
          title: '项目介绍：',
          con: 'Lord Abbett短期高收益市政债券基金旨在提供免除联邦所得税的高收入水平。学到更多。',
          num: ' 目标资金： 123456',
          sl: '令牌出售',
          sr: '91%',
          time: '资金终止时间',
          date: '2018.06.02'
        },
        {
          title: '项目介绍：',
          con: 'Lord Abbett短期高收益市政债券基金旨在提供免除联邦所得税的高收入水平。学到更多。',
          num: ' 目标资金： 123456',
          sl: '令牌出售',
          sr: '91%',
          time: '资金终止时间',
          date: '2018.06.02'
        },
        {
          title: '项目介绍：',
          con: 'Lord Abbett短期高收益市政债券基金旨在提供免除联邦所得税的高收入水平。学到更多。',
          num: ' 目标资金： 123456',
          sl: '令牌出售',
          sr: '91%',
          time: '资金终止时间',
          date: '2018.06.02'
        }
      ],
      tabContentsR: [
        {
          title: '项目介绍：',
          con: 'Lord Abbett短期高收益市政债券基金旨在提供免除联邦所得税的高收入水平。学到更多。',
          num: '目标资金： 1234',
          sl: '令牌出售',
          sr: '100%',
          jinduOK: '',
          time: '资金终止时间',
          date: '2018.06.02'
        },
        {
          title: '项目介绍：',
          con: 'Lord Abbett短期高收益市政债券基金旨在提供免除联邦所得税的高收入水平。学到更多。',
          num: '目标资金： 1234',
          sl: '令牌出售',
          sr: '100%',
          jinduOK: '',
          time: '资金终止时间',
          date: '2018.06.02'
        },
        {
          title: '项目介绍：',
          con: 'Lord Abbett短期高收益市政债券基金旨在提供免除联邦所得税的高收入水平。学到更多。',
          num: '目标资金： 1234',
          sl: '令牌出售',
          sr: '100%',
          jinduOK: '',
          time: '资金终止时间',
          date: '2018.06.02'
        }
      ]
    },
    team: {
      text1: '信任就是',
      text2: '“  财富  ”',
      text3: 'Q.Arthur 是由英国金管局监管的伦敦牛津集团的子公司；伦敦牛津集团于1993年由一群前牛津大学从事金融职业的校友成立。',
      text4: '我们的团队',
      text5: '我们在发起和管理投资基金，为客户提供解决方案，以及开发自动化投资界面和资产管理工具等方面拥有丰富的经验。我们认识到与监管部门有效合作的重要性。',
      text6: '我们的理念',
      text7: '我们的理念是创建透明、稳定和对冲通胀的数字化资产，并以一揽子高质量传统资产作为后盾，以弥合传统\'法定货币\'资产管理世界与\'加密数字货币\'世界之间的鸿沟。',
      text8: '先锋和创新者',
      text9: '查看更多',
      slideArr: [
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'David Quinn',
          nameDes: '创始人&首席执行官',
          detailInfo: 'David Quinn在受监管的资本市场从事交易方面拥有超过15年的从业经验。David经营着一家在直布罗陀受监管的股票经纪公司,日交易量高达1亿美金。David在雷曼兄弟公司开始职业生涯，之后转任贝尔斯登公司董事总经理。离开贝尔斯登之后，David为环球财富投资有限公司（GFI）集团管理其伦敦的股票交易业务。David创建了Q. Arthur数字货币交易平台。 '
        },
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'Steve Kelso',
          nameDes: '咨询委员会主席',
          detailInfo: 'Steve在发达市场和新兴市场的投资和交易领域拥有22年的职业经验。他在欧洲推出了第一只波动性套利基金，在KBC（DE Shaw 基金的前身）两年内吸引了7亿美元的投资，还在多家顶级机构管理股票、大宗商品和多资产类别的现金和衍生品交易业务。在加入Q. Arthur之前，他在南非第一兰特银行下属的专业资产管理公司阿什伯顿国际（Ashburton International）担任首席执行官。在此之前，他曾任文艺复兴资本（Renaissance Capital）策略交易组负责人及投资委员会主席。Steve在剑桥大学获工程学位，早期曾高盛公司和雷曼兄弟公司的纽约、伦敦办公室担任交易员。'
        },
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'Chaiyakorn Yingsaeree 博士',
          nameDes: '联合创始人&首席技术官',
          detailInfo: 'Chaiyakorn 在金融量化交易行业拥有超过10年的经验。他在伦敦大学（UCL）获金融计算机博士学位，专注于计算金融和算法交易。他目前在一家受英国金管局监管、位于伦敦的资产管理公司担任首席运营官。他曾在纽约Citadel投资集团担任量化交易研究员，负责为美国OTC证券市场的高频率市场做市和做市策略制定价格预测算法。'
        },
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'Allan Lane 博士',
          nameDes: '高级顾问',
          detailInfo: 'Allan是Twenty20 Investments的创始合伙人。此前，Allan在2008年加入贝莱德集团的 iShares部门，并很快成为ETF产品的首席负责人。Allan还曾在投资银行业担任多个高级职 位，其中包括在巴克莱全球投资者部门固定收益组和在苏格兰皇家银行全球量化研究部门担任主管。他还曾在法国巴黎银行（Banque Paribas）和JP摩根担任股票衍生品模型负责人。 Allan毕业于牛津大学和剑桥大学数学系，在美国华盛顿大学获博士学位。'
        },
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'Irene Bauer 博士',
          nameDes: '高级顾问',
          detailInfo: 'Irene 是Twenty20 Investments的另一创始合伙人。此前，Irene 一直在贝莱德集团的 iShares部门，为其客户群提供ETF投资组合解决方案。她在巴克莱全球投资者部门工作期间，艾琳在主动固定收益业务的资产配置团队中工作。 Irene在德国奥格斯堡大学获数学学位，并在德国海德堡大学获数学博士学位。'
        }
      ]
    },
    home: {
      banner: {
        title: '地球上最好的投资就是地球本身',
        subtitle: '美国著名地产投资家-路易斯·格里克曼（Louis J. Glickman）'
      },
      oneList: [
        {imgSrc: require('../assets/images/home/one1.png'), title: '全球视角', content: '追踪不同地区甚至不同国家的市场，收购并帮助建立具有世界级能力和强大的自由现金流的潜力企业。'},
        {imgSrc: require('../assets/images/home/one2.png'), title: '投资策略', content: '采用全面的投资组合方法，建立一个由长期产生良好实际回报的资产类别组成的投资组合。'},
        {imgSrc: require('../assets/images/home/one3.png'), title: '增长潜力', content: '高品质全球资产，拥有稳定现金流，确保交易自由、稳定进行，同时产生积极的长期回报。'},
        {imgSrc: require('../assets/images/home/one4.png'), title: '建立关系', content: '我们在相互信任和明确利益之间建立长久关系，为成熟的投资者提供定制的投资和咨询解决方案。'},
        {imgSrc: require('../assets/images/home/one5.png'), title: '储蓄安全', content: '坚持Q.Arthur的投资理念和投资原则，并采用新的区块链技术为客户的财富提供最权威的保护，保障储蓄安全。'},
        {imgSrc: require('../assets/images/home/one6.png'), title: '市场透明', content: '多元化与专业化战略，追求GP和LP利益一致的投资，帮助投资者获取和建立更简单、更透明、更安心的投资组合。'}
      ],
      two: {
        title1: '定义货币资产新标准，',
        title2: '解锁Q.Arthur价值链',
        subtitle: '借助全球优质传统资产的安全性，使用新的区块链技术为客户提供资产保护',
        list: {
          text1: '年',
          text2: '金融市场经验',
          text3: '亿',
          text4: '区块链解决方案',
          text5: '目标年化收益：5%',
          text6: '6大投资组合'
        },
        btn1: 'FCA全牌照',
        btn2: '受其监管'
      },
      newsModule: {
        text1: '最新',
        text2: '资讯'
      },
      four: {
        title: '“Q”：流通的英格兰银行',
        list: {
          text1: '资产交换',
          text2: '对冲通胀',
          text3: '价值保全',
          text4: '区块链技术'
        }
      },
      five: {
        title: '我们的代币”Q”对应的楼宇房产地处世界金融中心最佳地段，其长期租户均为顶级国际银行。持有代币意味着这些银行在向您支付着租金，与银行为储户支付的微薄利息相比，两者之间获益差别将逾十倍！',
        list: {
          text1: 'Q币',
          text2: '一种新的货币单位',
          text3: '首次发行价格: ',
          text4: '首期发行规模 ',
          text5: '是2018年春季设计的一种新型加密数字货币，旨在为全球货币提供另一种解决方案：获得最高投资标准的确定性，同时确保所有权的安全。',
          text6: '了解更多'
        }
      },
      newView: {
        text1: '打开新视野，',
        text1_2: '从你开始',
        text2: '传统资本市场',
        text3: '在这里，探讨传统资本市场，看清未来趋势。',
        text4: '加密数字市场',
        text5: '在这里，抓住发展机遇，开拓新的时代。',
        text6: '全新投资机遇',
        text7: '对我们来说，成功就是帮助你实现目标，而不是数字。'
      },
      team: {
        title: '我们的团队',
        slideArr: [
          {
            imgUrl: require('../assets/images/team/b60.svg'),
            name: 'David Quinn',
            nameDes: '创始人&首席执行官',
            detailInfo: '超过15年的丰富经验 '
          },
          {
            imgUrl: require('../assets/images/team/b60.svg'),
            name: 'Steve Kelso',
            nameDes: '咨询委员会主席',
            detailInfo: '22年运营交易和投资经历 '
          },
          {
            imgUrl: require('../assets/images/team/b60.svg'),
            name: 'Dr. Chaiyakorn Yingsaeree',
            nameDes: '联合创始人&首席技术官',
            detailInfo: '10余年的金融量化交易行业经验 '
          }
        ]
      }
    },
    footer: {
      text1: '关于Q. Arthur',
      text2: '追溯我们的历史到1993年，Q.Arthur是由英国金管局监管的伦敦牛津集团的子公司；伦敦牛津集团由一群前牛津大学从事金融职业的校友成立。',
      text3: '私隐保护',
      text4: '投资风险',
      text5: '设计结构',
      text6: '设计理念',
      text7: '资产背书',
      text8: '投资项目',
      text9: '联系我们',
      text10: '链接'
    },
    Technology: {
      text1: '技术驱动金融，区块',
      text2: '对话世界',
      text3: '区块链技术，是人类社会记账方式的第一次革命性改进，是金融业的底层技术。',
      text4: '链接未来，成就你的一切想象',
      text5: '无论出于商业原因还是出于监管职责，金融中介机构都在市场缺乏诚信的每一个地方蓬勃发展，以保证市场不会发生不适当的摩擦。区块链可以解决该问题。这是历史上第一次在全球范围内存在一个不可变的分散账本，消除了对中间人、复杂的审计系统和长期结算时间的需要。开放式（且减少许可）协议意味着解决方案不再依赖于连接分散的遗留系统。此外，由于分类账是附加的（现有记录是不可变的），因此它提供了高度的责任性，并且内置了区块链时间戳。',
      text6: 'Q 的共识机制',
      text7: '以推动未来模式运作，构建完美交易的桥梁',
      text8: 'Q 的愿景',
      text9: 'Q的愿景是既要公平、安全，又要经济、高效。我们融合了 PoW 和 DPoS 两种共识机制来实现 Q区块链。',
      text10: 'Q 区块链',
      text11: 'Q 区块链是一个单主链（Main Chain）、多侧链（Side Chain）的系统，主链由全网维护，采用PoW共识机制。若干条侧链用于不同类别的具体业务，由业务的参与者来围护 ，采用 DPoS共识机制。',
      text12: '主链的PoW机制',
      text13: '主链的PoW机制保证了网络的安全性和公平性，主链本身不参与具体业务，只提供基础账户信息维护、侧链基本参数维护、侧链数据校验存证、以及侧链的跨链通信等功能。这些功能本身业务逻辑简单，频度较低，对网络处理能力的要求不高，所以在主链上采用PoW机制并不会成为网络的性能瓶颈。',
      text14: '建立传统金融与加密世界之桥',
      text15: '侧链 - 处理频率大，额度小',
      text16: '在侧链上处理频度大，额度小，交易参与方组织结构简单高频的业务。在资管类应用中，最典型的就是银行内转账。',
      text17: '主链– 处理频率小，额度大',
      text18: '在主链上处理额度大，交易参与方组织结构复杂，频度不高的结算类业务。典型的例子就是跨资产类型结算。',
      text19: '处理频率',
      text20: '额度',
      text21: '大',
      text22: '小',
      text23: '小',
      text24: '大',
      text25: '',
      text26: '',
      text27: '',
      text28: '',
      text29: '',
      text30: ''
    },
    ourValue: {
      sectionList1: [
        {
          icon: require('../assets/images/ourValue/01.svg'),
          title: '注重客户',
          text: '通过独立、可信和创新的建议与客户建立长期的关系，帮助他们实现卓越的成果'
        },
        {
          icon: require('../assets/images/ourValue/02.svg'),
          title: '廉正原则',
          text: '严格遵守在任何时候和任何情况下做正确事情的原则'
        },
        {
          icon: require('../assets/images/ourValue/03.svg'),
          title: '卓越标准',
          text: '毫不动摇坚持信念并努力达到最高的质量标准'
        },
        {
          icon: require('../assets/images/ourValue/04.svg'),
          title: '尊重',
          text: '拥抱多元化，并以最大的尊严和尊重对待所有人'
        },
        {
          icon: require('../assets/images/ourValue/05.svg'),
          title: '人才',
          text: '引进有才华的人并激励他们发挥最大的潜能，通过付出获得回报'
        },
        {
          icon: require('../assets/images/ourValue/06.svg'),
          title: '合伙',
          text: '倡导鼓励诚实辩论的文化，与优秀的创业者缔结伙伴关系'
        }
      ],
      text1: '为客户、股东和员工创造',
      text2: '卓越的价值',
      text3: '我们相信我们的力量',
      text4: '我们对客户的使命是提供全球范围的优质资产和严格的受托管理，对冲当地宏观经济和通货膨胀冲击的风险。'
    },
    newViewPage: {
      text1: '聚焦世界中心，',
      text2: '洞察未来趋势',
      text3: '未来不可预测，有无数的革新与裂变，我们洞察趋势，为未来每一种可能做好准备。',
      text4: '探索创新者的见解',
      text5: '阅读更多',
      text6: '新视角',
      text7: '您的位置',
      text8: '发布时间',
      text9: '首页'
    }
  },
  EN: {
    header: {
      navList: [
        {name: 'About Q', path: '/wiki'},
        {name: 'Asset Endorsement', path: '/strategy/assetRecite'},
        {name: 'Investment Project', path: '/strategy/investProject'},
        {name: 'Blockchain', path: '/blockChain'},
        {name: 'New Vision', path: '/newView'},
        {
          name: 'About Us',
          dropDown: [{name: 'Value', path: '/about/ourValue'}, {name: 'Team', path: '/about/team'}],
          activeClass: false
        }
      ]
    },
    assetRecite: {
      text1: 'Brand New Concept ',
      text2: 'with Profundity',
      text3: 'Leading A New Era of Cryptocurrency',
      text4: 'We Created Beyond Cryptocurrency',
      text5: 'We created the cryptocurrency as safe as “the Bank of England” which exceeds its nominal value on the inception date',
      text6: 'We Value Beyond Value Itself',
      text7: 'We provide unique investment portfolio with inherent value and quasi-fixed income',
      text8: 'Stage 1',
      text9: 'It will be represented by the office buildings on the prime locations in “the city of London” where is rented to financial giants. ',
      text10: 'Stage 2',
      text11: 'It will be represented by retail commercial real estates, apartments and industrial logistics real estate in international gateway cities which provides stable flow of rental cash.',
      text12: 'Stage 3',
      text13: 'Asset pool will be built for hedging CPI. The infrastructure includes real estate, energy, food & beverage, hospital, education and traffic etc.',
      text14: 'Make Investment in the Real World with Cryptocurrency',
      text15: 'View the projects',
      text16: 'We Focus Not Only on Investment',
      text17: 'Vision of Q coin: the circulating digital earth',
      text18: 'The Professional Value of ',
      text19: 'Q.Athur is Irreplaceable',
      text20: 'With the philosophy of investor-orientation, we provide “all-weather” solutions.',
      text21: 'Distribution flow chart',
      fourUrlimg1: require('../assets/images/assetRecite/ena100.png'),
      fourlisp: [
        {
          text: 'If we take income strategy to be applied in real estate investment as a case study, such investment has been structured to benefit from compounding the rental yields from tenants. '
        },
        {
          text: 'This removes the necessity to handle lease payments and the subsequent reinvestment – which inevitably introduce an element of inefficiency, particularly when multiple foreign exchange transactions are involved.'
        },
        {
          text: 'Instead, the structure is designed so investors can participate in any capital appreciation via the trading price of Q.'
        },
        {
          text: 'The number of Q.Token is decreasing while the inherent value of them is increasing.'
        }
      ],
      slideArr: [
        {
          imgUrl: require('../assets/images/assetRecite/a34.svg'),
          text: 'First close: £200 million'
        },
        {
          imgUrl: require('../assets/images/assetRecite/a33.svg'),
          text: 'Target annualized return:  5%'
        }
      ],
      threeLists: [
        {
          img: require('../assets/images/assetRecite/tu94.png'),
          text: 'Real Estate'
        },
        {
          img: require('../assets/images/assetRecite/tu95.png'),
          text: 'Energy'
        },
        {
          img: require('../assets/images/assetRecite/tu96.png'),
          text: 'Agriculture'
        },
        {
          img: require('../assets/images/assetRecite/tu93.png'),
          text: 'Healthcare'
        },
        {
          img: require('../assets/images/assetRecite/tu97.png'),
          text: 'Education'
        },
        {
          img: require('../assets/images/assetRecite/tu98.png'),
          text: 'Traffic'
        }
      ]
    },
    investProject: {
      text1: 'Embrace',
      text2: 'Emerging Market',
      text3: 'A blockchain solution for the potential 500-billion-worth global real estate',
      tabTitleData: [
        {
          title: 'Raising projects'
        },
        {
          title: 'Completed projects'
        }
      ],
      tabContentsL: [
        {
          title: 'Description:',
          con: 'Lord Abbett is a short-term municipal bond with high yields aiming to exempt the federal income tax for high income group. Learn more',
          num: 'Targeted capital： 123456',
          sl: 'Token for sale',
          sr: '91%',
          time: 'Expiring date',
          date: '2018.06.02'
        },
        {
          title: 'Description:',
          con: 'Lord Abbett is a short-term municipal bond with high yields aiming to exempt the federal income tax for high income group. Learn more',
          num: 'Targeted capital： 123456',
          sl: 'Token for sale',
          sr: '91%',
          time: 'Expiring date',
          date: '2018.06.02'
        },
        {
          title: 'Description:',
          con: 'Lord Abbett is a short-term municipal bond with high yields aiming to exempt the federal income tax for high income group. Learn more',
          num: 'Targeted capital： 123456',
          sl: 'Token for sale',
          sr: '91%',
          time: 'Expiring date',
          date: '2018.06.02'
        }
      ],
      tabContentsR: [
        {
          title: 'Description:',
          con: 'Lord Abbett is a short-term municipal bond with high yields aiming to exempt the federal income tax for high income group. Learn more',
          num: 'Targeted capital： 1234',
          sl: 'Token for sale',
          sr: '100%',
          jinduOK: '',
          time: 'Expiring date',
          date: '2018.06.02'
        },
        {
          title: 'Description:',
          con: 'Lord Abbett is a short-term municipal bond with high yields aiming to exempt the federal income tax for high income group. Learn more',
          num: 'Targeted capital： 1234',
          sl: 'Token for sale',
          sr: '100%',
          jinduOK: '',
          time: 'Expiring date',
          date: '2018.06.02'
        },
        {
          title: 'Description:',
          con: 'Lord Abbett is a short-term municipal bond with high yields aiming to exempt the federal income tax for high income group. Learn more',
          num: 'Targeted capital： 1234',
          sl: 'Token for sale',
          sr: '100%',
          jinduOK: '',
          time: 'Expiring date',
          date: '2018.06.02'
        }
      ]
    },
    team: {
      text1: 'Trust is the Unit of',
      text2: '"  Fortune  "',
      text3: 'Q.Arthur is a subsidiary of London & Oxford Group; a FCA regulated asset management company founded in 1993 by a group of former Oxford University professional financier alumni. ',
      text4: 'Our team',
      text5: 'We have extensive experiences in establishing and managing investment funds and providing client with solutions; as well as developing automated investment interfaces and asset management tools. We recognize the importance of working effectively together with regulatory authorities.',
      text6: 'Our Vision',
      text7: 'Our vision is to create a transparent, stable and inflation-hedged digital asset that is backed by a basket of high-quality traditional assets to bridge the gap between the traditional ‘fiat’ asset management world and the ‘crypto’ universes. ',
      text8: 'The Pioneer and the Innovator',
      text9: 'view more',
      slideArr: [
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'David Quinn',
          nameDes: 'Founder & CEO',
          detailInfo: 'David Quinn has over 15 years’ experience trading regulated capital markets. He runs a regulated equity brokerage in Gibraltar which holds over $100 million daily turnover. David started his career with Lehman Brothers before moving to Bear Stearns as a managing director. After leaving Bear, David ran the London Equity Desk for GFI Group. David is also the founder of Q. Arthur.'
        },
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'Steve Kelso',
          nameDes: 'Chairman of the Advisory Board',
          detailInfo: 'Steve has spent his 22 years in running trading and investment businesses in both developed and emerging markets. He launched the first Volatility Arbitrage fund in Europe which attracted USD 700m at KBC (ex-DE Shaw) within two years. He also practiced transactions of stock, bulk commodity and multi-asset cash and derivatives. His most recent role before joining Q. Arthur was a CEO of Ashburton International, a specialist asset management business of FirstRand. He has also worked as the Chairman of Investment Committee at Renaissance Capital. With a degree in engineering from Cambridge University, Steve developed his career in trading at Goldman Sachs and Lehman Brothers in New York and London office.'
        },
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'Dr. Chaiyakorn Yingsaeree',
          nameDes: 'Co-founder & CTO',
          detailInfo: 'Chaiyakorn has over ten years’ experience in quantitative financial trading industry. He received his PhD in Computer Science from University College London (UCL) with a main focus on computational finance and algorithmic trading. He is now the COO of a FCA regulated asset manager in London. Prior to his current role, he worked as a quantitative researcher at Citadel Investment Group in New York responsible for developing price prediction algorithms for high frequency market making and market-making strategies in US OTC securities market. '
        },
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'Dr. Allan Lane',
          nameDes: 'Senior Advisor',
          detailInfo: 'Allan is a founding partner of Twenty20 Investments. Prior to this Allan spearheaded BlackRock’s iShares in 2008 as the leader of the ETF Product. Allan has also held a number of senior roles in the investment banking industry, including a period at Barclays and RBS where he was The Global Head of Quantitative Research. Before that, he acted as a derivatives model specialist at Banque Paribas and JP Morgan. Allan studied Mathematics at Oxford University and Cambridge University before subsequently gaining his PhD in the University of Washington in the US.'
        },
        {
          imgUrl: require('../assets/images/team/b60.svg'),
          name: 'Dr. Irene Bauer',
          nameDes: 'Senior Advisor',
          detailInfo: 'Irene is also a founding partner of Twenty20 Investments. Previously, Irene has been working at iShares, BlackRock to provide ETF investment portfolio solutions. During her working in Barclays Global, Irene worked within the asset allocation team in the Active Fixed Income business. Irene has a degree in mathematics from the University of Augsburg, Germany, and completed her doctorate thesis in mathematics at the University of Heidelberg. '
        }
      ]
    },
    home: {
      banner: {
        title: 'The very best investment on earth is the Earth',
        subtitle: 'Quoted Louis J. Glickman, a well-known real estate investor'
      },
      oneList: [
        {
          imgSrc: require('../assets/images/home/one1.png'),
          title: 'International Vision',
          content: 'We trace markets from different regions and countries; and acquire to help establish enterprises with potentials in global running and powerful cash flow.'
        },
        {
          imgSrc: require('../assets/images/home/one2.png'),
          title: 'Investment Philosophy',
          content: 'With a comprehensive investment philosophy, we established an investment portfolio made up of asset class with long-term favorable returns.'
        },
        {
          imgSrc: require('../assets/images/home/one3.png'),
          title: 'Growth Potential ',
          content: 'The high quality global asset of cash flow stability ensures liberal transaction, stable operation and long-term positive return.'
        },
        {
          imgSrc: require('../assets/images/home/one4.png'),
          title: 'Relationship Establishment',
          content: 'We establish long-term and reliable relationship with senior investors to provide customized investment and query solutions.'
        },
        {
          imgSrc: require('../assets/images/home/one5.png'),
          title: 'Secured Saving',
          content: 'Saving security is guaranteed with the adherence to the investment philosophy and principle of Q.Arthur and also the adoption of the innovative blockchain technology.'
        },
        {
          imgSrc: require('../assets/images/home/one6.png'),
          title: 'Transparent Market',
          content: 'The diverse and professional strategy seeking common interest for GP and LP helps investors to get and establish simpler, more transparent and more secured investment portfolio.'
        }
      ],
      two: {
        title1: 'Redefining Monetary Standard,',
        title2: 'Unlocking Q.Arthur Value Chain',
        subtitle: 'Assets protected by using blockchain technology to harness the security of superior traditional asset',
        list: {
          text1: 'years',
          text2: 'Experiences in financial markets',
          text3: 'billion',
          text4: 'Blockchain solution',
          text5: 'Target annual returns: 5%',
          text6: '6 Investment Portfolios'
        },
        btn1: 'FCA Authorized',
        btn2: 'Supervised'
      },
      newsModule: {
        text1: 'Recent',
        text2: 'News'
      },
      four: {
        title: 'Q: The Circulating Bank of England',
        list: {
          text1: 'The exchange of assets',
          text2: 'Inflation hedge',
          text3: 'Value preservation',
          text4: 'Blockchain'
        }
      },
      five: {
        title: 'The Q token is represented by the real estate in prime location of the world financial center where all of the tenants are top international banks. Your holdings of the token means that those banks are paying you the rent whose profit is more ten times than the interests from your deposit.',
        list: {
          text1: 'Q coin',
          text2: 'A brand new currency unit',
          text3: 'Initial issuing price:',
          text4: 'Initial issuing scale',
          text5: 'is a new cryptocurrency designed in the spring of 2018, aiming to provide another solution to global currency that acquires the highest investment standard and ensures the security of ownership.',
          text6: 'Learn more'
        }
      },
      newView: {
        text1: 'New Vision Starts from',
        text1_2: ' What You Find',
        text2: 'Traditional Capital Market ',
        text3: 'Here, we study the traditional capital market to find out how the future is leading.',
        text4: 'Cryptocurrency Market',
        text5: 'Here, we grasp the development opportunity to start a brand new era.',
        text6: 'Investment Opportunity',
        text7: 'For us, success doesn’t mean building up our digital world, but helping you accomplish targets.'
      },
      team: {
        title: 'Our Team',
        slideArr: [
          {
            imgUrl: require('../assets/images/team/b60.svg'),
            name: 'David Quinn',
            nameDes: 'Founder & CEO',
            detailInfo: 'Over 15 years’ experiences '
          },
          {
            imgUrl: require('../assets/images/team/b60.svg'),
            name: 'Steve Kelso',
            nameDes: 'Chairman of the Advisory Board',
            detailInfo: '22 years running trading and investment business '
          },
          {
            imgUrl: require('../assets/images/team/b60.svg'),
            name: 'Dr. Chaiyakorn Yingsaeree',
            nameDes: 'Co-founder & CTO',
            detailInfo: 'Over 10 years’ experiences in financial trading '
          }
        ]
      }
    },
    footer: {
      text1: 'About Q.Arthur',
      text2: 'Q.Arthur is a subsidiary of London & Oxford Group, a FCA regulated company that was founded in 1993 by a group of former Oxford University professional financier alumni.',
      text3: 'Privacy Protection',
      text4: 'Investment Risk',
      text5: 'Design Structure',
      text6: 'Design Philosophy',
      text7: 'Asset Endorsement',
      text8: 'Investment Program',
      text9: 'CONTACT US',
      text10: 'QUICK LINKS'
    },
    wiki: {
      text1: 'A Reliable ',
      text2: 'Cryptocurrency',
      text3: 'Represented by digitalized assets in global investment portfolio, originated from inflation hedge and commercial real estate in the city of London',
      text4: 'Customized for Investors , ',
      text5: 'Be the Master of the World',
      text6: 'Advantages to investors',
      slideArr: [
        {
          imgUrl: require('../assets/images/wiki/ena25.png'),
          title: 'What Is Q?',
          textp: 'Q is a new cryptocurrency designed in the spring of 2018, aiming to provide another solution to global currency',
          slidetop: '',
          slidebotAdd1: '',
          slidebotAdd2: '',
          slidebotColor: 'that acquires the highest investment standard and ensures the security of ownership.',
          imgp: 'The Structure of Q'
        },
        {
          imgUrl: require('../assets/images/wiki/ena99.png'),
          title: 'The Price of Q',
          textp: 'Initial issuing price:',
          slidetop: 'In: Q (time=0) = 1 GBP = Q.Arthur NAV(0)',
          slidebot: 'Initial issuing scale £200,000,000 ',
          slidebotAdd2: 'operated by Etherum',
          imgp: 'flow of funds'
        }
      ],
      wiListData: [
        {
          imgUrl: require('../assets/images/wiki/a26.svg'),
          title: 'Optimized Option',
          textp: 'The cryptocurrency (token) Q is one of the options of global investment portfolio. It provides liberal and stable transaction with economical cost, safe and transparent storage.',
          btn: '1'
        },
        {
          imgUrl: require('../assets/images/wiki/a27.svg'),
          title: 'Reliable System',
          textp: 'Q coin combines the desirable digital characteristics of Bitcoin with a traditionally inherent value in assets that people have found comfort to ensure the ownership security and the top investment commitment standard.',
          btn: '2'
        },
        {
          imgUrl: require('../assets/images/wiki/a28.svg'),
          title: 'Value Preserved',
          textp: 'Asset is backed with the global quality assets, such as the prime location in world financial center, and is managed by the global assets management team from Q.Arthur.',
          btn: '3'
        },
        {
          imgUrl: require('../assets/images/wiki/a29.svg'),
          title: 'Flows of Funds',
          textp: 'Investors trade their Q. Token for fiat currency, ensuring the high quality of global asset and stability of cash flow.',
          btn: '4'
        }
      ],
      investorList: [
        {
          title: 'High Security',
          text: '• The representing assets are of anti-inflation, security and high interest.'
        },
        {
          title: 'Fast Velocity',
          text: '• The boundless token is granted with faster velocity.'
        },
        {
          title: 'Great Appreciation',
          text: '• Based on asset endorsement, it has greater space for appreciation.'
        },
        {
          title: 'Asset Portfolio',
          text: '• Backed by quality assets which are recognized by the top standard, we have developed an asset portfolio hedge against CPI.'
        },
        {
          title: 'Optimal Option',
          text: '• As the optimal option of cost effectiveness, it assists with corporations and individuals in the global allocation, acquiring and payment of fortunes.'
        },
        {
          title: 'Fast Response',
          text: '• The management team gives response once the asset is put to the market, thus amplifying the investment profit with best price and lowest cost.'
        }
      ]
    },
    Technology: {
      text1: 'Drive finance with tech, ',
      text2: 'talk to the world via block',
      text3: 'The blockchain technology is the first revolutionary advancement of accounting and also the underlying technology for financial practice. Blockchain brings greater value to the data and creates a smarter world!',
      text4: 'Link the Future with Your Imaginations',
      text5: 'Financial intermediaries, whether for commercial reasons or due to regulatory mandate, have blossomed in every place that market credit is lacking, in order to provide assurances that the markets will function without undue friction. The blockchain can resolve that issue. For the first time in history, an immutable, decentralized ledger exists on a global scale, eliminating the need for intermediary, complex auditing systems, and long settlement periods. Open (permission less) protocols mean settlements no longer depend on connecting fragmented legacy systems. Additionally, as the ledger is append-only (existing records are immutable), it provides a high degree of accountability, with blockchain timestamping built-in.',
      text6: 'Consensus Mechanism of Q',
      text7: 'Operating in a Driving Speed to Construct Transaction Bridges',
      text8: 'The vision of Q',
      text9: 'The vision of Q is for the mechanism to be fair, secure, economical and efficient, therefore we have merged PoW and DPoS consensus mechanism in order to create the Q blockchain.',
      text10: 'Q blockchain',
      text11: 'The Q blockchain has a main chain and multiple side chains. The main chain is maintained by the whole network and adopted with PoW consensus mechanism. The side chains are applied to process different kinds of business. They are maintained by the participants and adopted with DPoS consensus mechanism.',
      text12: 'The PoW mechanism on the main chain',
      text13: 'The PoW mechanism on the main chain ensures the security and justification of the network. The main chain doesn’t participate in any business but only provides some functions, including the basic maintenance of account info, the basic maintenance of side chain parameter, the verification of data on side chain and cross-chain communication on side chains etc. These are functions of simple logic and low frequency which means they don’t require large capacity of network processing, thus adopting PoW on main chain avoids dragging the network performance.',
      text14: 'Building a Bridge from Traditional Finance to Encryption',
      text15: 'Side chain – Transactions with high frequency in small size',
      text16: 'The side chains process transactions with simply-structured participants whose amounts are small but frequency high. Among those asset management applications, bank-to-bank transfer is the most typical type.',
      text17: 'Main chain – Transactions with low frequency in large size',
      text18: 'The main chain processes transactions with complex-structured participants whose amounts are large but frequency low. A typical case is the cross asset settlement.',
      text19: 'processing frequency',
      text20: 'amount',
      text21: 'large',
      text22: 'small'
    },
    ourValue: {
      sectionList1: [
        {
          icon: require('../assets/images/ourValue/01.svg'),
          title: 'Customer-oriented',
          text: 'We provide independent, reliable and innovative suggestions to establish long-term cooperation with customers, helping them achieve remarkable results.'
        },
        {
          icon: require('../assets/images/ourValue/02.svg'),
          title: 'Integrity',
          text: 'We bear integrity in mind when doing things.'
        },
        {
          icon: require('../assets/images/ourValue/03.svg'),
          title: 'Brilliance',
          text: 'We keep the faith and try the best.'
        },
        {
          icon: require('../assets/images/ourValue/04.svg'),
          title: 'Respect',
          text: 'We embrace diversification and respect all people.'
        },
        {
          icon: require('../assets/images/ourValue/05.svg'),
          title: 'Talent',
          text: 'We recruit talents and encourage their potential by rewarding their works.'
        },
        {
          icon: require('../assets/images/ourValue/06.svg'),
          title: 'Partnership',
          text: 'We advocate honest and argumentative culture to establish partnership with excellent entrepreneurs.'
        }
      ],
      text1: 'Create Great Value for Clients,',
      text2: 'Shareholders and Employees',
      text3: 'We Believe in Ourselves',
      text4: 'Our mission to clients is to provide access to a global range of quality assets and strict entrustment management whilst ameliorating the risk of local macro-economic shocks and inflation risks.'
    },
    newViewPage: {
      text1: 'Focus on the centre and see',
      text2: ' into the future',
      text3: 'Unpredictable is the future. Among all the countless changes and revolutions, we see into the tendency to prepare for every possibility.',
      text4: 'Exploring visions from the innovators',
      text5: 'Read more',
      text6: 'New Vision',
      text7: 'Your position',
      text8: 'Release time',
      text9: 'Home'
    }
  }
}
