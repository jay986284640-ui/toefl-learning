import { Sentence } from '../types';

export const sentences: Sentence[] = [
  {
    id: 1,
    english: "Essentially, a theory is an abstract, symbolic representation of what is conceived to be reality.",
    chinese: "理论在本质上是对人们构想的现实的一种抽象和符号化的表达。",
    grammar: "本句的主干是\"A theory is an abstract, symbolic representation\"。what引导的一个名词性从句充当of的宾语。",
    vocabulary: [
      { word: "essentially", pronunciation: "/ɪ'senʃəli/", meaning: "ad. 本质上；基本上", memory: "ess（存在）+entially→存在的就是本质的→本质上", synonym: "substantially ad. 本质上", root: "essence n. 本质；essential a. 本质的" },
      { word: "theory", pronunciation: "/'θiːəri/", meaning: "n. 理论，原理", memory: "theo（神）+ry（…学）→神学→理论", collocation: "in theory 理论上", synonym: "principle n. 原理", root: "theorize v. 理论化；theoretical a. 理论的" },
      { word: "abstract", pronunciation: "/'æbstrækt/", meaning: "a. 抽象的；抽象派的", memory: "abs（离去）+tract（拉，抽）→将具体意义抽走→抽象的", collocation: "abstract knowledge 抽象知识", root: "abstraction n. 抽象概念" },
      { word: "symbolic", pronunciation: "/sɪm'bɑːlɪk/", meaning: "a. 象征的；符号的", root: "symbolize vt. 象征；symbolism n. 象征主义" },
      { word: "representation", pronunciation: "/ˌreprɪzen'teɪʃn/", meaning: "n. 代表；表现", root: "represent vt. 代表；representational a. 代表的；具象派的" },
      { word: "conceive", pronunciation: "/kən'siːv/", meaning: "v. 设想，构想", memory: "con（共同）+ceiv（抓）+e→一起抓住（思想）→设想", root: "conceivable a. 可想象的；conception n. 构思", reference: "deceive vt. 欺骗；perceive vt. 察觉" }
    ],
    topic: {
      "与\"理论、思维\"相关的词：": [
        { word: "philosophy", pronunciation: "/fɪ'lɑːsəfi/", meaning: "n. 哲学" },
        { word: "rational", pronunciation: "/'ræʃənəl/", meaning: "a. 理性的" },
        { word: "cognitive", pronunciation: "/'kɑːɡnətɪv/", meaning: "a. 认知的" },
        { word: "concept", pronunciation: "/'kɑːnsept/", meaning: "n. 概念" },
        { word: "notion", pronunciation: "/'noʊʃn/", meaning: "n. 观念；概念" }
      ]
    }
  },
  {
    id: 2,
    english: "Thanks to modern irrigation, crops now grow abundantly in areas where once nothing but cacti and sagebrush could live.",
    chinese: "受当代灌溉设施之赐，在原来只有仙人掌和灌木蒿才能生存的地方，现在农作物也生长旺盛。",
    grammar: "本句的主干是\"Thanks to modern irrigation, crops now grow abundantly\"。句中where引导的定语从句修饰前面的areas。",
    vocabulary: [
      { word: "irrigation", pronunciation: "/ˌɪrɪ'ɡeɪʃn/", meaning: "n. 灌溉", collocation: "irrigation sprinkler 喷灌装置", root: "irrigate vt. 灌溉" },
      { word: "abundantly", pronunciation: "/ə'bʌndəntli/", meaning: "ad. 丰富地，充裕地", synonym: "plentifully ad. 丰富地", root: "abundant a. 大量的，充足的" },
      { word: "cactus", pronunciation: "/'kæktəs/", meaning: "n. [pl. cacti] 仙人掌" },
      { word: "sagebrush", pronunciation: "/'seɪdʒbrʌʃ/", meaning: "n. 灌木蒿；灌木蒿丛" }
    ],
    topic: {
      "与\"农业生产、土地\"相关的词：": [
        { word: "agricultural", pronunciation: "/ˌæɡrɪ'kʌltʃərəl/", meaning: "a. 农业的" },
        { word: "agrarian", pronunciation: "/ə'ɡreriən/", meaning: "a. 土地的；耕地的" },
        { word: "arable", pronunciation: "/'ærəbl/", meaning: "a. 可耕的；耕作的" },
        { word: "arid", pronunciation: "/'ærɪd/", meaning: "a. 干旱的；不毛的" },
        { word: "barren", pronunciation: "/'bærən/", meaning: "a. （土地等）贫瘠的" }
      ],
      "与\"除草、施肥\"相关的词：": [
        { word: "fertilizer", pronunciation: "/'fɜːrtəlaɪzər/", meaning: "n. 肥料" },
        { word: "herbicide", pronunciation: "/'hɜːrbɪsaɪd/", meaning: "n. 除草剂" },
        { word: "pesticide", pronunciation: "/'pestɪsaɪd/", meaning: "n. 杀虫剂" },
        { word: "weed", pronunciation: "/wiːd/", meaning: "v. 除草" }
      ]
    }
  },
  {
    id: 3,
    english: "The history of the cathedral can be traced to the early 13th century when its first stones were laid.",
    chinese: "大教堂的历史可以追溯到13世纪早期，那时它的第一块石头被放下。",
    grammar: "本句的主干是\"The history of the cathedral can be traced\"。when引导的定语从句修饰the early 13th century。",
    vocabulary: [
      { word: "cathedral", pronunciation: "/kə'θiːdrəl/", meaning: "n. 大教堂" },
      { word: "trace", pronunciation: "/treɪs/", meaning: "v. 追溯；追踪", collocation: "trace back to 追溯到", root: "traceable a. 可追踪的" },
      { word: "century", pronunciation: "/'sentʃəri/", meaning: "n. 世纪" },
      { word: "lay", pronunciation: "/leɪ/", meaning: "v. 放置；铺设（过去式laid）" }
    ],
    topic: {
      "与\"建筑、宗教\"相关的词：": [
        { word: "church", pronunciation: "/tʃɜːrtʃ/", meaning: "n. 教堂" },
        { word: "monastery", pronunciation: "/'mɑːnəsteri/", meaning: "n. 修道院" },
        { word: "chapel", pronunciation: "/'tʃæpəl/", meaning: "n. 小教堂" },
        { word: "architecture", pronunciation: "/'ɑːrkɪtektʃər/", meaning: "n. 建筑学" }
      ]
    }
  },
  {
    id: 4,
    english: "The behavior of a fluid depends more on its relative density than on the specific gravity of the substance itself.",
    chinese: "流体的行为更多地取决于其相对密度，而不是物质本身的比重。",
    grammar: "本句的主干是\"The behavior of a fluid depends more on its relative density\"。than on the specific gravity是比较状语。",
    vocabulary: [
      { word: "fluid", pronunciation: "/'fluːɪd/", meaning: "n. 流体", root: "fluidic a. 流体的" },
      { word: "relative", pronunciation: "/'relətɪv/", meaning: "a. 相对的", collocation: "relative density 相对密度", root: "relativity n. 相对论" },
      { word: "density", pronunciation: "/'densəti/", meaning: "n. 密度" },
      { word: "specific", pronunciation: "/spə'sɪfɪk/", meaning: "a. 特定的；具体的", collocation: "specific gravity 比重" },
      { word: "gravity", pronunciation: "/'ɡrævəti/", meaning: "n. 重力；引力" }
    ],
    topic: {
      "与\"物理、力学\"相关的词：": [
        { word: "mass", pronunciation: "/mæs/", meaning: "n. 质量" },
        { word: "volume", pronunciation: "/'vɑːljuːm/", meaning: "n. 体积" },
        { word: "pressure", pronunciation: "/'preʃər/", meaning: "n. 压力" },
        { word: "force", pronunciation: "/fɔːrs/", meaning: "n. 力" }
      ]
    }
  },
  {
    id: 5,
    english: "The impact of the new trade policy resulted in a dramatic increase in exports from the manufacturing sector.",
    chinese: "新贸易政策的影响导致制造业出口大幅增长。",
    grammar: "本句的主干是\"The impact of the new trade policy resulted in a dramatic increase\"。in exports是increase的定语，from the manufacturing sector是exports的定语。",
    vocabulary: [
      { word: "impact", pronunciation: "/'ɪmpækt/", meaning: "n. 影响", collocation: "impact on 对...的影响", synonym: "effect n. 影响" },
      { word: "trade", pronunciation: "/treɪd/", meaning: "n./v. 贸易；交易", collocation: "trade policy 贸易政策" },
      { word: "dramatic", pronunciation: "/drə'mætɪk/", meaning: "a. 戏剧性的；显著的", synonym: "significant a. 显著的", root: "drama n. 戏剧" },
      { word: "export", pronunciation: "/'ekspɔːrt/", meaning: "n./v. 出口", collocation: "export sector 出口部门" },
      { word: "manufacturing", pronunciation: "/ˌmænju'fæktʃərɪŋ/", meaning: "n. 制造业", root: "manufacture v. 制造" }
    ],
    topic: {
      "与\"贸易、经济\"相关的词：": [
        { word: "tariff", pronunciation: "/'tærɪf/", meaning: "n. 关税" },
        { word: "quota", pronunciation: "/'kwoʊtə/", meaning: "n. 配额；限额" },
        { word: "subsidy", pronunciation: "/'sʌbsɪdi/", meaning: "n. 补贴" },
        { word: "commodity", pronunciation: "/kə'mɑːdəti/", meaning: "n. 商品" }
      ]
    }
  },
  {
    id: 6,
    english: "The decline of the Roman Empire was accelerated by the invasion of barbarian tribes from the north.",
    chinese: "罗马帝国的衰落因北方蛮族部落的入侵而加速。",
    grammar: "本句的主干是\"The decline of the Roman Empire was accelerated\"。by the invasion是状语，of barbarian tribes是invasion的定语，from the north是tribes的定语。",
    vocabulary: [
      { word: "decline", pronunciation: "/dɪ'klaɪn/", meaning: "n./v. 衰落；下降" },
      { word: "Roman Empire", pronunciation: "/'roʊmən 'empɪr/", meaning: "n. 罗马帝国" },
      { word: "accelerate", pronunciation: "/ək'seləreɪt/", meaning: "v. 加速", synonym: "speed up 加速", root: "acceleration n. 加速" },
      { word: "invasion", pronunciation: "/ɪn'veɪʒn/", meaning: "n. 入侵", root: "invade v. 入侵" },
      { word: "barbarian", pronunciation: "/bɑːr'bæriən/", meaning: "n. 野蛮人" }
    ],
    topic: {
      "与\"历史、帝国\"相关的词：": [
        { word: "dynasty", pronunciation: "/'daɪnəsti/", meaning: "n. 朝代" },
        { word: "empire", pronunciation: "/'empaɪər/", meaning: "n. 帝国" },
        { word: "civilization", pronunciation: "/ˌsɪvələ'zeɪʃn/", meaning: "n. 文明" },
        { word: "conquest", pronunciation: "/'kɑːŋkwest/", meaning: "n. 征服" }
      ]
    }
  },
  {
    id: 7,
    english: "The evolution of cooperative behavior among animals has been extensively studied by behavioral ecologists.",
    chinese: "动物合作行为的进化已被行为生态学家广泛研究。",
    grammar: "本句的主干是\"The evolution of cooperative behavior among animals has been extensively studied\"。by behavioral ecologists是状语。",
    vocabulary: [
      { word: "evolution", pronunciation: "/ˌiːvə'luːʃn/", meaning: "n. 进化", root: "evolve v. 进化；evolutionary a. 进化的" },
      { word: "cooperative", pronunciation: "/koʊ'ɑːpərətɪv/", meaning: "a. 合作的", collocation: "cooperative behavior 合作行为", root: "cooperate v. 合作" },
      { word: "extensively", pronunciation: "/ɪk'stensɪvli/", meaning: "ad. 广泛地", synonym: "widely ad. 广泛地", root: "extensive a. 广泛的" },
      { word: "behavioral", pronunciation: "/bɪ'heɪvjərəl/", meaning: "a. 行为的", root: "behavior n. 行为" },
      { word: "ecologist", pronunciation: "/ɪ'kɑːlədʒɪst/", meaning: "n. 生态学家", root: "ecology n. 生态学" }
    ],
    topic: {
      "与\"动物行为\"相关的词：": [
        { word: "instinct", pronunciation: "/'ɪnstɪŋkt/", meaning: "n. 本能" },
        { word: "territory", pronunciation: "/'terətɔːri/", meaning: "n. 领地；领土" },
        { word: "predator", pronunciation: "/'predətər/", meaning: "n. 捕食者" },
        { word: "prey", pronunciation: "/preɪ/", meaning: "n. 猎物" }
      ]
    }
  },
  {
    id: 8,
    english: "The application of modern agricultural techniques has significantly increased crop yields in developing countries.",
    chinese: "现代农业技术的应用显著提高了发展中国家的作物产量。",
    grammar: "本句的主干是\"The application of modern agricultural techniques has significantly increased crop yields\"。in developing countries是地点状语。",
    vocabulary: [
      { word: "application", pronunciation: "/ˌæplɪ'keɪʃn/", meaning: "n. 应用", collocation: "application of technology 技术应用", root: "apply v. 应用" },
      { word: "agricultural", pronunciation: "/ˌæɡrɪ'kʌltʃərəl/", meaning: "a. 农业的", synonym: "farming a. 农业的" },
      { word: "technique", pronunciation: "/tek'niːk/", meaning: "n. 技术；技巧", synonym: "method n. 方法" },
      { word: "significantly", pronunciation: "/sɪɡ'nɪfɪkəntli/", meaning: "ad. 显著地", synonym: "markedly ad. 显著地", root: "significant a. 显著的" },
      { word: "yield", pronunciation: "/jiːld/", meaning: "n. 产量", synonym: "output n. 产量" }
    ],
    topic: {
      "与\"农业发展\"相关的词：": [
        { word: "sustainable", pronunciation: "/sə'steɪnəbl/", meaning: "a. 可持续的" },
        { word: "irrigation", pronunciation: "/ˌɪrɪ'ɡeɪʃn/", meaning: "n. 灌溉" },
        { word: "genetic", pronunciation: "/dʒə'netɪk/", meaning: "a. 基因的" },
        { word: "drought", pronunciation: "/draʊt/", meaning: "n. 干旱" }
      ]
    }
  },
  {
    id: 9,
    english: "The migration patterns of ancient civilizations provide valuable insights into their trading networks and cultural exchanges.",
    chinese: "古代文明的迁徙模式为了解它们的贸易网络和文化交流提供了宝贵的见解。",
    grammar: "本句的主干是\"The migration patterns of ancient civilizations provide valuable insights\"。into their trading networks and cultural exchanges是insights的后置定语。",
    vocabulary: [
      { word: "migration", pronunciation: "/maɪ'ɡreɪʃn/", meaning: "n. 迁徙", root: "migrate v. 迁徙" },
      { word: "ancient", pronunciation: "/'eɪnʃənt/", meaning: "a. 古代的", antonym: "modern a. 现代的" },
      { word: "civilization", pronunciation: "/ˌsɪvələ'zeɪʃn/", meaning: "n. 文明" },
      { word: "insight", pronunciation: "/'ɪnsaɪt/", meaning: "n. 见解；洞察", collocation: "insight into 对...的洞察" },
      { word: "cultural", pronunciation: "/'kʌltʃərəl/", meaning: "a. 文化的", root: "culture n. 文化" }
    ],
    topic: {
      "与\"文明、迁徙\"相关的词：": [
        { word: "nomad", pronunciation: "/'noʊmæd/", meaning: "n. 游牧民族" },
        { word: "settlement", pronunciation: "/'setəlmənt/", meaning: "n. 定居点" },
        { word: "artifact", pronunciation: "/'ɑːrtɪfækt/", meaning: "n. 人工制品" },
        { word: "heritage", pronunciation: "/'herɪtɪdʒ/", meaning: "n. 遗产" }
      ]
    }
  },
  {
    id: 10,
    english: "The psychological effects of prolonged isolation on prisoners of war have been well documented in clinical literature.",
    chinese: "长期隔离对战俘的心理影响已在临床文献中有详细记录。",
    grammar: "本句的主干是\"The psychological effects of prolonged isolation on prisoners of war have been well documented\"。in clinical literature是状语。",
    vocabulary: [
      { word: "psychological", pronunciation: "/ˌsaɪkə'lɑːdʒɪkl/", meaning: "a. 心理的", root: "psychology n. 心理学" },
      { word: "prolonged", pronunciation: "/prə'lɔːŋd/", meaning: "a. 长期的", root: "prolong v. 延长" },
      { word: "isolation", pronunciation: "/ˌaɪsə'leɪʃn/", meaning: "n. 隔离", root: "isolate v. 隔离" },
      { word: "prisoner", pronunciation: "/'prɪzənər/", meaning: "n. 囚犯", collocation: "prisoner of war 战俘" },
      { word: "documented", pronunciation: "/'dɑːkjumentɪd/", meaning: "v. 记录（document的过去分词）", root: "document v. 记录" }
    ],
    topic: {
      "与\"心理学\"相关的词：": [
        { word: "trauma", pronunciation: "/'trɔːmə/", meaning: "n. 心理创伤" },
        { word: "anxiety", pronunciation: "/æŋ'zaɪəti/", meaning: "n. 焦虑" },
        { word: "therapy", pronunciation: "/'θerəpi/", meaning: "n. 治疗" },
        { word: "rehabilitation", pronunciation: "/ˌriːhəˌbɪlɪ'teɪʃn/", meaning: "n. 康复" }
      ]
    }
  }
];

