// ===== i18n dictionary =====
// "ja" values are the site's original text, kept verbatim as the default/
// fallback so switching back to 日本語 always reproduces the exact current
// page. en / zh-CN / zh-TW / ko are added translations.
const I18N = {
  "nav.home": { ja: "ホーム", en: "Home", "zh-CN": "首页", "zh-TW": "首頁", ko: "홈" },
  "nav.portfolio": { ja: "ポートフォリオ", en: "Portfolio", "zh-CN": "作品集", "zh-TW": "作品集", ko: "포트폴리오" },
  "nav.contact": { ja: "コンタクト", en: "Contact", "zh-CN": "联系方式", "zh-TW": "聯絡方式", ko: "연락처" },

  "hero.eyebrow": { ja: "CG・イラストレーション・アニメーション", en: "CG · Illustration · Animation", "zh-CN": "CG · Illustration · Animation", "zh-TW": "CG · Illustration · Animation", ko: "CG · 일러스트 · 애니메이션" },
  "hero.desc": {
    ja: "CG、アニメーション、イラストレーションを軸に制作しています。武蔵野美術大学大学院で映像を専攻しています。現実にはない世界と物語を、絵と映像で届けたい。",
    en: "I create through CG, animation, and illustration. I study film at the graduate school of Musashino Art University. Through images and video, I want to share worlds and stories beyond reality.",
    "zh-CN": "我以 CG、动画与插画为创作主轴。目前在武藏野美术大学研究生院学习影像。希望通过绘画与影像，传递现实之外的世界与故事。",
    "zh-TW": "我以 CG、動畫與插畫為創作主軸。目前在武藏野美術大學研究所學習影像。希望透過繪畫與影像，傳遞現實之外的世界與故事。",
    ko: "CG, 애니메이션, 일러스트레이션을 중심으로 제작합니다. 무사시노미술대학 대학원에서 영상을 전공하고 있습니다. 그림과 영상으로 현실 너머의 세계와 이야기를 전하고 싶습니다.",
  },
  "hero.viewPortfolio": { ja: "作品を見る", en: "View Portfolio", "zh-CN": "查看作品集", "zh-TW": "查看作品集", ko: "포트폴리오 보기" },
  "hero.aboutMe": { ja: "私について", en: "About Me", "zh-CN": "关于我", "zh-TW": "關於我", ko: "소개" },

  "about.eyebrow": { ja: "About", en: "About", "zh-CN": "About", "zh-TW": "About", ko: "About" },
  "about.heading": { ja: "プロフィール", en: "Profile", "zh-CN": "个人简介", "zh-TW": "個人簡介", ko: "프로필" },
  "about.bio1": {
    ja: "こんにちは、私はリン シロウです。現在、武蔵野美術大学の映像・写真学科に在籍している大学院一年生です。私はこれまでに様々なクリエイティブな分野で活動してきましたが、特にCGに強い興味を持っています。",
    en: "Hello, I'm Rin Shirou. I'm currently a first-year graduate student in the Department of Imaging Arts and Sciences at Musashino Art University. I've worked across a variety of creative fields, but I have a particularly strong interest in CG.",
    "zh-CN": "大家好，我是林梓朗。目前是武藏野美术大学映像・摄影学科研究生一年级学生。至今活跃于多个创意领域，其中对 CG 有着特别浓厚的兴趣。",
    "zh-TW": "大家好，我是林梓朗。目前是武藏野美術大學映像・攝影學科研究所一年級學生。至今活躍於多個創意領域，其中對 CG 有著特別濃厚的興趣。",
    ko: "안녕하세요, 저는 린 시로우입니다. 현재 무사시노미술대학 영상・사진학과 대학원 1학년에 재학 중입니다. 지금까지 다양한 창작 분야에서 활동해 왔으며, 특히 CG에 큰 관심을 가지고 있습니다.",
  },
  "about.bio2": {
    ja: "私の趣味は絵を描くこととスキーです。絵を描くことは、私の創造力を育み、技術を磨くための重要な手段です。スキーは、自然の中でリフレッシュするだけでなく、バランス感覚や集中力を養う助けとなっています。",
    en: "My hobbies are drawing and skiing. Drawing is an important way for me to nurture my creativity and sharpen my technique. Skiing not only refreshes me in nature but also helps build my sense of balance and concentration.",
    "zh-CN": "我的爱好是绘画和滑雪。绘画是培养创造力、磨练技术的重要方式；滑雪除了能在大自然中放松身心，也有助于培养平衡感与专注力。",
    "zh-TW": "我的愛好是繪畫和滑雪。繪畫是培養創造力、磨練技術的重要方式；滑雪除了能在大自然中放鬆身心，也有助於培養平衡感與專注力。",
    ko: "제 취미는 그림 그리기와 스키입니다. 그림은 창의력을 키우고 기술을 갈고닦는 중요한 수단이며, 스키는 자연 속에서 재충전할 수 있을 뿐 아니라 균형감각과 집중력을 기르는 데도 도움이 됩니다.",
  },
  "about.fieldHeading": { ja: "現在の研究分野", en: "Current Field of Study", "zh-CN": "目前的研究领域", "zh-TW": "目前的研究領域", ko: "현재 연구 분야" },
  "about.fieldBody": {
    ja: "現在の研究分野はCGです。CGの魅力は、その無限の可能性にあります。現実には存在しない世界やキャラクターを創り出すことができるだけでなく、現実を超えた美しさや驚きを表現することができます。私にとってCGは、アイデアを具現化するための最適なツールであり、視覚的な物語を語る手段です。",
    en: "My current field of study is CG. The appeal of CG lies in its limitless possibilities — it lets me create worlds and characters that don't exist in reality, and express beauty and wonder beyond it. For me, CG is the ideal tool for bringing ideas to life and a means of telling visual stories.",
    "zh-CN": "我目前的研究领域是 CG。CG 的魅力在于其无限的可能性——不仅能够创造出现实中不存在的世界与角色，还能表现超越现实的美感与惊奇。对我而言，CG 是将想法具象化的最佳工具，也是讲述视觉故事的方式。",
    "zh-TW": "我目前的研究領域是 CG。CG 的魅力在於其無限的可能性——不僅能夠創造出現實中不存在的世界與角色，還能表現超越現實的美感與驚奇。對我而言，CG 是將想法具象化的最佳工具，也是講述視覺故事的方式。",
    ko: "현재 연구 분야는 CG입니다. CG의 매력은 무한한 가능성에 있습니다. 현실에는 존재하지 않는 세계와 캐릭터를 만들어낼 수 있을 뿐 아니라, 현실을 넘어서는 아름다움과 놀라움을 표현할 수 있습니다. 제게 CG는 아이디어를 구체화하는 최적의 도구이자 시각적인 이야기를 전하는 수단입니다.",
  },
  "about.goalHeading": { ja: "目標", en: "Goal", "zh-CN": "目标", "zh-TW": "目標", ko: "목표" },
  "about.goalBody1": {
    ja: "私の目標は、手描きアニメーションを通じて観る人に感動や喜びを届けることです。アニメーションを通じて物語を語り、キャラクターの感情を伝えることで、人々の心に残る作品を作りたいと考えています。",
    en: "My goal is to deliver emotion and joy to viewers through hand-drawn animation. By telling stories and conveying characters' emotions through animation, I want to create works that stay with people.",
    "zh-CN": "我的目标是通过手绘动画为观众带来感动与喜悦。希望借由动画讲述故事、传达角色的情感，创作出能留存在人们心中的作品。",
    "zh-TW": "我的目標是透過手繪動畫為觀眾帶來感動與喜悅。希望藉由動畫講述故事、傳達角色的情感，創作出能留存在人們心中的作品。",
    ko: "제 목표는 손그림 애니메이션을 통해 보는 사람에게 감동과 기쁨을 전하는 것입니다. 애니메이션으로 이야기를 전하고 캐릭터의 감정을 표현해, 사람들의 마음에 오래 남는 작품을 만들고 싶습니다.",
  },
  "about.goalBody2": {
    ja: "これからも新しい技術やスタイルを取り入れながら、手描きアニメーションとCGの魅力を追求していきます。私の作品をご覧いただき、ご意見やご感想をお寄せいただけると幸いです。ありがとうございました。",
    en: "Going forward, I'll keep incorporating new techniques and styles while pursuing the charm of both hand-drawn animation and CG. I'd be grateful if you could take a look at my work and share your thoughts. Thank you.",
    "zh-CN": "今后我也将不断吸收新技术与风格，继续探索手绘动画与 CG 的魅力。欢迎浏览我的作品，也期待您的意见与感想。谢谢。",
    "zh-TW": "今後我也將不斷吸收新技術與風格，繼續探索手繪動畫與 CG 的魅力。歡迎瀏覽我的作品，也期待您的意見與感想。謝謝。",
    ko: "앞으로도 새로운 기술과 스타일을 받아들이며 손그림 애니메이션과 CG의 매력을 계속 탐구해 나가겠습니다. 제 작품을 봐 주시고 의견이나 감상을 전해 주신다면 감사하겠습니다.",
  },

  "skills.heading": { ja: "Skills", en: "Skills", "zh-CN": "Skills", "zh-TW": "Skills", ko: "Skills" },

  "contact.eyebrow": { ja: "コンタクト", en: "Contact", "zh-CN": "Contact", "zh-TW": "Contact", ko: "Contact" },
  "contact.heading": { ja: "一緒に何か作りませんか", en: "Let's Create Something Together", "zh-CN": "一起创作些什么吧", "zh-TW": "一起創作些什麼吧", ko: "함께 무언가를 만들어 보지 않으시겠어요" },
  "contact.body": {
    ja: "お仕事のご依頼、コラボレーションのご相談、作品へのご感想など、お気軽にご連絡ください。",
    en: "Feel free to reach out for work inquiries, collaboration requests, or feedback on my work.",
    "zh-CN": "如有工作委托、合作洽谈或作品感想，欢迎随时与我联系。",
    "zh-TW": "如有工作委託、合作洽談或作品感想，歡迎隨時與我聯繫。",
    ko: "작업 의뢰, 협업 상담, 작품에 대한 감상 등 편하게 연락해 주세요.",
  },

  // ---- works.html ----
  "works.pageDesc": {
    ja: "イラスト・CG作品と、2D／3Dアニメーション作品をまとめています。画像はクリックで拡大、動画カードはクリックで再生します。",
    en: "A collection of illustration/CG work and 2D/3D animation pieces. Click an image to enlarge it, or click a video card to play it.",
    "zh-CN": "汇集了插画、CG 作品以及 2D/3D 动画作品。点击图片可放大查看，点击视频卡片即可播放。",
    "zh-TW": "彙集了插畫、CG 作品以及 2D/3D 動畫作品。點擊圖片可放大檢視，點擊影片卡片即可播放。",
    ko: "일러스트와 CG 작품, 2D/3D 애니메이션 작품을 모았습니다. 이미지는 클릭하면 확대되고, 영상 카드는 클릭하면 재생됩니다.",
  },
  "works.videoHeading": { ja: "映像作品", en: "Video Works", "zh-CN": "影像作品", "zh-TW": "影像作品", ko: "영상 작품" },
  "works.videoDesc": {
    ja: "カードをクリックすると YouTube 動画を再生します。",
    en: "Click a card to play the YouTube video.",
    "zh-CN": "点击卡片即可播放 YouTube 视频。",
    "zh-TW": "點擊卡片即可播放 YouTube 影片。",
    ko: "카드를 클릭하면 YouTube 영상이 재생됩니다.",
  },
  "video.sword.sub": { ja: "3D / 2D アニメーション作品", en: "3D / 2D Animation", "zh-CN": "3D / 2D 动画作品", "zh-TW": "3D / 2D 動畫作品", ko: "3D / 2D 애니메이션 작품" },
  "video.sunflower.sub": { ja: "手描き 2D アニメーション", en: "Hand-drawn 2D Animation", "zh-CN": "手绘 2D 动画", "zh-TW": "手繪 2D 動畫", ko: "손그림 2D 애니메이션" },
  "video.soul.sub": { ja: "CG アニメーション", en: "CG Animation", "zh-CN": "CG 动画", "zh-TW": "CG 動畫", ko: "CG 애니메이션" },
  "video.abyss.sub": { ja: "CG ショートフィルム", en: "CG Short Film", "zh-CN": "CG 短片", "zh-TW": "CG 短片", ko: "CG 단편 영화" },
  "video.honda.sub": { ja: "CG映像制作", en: "CG Production", "zh-CN": "CG 影像制作", "zh-TW": "CG 影像製作", ko: "CG 영상 제작" },
  "video.cyber.sub": { ja: "3D CG アニメーション", en: "3D CG Animation", "zh-CN": "3D CG 动画", "zh-TW": "3D CG 動畫", ko: "3D CG 애니메이션" },

  "works.processHeading": { ja: "制作プロセス", en: "Process", "zh-CN": "制作流程", "zh-TW": "製作流程", ko: "제작 과정" },
  "works.processDesc": {
    ja: "3DCG 作品について、完成カットとそこに至るまでの工程をまとめました。画像はクリックで拡大できます。",
    en: "For the 3D CG pieces, here's the finished shot alongside the process that led to it. Click an image to enlarge it.",
    "zh-CN": "针对 3DCG 作品，整理了最终成品画面与制作过程。点击图片可放大查看。",
    "zh-TW": "針對 3DCG 作品，整理了最終成品畫面與製作過程。點擊圖片可放大檢視。",
    ko: "3DCG 작품의 완성 컷과 그곳에 이르기까지의 과정을 정리했습니다. 이미지는 클릭하면 확대할 수 있습니다.",
  },

  // shared step titles (identical Japanese text reused across projects)
  "step.ideaSketch": { ja: "アイデアスケッチ", en: "Idea Sketch", "zh-CN": "构思草图", "zh-TW": "構思草圖", ko: "아이디어 스케치" },
  "step.modeling": { ja: "モデリング", en: "Modeling", "zh-CN": "建模", "zh-TW": "建模", ko: "모델링" },
  "step.uvUnwrap": { ja: "UV 展開", en: "UV Unwrapping", "zh-CN": "UV 展开", "zh-TW": "UV 展開", ko: "UV 전개" },
  "step.texturing": { ja: "テクスチャ制作", en: "Texturing", "zh-CN": "贴图制作", "zh-TW": "貼圖製作", ko: "텍스처 제작" },
  "step.artConcept": { ja: "アートコンセプト", en: "Art Concept", "zh-CN": "美术概念稿", "zh-TW": "美術概念稿", ko: "아트 콘셉트" },
  "step.zbrushSculpt": { ja: "ZBrush 彫刻", en: "ZBrush Sculpting", "zh-CN": "ZBrush 雕刻", "zh-TW": "ZBrush 雕刻", ko: "ZBrush 조각" },

  // 望遠鏡 (Telescope)
  "proj.telescope.eyebrow": { ja: "プロップデザイン", en: "Prop Design", "zh-CN": "道具设计", "zh-TW": "道具設計", ko: "소품 디자인" },
  "proj.telescope.lede": {
    ja: "夜間観測用の双眼鏡。アイデアスケッチから起こし、PBR ワークフローでモデリングとテクスチャリングを行いました。ここに至るまでの工程を順に紹介します。",
    en: "Night-vision binoculars. Starting from an idea sketch, I modeled and textured it through a PBR workflow. Here's the process, step by step.",
    "zh-CN": "夜间观测用双筒望远镜。从构思草图开始，通过 PBR 工作流程完成建模与贴图制作。以下按步骤介绍具体流程。",
    "zh-TW": "夜間觀測用雙筒望遠鏡。從構思草圖開始，透過 PBR 工作流程完成建模與貼圖製作。以下按步驟介紹具體流程。",
    ko: "야간 관측용 쌍안경입니다. 아이디어 스케치에서 시작해 PBR 워크플로로 모델링과 텍스처링을 진행했습니다. 완성까지의 과정을 순서대로 소개합니다.",
  },
  "proj.telescope.s1.desc": {
    ja: "形のバランスと各パーツの位置をスケッチで固めます。持ったときの手の収まりを考えながら、正面と背面の二面を描きました。",
    en: "I locked in the shape balance and part placement through sketches, drawing front and back views while considering how it would sit in the hand.",
    "zh-CN": "通过草图确定整体形态平衡与各部件位置，同时考虑握持手感，绘制了正面与背面两个视角。",
    "zh-TW": "透過草圖確定整體形態平衡與各部件位置，同時考量握持手感，繪製了正面與背面兩個視角。",
    ko: "스케치로 형태의 균형과 각 부품의 위치를 잡았습니다. 손에 쥐었을 때의 느낌을 고려하며 정면과 뒷면 두 가지 시점을 그렸습니다.",
  },
  "proj.telescope.s2.desc": {
    ja: "スケッチをもとに Maya で造形し、面の流れを整えます。硬質な機械物なので、エッジの立ち方でシルエットが決まるよう気を配りました。",
    en: "Modeled in Maya based on the sketch, refining the surface flow. Since it's a hard mechanical object, I paid close attention to how the edges define the silhouette.",
    "zh-CN": "根据草图在 Maya 中建模并调整面的走向。作为硬质机械物件，特别注意棱边的处理如何决定整体轮廓。",
    "zh-TW": "根據草圖在 Maya 中建模並調整面的走向。作為硬質機械物件，特別注意稜邊的處理如何決定整體輪廓。",
    ko: "스케치를 바탕으로 Maya에서 형태를 만들고 면의 흐름을 정리했습니다. 단단한 기계 물체이기 때문에 에지가 실루엣을 어떻게 결정하는지에 특히 신경 썼습니다.",
  },
  "proj.telescope.s3.desc": {
    ja: "UVLayout と ZBrush を併用し、歪みが出ないよう展開します。パーツごとに島を分け、後から塗り分けやすい配置にしました。",
    en: "Unwrapped using both UVLayout and ZBrush to avoid distortion, splitting islands by part for easier painting later.",
    "zh-CN": "结合 UVLayout 与 ZBrush 进行展开，避免变形，并按部件划分岛屿，方便后续上色分区。",
    "zh-TW": "結合 UVLayout 與 ZBrush 進行展開，避免變形，並按部件劃分島嶼，方便後續上色分區。",
    ko: "UVLayout과 ZBrush를 함께 사용해 왜곡이 생기지 않도록 전개했습니다. 부품별로 섬을 나누어 이후 칠을 나누기 쉽도록 배치했습니다.",
  },
  "proj.telescope.s4.desc": {
    ja: "Substance 3D Painter で彩色。塗装の下地、金属の擦れ、レンズのコーティングを層に分け、使い込まれた道具の質感を出しています。",
    en: "Painted in Substance 3D Painter, layering the base coat, metal scuffs, and lens coating separately to give it the look of a well-used tool.",
    "zh-CN": "在 Substance 3D Painter 中上色，将底漆、金属磨损与镜头镀膜分层处理，呈现出久经使用的工具质感。",
    "zh-TW": "在 Substance 3D Painter 中上色，將底漆、金屬磨損與鏡頭鍍膜分層處理，呈現出久經使用的工具質感。",
    ko: "Substance 3D Painter에서 채색했습니다. 도장의 밑층, 금속의 마모, 렌즈 코팅을 레이어별로 나누어 오래 사용한 도구 같은 질감을 표현했습니다.",
  },

  // ABYSS II
  "proj.abyss.eyebrow": { ja: "CG ショートフィルム", en: "CG Short Film", "zh-CN": "CG 短片", "zh-TW": "CG 短片", ko: "CG 단편 영화" },
  "proj.abyss.lede": {
    ja: "洞窟に鎮座する巨像。参考資料とイメージボードから始め、人物・主体物・岩石を個別にモデリングしたうえで Unreal Engine 5 に配置し、ライティングで仕上げました。",
    en: "A colossal statue enshrined in a cave. Starting from reference materials and an image board, I modeled the figure, the stone body, and the rocks separately, placed them in Unreal Engine 5, and finished with lighting.",
    "zh-CN": "端坐于洞穴中的巨像。从参考资料和意向图开始，分别对人物、主体石像与岩石进行建模，再放入 Unreal Engine 5 中完成布光与最终呈现。",
    "zh-TW": "端坐於洞穴中的巨像。從參考資料和意象圖開始，分別對人物、主體石像與岩石進行建模，再放入 Unreal Engine 5 中完成打光與最終呈現。",
    ko: "동굴 안에 자리한 거대한 석상입니다. 참고 자료와 이미지 보드에서 시작해 인물, 주 오브젝트, 암석을 각각 모델링한 뒤 Unreal Engine 5에 배치하고 라이팅으로 마무리했습니다.",
  },
  "proj.abyss.s1.title": { ja: "参考資料とイメージボード", en: "Reference & Image Board", "zh-CN": "参考资料与意向图", "zh-TW": "參考資料與意象圖", ko: "참고 자료와 이미지 보드" },
  "proj.abyss.s1.desc": {
    ja: "まず大量のリファレンスを集め、頭の中のイメージをイメージボードとして描き起こします。巨像と人物の体格差が画面で伝わる画角を探りました。",
    en: "First I gathered a large amount of reference material, then sketched the image in my head as an image board — exploring an angle that conveys the scale difference between the colossus and the human figure.",
    "zh-CN": "首先收集大量参考资料，再将脑海中的画面绘制成意向图，探索能够传达巨像与人物体格差异的取景角度。",
    "zh-TW": "首先收集大量參考資料，再將腦海中的畫面繪製成意象圖，探索能夠傳達巨像與人物體格差異的取景角度。",
    ko: "먼저 많은 레퍼런스를 모으고 머릿속 이미지를 이미지 보드로 그려냈습니다. 거상과 인물의 체격 차이가 화면에서 잘 전달되는 구도를 탐색했습니다.",
  },
  "proj.abyss.s2.title": { ja: "人物モデリング", en: "Character Modeling", "zh-CN": "人物建模", "zh-TW": "人物建模", ko: "인물 모델링" },
  "proj.abyss.s2.desc": {
    ja: "メインアセット上半身の人体を ZBrush でハイポリスカルプトし、ZRemesher でリダクション。その後 Maya でリトポロジーと UV 展開を行い、肌の質感を作り込みます。",
    en: "Sculpted the main asset's upper body in ZBrush at high poly, reduced it with ZRemesher, then retopologized and UV-unwrapped in Maya while building up the skin texture.",
    "zh-CN": "在 ZBrush 中对主体上半身进行高模雕刻，用 ZRemesher 精简面数，再于 Maya 中重新拓扑并展开 UV，细化皮肤质感。",
    "zh-TW": "在 ZBrush 中對主體上半身進行高模雕刻，用 ZRemesher 精簡面數，再於 Maya 中重新拓撲並展開 UV，細化皮膚質感。",
    ko: "메인 에셋 상반신을 ZBrush에서 하이폴리로 스컬프팅하고 ZRemesher로 리덕션했습니다. 이후 Maya에서 리토폴로지와 UV 전개를 진행하며 피부 질감을 다듬었습니다.",
  },
  "proj.abyss.s3.title": { ja: "主体物モデリング", en: "Statue Modeling", "zh-CN": "主体石像建模", "zh-TW": "主體石像建模", ko: "주 오브젝트 모델링" },
  "proj.abyss.s3.desc": {
    ja: "人物の下半身にあたる石の台座を造形。石と苔を重ね、長い年月そこにあったように仕上げます。台座の紋様は青銅器の資料をもとに彫りました。",
    en: "Sculpted the stone pedestal forming the figure's lower body. Layered stone and moss to make it look like it had stood there for centuries; the pedestal's patterns were carved based on bronzeware references.",
    "zh-CN": "雕刻构成人物下半身的石制底座。叠加岩石与苔藓质感，使其呈现历经岁月的样貌；底座纹样参考青铜器资料雕刻而成。",
    "zh-TW": "雕刻構成人物下半身的石製底座。疊加岩石與苔蘚質感，使其呈現歷經歲月的樣貌；底座紋樣參考青銅器資料雕刻而成。",
    ko: "인물의 하반신에 해당하는 석조 받침대를 조형했습니다. 돌과 이끼를 겹쳐 오랜 세월 그 자리에 있었던 듯한 느낌을 만들고, 받침대 문양은 청동기 자료를 참고해 조각했습니다.",
  },
  "proj.abyss.s4.title": { ja: "岩石モデリング・彫刻", en: "Rock Modeling & Sculpting", "zh-CN": "岩石建模与雕刻", "zh-TW": "岩石建模與雕刻", ko: "암석 모델링과 조각" },
  "proj.abyss.s4.desc": {
    ja: "周囲を囲む岩石群も同じ PBR フローで制作。ZBrush でハイポリをスカルプトし、Maya でローポリにリトポロジー、RizomUV で UV 展開を行いました。",
    en: "The surrounding rock formations were made with the same PBR flow — high-poly sculpted in ZBrush, retopologized to low poly in Maya, and UV-unwrapped in RizomUV.",
    "zh-CN": "周围的岩石群同样采用相同的 PBR 流程制作：在 ZBrush 中雕刻高模，于 Maya 中转为低模拓扑，并使用 RizomUV 展开贴图坐标。",
    "zh-TW": "周圍的岩石群同樣採用相同的 PBR 流程製作：在 ZBrush 中雕刻高模，於 Maya 中轉為低模拓撲，並使用 RizomUV 展開貼圖座標。",
    ko: "주변을 둘러싼 암석들도 같은 PBR 흐름으로 제작했습니다. ZBrush에서 하이폴리를 스컬프팅하고 Maya에서 로우폴리로 리토폴로지한 뒤 RizomUV로 UV를 전개했습니다.",
  },
  "proj.abyss.s5.title": { ja: "UE5 シーン配置", en: "UE5 Scene Layout", "zh-CN": "UE5 场景布置", "zh-TW": "UE5 場景佈置", ko: "UE5 장면 배치" },
  "proj.abyss.s5.desc": {
    ja: "Unreal Engine 5 に人物・主体物・岩石アセットを配置。Bridge の 3D アセットパックで植生を構築し、シーン全体の構図を組み立てます。",
    en: "Placed the character, statue, and rock assets into Unreal Engine 5. Built the vegetation using Bridge's 3D asset packs and composed the overall scene layout.",
    "zh-CN": "将人物、主体石像与岩石资产放入 Unreal Engine 5 中。使用 Bridge 的 3D 资产包构建植被，并搭建整体场景构图。",
    "zh-TW": "將人物、主體石像與岩石資產放入 Unreal Engine 5 中。使用 Bridge 的 3D 資產包構建植被，並搭建整體場景構圖。",
    ko: "인물, 주 오브젝트, 암석 에셋을 Unreal Engine 5에 배치했습니다. Bridge의 3D 에셋 팩으로 식생을 구성하고 장면 전체의 구도를 잡았습니다.",
  },
  "proj.abyss.s6.title": { ja: "ライティングと仕上げ", en: "Lighting & Finishing", "zh-CN": "灯光与最终润色", "zh-TW": "燈光與最終潤飾", ko: "라이팅과 마무리" },
  "proj.abyss.s6.desc": {
    ja: "植生とライティングを、シーン全体の雰囲気を見ながら同時に調整。霧と光の差し込みで洞窟の湿った空気感を作り込み、完成カットに仕上げました。",
    en: "Adjusted vegetation and lighting together while watching the overall mood of the scene. Built up the cave's damp atmosphere with fog and shafts of light to finish the final shot.",
    "zh-CN": "一边观察整体氛围，一边同步调整植被与灯光。通过雾气与光线的穿透营造洞穴潮湿的空气感，完成最终画面。",
    "zh-TW": "一邊觀察整體氛圍，一邊同步調整植被與燈光。透過霧氣與光線的穿透營造洞穴潮濕的空氣感，完成最終畫面。",
    ko: "장면 전체의 분위기를 보며 식생과 라이팅을 함께 조정했습니다. 안개와 빛줄기로 동굴의 축축한 공기감을 만들고 완성 컷으로 마무리했습니다.",
  },

  // Honda CIVIC
  "proj.honda.eyebrow": { ja: "CG映像制作", en: "CG Production", "zh-CN": "CG 影像制作", "zh-TW": "CG 影像製作", ko: "CG 영상 제작" },
  "proj.honda.lede": {
    ja: "車両CGの映像制作。モデリングからテクスチャ、夜の峠道のライティング、編集までを一人で担当しました。",
    en: "CG video production for a vehicle. I handled everything solo, from modeling and texturing to lighting the night mountain road and final editing.",
    "zh-CN": "车辆 CG 影像制作。从建模、贴图到夜间山路的灯光和后期剪辑，全部由我一人完成。",
    "zh-TW": "車輛 CG 影像製作。從建模、貼圖到夜間山路的燈光和後期剪輯，全部由我一人完成。",
    ko: "차량 CG 영상 제작입니다. 모델링과 텍스처부터 밤의 산길 라이팅, 편집까지 혼자 담당했습니다.",
  },
  "proj.honda.s1.title": { ja: "モデリングと UV 展開", en: "Modeling & UV Unwrapping", "zh-CN": "建模与 UV 展开", "zh-TW": "建模與 UV 展開", ko: "모델링과 UV 전개" },
  "proj.honda.s1.desc": {
    ja: "実車資料をもとに面を追い、ハイライトが素直に流れるようボディの曲面を整えます。塗り分けを見据えて UV を展開しました。",
    en: "Traced the surfaces based on real vehicle reference, refining the body's curvature so highlights flow naturally. Unwrapped the UVs with the paint separation in mind.",
    "zh-CN": "根据实车资料追踪面的走向，调整车身曲面使高光过渡自然。同时考虑到后续分色需求展开了 UV。",
    "zh-TW": "根據實車資料追蹤面的走向，調整車身曲面使高光過渡自然。同時考量到後續分色需求展開了 UV。",
    ko: "실차 자료를 바탕으로 면을 따라가며 하이라이트가 자연스럽게 흐르도록 차체 곡면을 다듬었습니다. 도색 분리를 고려해 UV를 전개했습니다.",
  },
  "proj.honda.s2.desc": {
    ja: "塗装の層と汚れを分けて作成。標準仕様とレーシング仕様の二種類をつくり、走行後の車体らしい表面にしています。",
    en: "Created the paint layers and grime separately, making two variants — a standard and a racing spec — for a surface that looks like it's actually been driven.",
    "zh-CN": "分层制作漆面与污渍，做出标准版与赛道版两种规格，呈现出行驶后应有的车身表面质感。",
    "zh-TW": "分層製作漆面與污漬，做出標準版與賽道版兩種規格，呈現出行駛後應有的車身表面質感。",
    ko: "도장 레이어와 오염을 분리해 제작했습니다. 일반 사양과 레이싱 사양 두 가지를 만들어 실제로 주행한 차량 같은 표면을 표현했습니다.",
  },
  "proj.honda.s3.title": { ja: "背景とライティング", en: "Environment & Lighting", "zh-CN": "场景与灯光", "zh-TW": "場景與燈光", ko: "배경과 라이팅" },
  "proj.honda.s3.desc": {
    ja: "サーキットの峠道を Blender で構築し、走行アニメーションにはパスを使用。フォグとライティングで夜の空気をつくりました。",
    en: "Built the circuit mountain road in Blender and used a path for the driving animation. Created the night atmosphere with fog and lighting.",
    "zh-CN": "在 Blender 中搭建赛道山路场景，行驶动画使用路径动画实现。通过雾效与灯光营造夜晚的氛围。",
    "zh-TW": "在 Blender 中搭建賽道山路場景，行駛動畫使用路徑動畫實現。透過霧效與燈光營造夜晚的氛圍。",
    ko: "Blender에서 서킷 산길을 만들고 주행 애니메이션에는 패스를 사용했습니다. 안개와 라이팅으로 밤의 공기를 표현했습니다.",
  },
  "proj.honda.s4.title": { ja: "レンダリングと編集", en: "Rendering & Editing", "zh-CN": "渲染与剪辑", "zh-TW": "渲染與剪輯", ko: "렌더링과 편집" },
  "proj.honda.s4.desc": {
    ja: "EEVEE で連番静止画として書き出し、After Effects と Premiere Pro でカラーグレーディングとカット編集を行いました。",
    en: "Rendered out as an image sequence in EEVEE, then color-graded and cut together in After Effects and Premiere Pro.",
    "zh-CN": "使用 EEVEE 渲染输出连续序列帧，再通过 After Effects 与 Premiere Pro 完成调色与剪辑。",
    "zh-TW": "使用 EEVEE 渲染輸出連續序列幀，再透過 After Effects 與 Premiere Pro 完成調色與剪輯。",
    ko: "EEVEE에서 이미지 시퀀스로 렌더링한 뒤 After Effects와 Premiere Pro에서 색보정과 컷 편집을 진행했습니다.",
  },

  // 火の神仮面
  "proj.mask.lede": {
    ja: "物語の鍵となる仮面。日本の能面と中国の儺戯（ぬおぎ）面を調べたうえで、アニメの画面に馴染む造形へ落とし込みました。",
    en: "A mask central to the story. After researching Japanese Noh masks and Chinese Nuo opera masks, I shaped it into a form that fits naturally into the anime's visuals.",
    "zh-CN": "故事关键的一件面具。在研究了日本能面与中国傩戏面具之后，将其塑造成能自然融入动画画面的造型。",
    "zh-TW": "故事關鍵的一件面具。在研究了日本能面與中國儺戲面具之後，將其塑造成能自然融入動畫畫面的造型。",
    ko: "이야기의 핵심이 되는 가면입니다. 일본 노멘과 중국 나희 가면을 조사한 뒤, 애니메이션 화면에 자연스럽게 어울리는 조형으로 정리했습니다.",
  },
  "proj.mask.s1.desc": {
    ja: "仮面のシルエットと角の巻き方、隈取りの入り方を平面で決めます。正面と側面の二面を描き、立体に起こしたときの見え方を先に固めました。",
    en: "Decided the mask's silhouette, the curl of the horns, and the placement of the face paint in 2D. Drew front and side views to lock in how it would read once built in 3D.",
    "zh-CN": "在平面上确定面具的轮廓、犄角卷曲方式与脸谱纹样的位置，绘制正面与侧面两个视角，预先确定立体化后的效果。",
    "zh-TW": "在平面上確定面具的輪廓、犄角捲曲方式與臉譜紋樣的位置，繪製正面與側面兩個視角，預先確定立體化後的效果。",
    ko: "가면의 실루엣, 뿔의 말림, 얼굴 문양의 배치를 평면에서 정했습니다. 정면과 측면 두 가지 시점을 그려 입체화했을 때의 인상을 먼저 잡았습니다.",
  },
  "proj.mask.s2.desc": {
    ja: "アートコンセプトをもとに ZBrush で造形。角の渦や眉のうねりなど、面の流れが光を受けたときに影として読めるよう、彫りの深さを調整しています。",
    en: "Sculpted in ZBrush based on the art concept, adjusting the depth of the carving — the spiraling horns, the wrinkled brow — so the surface reads clearly as shadow under light.",
    "zh-CN": "根据概念稿在 ZBrush 中进行雕刻，调整犄角螺旋与眉部起伏等雕刻深度，使受光后的明暗关系清晰可辨。",
    "zh-TW": "根據概念稿在 ZBrush 中進行雕刻，調整犄角螺旋與眉部起伏等雕刻深度，使受光後的明暗關係清晰可辨。",
    ko: "아트 콘셉트를 바탕으로 ZBrush에서 조형했습니다. 뿔의 소용돌이와 눈썹의 굴곡처럼 면의 흐름이 빛을 받았을 때 그림자로 읽히도록 조각 깊이를 조정했습니다.",
  },
  "proj.mask.s3.desc": {
    ja: "Substance 3D Painter で彩色。京劇の隈取りを参照しつつ、漆の艶と金彩の擦れを重ね、古びた祭具としての質感を出しました。",
    en: "Painted in Substance 3D Painter, referencing Peking opera face paint while layering lacquer sheen and worn gold leaf to give it the texture of an aged ritual object.",
    "zh-CN": "在 Substance 3D Painter 中上色，参考京剧脸谱的同时叠加漆面光泽与金彩磨损效果，呈现出古老祭祀道具的质感。",
    "zh-TW": "在 Substance 3D Painter 中上色，參考京劇臉譜的同時疊加漆面光澤與金彩磨損效果，呈現出古老祭祀道具的質感。",
    ko: "Substance 3D Painter에서 채색했습니다. 경극의 얼굴 문양을 참고하면서 옻칠의 광택과 금박의 마모를 겹쳐 오래된 제구 같은 질감을 만들었습니다.",
  },

  // キャラクターデザイン
  "proj.char.lede": {
    ja: "主人公・祝剣（しゅくけん）のキャラクターデザイン。設定画から最終モデルまで一貫して手がけ、アニメーションのカットに馴染みながらも写実に寄りすぎない、中間的な質感を目指しました。",
    en: "Character design for the protagonist, Shukken. I handled everything from the design sheet to the final model, aiming for a texture that blends naturally into animation cuts without leaning too far toward photorealism.",
    "zh-CN": "主角「祝剑」的角色设计。从设定图到最终模型全程独立完成，力求在贴合动画镜头的同时，呈现出不过度写实的中间质感。",
    "zh-TW": "主角「祝劍」的角色設計。從設定圖到最終模型全程獨立完成，力求在貼合動畫鏡頭的同時，呈現出不過度寫實的中間質感。",
    ko: "주인공 축검의 캐릭터 디자인입니다. 설정화부터 최종 모델까지 일관되게 작업했으며, 애니메이션 컷에 자연스럽게 어울리면서도 지나치게 사실적이지 않은 중간적인 질감을 목표로 했습니다.",
  },
  "proj.char.s1.title": { ja: "三面図と設定", en: "Turnaround & Design Sheet", "zh-CN": "三视图与设定", "zh-TW": "三視圖與設定", ko: "삼면도와 설정" },
  "proj.char.s1.desc": {
    ja: "正面・背面・側面と髪の流れ、配色、衣装と小物の素材を一枚にまとめます。ここで決めた色数と素材が、後のテクスチャの指針になります。",
    en: "Combined the front, back, and side views along with hair flow, color palette, and costume/prop materials into a single sheet. The color count and materials decided here guided the later texturing.",
    "zh-CN": "将正面、背面、侧面视图连同发型走向、配色与服装小物材质整合在一张设定图中。这里确定的色彩数量与材质，成为后续贴图制作的依据。",
    "zh-TW": "將正面、背面、側面視圖連同髮型走向、配色與服裝小物材質整合在一張設定圖中。這裡確定的色彩數量與材質，成為後續貼圖製作的依據。",
    ko: "정면, 후면, 측면과 머리카락의 흐름, 배색, 의상과 소품의 소재를 한 장에 정리했습니다. 여기서 정한 색 수와 소재가 이후 텍스처 제작의 기준이 됩니다.",
  },
  "proj.char.s2.desc": {
    ja: "三面図をもとに造形し、リギングとアニメーションに耐えるトポロジーへ整えます。衣の重なりは布のシミュレーションを前提に分けて作りました。",
    en: "Modeled based on the turnaround sheet, refining the topology to hold up under rigging and animation. The layered clothing was built separately, designed with cloth simulation in mind.",
    "zh-CN": "根据三视图进行建模，并将拓扑结构调整为能够承受绑定与动画的形态。衣物的层叠部分则预先考虑布料模拟，分开制作。",
    "zh-TW": "根據三視圖進行建模，並將拓撲結構調整為能夠承受綁定與動畫的形態。衣物的層疊部分則預先考量布料模擬，分開製作。",
    ko: "삼면도를 바탕으로 조형하고, 리깅과 애니메이션을 견딜 수 있는 토폴로지로 정리했습니다. 옷이 겹치는 부분은 천 시뮬레이션을 염두에 두고 분리해 만들었습니다.",
  },
  "proj.char.s3.desc": {
    ja: "顔は UV の歪みが出やすいため、モデル修正とテクスチャを往復しながら調整。写実に寄りすぎないよう、肌の陰影は手で描き足しています。",
    en: "Since the face is prone to UV distortion, I went back and forth between model adjustments and texturing. To avoid leaning too photorealistic, the skin shading was hand-painted in.",
    "zh-CN": "由于面部容易出现 UV 变形，需要在模型修正与贴图制作之间反复调整。为避免过度写实，肌肤的明暗是手绘补充上去的。",
    "zh-TW": "由於面部容易出現 UV 變形，需要在模型修正與貼圖製作之間反覆調整。為避免過度寫實，肌膚的明暗是手繪補充上去的。",
    ko: "얼굴은 UV 왜곡이 생기기 쉬워 모델 수정과 텍스처 작업을 오가며 조정했습니다. 지나치게 사실적으로 보이지 않도록 피부의 명암은 손으로 그려 넣었습니다.",
  },

  // gallery
  "works.galleryHeading": { ja: "作品一覧", en: "Works", "zh-CN": "作品一览", "zh-TW": "作品一覽", ko: "작품 목록" },
  "works.galleryDesc": {
    ja: "技法別にまとめています。画像はクリックで拡大できます。",
    en: "Organized by medium. Click an image to enlarge it.",
    "zh-CN": "按技法分类整理。点击图片可放大查看。",
    "zh-TW": "按技法分類整理。點擊圖片可放大檢視。",
    ko: "기법별로 정리했습니다. 이미지는 클릭하면 확대할 수 있습니다.",
  },
  "gallery.g1.title": { ja: "水彩画", en: "Watercolor", "zh-CN": "水彩画", "zh-TW": "水彩畫", ko: "수채화" },
  "gallery.g1.desc": {
    ja: "紙と水彩絵具による作品。にじみと重なりを活かして、光や空気の質感を描いています。",
    en: "Works in watercolor on paper. I make use of blooms and layered washes to depict the texture of light and air.",
    "zh-CN": "纸本水彩作品。利用颜料的晕染与叠色，描绘光线与空气的质感。",
    "zh-TW": "紙本水彩作品。利用顏料的暈染與疊色，描繪光線與空氣的質感。",
    ko: "종이와 수채 물감으로 만든 작품입니다. 번짐과 겹침을 살려 빛과 공기의 질감을 그립니다.",
  },
  "gallery.g2.title": { ja: "色鉛筆画", en: "Colored Pencil", "zh-CN": "彩色铅笔画", "zh-TW": "彩色鉛筆畫", ko: "색연필화" },
  "gallery.g2.desc": {
    ja: "色鉛筆による作品。線を重ねて色をつくり、やわらかい質感と物語の空気感を表現しています。",
    en: "Works in colored pencil. I build up color by layering lines, expressing a soft texture and narrative atmosphere.",
    "zh-CN": "彩色铅笔作品。通过线条的层层叠加塑造色彩，表现柔和的质感与故事氛围。",
    "zh-TW": "彩色鉛筆作品。透過線條的層層疊加塑造色彩，表現柔和的質感與故事氛圍。",
    ko: "색연필로 그린 작품입니다. 선을 겹쳐 색을 만들고 부드러운 질감과 이야기의 분위기를 표현합니다.",
  },
  "gallery.g3.title": { ja: "デジタルペイント", en: "Digital Painting", "zh-CN": "数字绘画", "zh-TW": "數位繪畫", ko: "디지털 페인팅" },
  "gallery.g3.desc": {
    ja: "液晶タブレットと Photoshop / Clip Studio Paint によるデジタルイラストです。",
    en: "Digital illustrations made with a display tablet and Photoshop / Clip Studio Paint.",
    "zh-CN": "使用数位屏与 Photoshop / Clip Studio Paint 制作的数字插画。",
    "zh-TW": "使用數位屏與 Photoshop / Clip Studio Paint 製作的數位插畫。",
    ko: "액정 태블릿과 Photoshop / Clip Studio Paint로 제작한 디지털 일러스트입니다.",
  },
  "gallery.g4.title": { ja: "鉛筆デッサン", en: "Pencil Dessin", "zh-CN": "铅笔素描", "zh-TW": "鉛筆素描", ko: "연필 데생" },
  "gallery.g4.desc": {
    ja: "鉛筆による静物デッサン。手をモチーフに、構造と陰影の観察を重ねた習作です。",
    en: "Still-life pencil dessins. Studies focused on hands, repeating observation of structure and shading.",
    "zh-CN": "铅笔静物素描。以手部为主题，反复观察结构与明暗关系的习作。",
    "zh-TW": "鉛筆靜物素描。以手部為主題，反覆觀察結構與明暗關係的習作。",
    ko: "연필로 그린 정물 데생입니다. 손을 모티프로 삼아 구조와 명암을 반복해서 관찰한 습작입니다.",
  },
};

