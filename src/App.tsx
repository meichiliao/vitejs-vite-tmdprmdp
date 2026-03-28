import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  BookOpen,
  MessageSquare,
  Clock,
  Heart,
  Users,
  History,
  Printer,
  Sparkles,
  Sun,
  Quote,
  Star,
  List,
  X,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showJumpMenu, setShowJumpMenu] = useState(false);
  const menuRef = useRef(null);

  const slides = [
    {
      id: 1,
      type: 'title',
      heading: 'FELLOWSHIP GATHERING',
      title: '歡迎參加瑞光CBSI研經團契',
      content: '2026.03.30 | 第5次聚會',
      badge: 'P.47 從第4週第17題開始',
    },
    {
      id: 2,
      type: 'activity',
      icon: <Briefcase className="w-16 h-16 md:w-28 md:h-28 text-[#C5A059]" />,
      title: '開始禱告',
      content: '邀請現場與線上的家人\n一同低頭閉目',
      isCenter: true,
      isBig: true,
    },
    {
      id: 3,
      type: 'review_redesign_slim',
      icon: <History className="text-[#C5A059]" size={20} />,
      title: '回顧上次聚會：上帝在聖殿之外的作為',
      subtitle: '使徒行傳 7:1-16 核心回顧',
      items: [
        {
          title: '1. 啟示地點不受限',
          desc: '上帝在異教之地向亞伯拉罕顯現，打破了「神只在聖殿」的觀念。',
          ref: '(使7:2)',
        },
        {
          title: '2. 應許與同在的保證',
          desc: '亞伯拉罕憑信領受應許，約瑟在異鄉苦難中經歷神同在。',
          ref: '(使7:5, 9-10)',
        },
      ],
      footer:
        '銜接：以色列人在埃及人口繁盛增多後，又發生了什麼事？讓我們進入 7:17-50。',
    },
    {
      id: 4,
      type: 'activity',
      icon: <BookOpen className="w-14 h-14 md:w-16 md:h-16 text-[#C5A059]" />,
      title: '閱讀經文 (一)',
      content: '一人一句 ‧ 輪流朗讀\n\n◄ 使徒行傳 7 : 17 - 50 ►',
      isCenter: true,
    },
    {
      id: 5,
      type: 'scripture',
      title: '使徒行傳 7 : 17 - 19',
      verses: [
        {
          n: '17',
          t: '神給亞伯拉罕的應許快要實現的時候，以色列人在埃及人口繁盛增多；',
        },
        { n: '18', t: '但是，到了另一位不認識約瑟的君王興起統治埃及的時候；' },
        {
          n: '19',
          t: '他就謀害我們的同胞，虐待我們的祖先，逼他們拋棄自己的嬰孩，不容嬰孩存活。',
        },
      ],
    },
    {
      id: 6,
      type: 'scripture',
      title: '使徒行傳 7 : 20 - 22',
      verses: [
        {
          n: '20',
          t: '就在那時候，摩西出生了，他非常俊美，在父親的家中撫養了三個月。',
        },
        { n: '21', t: '他被拋棄的時候，法老的女兒把他拾起來，當作兒子撫養。' },
        { n: '22', t: '摩西學盡了埃及人的一切學問，說話行事都有能力。' },
      ],
    },
    {
      id: 7,
      type: 'scripture',
      title: '使徒行傳 7 : 23 - 25',
      verses: [
        {
          n: '23',
          t: '「到了四十歲，他心中起了一個念頭，要去看望自己的同胞以色列人。',
        },
        {
          n: '24',
          t: '當他看見有一個人受欺負，就去護衛，為那受屈的抱不平，打死了那個埃及人。',
        },
        {
          n: '25',
          t: '他以為同胞們都必知道神要藉著他的手拯救他們，事實上他們卻不知道。',
        },
      ],
    },
    {
      id: 8,
      type: 'scripture',
      title: '使徒行傳 7 : 26 - 29',
      verses: [
        {
          n: '26',
          t: '第二天，有人在打架，摩西就出面調解，說：『你們是弟兄，為甚麼彼此欺負呢？』',
        },
        {
          n: '27',
          t: '那欺負鄰舍的把他推開，說：『誰立了你作我們的領袖和審判官呢？』',
        },
        { n: '28', t: '『難道你想殺我，像昨天殺那個埃及人一樣嗎？』' },
        {
          n: '29',
          t: '摩西因為這句話，就逃到米甸地寄居，在那裡生了兩個兒子。',
        },
      ],
    },
    {
      id: 9,
      type: 'scripture',
      title: '使徒行傳 7 : 30 - 32',
      verses: [
        {
          n: '30',
          t: '「過了四十年，在西奈山的曠野，有一位使者，在荊棘中的火燄裡，向摩西顯現。',
        },
        {
          n: '31',
          t: '他見了這個異象，十分驚奇；他正上前察看的時候，就有主的聲音說：',
        },
        {
          n: '32',
          t: '『我是你祖宗的　神，就是亞伯拉罕、以撒、雅各的　神。』摩西戰戰兢兢，不敢觀看。',
        },
      ],
    },
    {
      id: 10,
      type: 'scripture',
      title: '使徒行傳 7 : 33 - 34',
      verses: [
        {
          n: '33',
          t: '主對他說：『把你腳上的鞋脫掉，因為你所站的地方是聖地。',
        },
        {
          n: '34',
          t: '我的子民在埃及所受的痛苦，我實在看見了；他們的歎息我也聽見了，我下來是要救他們。你來，我要派你到埃及去。』',
        },
      ],
    },
    {
      id: 11,
      type: 'scripture',
      title: '使徒行傳 7 : 35 - 36',
      verses: [
        {
          n: '35',
          t: '他們拒絕了這摩西，說：『誰立你作領袖？』但神藉使者的手，派他作領袖。',
        },
        {
          n: '36',
          t: '這人領他們出來，並且在埃及地、紅海和曠野，行奇事神蹟四十年。',
        },
      ],
    },
    {
      id: 12,
      type: 'scripture',
      title: '使徒行傳 7 : 37 - 38',
      verses: [
        {
          n: '37',
          t: '以前摩西對以色列人說：『神要從你們弟兄中間，給你們興起一位先知像我。』',
        },
        {
          n: '38',
          t: '在曠野大會中，他和在西奈山上對他說話的使者同在，領受活的聖言傳給我們。',
        },
      ],
    },
    {
      id: 13,
      type: 'scripture',
      title: '使徒行傳 7 : 39 - 41',
      verses: [
        {
          n: '39',
          t: '我們的祖先不肯聽從他，反而把他推開，他們的心已經轉向了埃及；',
        },
        {
          n: '40',
          t: '就對亞倫說：『給我們做一些神像。因為那個摩西，我們不知道他遭遇了什麼事。』',
        },
        {
          n: '41',
          t: '在那些日子裡，他們做了一個牛犢，把祭物獻給那偶像，因自己手所做的而歡樂。',
        },
      ],
    },
    {
      id: 14,
      type: 'scripture',
      title: '使徒行傳 7 : 42 - 43',
      verses: [
        {
          n: '42',
          t: '於是神轉身離開，任憑他們事奉天象，正如先知書說：『你們豈是將祭物獻給我呢？』',
        },
        {
          n: '43',
          t: '『你們抬著摩洛的帳幕，和理番神的星。所以我必把你們放逐到巴比倫那一邊去。』',
        },
      ],
    },
    {
      id: 15,
      type: 'scripture',
      title: '使徒行傳 7 : 44 - 45',
      verses: [
        {
          n: '44',
          t: '「我們的祖先在曠野有作證的帳幕，是跟摩西談話的那位指示他做的。',
        },
        {
          n: '45',
          t: '神把外族人從他們面前趕走後，他們就同約書亞把帳幕帶進所得地，直到大衛的日子。',
        },
      ],
    },
    {
      id: 16,
      type: 'scripture',
      title: '使徒行傳 7 : 46 - 47',
      verses: [
        { n: '46', t: '大衛在神面前蒙恩，求為雅各的神找個居所，' },
        { n: '47', t: '而由所羅門為他建造殿宇。' },
      ],
    },
    {
      id: 17,
      type: 'scripture',
      title: '使徒行傳 7 : 48 - 50',
      verses: [
        {
          n: '48',
          t: '其實至高者並不住人手所造的。主說：『天是我的寶座，地是我的腳凳。』',
        },
        { n: '49', t: '『你要為我造怎樣的殿呢？哪裡是我安息的地方呢？』' },
        { n: '50', t: '『這一切不都是我手所造的嗎？』' },
        { n: '▶', t: '以上理解是否有問題 ► 回答 第17題' },
      ],
    },
    {
      id: 18,
      type: 'activity',
      icon: <Users className="w-14 h-14 md:w-18 md:h-18 text-[#C5A059]" />,
      title: '開始查經考察',
      content: '翻開課本 P.47 第 17 題\n依序輪答 ‧ 現場補充',
      isCenter: true,
    },
    {
      id: 19,
      type: 'handbook_study',
      icon: <HelpCircle className="w-12 h-12 text-[#C5A059]" />,
      title: '週四：徒7:17-50——司提反當眾申訴（第二段）',
      questions: [
        {
          id: 17,
          text: '司提反是如何借用這一點來駁斥指控他的人的觀念 —— 即耶路撒冷聖殿是世上最神聖的地方？',
        },
      ],
      isSingle: true,
    },
    {
      id: 20,
      type: 'activity',
      icon: <BookOpen className="w-14 h-14 md:w-16 md:h-16 text-[#C5A059]" />,
      title: '閱讀經文 (二)',
      content:
        '繼續閱讀 ‧ 一人一句\n司提反對當代猶太人的嚴厲指控\n\n◄ 使徒行傳 7 : 51-60 ►',
      isCenter: true,
    },
    {
      id: 21,
      type: 'scripture',
      title: '使徒行傳 7 : 51 - 53',
      verses: [
        {
          n: '51',
          t: '「你們這頸項剛硬、心和耳都未受割禮的人，常抗拒聖靈！你們的祖先怎樣，你們也怎樣。',
        },
        {
          n: '52',
          t: '有哪一個先知你們祖先不迫害呢？你們殺了那些宣告那義者要來的人。',
        },
        { n: '53', t: '你們領受了由天使傳達的律法，卻不遵守。」' },
      ],
    },
    {
      id: 22,
      type: 'scripture',
      title: '使徒行傳 7 : 54 - 57',
      verses: [
        {
          n: '54',
          t: '眾人聽了這些話，心中非常惱怒，向他咬牙切齒。司提反被聖靈充滿。',
        },
        { n: '55', t: '定睛望天，看见 神的榮耀，和耶穌站在 神的右邊。' },
        { n: '56', t: '說：「我看見天開了，人子站在 神的右邊。」' },
        { n: '57', t: '眾人大聲喊叫，掩著耳朵，一齊向他衝過去。' },
      ],
    },
    {
      id: 23,
      type: 'scripture',
      title: '使徒行傳 7 : 58 - 60',
      verses: [
        {
          n: '58',
          t: '眾人將他推出城外，用石頭打他。證人把衣服放在名叫掃羅的青年腳前。',
        },
        {
          n: '59',
          t: '他們打司提反時，他呼求說：「主耶穌啊，求你接收我的靈魂！」',
        },
        {
          n: '60',
          t: '跪下大喊：「主啊，不要將這罪歸給他們！」說了這話，就睡了。',
        },
        { n: '▶', t: '以上理解是否有問題 ► 回答 第18-21題' },
      ],
    },
    {
      id: 24,
      type: 'activity',
      icon: <Users className="w-14 h-14 md:w-18 md:h-18 text-[#C5A059]" />,
      title: '開始查經考察',
      content: '翻開課本 P.47 第 18-21 題\n依序輪答 ‧ 現場補充',
      isCenter: true,
    },
    {
      id: 25,
      type: 'handbook_study',
      icon: <HelpCircle className="w-12 h-12 text-[#C5A059]" />,
      title: '週五：徒 7:51-60 —— 司提反被石頭打死',
      questions: [
        {
          id: 18,
          text: '司提反把指控他的猶太人稱作是「硬著頸項」和「心與耳未受割禮」的人。你認為他這樣說的意思是什麼？你能用日常的通俗語言來表達同一意思嗎？',
        },
        { id: 19, text: '司提反是如何指責控告他的猶太人的？' },
        { id: 20, text: '司提反的指控者對他的申訴作出了何種回應？' },
        {
          id: 21,
          text: '司提反離世前的最後一刻表現，向你顯露了他和神之間是怎樣的一種關係？',
        },
      ],
      isSingle: false,
    },
    {
      id: 26,
      type: 'summary_final',
      icon: <Sparkles className="w-10 h-10 text-[#C5A059]" />,
      title: '第八課總結：教會的橋樑',
      scripture: '「神的道傳開了；在耶路撒冷，門徒人數大大增加。」(徒 6:7)',
      content: '當我們按著呼召與聖靈賜予的恩賜侍奉時，教會便得興旺發展。',
      discussion: [
        '思考你的恩賜是什麼？服侍、教導、接待或管理？',
        '分享使用恩賜服事團契家人時的感想與收穫。',
      ],
    },
    {
      id: 27,
      type: 'egg',
      icon: <Star className="w-12 h-12 text-[#C5A059]" />,
      title: '最終彩蛋題 第 22 題',
      content: '你從《使徒行傳》6-7 章學習到\n哪些「做門徒」的道理？',
      isCenter: true,
    },
    {
      id: 28,
      type: 'activity',
      icon: <Heart className="w-12 h-12 md:w-16 md:h-16 text-[#C5A059]" />,
      title: '結束禱告',
      content: '帶著今日智慧，在職場重新得力！\n期待下次聚會見',
      isCenter: true,
      isLast: true,
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowJumpMenu(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setShowJumpMenu(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setShowJumpMenu(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] p-2 md:p-4 font-sans text-slate-900 overflow-hidden leading-normal">
      {/* 投影片主容器 - 16:9 固定比例 */}
      <div className="relative w-full max-w-5xl aspect-video bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col border border-slate-300">
        {/* 固定頂部藍條 */}
        <div className="h-2 md:h-3 bg-[#0C2340] w-full shrink-0 z-50" />

        <div className="flex-1 flex flex-col relative overflow-hidden min-h-0">
          <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-full -mr-20 -mt-20 opacity-30 pointer-events-none" />

          {/* 內容區域 */}
          <div
            key={currentSlide}
            className="flex-1 flex flex-col p-6 md:p-10 animate-in fade-in duration-300 overflow-hidden min-h-0"
          >
            {slide.type === 'title' && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <span className="text-[#C5A059] text-base font-bold tracking-[0.6em] mb-4 uppercase">
                  {slide.heading}
                </span>
                <h1 className="text-4xl md:text-7xl font-black text-[#0C2340] mb-6 leading-tight tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-400 font-medium mb-10 leading-relaxed whitespace-pre-line">
                  {slide.content}
                </p>
                <div className="bg-[#0C2340] text-white px-10 py-3 rounded-full font-bold tracking-widest shadow-lg">
                  {slide.badge}
                </div>
              </div>
            )}

            {slide.type === 'review_redesign_slim' && (
              <div className="flex flex-col h-full justify-between min-h-0">
                <div className="shrink-0 border-b border-slate-100 pb-1">
                  <div className="flex items-center gap-3">
                    {slide.icon}
                    <h2 className="text-lg md:text-xl font-black text-[#0C2340] leading-tight">
                      {slide.title}
                    </h2>
                  </div>
                  <p className="text-[#C5A059] font-bold text-[10px] md:text-xs uppercase tracking-wider">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 flex-1 items-center min-h-0">
                  {slide.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col border-l-8 border-[#0C2340] bg-[#FAF9F6] px-6 py-4 shadow-sm rounded-r-lg border-y border-r border-slate-100 h-full justify-center"
                    >
                      <h4 className="text-[18px] md:text-[22px] font-black text-[#0C2340] mb-2 leading-tight flex items-center gap-3">
                        <span className="w-2.5 h-2.5 bg-[#C5A059] rounded-full" />
                        {item.title}
                      </h4>
                      <p className="text-slate-700 text-[13px] md:text-[16px] leading-relaxed font-medium italic">
                        {item.desc}{' '}
                        <span className="ml-2 font-sans font-black text-[#C5A059] not-italic text-[12px] md:text-[14px]">
                          {item.ref}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0C2340] p-3 md:p-4 rounded-xl flex items-center gap-6 shadow-xl border-l-8 border-[#C5A059] shrink-0">
                  <p className="text-white text-[11px] md:text-xs lg:text-[13px] leading-relaxed font-medium italic pr-2 flex-1 whitespace-pre-line">
                    {slide.footer}
                  </p>
                  <div className="bg-[#C5A059] p-1.5 rounded-full text-[#0C2340] animate-pulse shrink-0">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            )}

            {slide.type === 'handbook_study' && (
              <div className="flex flex-col h-full overflow-hidden min-h-0">
                <div className="shrink-0 border-b border-slate-100 pb-2 mb-3">
                  <div className="flex items-center gap-4">
                    {slide.icon}
                    <h2 className="text-xl md:text-2xl font-black text-[#0C2340] leading-tight">
                      {slide.title}
                    </h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center min-h-0">
                  <div
                    className={`grid gap-3 w-full h-full ${
                      slide.isSingle ? 'grid-cols-1 items-start' : 'grid-cols-2'
                    }`}
                  >
                    {slide.questions.map((q, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 bg-slate-50/50 p-4 md:p-6 rounded-xl border-l-[10px] border-[#C5A059] border-y border-r border-slate-100 shadow-md hover:bg-white transition-all ${
                          slide.isSingle
                            ? 'max-w-4xl mx-auto w-full h-fit py-8'
                            : 'h-full flex flex-col justify-center'
                        }`}
                      >
                        <div className="flex items-start gap-3 w-full">
                          <div className="w-8 h-8 rounded-full bg-[#0C2340] text-white flex items-center justify-center shrink-0 font-bold text-base shadow-sm">
                            {q.id}
                          </div>
                          <p
                            className={`font-bold text-[#0C2340] leading-snug ${
                              slide.isSingle
                                ? 'text-2xl md:text-4xl'
                                : 'text-sm md:text-base lg:text-[18px]'
                            }`}
                          >
                            {q.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-[#C5A059] font-black tracking-widest text-xs md:text-sm uppercase italic shrink-0">
                  <div className="w-12 h-1 bg-[#C5A059]/20" />
                  邀請現場與線上回答領受
                </div>
              </div>
            )}

            {slide.type === 'activity' && (
              <div
                className={`h-full flex flex-col justify-center min-h-0 ${
                  slide.isCenter ? 'items-center text-center' : ''
                }`}
              >
                <div className="mb-4 flex justify-center shrink-0">
                  {slide.icon}
                </div>
                <h2
                  className={`font-black text-[#0C2340] tracking-tight uppercase leading-tight shrink-0 ${
                    slide.isBig
                      ? 'text-5xl md:text-8xl mb-6'
                      : 'text-3xl md:text-6xl mb-4'
                  }`}
                >
                  {slide.title}
                </h2>
                <div
                  className={`bg-[#C5A059] mb-6 shrink-0 ${
                    slide.isCenter ? 'mx-auto' : ''
                  } ${slide.isBig ? 'w-24 h-2' : 'w-16 h-1'}`}
                />
                <div className="max-w-4xl mx-auto px-4 overflow-hidden text-center">
                  <p
                    className={`text-slate-600 whitespace-pre-line leading-tight font-bold ${
                      slide.isBig
                        ? 'text-2xl md:text-5xl'
                        : 'text-xl md:text-3xl'
                    }`}
                  >
                    {slide.content}
                  </p>
                </div>
              </div>
            )}

            {slide.type === 'scripture' && (
              <div className="flex flex-col h-full overflow-hidden min-h-0">
                <div className="flex justify-between items-end mb-2 border-b border-slate-100 pb-1 shrink-0">
                  <div>
                    <span className="text-[#C5A059] text-[10px] md:text-xs font-black tracking-widest uppercase block mb-0.5">
                      Sacred Scripture
                    </span>
                    <h2 className="text-xl md:text-3xl font-black text-[#0C2340] tracking-tight">
                      {slide.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-[#C5A059] font-bold text-[10px] md:text-xs italic opacity-60 uppercase">
                    <BookOpen size={16} /> 現場與線上輪流朗讀
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center py-2 min-h-0">
                  {slide.verses.map((v, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 md:gap-5 shrink-0 ${
                        v.n === '▶'
                          ? 'bg-[#0C2340] p-3 md:p-5 text-white rounded-lg shadow-lg mt-2'
                          : 'border-b border-slate-50 pb-1.5'
                      }`}
                    >
                      <span
                        className={`font-black italic text-xl md:text-3xl shrink-0 w-8 md:w-12 text-right ${
                          v.n === '▶' ? 'text-[#C5A059]' : 'text-[#C5A059]'
                        }`}
                      >
                        {v.n}
                      </span>
                      <p
                        className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif leading-tight font-medium tracking-tight whitespace-normal ${
                          v.n === '▶'
                            ? 'font-sans font-black text-white'
                            : 'text-slate-800'
                        }`}
                      >
                        {v.t}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slide.type === 'summary_final' && (
              <div className="flex flex-col h-full overflow-hidden min-h-0">
                <div className="flex items-center gap-3 mb-2 shrink-0">
                  <div className="p-2 bg-slate-50 rounded-lg">{slide.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#0C2340]">
                    {slide.title}
                  </h2>
                </div>
                <div className="flex-1 flex flex-col gap-3 overflow-hidden justify-center min-h-0">
                  <div className="bg-[#FAF9F6] border-l-[10px] border-[#C5A059] p-4 shadow-sm shrink-0">
                    <div className="flex gap-4 mb-1">
                      <Quote
                        className="text-[#C5A059] opacity-40 shrink-0"
                        size={24}
                      />
                      <p className="text-base md:text-lg font-serif italic text-slate-700 leading-snug">
                        {slide.scripture}
                      </p>
                    </div>
                    <p className="text-lg md:text-2xl font-bold text-[#0C2340] pl-10 tracking-tight leading-tight">
                      {slide.content}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#C5A059] font-black tracking-widest text-[11px] md:text-xs uppercase flex items-center gap-2 mb-1">
                      <Sun size={18} /> 邀請現場與線上分享恩賜與生命連結
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {slide.discussion.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-3 rounded-xl border border-slate-100 flex gap-4 items-center shadow-md"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#0C2340] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-base md:text-xl text-slate-600 font-bold leading-tight">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {slide.type === 'egg' && (
              <div className="h-full flex flex-col items-center justify-center text-center min-h-0">
                <div className="mb-6 p-6 bg-slate-50 rounded-full border border-[#C5A059]/20 shadow-inner shrink-0">
                  <Star className="text-[#C5A059] w-16 h-16 md:w-24 md:h-24" />
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-[#C5A059] mb-4 tracking-widest uppercase shrink-0">
                  {slide.title}
                </h2>
                <div className="w-24 h-1.5 bg-[#C5A059] mb-10 mx-auto shrink-0" />
                <p className="text-3xl md:text-6xl font-black text-[#0C2340] leading-tight max-w-4xl px-4 mx-auto overflow-hidden">
                  {slide.content}
                </p>
              </div>
            )}
          </div>

          <div className="absolute bottom-4 right-8 text-slate-300 font-mono text-sm font-bold z-50 pointer-events-none">
            {String(currentSlide + 1).padStart(2, '0')}{' '}
            <span className="text-[#C5A059]/40">/</span>{' '}
            {String(slides.length).padStart(2, '0')}
          </div>
        </div>

        {/* 底部導覽列 */}
        <div className="h-12 md:h-14 border-t border-slate-100 flex items-center justify-between px-6 bg-white shrink-0 z-[100] print:hidden">
          <div className="flex items-center gap-3" ref={menuRef}>
            <div className="relative">
              <button
                onClick={() => setShowJumpMenu(!showJumpMenu)}
                className={`flex items-center gap-2 px-3 py-1 md:py-1.5 rounded-full text-xs font-bold border transition-all ${
                  showJumpMenu
                    ? 'bg-[#0C2340] text-white border-[#0C2340]'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-[#C5A059]'
                }`}
              >
                {showJumpMenu ? <X size={12} /> : <List size={12} />}
                跳至
              </button>

              {showJumpMenu && (
                <div className="absolute bottom-full left-0 mb-3 w-56 max-h-80 bg-white shadow-2xl rounded-xl border border-slate-200 overflow-y-auto z-[200] py-1 scrollbar-hide">
                  {slides.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 flex items-center gap-3 ${
                        currentSlide === idx
                          ? 'text-[#C5A059] font-bold bg-slate-50'
                          : 'text-slate-600'
                      }`}
                    >
                      <span className="opacity-30 font-mono text-xs w-5">
                        {idx + 1}
                      </span>
                      <span className="truncate">{s.title || s.heading}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="text-slate-300 font-bold text-[9px] tracking-widest uppercase hidden md:block opacity-60 italic">
              Ruiguang Elite Fellowship
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => window.print()}
              className="p-2 text-[#C5A059] hover:bg-slate-50 rounded-full transition-colors active:scale-90"
              title="列印或另存 PDF"
            >
              <Printer size={16} />
            </button>
            <div className="w-[1px] h-4 bg-slate-100 self-center" />
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`p-1.5 md:p-2 rounded-full border border-slate-100 hover:bg-slate-50 active:scale-90 ${
                  currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : ''
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-6 md:px-8 py-1.5 md:py-2 rounded-full transition-all text-white font-bold tracking-widest text-xs uppercase flex items-center gap-2 active:scale-95 shadow-md bg-[#0C2340]"
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-1 bg-[#C5A059] transition-all duration-700 shadow-[0_0_15px_rgba(197,160,89,0.5)]"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @media print {
          @page { size: landscape; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .slide { border: none !important; }
        }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `,
        }}
      />
    </div>
  );
};

export default App;
