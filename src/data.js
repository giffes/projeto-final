 const movies = [
  {
    title: 'As Pequenas Margaridas',
    author: 'Věra Chytilová',
    storyline: "Um marco surrealista checoslovaco de 1966, escrito e dirigido por Věra Chytilová.O filme segue duas meninas, ambas chamadas Marie, que se envolvem em estranhas brincadeiras.",
    imagePath: 'images/daisies.jpg',
    genre: 'action',
    biography: 'Věra Chytilová (1929–2014) foi uma cineasta tcheca de vanguarda. Věra só foi estudar cinema aos 28 anos, depois de passar por outras profissões. Na academia de cinema, sentia-se inadequada e quase foi expulsa. Věra não era inadequada: era única. Um dos expoentes da curtíssima New Wave tcheca, Věra foi convidada pela União Soviética para participar de uma campanha visava recuperar o prestígio do cinema tcheco.'
  },
  {
    title: 'O Caso do Homem Errado',
    author: 'Camila de Moraes',
    storyline: 'Júlio César é um operário negro executado pela PM, nos anos 1980. A história é contada através de depoimentos: do fotógrafo, da viúva e de ativistas do movimento negro no Brasil.',
    imagePath: 'images/casodohomemerrado.jpg',
    genre: 'fantasy',
    biography: 'Primeira mulher negra a lançar um longa metragem comercialmente no Brasil em 30 anos. O Caso do Homem Errado é o título do documentário dirigido por ela, que conta a história de seu tio Júlio César Melo de Pinto, que foi executado por policiais. O documentário participou do XI Encontro de Cinema Negro Zózimo Bulbul, Festival de Gramado e do 9º Festival Internacional de Cine Latino, Uruguayo y Brasileiro.'
  },
  {
    title: 'Rafiki',
    author: 'Wanuri Kahiu',
    storyline: 'A amizade de duas meninas se transforma em um romance. As jovens terão que escolher entre experienciar o amor que partilham, ou se distanciar em função de uma vida segura.',
    imagePath: 'images/rafiki.jpg',
    genre: 'comedy',
    biography: 'Wanuri Kahiu (1980) é uma diretora, produtora e autora de filmes queniana. Ela recebeu vários prêmios e indicações pelos filmes que dirigiu, incluindo os prêmios de Melhor Diretor, Melhor Roteiro e Melhor Filme no Africa Movie Academy Awards em 2009 por seu  longa-metragem de drama From a Whisper. Ela também é cofundadora da AFROBUBBLEGUM, um coletivo de mídia dedicado a apoiar arte africana.'
  },
  {
    title: 'Little Forest',
    author: 'Yim Soon-rye',
    storyline: "Hye-Won se cansa de sua vida difícil na cidade e volta para sua cidade natal no campo. Lá, ela cura suas feridas emocionais com a ajuda de seus amigos de longa data, natureza e comida.",
    imagePath: 'images/littleforest.jpg',
    genre: 'action',
    biography:'Yim Soon-rye (1961) é considerada uma das principais expoentes da New Wave do cinema coreano. Yim é um renomada diretora de cinema, roteirista, produtora e ativista. Seu ativismo é frequentemente refletido em seu trabalho e ela é conhecida por abordar questões sociais da sociedade coreana em seus filmes.'
  },
  {
    title: 'La Teta Assustada',
    author: 'Claudia Llosa',
    storyline: 'Fausta sofre de teta assustada, uma melancolia transmitida pelo leite materno. Sua mãe, como muitas em sua vila, foi violentada durante o conflito civil no Peru, e Fausta ainda vive com as consequências.',
    imagePath: 'images/tetaassustada.jpg',
    genre: 'fantasy',
    biography: 'Claudia Llosa (1976) é uma cineasta e escritora do Peru. Ela é formada em comunicação pela Universidade de Lima. Claudia também estudou em Nova York e em Sundance. No final de seus estudos, e coproduziu Madeinusa. O sucesso veio com o segundo filme, La teta asustada, que foi selecionado para Melhor Filme Estrangeiro no Oscar e ganhou o prêmio Urso de Ouro. '
  },

  {
    title: 'Reassemblage',
    author: 'Trinh T. Minh-ha',
    storyline: 'As mulheres são o foco nesse complexo estudo visual das mulheres da zona rural do Senegal. Reassemblage reflete sobre a produção de documentários e a representação etnográfica das culturas.',
    imagePath: 'images/rease.jpg',
    genre: 'fantasy',
    biography: 'Trinh T. Minh-ha é uma cineasta e intelectual vietnamita. Possui formação acadêmica multidisciplinar, com estudos na área de composição musical, de etnomusicologia e de literatura comparada. Nas últimas décadas tem atuado com destaque em diversos campos da produção artística e também da produção acadêmica. Realizou oito filmes, entre médias e longas-metragens, montou cinco instalações multi- mídia e publicou quatorze livros, entre obras artísticas, coletâneas de roteiros, entrevistas e ensaios teóricos. Seus filmes provocam convenções, transitando  entre  documentário, filme etnográfico, cinema experimental e cinema narrativo.'
  },
  {
    title: 'Daughters of the Dust',
    author: 'Julie Dash',
    storyline: 'A família Pazants se prepara para migrar de sua casa nem Sea Island para o continente, deixando suas terras e legado para trás. O primeiro longa-metragem dramático a explorar as tradições Gullah.',
    imagePath: 'images/daughters.png',
    genre: 'fantasy',
    biography: 'Julie Dash (1952) é uma diretora, roteirista e produtora americana. Dash recebeu seu MFA em 1985 na UCLA Film School e fez parte de um movimento onhecido como  L.A. Rebellion. Depois de escrever e dirigir vários curtas, seu filme de 1991, Daughters of the Dust, tornou-se o primeiro filme longa-metragem dirigido por uma mulher afro-americana a ter lançamento geral nos Estados Unidos.'
  },
  {
    title: 'Torre das Donzelas',
    author: 'Susanna Lira',
    storyline: 'Torre das Donzelas debate e denuncia as experiências cruéis e brutais a que as mulheres prisioneiras foram sujeitas durante a Ditadura Militar, através dos relatos de diversas mulheres perseguidas e presas.',
    imagePath: 'images/dilma.jpg',
    genre: 'fantasy',
    biography: 'Susanna Lira é uma cineasta brasileira, pós graduada em Direito Internacional, Direitos humanos e Biopolítica Criminal.  Dirigiu cerca de 11 longas metragens, diversos curtas e séries de televisão. Em 2016, teve uma mostra de seus trabalhos no Festival internacional de filme independente de Mar del Plata na Argentina. Em 2019, foi homenageada em dois festivais: Festival Femcine no Chile, com uma retrospectiva de seus filmes, e no Festival Tenemos Que Ver no Uruguai.'
  },
  {
    title: 'At Five in the Afternoon',
    author: 'Samira Makhmalbaf',
    storyline: 'No Afeganistão invadido pelos EUA, Nogreh é uma mulher que frequenta a escola sem o conhecimento de seu pai conservador. Ela quer se tornar a primeira mulher presidente do Afeganistão.',
    imagePath: 'images/afternoon.png',
    genre: 'fantasy',
    biography: 'Samira Makhmalbaf (1980) é uma cineasta e roteirista iraniana aclamada internacionalmente. Ela é considerada uma das diretoras mais influentes da New Wave iraniana. Foi indicada duas vezes a Palma de Ouro de Cannes e vencedora do Prix du Jury no mesmo festival. Samira Mohmalbaf também ganhou o Sutherland Trophy no London Film Festival e o Prêmio da UNESCO no Festival de Cinema de Veneza.'
  },
];


export default movies