// Generate remaining sentences 11-100 with sample structure
const allSentences = [
  {
    id: 1,
    english: "Essentially, a theory is an abstract, symbolic representation of what is conceived to be reality.",
    chinese: "理论在本质上是对人们构想的现实的一种抽象和符号化的表达。",
    grammar: "本句的主干是\"A theory is an abstract, symbolic representation\"。what引导的一个名词性从句充当of的宾语。",
    vocabulary: [
      { word: "essentially", pronunciation: "/ɪ'senʃəli/", meaning: "ad. 本质上；基本上", memory: "ess（存在）+entially→存在的就是本质的→本质上", synonym: "substantially ad. 本质上", root: "essence n. 本质；essential a. 本质的" },
      { word: "theory", pronunciation: "/'θiːəri/", meaning: "n. 理论，原理", memory: "theo（神）+ry（…学）→神学→理论", collocation: "in theory 理论上", synonym: "principle n. 原理", root: "theorize v. 理论化；theoretical a. 理论的" },
      { word: "abstract", pronunciation: "/'æbstrækt/", meaning: "a. 抽象的；抽象派的", memory: "abs（离去）+tract（拉，抽）→将具体意义抽走→抽象的", collocation: "abstract knowledge 抽象知识", root: "abstraction n. 抽象概念" },
      { word: "symbolic", pronunciation: "/sɪm'bɑːlɪk/", meaning: "a. 象征的；符号的", root: "symbolize vt. 象征；symbolism n. 象征主义" },
      { word: "representation", pronunciation: "/ˌreprɪzen'teɪʃn/", meaning: "n. 代表；表现", root: "represent vt. 代表；representational a. 代表的；具象派的" },
      { word: "conceive", pronunciation: "/kən'siːv/", meaning: "v. 设想，构想", memory: "con（共同）+ceiv（抓）+e→一起抓住（思想）→设想", root: "conceivable a. 可想象的；conception n. 构思", reference: "deceive vt. 欺骗；perceive vt. 察觉" }
    ],
    topic: {
      "与\"理论、思维\"相关的词：": [
        { word: "philosophy", pronunciation: "/fɪ'lɑːsəfi/", meaning: "n. 哲学" },
        { word: "rational", pronunciation: "/'ræʃənəl/", meaning: "a. 理性的" },
        { word: "cognitive", pronunciation: "/'kɑːɡnətɪv/", meaning: "a. 认知的" },
        { word: "concept", pronunciation: "/'kɑːnsept/", meaning: "n. 概念" },
        { word: "notion", pronunciation: "/'noʊʃn/", meaning: "n. 观念；概念" }
      ]
    }
  },
  {
    id: 2,
    english: "Thanks to modern irrigation, crops now grow abundantly in areas where once nothing but cacti and sagebrush could live.",
    chinese: "受当代灌溉设施之赐，在原来只有仙人掌和灌木蒿才能生存的地方，现在农作物也生长旺盛。",
    grammar: "本句的主干是\"Thanks to modern irrigation, crops now grow abundantly\"。句中where引导的定语从句修饰前面的areas。",
    vocabulary: [
      { word: "irrigation", pronunciation: "/ˌɪrɪ'ɡeɪʃn/", meaning: "n. 灌溉", collocation: "irrigation sprinkler 喷灌装置", root: "irrigate vt. 灌溉" },
      { word: "abundantly", pronunciation: "/ə'bʌndəntli/", meaning: "ad. 丰富地，充裕地", synonym: "plentifully ad. 丰富地", root: "abundant a. 大量的，充足的" },
      { word: "cactus", pronunciation: "/'kæktəs/", meaning: "n. [pl. cacti] 仙人掌" },
      { word: "sagebrush", pronunciation: "/'seɪdʒbrʌʃ/", meaning: "n. 灌木蒿；灌木蒿丛" }
    ],
    topic: {
      "与\"农业生产、土地\"相关的词：": [
        { word: "agricultural", pronunciation: "/ˌæɡrɪ'kʌltʃərəl/", meaning: "a. 农业的" },
        { word: "agrarian", pronunciation: "/ə'ɡreriən/", meaning: "a. 土地的；耕地的" },
        { word: "arable", pronunciation: "/'ærəbl/", meaning: "a. 可耕的；耕作的" },
        { word: "arid", pronunciation: "/'ærɪd/", meaning: "a. 干旱的；不毛的" },
        { word: "barren", pronunciation: "/'bærən/", meaning: "a. （土地等）贫瘠的" }
      ],
      "与\"除草、施肥\"相关的词：": [
        { word: "fertilizer", pronunciation: "/'fɜːrtəlaɪzər/", meaning: "n. 肥料" },
        { word: "herbicide", pronunciation: "/'hɜːrbɪsaɪd/", meaning: "n. 除草剂" },
        { word: "pesticide", pronunciation: "/'pestɪsaɪd/", meaning: "n. 杀虫剂" },
        { word: "weed", pronunciation: "/wiːd/", meaning: "v. 除草" }
      ]
    }
  },
  {
    id: 3,
    english: "The history of the cathedral can be traced to the early 13th century when its first stones were laid.",
    chinese: "大教堂的历史可以追溯到13世纪早期，那时它的第一块石头被放下。",
    grammar: "本句的主干是\"The history of the cathedral can be traced\"。when引导的定语从句修饰the early 13th century。",
    vocabulary: [
      { word: "cathedral", pronunciation: "/kə'θiːdrəl/", meaning: "n. 大教堂" },
      { word: "trace", pronunciation: "/treɪs/", meaning: "v. 追溯；追踪", collocation: "trace back to 追溯到", root: "traceable a. 可追踪的" },
      { word: "century", pronunciation: "/'sentʃəri/", meaning: "n. 世纪" },
      { word: "lay", pronunciation: "/leɪ/", meaning: "v. 放置；铺设（过去式laid）" }
    ],
    topic: {
      "与\"建筑、宗教\"相关的词：": [
        { word: "church", pronunciation: "/tʃɜːrtʃ/", meaning: "n. 教堂" },
        { word: "monastery", pronunciation: "/'mɑːnəsteri/", meaning: "n. 修道院" },
        { word: "chapel", pronunciation: "/'tʃæpəl/", meaning: "n. 小教堂" },
        { word: "architecture", pronunciation: "/'ɑːrkɪtektʃər/", meaning: "n. 建筑学" }
      ]
    }
  },
  {
    id: 4,
    english: "The behavior of a fluid depends more on its relative density than on the specific gravity of the substance itself.",
    chinese: "流体的行为更多地取决于其相对密度，而不是物质本身的比重。",
    grammar: "本句的主干是\"The behavior of a fluid depends more on its relative density\"。than on the specific gravity是比较状语。",
    vocabulary: [
      { word: "fluid", pronunciation: "/'fluːɪd/", meaning: "n. 流体", root: "fluidic a. 流体的" },
      { word: "relative", pronunciation: "/'relətɪv/", meaning: "a. 相对的", collocation: "relative density 相对密度", root: "relativity n. 相对论" },
      { word: "density", pronunciation: "/'densəti/", meaning: "n. 密度" },
      { word: "specific", pronunciation: "/spə'sɪfɪk/", meaning: "a. 特定的；具体的", collocation: "specific gravity 比重" },
      { word: "gravity", pronunciation: "/'ɡrævəti/", meaning: "n. 重力；引力" }
    ],
    topic: {
      "与\"物理、力学\"相关的词：": [
        { word: "mass", pronunciation: "/mæs/", meaning: "n. 质量" },
        { word: "volume", pronunciation: "/'vɑːljuːm/", meaning: "n. 体积" },
        { word: "pressure", pronunciation: "/'preʃər/", meaning: "n. 压力" },
        { word: "force", pronunciation: "/fɔːrs/", meaning: "n. 力" }
      ]
    }
  },
  {
    id: 5,
    english: "The impact of the new trade policy resulted in a dramatic increase in exports from the manufacturing sector.",
    chinese: "新贸易政策的影响导致制造业出口大幅增长。",
    grammar: "本句的主干是\"The impact of the new trade policy resulted in a dramatic increase\"。in exports是increase的定语，from the manufacturing sector是exports的定语。",
    vocabulary: [
      { word: "impact", pronunciation: "/'ɪmpækt/", meaning: "n. 影响", collocation: "impact on 对...的影响", synonym: "effect n. 影响" },
      { word: "trade", pronunciation: "/treɪd/", meaning: "n./v. 贸易；交易", collocation: "trade policy 贸易政策" },
      { word: "dramatic", pronunciation: "/drə'mætɪk/", meaning: "a. 戏剧性的；显著的", synonym: "significant a. 显著的", root: "drama n. 戏剧" },
      { word: "export", pronunciation: "/'ekspɔːrt/", meaning: "n./v. 出口", collocation: "export sector 出口部门" },
      { word: "manufacturing", pronunciation: "/ˌmænju'fæktʃərɪŋ/", meaning: "n. 制造业", root: "manufacture v. 制造" }
    ],
    topic: {
      "与\"贸易、经济\"相关的词：": [
        { word: "tariff", pronunciation: "/'tærɪf/", meaning: "n. 关税" },
        { word: "quota", pronunciation: "/'kwoʊtə/", meaning: "n. 配额；限额" },
        { word: "subsidy", pronunciation: "/'sʌbsɪdi/", meaning: "n. 补贴" },
        { word: "commodity", pronunciation: "/kə'mɑːdəti/", meaning: "n. 商品" }
      ]
    }
  },
  {
    id: 6,
    english: "The decline of the Roman Empire was accelerated by the invasion of barbarian tribes from the north.",
    chinese: "罗马帝国的衰落因北方蛮族部落的入侵而加速。",
    grammar: "本句的主干是\"The decline of the Roman Empire was accelerated\"。by the invasion是状语，of barbarian tribes是invasion的定语，from the north是tribes的定语。",
    vocabulary: [
      { word: "decline", pronunciation: "/dɪ'klaɪn/", meaning: "n./v. 衰落；下降" },
      { word: "Roman Empire", pronunciation: "/'roʊmən 'empɪr/", meaning: "n. 罗马帝国" },
      { word: "accelerate", pronunciation: "/ək'seləreɪt/", meaning: "v. 加速", synonym: "speed up 加速", root: "acceleration n. 加速" },
      { word: "invasion", pronunciation: "/ɪn'veɪʒn/", meaning: "n. 入侵", root: "invade v. 入侵" },
      { word: "barbarian", pronunciation: "/bɑːr'bæriən/", meaning: "n. 野蛮人" }
    ],
    topic: {
      "与\"历史、帝国\"相关的词：": [
        { word: "dynasty", pronunciation: "/'daɪnəsti/", meaning: "n. 朝代" },
        { word: "empire", pronunciation: "/'empaɪər/", meaning: "n. 帝国" },
        { word: "civilization", pronunciation: "/ˌsɪvələ'zeɪʃn/", meaning: "n. 文明" },
        { word: "conquest", pronunciation: "/'kɑːŋkwest/", meaning: "n. 征服" }
      ]
    }
  },
  {
    id: 7,
    english: "The evolution of cooperative behavior among animals has been extensively studied by behavioral ecologists.",
    chinese: "动物合作行为的进化已被行为生态学家广泛研究。",
    grammar: "本句的主干是\"The evolution of cooperative behavior among animals has been extensively studied\"。by behavioral ecologists是状语。",
    vocabulary: [
      { word: "evolution", pronunciation: "/ˌiːvə'luːʃn/", meaning: "n. 进化", root: "evolve v. 进化；evolutionary a. 进化的" },
      { word: "cooperative", pronunciation: "/koʊ'ɑːpərətɪv/", meaning: "a. 合作的", collocation: "cooperative behavior 合作行为", root: "cooperate v. 合作" },
      { word: "extensively", pronunciation: "/ɪk'stensɪvli/", meaning: "ad. 广泛地", synonym: "widely ad. 广泛地", root: "extensive a. 广泛的" },
      { word: "behavioral", pronunciation: "/bɪ'heɪvjərəl/", meaning: "a. 行为的", root: "behavior n. 行为" },
      { word: "ecologist", pronunciation: "/ɪ'kɑːlədʒɪst/", meaning: "n. 生态学家", root: "ecology n. 生态学" }
    ],
    topic: {
      "与\"动物行为\"相关的词：": [
        { word: "instinct", pronunciation: "/'ɪnstɪŋkt/", meaning: "n. 本能" },
        { word: "territory", pronunciation: "/'terətɔːri/", meaning: "n. 领地；领土" },
        { word: "predator", pronunciation: "/'predətər/", meaning: "n. 捕食者" },
        { word: "prey", pronunciation: "/preɪ/", meaning: "n. 猎物" }
      ]
    }
  },
  {
    id: 8,
    english: "The application of modern agricultural techniques has significantly increased crop yields in developing countries.",
    chinese: "现代农业技术的应用显著提高了发展中国家的作物产量。",
    grammar: "本句的主干是\"The application of modern agricultural techniques has significantly increased crop yields\"。in developing countries是地点状语。",
    vocabulary: [
      { word: "application", pronunciation: "/ˌæplɪ'keɪʃn/", meaning: "n. 应用", collocation: "application of technology 技术应用", root: "apply v. 应用" },
      { word: "agricultural", pronunciation: "/ˌæɡrɪ'kʌltʃərəl/", meaning: "a. 农业的", synonym: "farming a. 农业的" },
      { word: "technique", pronunciation: "/tek'niːk/", meaning: "n. 技术；技巧", synonym: "method n. 方法" },
      { word: "significantly", pronunciation: "/sɪɡ'nɪfɪkəntli/", meaning: "ad. 显著地", synonym: "markedly ad. 显著地", root: "significant a. 显著的" },
      { word: "yield", pronunciation: "/jiːld/", meaning: "n. 产量", synonym: "output n. 产量" }
    ],
    topic: {
      "与\"农业发展\"相关的词：": [
        { word: "sustainable", pronunciation: "/sə'steɪnəbl/", meaning: "a. 可持续的" },
        { word: "irrigation", pronunciation: "/ˌɪrɪ'ɡeɪʃn/", meaning: "n. 灌溉" },
        { word: "genetic", pronunciation: "/dʒə'netɪk/", meaning: "a. 基因的" },
        { word: "drought", pronunciation: "/draʊt/", meaning: "n. 干旱" }
      ]
    }
  },
  {
    id: 9,
    english: "The migration patterns of ancient civilizations provide valuable insights into their trading networks and cultural exchanges.",
    chinese: "古代文明的迁徙模式为了解它们的贸易网络和文化交流提供了宝贵的见解。",
    grammar: "本句的主干是\"The migration patterns of ancient civilizations provide valuable insights\"。into their trading networks and cultural exchanges是insights的后置定语。",
    vocabulary: [
      { word: "migration", pronunciation: "/maɪ'ɡreɪʃn/", meaning: "n. 迁徙", root: "migrate v. 迁徙" },
      { word: "ancient", pronunciation: "/'eɪnʃənt/", meaning: "a. 古代的" },
      { word: "civilization", pronunciation: "/ˌsɪvələ'zeɪʃn/", meaning: "n. 文明" },
      { word: "insight", pronunciation: "/'ɪnsaɪt/", meaning: "n. 见解；洞察", collocation: "insight into 对...的洞察" },
      { word: "cultural", pronunciation: "/'kʌltʃərəl/", meaning: "a. 文化的", root: "culture n. 文化" }
    ],
    topic: {
      "与\"文明、迁徙\"相关的词：": [
        { word: "nomad", pronunciation: "/'noʊmæd/", meaning: "n. 游牧民族" },
        { word: "settlement", pronunciation: "/'setəlmənt/", meaning: "n. 定居点" },
        { word: "artifact", pronunciation: "/'ɑːrtɪfækt/", meaning: "n. 人工制品" },
        { word: "heritage", pronunciation: "/'herɪtɪdʒ/", meaning: "n. 遗产" }
      ]
    }
  },
  {
    id: 10,
    english: "The psychological effects of prolonged isolation on prisoners of war have been well documented in clinical literature.",
    chinese: "长期隔离对战俘的心理影响已在临床文献中有详细记录。",
    grammar: "本句的主干是\"The psychological effects of prolonged isolation on prisoners of war have been well documented\"。in clinical literature是状语。",
    vocabulary: [
      { word: "psychological", pronunciation: "/ˌsaɪkə'lɑːdʒɪkl/", meaning: "a. 心理的", root: "psychology n. 心理学" },
      { word: "prolonged", pronunciation: "/prə'lɔːŋd/", meaning: "a. 长期的", root: "prolong v. 延长" },
      { word: "isolation", pronunciation: "/ˌaɪsə'leɪʃn/", meaning: "n. 隔离", root: "isolate v. 隔离" },
      { word: "prisoner", pronunciation: "/'prɪzənər/", meaning: "n. 囚犯", collocation: "prisoner of war 战俘" },
      { word: "documented", pronunciation: "/'dɑːkjumentɪd/", meaning: "v. 记录（document的过去分词）", root: "document v. 记录" }
    ],
    topic: {
      "与\"心理学\"相关的词：": [
        { word: "trauma", pronunciation: "/'trɔːmə/", meaning: "n. 心理创伤" },
        { word: "anxiety", pronunciation: "/æŋ'zaɪəti/", meaning: "n. 焦虑" },
        { word: "therapy", pronunciation: "/'θerəpi/", meaning: "n. 治疗" },
        { word: "rehabilitation", pronunciation: "/ˌriːhəˌbɪlɪ'teɪʃn/", meaning: "n. 康复" }
      ]
    }
  }
];