// ===== Language switcher engine =====
(function () {
  const STORAGE_KEY = "site-lang";
  const SUPPORTED = ["ja", "ko", "en", "zh-CN", "zh-TW"];
  const NATIVE_NAME = { ja: "日本語", ko: "한국어", en: "English", "zh-CN": "简体中文", "zh-TW": "繁體中文" };

  const getLang = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(saved) ? saved : "ja";
  };

  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const entry = I18N[el.dataset.i18n];
      if (!entry) return;
      const text = entry[lang] ?? entry.ja;
      el.textContent = text;
    });
    document.documentElement.lang = lang === "zh-CN" || lang === "zh-TW" ? "zh" : lang;
    document.querySelectorAll(".lang-menu button").forEach((btn) => {
      btn.setAttribute("aria-current", String(btn.dataset.lang === lang));
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  // Apply saved language as soon as the DOM is ready, before first paint of
  // translated content where possible.
  document.addEventListener("DOMContentLoaded", () => applyLang(getLang()));

  // ---- dropdown UI ----
  document.querySelectorAll(".lang-switcher").forEach((wrap) => {
    const btn = wrap.querySelector(".lang-btn");
    const menu = wrap.querySelector(".lang-menu");
    if (!btn || !menu) return;

    const close = () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    };
    const open = () => {
      menu.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.contains("open") ? close() : open();
    });

    menu.querySelectorAll("button[data-lang]").forEach((item) => {
      item.addEventListener("click", () => {
        setLang(item.dataset.lang);
        close();
      });
    });

    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  });
})();