// Generate sentences 11-100 with sample structure
for (let i = 11; i <= 100; i++) {
  allSentences.push({
    id: i,
    english: `Sentence ${i} content - This is a sample sentence for TOEFL vocabulary learning purpose.`,
    chinese: `这是第${i}个句子的中文翻译，用于托福词汇学习。`,
    grammar: `本句的主干是"..."。句中...引导的定语从句修饰前面的...。`,
    vocabulary: [
      { word: "sample", pronunciation: "/'sæmpl/", meaning: "n. 样本；例子" },
      { word: "vocabulary", pronunciation: "/və'kæbjəleri/", meaning: "n. 词汇" },
      { word: "learning", pronunciation: "/'lɜːrnɪŋ/", meaning: "n. 学习" }
    ],
    topic: {
      "与\"学习相关\"的词：": [
        { word: "study", pronunciation: "/'stʌdi/", meaning: "v./n. 学习" },
        { word: "education", pronunciation: "/ˌedʒu'keɪʃn/", meaning: "n. 教育" }
      ]
    }
  });
}

export const sentences = allSentences;

export function getSentenceById(id) {
  return sentences.find(s => s.id === id);
}

export function getSentencesByIds(ids) {
  return ids.map(id => sentences.find(s => s.id === id)).filter(s => s);
}

export function getSentencesForDay(day) {
  const startId = (day - 1) * 5 + 1;
  return [startId, startId + 1, startId + 2, startId + 3, startId + 4];
}

export function calculateReviewDates(learningDate, day) {
  const baseDate = new Date(learningDate);
  // Offset to the actual learning day (day 1 = startedAt, day 20 = startedAt + 19)
  baseDate.setDate(baseDate.getDate() + (day - 1));
  // Ebbinghaus review intervals: 1, 2, 4, 7, 15 days after learning
  // Max timeline: day 20 learning + 15 = day 35
  const intervals = [1, 2, 4, 7, 15];

  return intervals.map(interval => {
    const reviewDate = new Date(baseDate);
    reviewDate.setDate(reviewDate.getDate() + interval);
    return reviewDate.toISOString().split('T')[0];
  });
}
