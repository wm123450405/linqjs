const assert = require('assertrue');

module.exports = function(Enumerable) {
	const a = 'a',
		b = 'b',
		c = 'c',
		d = 'd',
		e = 'e',
		f = 'f',
		u = undefined;
	const oba = {
			key: a,
			value: a
		},
		obb = {
			key: b,
			value: b
		},
		obc = {
			key: c,
			value: c
		},
		obd = {
			key: d,
			value: d
		},
		obe = {
			key: e,
			value: e
		},
		obf = {
			key: f,
			value: f
		},
		obu = {
			key: u,
			value: u
		};
	const ob1 = {
			id: 1,
			value: 1
		},
		ob2 = {
			id: 2,
			value: 2
		},
		ob3 = {
			id: 3,
			value: 3
		},
		ob4 = {
			id: 4,
			value: 4
		},
		ob5 = {
			id: 5,
			value: 5
		},
		ob6 = {
			id: 6,
			value: 6
		};
    const nodea = { key: a, value: a };
    const nodeb = { key: b, value: b, parent: a };
    const nodec = { key: c, value: c, parent: b };
    const noded = { key: d, value: d, parent: b };
    const nodee = { key: e, value: e, parent: a };
    const nodef = { key: f, value: f };
    const nodes = [ nodea, nodeb, nodec, noded, nodee, nodef ];
    const tree = [
        {
            key: a,
            value: nodea,
            children: [
                {
                    key: b,
                    value: nodeb,
                    parent: a,
                    children: [
                        {
                            key: c,
                            value: nodec,
                            parent: b
                        },
                        {
                            key: d,
                            value: noded,
                            parent: b
                        }
                    ]
                },
                {
                    key: e,
                    value: nodee,
                    parent: a
                }
            ]
        },
        {
            key: f,
            value: nodef
        }
    ];
    const treeNoKey = [
        {
            value: nodea,
            children: [
                {
                    value: nodeb,
                    children: [
                        {
                            value: nodec,
                        },
                        {
                            value: noded,
                        }
                    ]
                },
                {
                    value: nodee,
                }
            ]
        },
        {
            value: nodef
        }
    ];
	const OutOfRangeException = Enumerable.exceptions.OutOfRangeException;
	const NoSuchElementsException = Enumerable.exceptions.NoSuchElementsException;
	const TooManyElementsException = Enumerable.exceptions.TooManyElementsException;
	const KeysForMultiElementsException = Enumerable.exceptions.KeysForMultiElementsException;

	// //
	// let array_ = [0.186334057432604,0.7921040665509596,0.2177940500802129,0.30533167122534066,0.1417319018580152,0.944934678972841,0.827465894855915,0.2894492634418011,0.8102771447220825,0.3484657836420786,0.4940788634719977,0.680179898362729,0.8834977384962501,0.2538162530228285,0.7088245263496813,0.2725919113862838,0.42779441049518296,0.6797903209477696,0.6641963019755439,0.7733990857141211,0.2975076603997795,0.5454686891600831,0.11291418756663107,0.9577175837049965,0.6874226658575333,0.7754765284836949,0.21753363255848157,0.4199823861534222,0.25686027013950996,0.519743524170873,0.9324491221794875,0.47614622971304343,0.9338626229465574,0.896975690188579,0.30907419588554297,0.5114053675577952,0.7562443075827765,0.5720025082640374,0.9548097437250018,0.7091516049302871,0.3029285727098323,0.3352188681434778,0.7196999343033228,0.747343817142311,0.41818051616848084,0.7075916982591688,0.532310049246558,0.8174685147319076,0.14729350652089024,0.22680447203898368,0.9070616921233305,0.09923419885656948,0.0751982787952632,0.8762389321171651,0.9511915447950772,0.038387549116508435,0.22412547618065015,0.6976991306000633,0.605376847564226,0.6247572561652557,0.8369155914005424,0.2993434691196353,0.2680094086059728,0.39943473715694733,0.4273517503095585,0.532568030474684,0.44140945977296475,0.25318166312111834,0.642362187444572,0.6126026476025488,0.8879014085682833,0.2793393396367545,0.653203727661603,0.9659781567474692,0.5661711397164855,0.0004232412343341263,0.14604004730337516,0.9171460642016493,0.14787768314247374,0.7269917079486072,0.3857513652323592,0.22331594022386003,0.6140336724251958,0.6058421428358407,0.9628194497534048,0.4450765981229179,0.15368254522787517,0.9932224344898901,0.10824200633531067,0.05399428687189789,0.4095857733586399,0.1285890666241103,0.5453377681166094,0.344996088711095,0.5169041564683228,0.1619137476395629,0.7202466825305716,0.13850685320423395,0.3329205280992036,0.05362361481290079,0.5503545796457594,0.3086249597181754,0.40469689876104975,0.26339142581439257,0.8289923597174895,0.6367554908345792,0.07751088073795342,0.18291981426254678,0.8712282041320003,0.9606982488970754,0.6683056959566154,0.730302082410131,0.7081689409269625,0.3609226140451356,0.08654928162195974,0.9733079315190813,0.06529057012122652,0.30685754449603375,0.7711631782913921,0.8624904561596414,0.2112645132942612,0.8483380321224128,0.9134770663805909,0.42043535193933645,0.07201296840358906,0.42450130981698453,0.34515847574060543,0.36136500930684323,0.07879138782580775,0.09410290232076268,0.6362246690954665,0.37597487632411464,0.5316052785916907,0.14256904103917045,0.48322616138611774,0.41836431101922944,0.7512676496958346,0.8589942979991088,0.25987986903679494,0.04285282809061508,0.02152518089419564,0.6742487716862602,0.31069253690818277,0.16226777927666447,0.7368837421084953,0.4894916901267925,0.5081550199486744,0.47219270827328197,0.24097356539256065,0.8584200882190138,0.040160050714834306,0.20473824717799904,0.8228405623447572,0.05844425048113466,0.704201508352504,0.8569568851114915,0.13823274349128067,0.7765207583012324,0.3831185734549438,0.9360853785129248,0.9197105647856865,0.35970370134763185,0.41346274257971327,0.7291398716147974,0.2393217003921031,0.5710387331257398,0.1896940022200606,0.2359675908380683,0.029101496367064827,0.11139692721180627,0.18936278463964085,0.7440568890961237,0.44082629627005776,0.050654263389703136,0.9069648478193191,0.8947200783684861,0.3921129001596264,0.6087583427910508,0.8550886089533187,0.9038466989638863,0.9921363296340535,0.8942204706644805,0.6715914844433233,0.5256477340994126,0.19232095604518173,0.619238872628558,0.15818268422205928,0.11527450917153792,0.5127058880109685,0.13849779857042677,0.6781510178392984,0.9259496200331154,0.08485809953916146,0.6855223829832731,0.7471760851908389,0.7818398289930713,0.9753317305860898,0.3189291209796363,0.15517563358982622,0.3603745896206798,0.22676912041357955,0.6245527238035324,0.5149381338806898,0.08031821658347527,0.2666842728365304,0.5469801262008536,0.26382130933443926,0.32563133390041976,0.6558330912120967,0.8119883813892295,0.016306093003122912,0.2765846910133283,0.5139941878003151,0.23609888235618737,0.16621191306584127,0.20492543398326224,0.607580247079206,0.33036029125961885,0.23532235024037007,0.8337568928787618,0.6403686155686372,0.9323895686230494,0.13003735806729755,0.33349962281392576,0.9826634599120676,0.7955097431718035,0.4768932211389325,0.41387901839433394,0.48508053262844486,0.3334772887229398,0.9090635486801335,0.1852609601550832,0.4006814515565509,0.66381262246062,0.8121105435321643,0.3389262188175661,0.18937202234388684,0.2563018981095564,0.6786430908179728,0.22542772701736435,0.7922833407600551,0.48288554370935444,0.11658068587181192,0.07553559032413304,0.255778707543459,0.03583864634933143,0.003830943571717871,0.35477713636101105,0.8241760175817641,0.7907024930548308,0.3121616055715837,0.895307109080379,0.41016289771358116,0.16310020067997777,0.4389835822541581,0.6269438238206964,0.8891439677695545,0.6456036847275066,0.8749085541739923,0.9515654487290688,0.06682303430088621,0.944476613447151,0.09342407771461492,0.8653813878377907,0.9775203691636063,0.7885014928984628,0.2660018764387826,0.39132617876427434,0.2028471323876253,0.4297987491724513,0.26204170240001545,0.38663832094025197,0.38716963070701227,0.8605344135663506,0.7640647277286685,0.33572009677944004,0.5180283873154921,0.5027951383290521,0.14554335242606653,0.5255522893270403,0.678855187263095,0.2820545898125819,0.9411399462609331,0.09805531881339369,0.09306740674876157,0.7689274298337401,0.4164304405283634,0.2500477946599915,0.9240207402408804,0.9460030042731131,0.9268953743900548,0.6289083652162593,0.7571503583414876,0.3993133338770902,0.3228845546348187,0.8999178199754858,0.2595045523034256,0.7200467718563344,0.36448283840739504,0.5108346230631406,0.959333677831141,0.9277121546590068,0.8448348942610739,0.0720870677865002,0.25080031623522636,0.8122065801523157,0.4573978161223806,0.6292772423126791,0.6870302538755559,0.006475813368578054,0.821334300584462,0.6046233517743196,0.7404448934967283,0.47393636316454235,0.13879190727596513,0.8147639679960648,0.7276488884031802,0.4735915753664477,0.7713040141646921,0.4905140110557775,0.3482559778520633,0.933702538442984,0.9904569840617352,0.48016946408799477,0.023248733285233802,0.3214466782913519,0.9835214225783047,0.9456906745231726,0.23347105927679013,0.5305059319713525,0.39864943643308526,0.8076967219960347,0.8710567309555253,0.17204966964322121,0.46530550993494235,0.5042482437628828,0.03273904249684545,0.09310193296232527,0.9816142194887107,0.6111269523029277,0.004340219379644905,0.5829079189999968,0.671024471486906,0.166453847860915,0.280373427351545,0.18518748981740596,0.14907971700607292,0.1573354159577529,0.21675398622758424,0.3993732300719963,0.20153252912843533,0.1120864493339615,0.8167344323365329,0.1888033142044807,0.463274311204696,0.7504444750107853,0.603097698128771,0.6697176625221861,0.4381715363017207,0.8860292702668362,0.0004246918930346233,0.9914502049920915,0.3758139153384472,0.44420515573774977,0.43793635145751586,0.3021413446164678,0.8192486674522796,0.8874182104172943,0.7426067053110137,0.4641107525557615,0.18925273076131632,0.5062856409475065,0.7485416002037275,0.3365874775063591,0.5241331381968646,0.34431153914860047,0.17809152026588904,0.6258362333853535,0.8084119871891331,0.039285110681665625,0.9159925200594785,0.7949078283555675,0.25255040901240355,0.02498394890639899,0.6217219652234365,0.6401303535258023,0.6612951415271546,0.04604172769966808,0.5795835512035428,0.6765971419586512,0.9994696111967805,0.8486085589211547,0.6680139963895098,0.22319046180863933,0.17072567044864595,0.20928086667260648,0.10171413616305469,0.23174096121858856,0.9314971934874812,0.29869408594575586,0.45834038747889894,0.5627716375514442,0.9801184086490924,0.6366965510068903,0.3663535145441692,0.5413598369944095,0.5090999999299424,0.5367370255506998,0.6839965154242218,0.20452297579039302,0.202153999594739,0.46120815795890957,0.1475936621890348,0.6729515789187006,0.01779968152003719,0.779124788817884,0.1899235189858921,0.38350016892765315,0.011926927484290362,0.7946163016813179,0.821857941343195,0.8689983819932674,0.289588364862688,0.5056965449507875,0.6587633359957998,0.756994236310973,0.3092409550530977,0.6785792276917613,0.9955204856945223,0.37267959678678086,0.36565470516207954,0.6531540927417137,0.42829663634294146,0.5785977088660099,0.21692583625949835,0.6602991868849624,0.47580503267676844,0.6109190344038582,0.6190406660651555,0.3276068352902959,0.11808166821270438,0.4141667074916435,0.04378420069593192,0.46860636340899475,0.19687870826871423,0.6505989893880133,0.27210948675155056,0.037964810903177604,0.4525156318137391,0.8113121432549217,0.6313171637502464,0.8328843988055694,0.7521240357943957,0.8081562348516176,0.3709502595574994,0.8741406574011816,0.42494522685640335,0.9294622386805598,0.09123439639264252,0.8415204499751823,0.2922230413996678,0.56311858330815, 0.6065601416053201,0.38109569758027706,0.4590963792576317,0.23937000767815775,0.8068600326337798,0.3130435514810712,0.17852147813781305,0.8512043526729063,0.8469678370921259,0.27497378334882105,0.6960287301789361,0.14173445851077893,0.5812383902557823,0.4368097630033707,0.3785366546243487,0.21653642894657898,0.021715321589227843,0.7686933233212605,0.0452291717855664,0.6583836562177019,0.7731754067089311].asEnumerable();
	// assert.deepStrictEqual(array_.top(49).toArray(),  [
	// 	0.0004232412343341263, 0.0004246918930346233, 0.003830943571717871,
	// 	0.004340219379644905,  0.006475813368578054, 0.011926927484290362,
	// 	0.016306093003122912,   0.01779968152003719,  0.02152518089419564,
	// 	0.021715321589227843,  0.023248733285233802,  0.02498394890639899,
	// 	0.029101496367064827,   0.03273904249684545,  0.03583864634933143,
	// 	0.037964810903177604,  0.038387549116508435, 0.039285110681665625,
	// 	0.040160050714834306,   0.04285282809061508,  0.04378420069593192,
	// 	0.0452291717855664,   0.04604172769966808, 0.050654263389703136,
	// 	0.05362361481290079,   0.05399428687189789,  0.05844425048113466,
	// 	0.06529057012122652,   0.06682303430088621,  0.07201296840358906,
	// 	0.0720870677865002,    0.0751982787952632,  0.07553559032413304,
	// 	0.07751088073795342,   0.07879138782580775,  0.08031821658347527,
	// 	0.08485809953916146,   0.08654928162195974,  0.09123439639264252,
	// 	0.09306740674876157,   0.09310193296232527,  0.09342407771461492,
	// 	0.09410290232076268,   0.09805531881339369,  0.09923419885656948,
	// 	0.10171413616305469,   0.10824200633531067,  0.11139692721180627,
	// 	0.1120864493339615
	// 	]
	// );


	//Enumerable static methods
	assert.deepStrictEqual(Enumerable.empty().toArray(), []);
	assert.deepStrictEqual(Enumerable.repeat(1, 4).toArray(), [1, 1, 1, 1]);
	assert.deepStrictEqual(Enumerable.range(1, 4).toArray(), [1, 2, 3, 4]);
    assert.deepStrictEqual(Enumerable.range(2, 4).toArray(), Enumerable.between(2, 5).toArray());
    assert.deepStrictEqual(Enumerable.generate(i => i * 2, 4).toArray(), [0, 2, 4, 6]);

	//Enumerable static methods for extends IEnumerable
	//select
	assert.deepStrictEqual(Enumerable.select([a, b, c]).toArray(), [a, b, c]);
	assert.deepStrictEqual(Enumerable.select([a, b, c], v => v + v).toArray(), ['aa', 'bb', 'cc']);
	assert.deepStrictEqual(Enumerable.select([oba, obb, obc], 'key').toArray(), [a, b, c]);
	//where
	assert.deepStrictEqual(Enumerable.where([0, 1, 2, 3, 4, 5]).toArray(), [0, 1, 2, 3, 4, 5]);
	assert.deepStrictEqual(Enumerable.where([0, 1, 2, 3, 4, 5], v => v % 2 === 0).toArray(), [0, 2, 4]);
	assert.deepStrictEqual(Enumerable.where([oba, obb, obc, obu], 'key').select('value').toArray(), [a, b, c]);
	assert.deepStrictEqual(Enumerable.where([oba, obb, obc, obu], Enumerable.predicates.not('key')).select('value').toArray(), [u]);
	//any
	assert.isStrictTrue(Enumerable.any([a, b, c], v => v === b));
	assert.isStrictTrue(Enumerable.any([oba, obb, obc, obu], Enumerable.predicates.not(Enumerable.predicates.selector('key'))));
	//all
	assert.isStrictFalse(Enumerable.all([a, b, c], v => v === b));
	assert.isStrictFalse(Enumerable.all([oba, obb, obc, obu], 'key'));
	//sum
	assert.strictEqual(Enumerable.sum([1, 2, 3]), 6);
	assert.strictEqual(Enumerable.sum([1, 2, 3, 4], v => v * v), 30);
	assert.isStrictNaN(Enumerable.sum([a, b, c]), NaN);
	assert.strictEqual(Enumerable.sum([ob1, ob2, ob3, ob4], 'value'), 10);
	//average
	assert.strictEqual(Enumerable.average([1, 2, 3]), 2);
	assert.strictEqual(Enumerable.average([1, 2, 3, 4], v => v * v), 7.5);
	assert.isStrictNaN(Enumerable.average([a, b, c]), NaN);
	assert.strictEqual(Enumerable.average([ob1, ob2, ob3, ob4], 'value'), 2.5);
	//aggregate
	assert.strictEqual(Enumerable.aggregate([4, 3, 2, 1], 5, (seed, v) => seed + v), 15);
	assert.strictEqual(Enumerable.aggregate([4, 3, 2, 1], 5, (seed, v) => seed + v, r => r * 2), 30);
	//max
	assert.strictEqual(Enumerable.maxOrDefault([], 1), 1);

	assert.strictEqual(Enumerable.maxOrDefault([5], 1), 5);

	assert.strictEqual(Enumerable.maxOrDefault([5, 7], 1), 7);

	assert.strictEqual(Enumerable.select([5, 7], v => v + 2).maxOrDefault(1), 9);

	assert.strictEqual(Enumerable.max([5, 7, 3, 1, 9]), 9);
	assert.strictEqual(Enumerable.max([b, c, d, a], v => '-' + v), d);
	assert.strictEqual(Enumerable.max([b, c, d, a], v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), a);
	assert.strictEqual(Enumerable.max([obb, obc, obd, oba], 'value'), obd);
	assert.strictEqual(Enumerable.max([obb, obc, obd, oba], '', 'key').value, d);
	//min
	assert.strictEqual(Enumerable.min([5, 7, 3, 1, 9]), 1);
	assert.strictEqual(Enumerable.min([b, c, d, a], v => '-' + v), a);
	assert.strictEqual(Enumerable.min([b, c, d, a], v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), d);
	assert.strictEqual(Enumerable.min([obb, obc, obd, oba], 'value'), oba);
	assert.strictEqual(Enumerable.min([obb, obc, obd, oba], '', 'key').value, a);
	//concat
	assert.deepStrictEqual(Enumerable.concat([a, b], [d, e]).toArray(), [a, b, d, e]);
	//contains
	assert.isStrictTrue(Enumerable.contains([a, b, c, d], c));
	assert.isStrictFalse(Enumerable.contains([1, 2, 3, 4, 5], 6));
	assert.isStrictTrue(Enumerable.contains([1, 2, 3, 4, 5], 6, (element, value) => element === value % 4));
	assert.isStrictTrue(Enumerable.contains([ob1, ob2, ob3, ob4], {
		id: 1
	}, 'id'));
	//count
	assert.strictEqual(Enumerable.count([1, 2, 3, 4, 5]), 5);
	assert.strictEqual(Enumerable.count([1, 2, 3, 4, 5], element => element % 2 === 0), 2);
	assert.strictEqual(Enumerable.count([ob1, ob2, ob3, ob4, obu], 'value'), 4);
	//defaultIfEmpty
	assert.deepStrictEqual(Enumerable.defaultIfEmpty([], a).toArray(), [a]);
	assert.deepStrictEqual(Enumerable.defaultIfEmpty([a, b], a).toArray(), [a, b]);
	//distinct
	assert.deepStrictEqual(Enumerable.distinct([a, b, c, c, b, b, c, a]).toArray(), [a, b, c]);
	assert.deepStrictEqual(Enumerable.distinct([1, 2, 3, 3, 2, 2, 3, 1], (element, value) => element % 2 === value % 2).toArray(), [1, 2]);
	//except
	assert.deepStrictEqual(Enumerable.except([a, b, c, d, e, c], [d, b]).toArray(), [a, c, e]);
	assert.deepStrictEqual(Enumerable.except([1, 2, 3, 4, 5, 3, 6], [2, 4], (element, value) => element % 3 === value % 3).toArray(), [3]); //in this equality comparer 3 is equal to 6, so number 6 was been ignored
	//union
	assert.deepStrictEqual(Enumerable.union([a, b, c], [b, c, d, e]).toArray(), [a, b, c, d, e]);
	assert.deepStrictEqual(Enumerable.union([1, 2, 3, 4], [5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [1, 2, 3]);
	//itersect
	assert.deepStrictEqual(Enumerable.intersect([a, b, c], [b, c, d, e]).toArray(), [b, c]);
	assert.deepStrictEqual(Enumerable.intersect([1, 2, 3, 4], [5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [2, 3]);
	//elementAt
	assert.strictEqual(Enumerable.elementAt([a, b, c, d, e], 2), c);
	assert.throws(() => Enumerable.elementAt([a, b, c, d, e], 10), OutOfRangeException);
	assert.throws(() => Enumerable.elementAt([a, b, c, d, e], -1), OutOfRangeException);
	//elementAtOrDefault
	assert.strictEqual(Enumerable.elementAtOrDefault([a, b, c, d, e], 2, f), c);
	assert.strictEqual(Enumerable.elementAtOrDefault([a, b], 2, f), f);
	//first
	assert.strictEqual(Enumerable.first([a, b, c]), a);
	assert.throws(() => Enumerable.first([]), NoSuchElementsException);
	//firstOrDefault
	assert.strictEqual(Enumerable.firstOrDefault([a, b, c], f), a);
	assert.strictEqual(Enumerable.firstOrDefault([], f), f);
	//last
	assert.strictEqual(Enumerable.last([a, b, c]), c);
	assert.throws(() => Enumerable.last([]), NoSuchElementsException);
	//lastOrDefault
	assert.strictEqual(Enumerable.lastOrDefault([a, b, c], f), c);
	assert.strictEqual(Enumerable.lastOrDefault([], f), f);
	//single
	assert.strictEqual(Enumerable.single([a]), a);
	assert.throws(() => Enumerable.single([a, b, c]), TooManyElementsException);
	assert.throws(() => Enumerable.single([]), NoSuchElementsException);
	//singleOrDefault
	assert.throws(() => Enumerable.singleOrDefault([a, b, c], f), TooManyElementsException);
	assert.strictEqual(Enumerable.singleOrDefault([], f), f);
	assert.strictEqual(Enumerable.singleOrDefault([a], f), a);
	//join
	assert.strictEqual(Enumerable.join([a, b, c], '|'), 'a|b|c');
	//ofType
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], String).toArray(), [a, b, c, '']);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Number).toArray(), [1, 0.2, 1E2]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Boolean).toArray(), [true]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Array).toArray(), [
		[1, 2]
	]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], RegExp).toArray(), [/\w/ig]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Object).toArray(), [{}]);
	//reverse
	assert.deepStrictEqual(Enumerable.reverse([a, b, c]).toArray(), [c, b, a]);
	//sequenceEqual
	assert.isStrictFalse(Enumerable.sequenceEqual([a, b, c], [a, b, d]));
	assert.isStrictTrue(Enumerable.sequenceEqual([0, 1, 2], [3, 4, 5], (element, value) => element % 3 === value % 3));
	//skip
	assert.deepStrictEqual(Enumerable.skip([a, b, c, d, e], 2).toArray(), [c, d, e]);
	//skipWhile
	assert.deepStrictEqual(Enumerable.skipWhile([1, 2, 3, 4, 5], v => v < 3).toArray(), [3, 4, 5]);
    //skipSame
    assert.deepStrictEqual(Enumerable.skipSame([1, 1, 1, 4, 5], v => v < 3).toArray(), [4, 5]);
    //skipProportion
	assert.deepStrictEqual(Enumerable.skipProportion([1, 1, 1, 4, 5], 0.5).toArray(), [1, 4, 5]);
	assert.deepStrictEqual(Enumerable.skipProportion([1, 1, 1, 3, 4, 5], 0.5).toArray(), [3, 4, 5]);
	//take
	assert.deepStrictEqual(Enumerable.take([a, b, c, d, e], 3).toArray(), [a, b, c]);
	//takeWhile
	assert.deepStrictEqual(Enumerable.takeWhile([1, 2, 3, 4, 5], v => v <= 3).toArray(), [1, 2, 3]);
    //takeWhile
    assert.deepStrictEqual(Enumerable.takeSame([1, 1, 1, 4, 5], v => v <= 3).toArray(), [1, 1, 1]);
	//takeProportion
	assert.deepStrictEqual(Enumerable.takeProportion([1, 1, 1, 4, 5], 0.5).toArray(), [1, 1]);
	assert.deepStrictEqual(Enumerable.takeProportion([1, 1, 1, 3, 4, 5], 0.5).toArray(), [1, 1, 1]);
	//proportion
	assert.strictEqual(Enumerable.proportion([1, 2, 3, 4, 5], v => v <= 3), 0.6);
	//zip
	assert.deepStrictEqual(Enumerable.zip([1, 2, 3], [a, b, c], (element, other) => element + other).toArray(), ['1a', '2b', '3c']);
	//orderBy
	assert.deepStrictEqual(Enumerable.orderBy([d, a, c, b]).toArray(), [a, b, c, d]);
	assert.deepStrictEqual(Enumerable.orderBy([d, a, c, b], v => v + v).toArray(), [a, b, c, d]);
	assert.deepStrictEqual(Enumerable.orderBy([d, a, c, b], v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [d, c, b, a]);
	assert.deepStrictEqual(Enumerable.orderBy([d, a, e, c, f, b], '', [c, b, d]).toArray(), [a, e, f, c, b, d]);
	//orderByDescending
	assert.deepStrictEqual(Enumerable.orderByDescending([d, a, c, b]).toArray(), [d, c, b, a]);
	assert.deepStrictEqual(Enumerable.orderByDescending([d, a, c, b], v => v + v).toArray(), [d, c, b, a]);
	assert.deepStrictEqual(Enumerable.orderByDescending([d, a, c, b], v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [a, b, c, d]);
	//leftJoin
    assert.deepStrictEqual(Enumerable.leftJoin([1, 2, 3, 4], [2, 3, 4, 5], (outerElement, innerElement) => outerElement * (innerElement || 0)).toArray(), [0, 4, 9, 16]);
    //rightJoin
    assert.deepStrictEqual(Enumerable.rightJoin([1, 2, 3, 4], [2, 3, 4, 5], (outerElement, innerElement) => (outerElement || 0) * innerElement).toArray(), [4, 9, 16, 0]);
	//join
	assert.deepStrictEqual(Enumerable.join([1, 2, 3, 4], [2, 3, 4, 5], (outerElement, innerElement) => outerElement * innerElement).toArray(), [4, 9, 16]);
	assert.deepStrictEqual(Enumerable.join([{
		key: 1,
		value: 2
	}, {
		key: 2,
		value: 3
	}, {
		key: 3,
		value: 4
	}, {
		key: 4,
		value: 5
	}], [2, 3, 4, 5], (outerElement, innerElement) => outerElement.value * innerElement, v => v.key).toArray(), [6, 12, 20]);
	assert.deepStrictEqual(Enumerable.join([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}], [{
		id: 2,
		lastName: a
	}, {
		id: 3,
		lastName: b
	}, {
		id: 4,
		lastName: c
	}], (outerElement, innerElement) => outerElement.firstName + ' ' + innerElement.lastName, outerElement => outerElement.id, innerElement => innerElement.id).toArray(), ['e a', 'f b']);
	assert.deepStrictEqual(Enumerable.join([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}], [{
		code: 100,
		lastName: a
	}, {
		code: 101,
		lastName: b
	}, {
		code: 102,
		lastName: c
	}], (outerElement, innerElement) => outerElement.firstName + ' ' + innerElement.lastName, outerElement => outerElement.id, innerElement => innerElement.code, (element, other) => element === other - 100).toArray(), ['d b', 'e c']);
	//groupBy
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1]).select(grouping => grouping.toArray()).toArray(), [
		[3, 3, 3],
		[2],
		[1, 1],
		[4]
	]);
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1], v => v % 3).select(grouping => grouping.toArray()).toArray(), [
		[3, 3, 3],
		[2],
		[1, 4, 1]
	]);
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1], v => v % 3, v => v * v).select(grouping => grouping.toArray()).toArray(), [
		[9, 9, 9],
		[4],
		[1, 16, 1]
	]);
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1], v => v % 3, v => v * v, (key, grouping) => grouping.toArray()).toArray(), [
		[9, 9, 9],
		[4],
		[1, 16, 1]
	]);
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1], v => v % 3, v => v * v, (key, grouping) => grouping.toArray(), (element, other) => element % 2 === other % 2).toArray(), [
		[9, 4, 9, 9],
		[1, 16, 1]
	]);
	//selectMany
	assert.deepStrictEqual(Enumerable.selectMany([
		[a, b, c],
		[d],
		[e, f]
	]).toArray(), [a, b, c, d, e, f]);
	assert.deepStrictEqual(Enumerable.selectMany([{
		key: 'vowel',
		values: [a, e]
	}, {
		key: 'other',
		values: [b, c, d, f]
	}], v => v.values).toArray(), [a, e, b, c, d, f]);
	assert.deepStrictEqual(Enumerable.selectMany([{
		key: 'vowel',
		values: [a, e]
	}, {
		key: 'other',
		values: [b, c, d, f]
	}], v => v.values, (v, value) => value + a).toArray(), [a + a, e + a, b + a, c + a, d + a, f + a]);
	//groupJoin
	assert.deepStrictEqual(Enumerable.groupJoin([1, 2, 3, 4], [2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray()).toArray(), [
		[],
		[2],
		[3],
		[4, 4]
	]);
	assert.deepStrictEqual(Enumerable.groupJoin([{
		key: 1,
		value: 2
	}, {
		key: 2,
		value: 3
	}, {
		key: 3,
		value: 4
	}, {
		key: 4,
		value: 5
	}], [2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray(), v => v.key).toArray(), [
		[],
		[2],
		[3],
		[4, 4]
	]);
	assert.deepStrictEqual(Enumerable.groupJoin([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}], [{
		id: 2,
		lastName: a
	}, {
		id: 3,
		lastName: b
	}, {
		id: 3,
		lastName: '!'
	}, {
		id: 4,
		lastName: c
	}], (outerElement, innerGrouping) => outerElement.firstName + ' ' + innerGrouping.select(v => v.lastName).join(' '), outerElement => outerElement.id, innerElement => innerElement.id).toArray(), ['d ', 'e a', 'f b !']);
	assert.deepStrictEqual(Enumerable.groupJoin([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}], [{
		code: 100,
		lastName: a
	}, {
		code: 101,
		lastName: b
	}, {
		code: 101,
		lastName: '!'
	}, {
		code: 102,
		lastName: c
	}], (outerElement, innerGrouping) => outerElement.firstName + ' ' + innerGrouping.select(v => v.lastName).join(' '), outerElement => outerElement.id, innerElement => innerElement.code, (element, other) => element === other - 100).toArray(), ['d b !', 'e c', 'f ']);
    //chunk
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d, e], 3, 1).count(), 3);
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d], 2).select(c => c.toArray()).toArray(), [ [a, b], [c, d] ]);
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d, e, f], 3, 2).skip(1).select(c => c.toArray()).toArray(), [ [c, d, e], [f] ]);
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d], 2).select(c => c.index).toArray(), [ 0, 1 ]);
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d, e, f], 3, 2).skip(1).select(c => c.index).toArray(), [ 1, 2 ]);
	//split
    assert.deepStrictEqual(Enumerable.split([a, b, c, b, d, e], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
    assert.deepStrictEqual(Enumerable.split([b, a, c, b, d, e], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
    assert.deepStrictEqual(Enumerable.split([a, b, c, b, d, e, b], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
    assert.deepStrictEqual(Enumerable.split([b, a, b, b, c, b, d, e, b], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [], [c], [d, e], [] ]);
    assert.deepStrictEqual(Enumerable.split('babbcbdeb', /b/).select(chunk => chunk.join('')).toArray(), [ '', 'a', '', 'c', 'de', '' ]);
    assert.deepStrictEqual(Enumerable.nearSplit('babbcbdeb', /b/).select(chunk => chunk.join('')).toArray(), [ '', 'a', 'c', 'de', '' ]);
    //nearSplit
    assert.deepStrictEqual(Enumerable.nearSplit([a, b, c, b, b, d, e], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
    assert.deepStrictEqual(Enumerable.nearSplit([b, b, a, c, b, d, e], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
    assert.deepStrictEqual(Enumerable.nearSplit([a, b, c, b, d, e, b, b], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
    assert.deepStrictEqual(Enumerable.nearSplit([b, a, b, b, b, c, b, d, e, b], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [c], [d, e], [] ]);
    //product
    assert.strictEqual(Enumerable.product([1, 2, 3, 4, 5]), 120);
    assert.strictEqual(Enumerable.range(1, 5).product(), 120);
    //rightPad
    assert.deepStrictEqual(Enumerable.rightPad([a, b, c], 5, d).toArray(), [a, b, c, d, d]);
    //leftPad
    assert.deepStrictEqual(Enumerable.leftPad([a, b, c], 5, d).toArray(), [d, d, a, b, c]);
    //wipe
    assert.deepStrictEqual(Enumerable.wipe([a, b, c, a, b, c, a, b, c], e => e === a).toArray(), [b, c, b, c, b, c]);
    assert.deepStrictEqual(Enumerable.wipe([a, b, c, a, b, c, a, b, c], e => e === a, 2).toArray(), [b, c, b, c, a, b, c]);
    //nearBy
	assert.deepStrictEqual(Enumerable.nearBy([a, a, b, b, b, a, c, c]).select(g => g.toArray()).toArray(), [[a, a], [b, b, b], [a], [c, c]]);
	//combine
    assert.deepStrictEqual(Enumerable.combine(nodes).select(v => v.toObject()).toArray(), tree);
    assert.deepStrictEqual(Enumerable.combine(nodes, node => node.parent, node => node.key).select(v => v.toObject()).toArray(), tree);
	//separate
	assert.deepStrictEqual(Enumerable.separate([[[a, b], c, d], [e, f], a]).toArray(), [a, b, c, d, e, f, a]);
    assert.deepStrictEqual(Enumerable.separate(tree).toArray(), nodes);
	assert.deepStrictEqual(Enumerable.separate(tree, v => v.children).toArray(), nodes);
	//isSub
    assert.strictEqual(Enumerable.isSub([1, 2, 3], [5, 4, 3, 2, 1]), true);
    assert.strictEqual(Enumerable.isSub([1, 2, 3], [5, 4, 3]), false);
    //isSuper
    assert.strictEqual(Enumerable.isSuper([5, 4, 3, 2, 1], [1, 2, 3]), true);
    assert.strictEqual(Enumerable.isSuper([5, 4, 3], [1, 2, 3]), false);
    //symmetric
	assert.deepStrictEqual(Enumerable.symmetric([1, 2, 3], [3, 4, 5]).toArray(), [1, 2, 4, 5]);
	//indices
    assert.deepStrictEqual(Enumerable.indices([a, b, c, d, e, f], [0, 2, 4]).toArray(), [a, c, e]);
    assert.deepStrictEqual(Enumerable.indices([a, b, c, d, e, f], [3, 2, 3, 5, 0]).toArray(), [d, c, d, f, a]);
    //permutation
	assert.deepStrictEqual(Enumerable.permutation([a, b, c], 2).select(per => per.toArray()).toArray(), [ [a, b], [a, c], [b, a], [b, c], [c, a], [c, b] ]);
    assert.deepStrictEqual(Enumerable.permutation([a, b, c, d, e], 3).count(), 60);
    assert.deepStrictEqual(Enumerable.permutation([a, b, c], 2, true).select(per => per.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, a], [b, b], [b, c], [c, a], [c, b], [c, c] ]);
    assert.deepStrictEqual(Enumerable.permutation([a, b, c, d, e], 3, true).count(), 125);
    assert.deepStrictEqual(Enumerable.permutation([a, b, c], 4, true).count(), 81);
    //combination
    assert.deepStrictEqual(Enumerable.combination([a, b, c], 2).select(com => com.toArray()).toArray(), [ [a, b], [a, c], [b, c] ]);
    assert.deepStrictEqual(Enumerable.combination([a, b, c, d, e], 3).count(), 10);
    assert.deepStrictEqual(Enumerable.combination([a, b, c], 2, true).select(com => com.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, b], [b, c], [c, c] ]);
    assert.deepStrictEqual(Enumerable.combination([a, b, c, d, e], 3, true).count(), 35);
    assert.deepStrictEqual(Enumerable.combination([a, b, c], 4, true).count(), 15);

	//IEnumerable methods
	//select
	assert.deepStrictEqual([a, b, c].asEnumerable().select().toArray(), [a, b, c]);
	assert.deepStrictEqual([a, b, c].asEnumerable().select(v => v + v).toArray(), ['aa', 'bb', 'cc']);
	//where
	assert.deepStrictEqual([0, 1, 2, 3, 4, 5].asEnumerable().where().toArray(), [0, 1, 2, 3, 4, 5]);
	assert.deepStrictEqual([0, 1, 2, 3, 4, 5].asEnumerable().where(v => v % 2 === 0).toArray(), [0, 2, 4]);
	//any
	assert.isStrictTrue([a, b, c].asEnumerable().any(v => v === b));
	//all
	assert.isStrictFalse([a, b, c].asEnumerable().all(v => v === b));
	//sum
	assert.strictEqual([1, 2, 3].asEnumerable().sum(), 6);
	assert.strictEqual([1, 2, 3, 4].asEnumerable().sum(v => v * v), 30);
	assert.isStrictNaN([a, b, c].asEnumerable().sum(), NaN);
	//average
	assert.strictEqual([1, 2, 3].asEnumerable().average(), 2);
	assert.strictEqual([1, 2, 3, 4].asEnumerable().average(v => v * v), 7.5);
	assert.isStrictNaN([a, b, c].asEnumerable().average(), NaN);
	//aggregate
	assert.strictEqual([4, 3, 2, 1].asEnumerable().aggregate(5, (seed, v) => seed + v), 15);
	assert.strictEqual([4, 3, 2, 1].asEnumerable().aggregate(5, (seed, v) => seed + v, r => r * 2), 30);
	//max
	assert.strictEqual([5, 7, 3, 1, 9].asEnumerable().max(), 9);
	assert.strictEqual([b, c, d, a].asEnumerable().max(v => '-' + v), d);
	assert.strictEqual([b, c, d, a].asEnumerable().max(v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), a);
	//min
	assert.strictEqual([5, 7, 3, 1, 9].asEnumerable().min(), 1);
	assert.strictEqual([b, c, d, a].asEnumerable().min(v => '-' + v), a);
	assert.strictEqual([b, c, d, a].asEnumerable().min(v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), d);
	//concat
	assert.deepStrictEqual([a, b].asEnumerable().concat([d, e]).toArray(), [a, b, d, e]);
	//contains
	assert.isStrictTrue([a, b, c, d].asEnumerable().contains(c));
	assert.isStrictFalse([1, 2, 3, 4, 5].asEnumerable().contains(6));
	assert.isStrictTrue([1, 2, 3, 4, 5].asEnumerable().contains(6, (element, value) => element === value % 4));
	//count
	assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().count(), 5);
	assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().count(element => element % 2 === 0), 2);
	//defaultIfEmpty
	assert.deepStrictEqual([].asEnumerable().defaultIfEmpty(a).toArray(), [a]);
	assert.deepStrictEqual([a, b].asEnumerable().defaultIfEmpty(a).toArray(), [a, b]);
	//distinct
	assert.deepStrictEqual([a, b, c, c, b, b, c, a].asEnumerable().distinct().toArray(), [a, b, c]);
	assert.deepStrictEqual([1, 2, 3, 3, 2, 2, 3, 1].asEnumerable().distinct((element, value) => element % 2 === value % 2).toArray(), [1, 2]);
	//except
	assert.deepStrictEqual([a, b, c, d, e, c].asEnumerable().except([d, b]).toArray(), [a, c, e]);
	assert.deepStrictEqual([1, 2, 3, 4, 5, 3, 6].asEnumerable().except([2, 4], (element, value) => element % 3 === value % 3).toArray(), [3]); //in this equality comparer 3 is equal to 6, so number 6 was been ignored
	//union
	assert.deepStrictEqual([a, b, c].asEnumerable().union([b, c, d, e]).toArray(), [a, b, c, d, e]);
	assert.deepStrictEqual([1, 2, 3, 4].asEnumerable().union([5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [1, 2, 3]);
	//itersect
	assert.deepStrictEqual([a, b, c].asEnumerable().intersect([b, c, d, e]).toArray(), [b, c]);
	assert.deepStrictEqual([1, 2, 3, 4].asEnumerable().intersect([5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [2, 3]);
	//elementAt
	assert.strictEqual([a, b, c, d, e].asEnumerable().elementAt(2), c);
	assert.throws(() => [a, b, c, d, e].asEnumerable().elementAt(10), OutOfRangeException);
	assert.throws(() => [a, b, c, d, e].asEnumerable().elementAt(-1), OutOfRangeException);
	//elementAtOrDefault
	assert.strictEqual([a, b, c, d, e].asEnumerable().elementAtOrDefault(2, f), c);
	assert.strictEqual([a, b].asEnumerable().elementAtOrDefault(2, f), f);
	//first
	assert.strictEqual([a, b, c].asEnumerable().first(), a);
	assert.throws(() => Enumerable.first([]), NoSuchElementsException);
	//firstOrDefault
	assert.strictEqual([a, b, c].asEnumerable().firstOrDefault(f), a);
	assert.strictEqual(Enumerable.firstOrDefault([], f), f);
	//last
	assert.strictEqual([a, b, c].asEnumerable().last(), c);
	assert.throws(() => Enumerable.last([]), NoSuchElementsException);
	//lastOrDefault
	assert.strictEqual([a, b, c].asEnumerable().lastOrDefault(f), c);
	assert.strictEqual(Enumerable.lastOrDefault([], f), f);
	//single
	assert.strictEqual([a].asEnumerable().single(), a);
	assert.throws(() => [a, b, c].asEnumerable().single(), TooManyElementsException);
	assert.throws(() => Enumerable.single([]), NoSuchElementsException);
	//singleOrDefault
	assert.throws(() => [a, b, c].asEnumerable().singleOrDefault(f), TooManyElementsException);
	assert.strictEqual(Enumerable.singleOrDefault([], f), f);
	assert.strictEqual([a].asEnumerable().singleOrDefault(f), a);
	//join
	assert.strictEqual([a, b, c].asEnumerable().join('|'), 'a|b|c');
	//ofType
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(String).toArray(), [a, b, c, '']);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Number).toArray(), [1, 0.2, 1E2]);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Boolean).toArray(), [true]);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Array).toArray(), [
		[1, 2]
	]);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(RegExp).toArray(), [/\w/ig]);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Object).toArray(), [{}]);
	//reverse
	assert.deepStrictEqual([a, b, c].asEnumerable().reverse().toArray(), [c, b, a]);
	//sequenceEqual
	assert.isStrictFalse([a, b, c].asEnumerable().sequenceEqual([a, b, d]));
	assert.isStrictTrue([0, 1, 2].asEnumerable().sequenceEqual([3, 4, 5], (element, value) => element % 3 === value % 3));
	//skip
	assert.deepStrictEqual([a, b, c, d, e].asEnumerable().skip(2).toArray(), [c, d, e]);
	//skipWhile
	assert.deepStrictEqual([1, 2, 3, 4, 5].asEnumerable().skipWhile(v => v < 3).toArray(), [3, 4, 5]);
    //skipSame
	assert.deepStrictEqual([1, 1, 1, 4, 5].asEnumerable().skipSame().toArray(), [4, 5]);
	//skipProportion
	assert.deepStrictEqual([1, 1, 1, 4, 5].asEnumerable().skipProportion(0.5).toArray(), [1, 4, 5]);
	//take
	assert.deepStrictEqual([a, b, c, d, e].asEnumerable().take(3).toArray(), [a, b, c]);
	//takeWhile
	assert.deepStrictEqual([1, 2, 3, 4, 5].asEnumerable().takeWhile(v => v <= 3).toArray(), [1, 2, 3])
    //takeSame
    assert.deepStrictEqual([1, 1, 1, 4, 5].asEnumerable().takeSame().toArray(), [1, 1, 1]);
	//takeProportion
	assert.deepStrictEqual([1, 1, 1, 4, 5].asEnumerable().takeProportion(0.5).toArray(), [1, 1]);
	//proportion
	assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().proportion(v => v <= 3), 0.6);
	//zip
	assert.deepStrictEqual([1, 2, 3].asEnumerable().zip([a, b, c], (element, other) => element + other).toArray(), ['1a', '2b', '3c']);
	//orderBy
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderBy().toArray(), [a, b, c, d]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderBy(v => v + v).toArray(), [a, b, c, d]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderBy(v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [d, c, b, a]);
	//orderByDescending
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderByDescending().toArray(), [d, c, b, a]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderByDescending(v => v + v).toArray(), [d, c, b, a]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderByDescending(v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [a, b, c, d]);
	//join
	assert.deepStrictEqual([1, 2, 3, 4].asEnumerable().join([2, 3, 4, 5], (outerElement, innerElement) => outerElement * innerElement).toArray(), [4, 9, 16]);
	assert.deepStrictEqual([{
		key: 1,
		value: 2
	}, {
		key: 2,
		value: 3
	}, {
		key: 3,
		value: 4
	}, {
		key: 4,
		value: 5
	}].asEnumerable().join([2, 3, 4, 5], (outerElement, innerElement) => outerElement.value * innerElement, v => v.key).toArray(), [6, 12, 20]);
	assert.deepStrictEqual([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}].asEnumerable().join([{
		id: 2,
		lastName: a
	}, {
		id: 3,
		lastName: b
	}, {
		id: 4,
		lastName: c
	}], (outerElement, innerElement) => outerElement.firstName + ' ' + innerElement.lastName, outerElement => outerElement.id, innerElement => innerElement.id).toArray(), ['e a', 'f b']);
	assert.deepStrictEqual([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}].asEnumerable().join([{
		code: 100,
		lastName: a
	}, {
		code: 101,
		lastName: b
	}, {
		code: 102,
		lastName: c
	}], (outerElement, innerElement) => outerElement.firstName + ' ' + innerElement.lastName, outerElement => outerElement.id, innerElement => innerElement.code, (element, other) => element === other - 100).toArray(), ['d b', 'e c']);
	//groupBy
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy().select(grouping => grouping.toArray()).toArray(), [
		[3, 3, 3],
		[2],
		[1, 1],
		[4]
	]);
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy(v => v % 3).select(grouping => grouping.toArray()).toArray(), [
		[3, 3, 3],
		[2],
		[1, 4, 1]
	]);
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy(v => v % 3, v => v * v).select(grouping => grouping.toArray()).toArray(), [
		[9, 9, 9],
		[4],
		[1, 16, 1]
	]);
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy(v => v % 3, v => v * v, (key, grouping) => grouping.toArray()).toArray(), [
		[9, 9, 9],
		[4],
		[1, 16, 1]
	]);
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy(v => v % 3, v => v * v, (key, grouping) => grouping.toArray(), (element, other) => element % 2 === other % 2).toArray(), [
		[9, 4, 9, 9],
		[1, 16, 1]
	]);
	//selectMany
	assert.deepStrictEqual([
		[a, b, c],
		[d],
		[e, f]
	].asEnumerable().selectMany().toArray(), [a, b, c, d, e, f]);
	assert.deepStrictEqual([{
		key: 'vowel',
		values: [a, e]
	}, {
		key: 'other',
		values: [b, c, d, f]
	}].asEnumerable().selectMany(v => v.values).toArray(), [a, e, b, c, d, f]);
	assert.deepStrictEqual([{
		key: 'vowel',
		values: [a, e]
	}, {
		key: 'other',
		values: [b, c, d, f]
	}].asEnumerable().selectMany(v => v.values, (v, value) => value + a).toArray(), [a + a, e + a, b + a, c + a, d + a, f + a]);
	//groupJoin
	assert.deepStrictEqual([1, 2, 3, 4].asEnumerable().groupJoin([2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray()).toArray(), [
		[],
		[2],
		[3],
		[4, 4]
	]);
	assert.deepStrictEqual([{
		key: 1,
		value: 2
	}, {
		key: 2,
		value: 3
	}, {
		key: 3,
		value: 4
	}, {
		key: 4,
		value: 5
	}].asEnumerable().groupJoin([2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray(), v => v.key).toArray(), [
		[],
		[2],
		[3],
		[4, 4]
	]);
	assert.deepStrictEqual([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}].asEnumerable().groupJoin([{
		id: 2,
		lastName: a
	}, {
		id: 3,
		lastName: b
	}, {
		id: 3,
		lastName: '!'
	}, {
		id: 4,
		lastName: c
	}], (outerElement, innerGrouping) => outerElement.firstName + ' ' + innerGrouping.select(v => v.lastName).join(' '), outerElement => outerElement.id, innerElement => innerElement.id).toArray(), ['d ', 'e a', 'f b !']);
	assert.deepStrictEqual([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}].asEnumerable().groupJoin([{
		code: 100,
		lastName: a
	}, {
		code: 101,
		lastName: b
	}, {
		code: 101,
		lastName: '!'
	}, {
		code: 102,
		lastName: c
	}], (outerElement, innerGrouping) => outerElement.firstName + ' ' + innerGrouping.select(v => v.lastName).join(' '), outerElement => outerElement.id, innerElement => innerElement.code, (element, other) => element === other - 100).toArray(), ['d b !', 'e c', 'f ']);
    //chunk
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().chunk(3, 1).count(), 3);
    assert.deepStrictEqual([a, b, c, d].asEnumerable().chunk(2).select(c => c.toArray()).toArray(), [ [a, b], [c, d] ]);
    assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().chunk(3, 2).skip(1).select(c => c.toArray()).toArray(), [ [c, d, e], [f] ]);
    assert.deepStrictEqual([a, b, c, d].asEnumerable().chunk(2).select(c => c.index).toArray(), [ 0, 1 ]);
    assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().chunk(3, 2).skip(1).select(c => c.index).toArray(), [ 1, 2 ]);
    //split
    assert.deepStrictEqual([a, b, c, b, d, e].asEnumerable().split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
    assert.deepStrictEqual([b, a, c, b, d, e].asEnumerable().split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
    assert.deepStrictEqual([a, b, c, b, d, e, b].asEnumerable().split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
    assert.deepStrictEqual([b, a, b, b, c, b, d, e, b].asEnumerable().split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [], [c], [d, e], [] ]);
    //nearSplit
    assert.deepStrictEqual([a, b, c, b, b, d, e].asEnumerable().nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
    assert.deepStrictEqual([b, b, a, c, b, d, e].asEnumerable().nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
    assert.deepStrictEqual([a, b, c, b, d, e, b, b].asEnumerable().nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
    assert.deepStrictEqual([b, a, b, b, b, c, b, d, e, b].asEnumerable().nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [c], [d, e], [] ]);
    //product
    assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().product(), 120);
    //rightPad
    assert.deepStrictEqual([a, b, c].asEnumerable().rightPad(5, d).toArray(), [a, b, c, d, d]);
    //leftPad
    assert.deepStrictEqual([a, b, c].asEnumerable().leftPad(5, d).toArray(), [d, d, a, b, c]);
    //wipe
    assert.deepStrictEqual([a, b, c, a, b, c, a, b, c].asEnumerable().wipe(e => e === a).toArray(), [b, c, b, c, b, c]);
    assert.deepStrictEqual([a, b, c, a, b, c, a, b, c].asEnumerable().wipe(e => e === a, 2).toArray(), [b, c, b, c, a, b, c]);
    //nearBy
    assert.deepStrictEqual([a, a, b, b, b, a, c, c].asEnumerable().nearBy().select(g => g.toArray()).toArray(), [[a, a], [b, b, b], [a], [c, c]]);
    //combine
    assert.deepStrictEqual(nodes.asEnumerable().combine().select(v => v.toObject()).toArray(), tree);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).select(v => v.toObject()).toArray(), tree);
    //separate
    assert.deepStrictEqual([[[a, b], c, d], [e, f], a].asEnumerable().separate().toArray(), [a, b, c, d, e, f, a]);
    assert.deepStrictEqual(tree.asEnumerable().separate().toArray(), nodes);
    assert.deepStrictEqual(tree.asEnumerable().separate(v => v.children).toArray(), nodes);
    //isSub
    assert.strictEqual([1, 2, 3].asEnumerable().isSub([5, 4, 3, 2, 1]), true);
    assert.strictEqual([1, 2, 3].asEnumerable().isSub([5, 4, 3]), false);
    //isSuper
    assert.strictEqual([5, 4, 3, 2, 1].asEnumerable().isSuper([1, 2, 3]), true);
    assert.strictEqual([5, 4, 3].asEnumerable().isSuper([1, 2, 3]), false);
    //symmetric
    assert.deepStrictEqual([1, 2, 3].asEnumerable().symmetric([3, 4, 5]).toArray(), [1, 2, 4, 5]);
    //indices
    assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().indices([0, 2, 4]).toArray(), [a, c, e]);
    assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().indices([3, 2, 3, 5, 0]).toArray(), [d, c, d, f, a]);
    //permutation
    assert.deepStrictEqual([a, b, c].asEnumerable().permutation(2).select(per => per.toArray()).toArray(), [ [a, b], [a, c], [b, a], [b, c], [c, a], [c, b] ]);
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().permutation(3).count(), 60);
    assert.deepStrictEqual([a, b, c].asEnumerable().permutation(2, true).select(per => per.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, a], [b, b], [b, c], [c, a], [c, b], [c, c] ]);
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().permutation(3, true).count(), 125);
    assert.deepStrictEqual([a, b, c].asEnumerable().permutation(4, true).count(), 81);
    //combination
    assert.deepStrictEqual([a, b, c].asEnumerable().combination(2).select(com => com.toArray()).toArray(), [ [a, b], [a, c], [b, c] ]);
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().combination(3).count(), 10);
    assert.deepStrictEqual([a, b, c].asEnumerable().combination(2, true).select(com => com.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, b], [b, c], [c, c] ]);
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().combination(3, true).count(), 35);
    assert.deepStrictEqual([a, b, c].asEnumerable().combination(4, true).count(), 15);

	//for Syntax
	assert.deepStrictEqual([...Enumerable.asEnumerable([1, 2, 3, 4, 5, 6]).where(v => v % 2 === 0)], [2, 4, 6]);

	//ITree
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).degree(), 2);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depth(), 3);

    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).degree(node => node.value === b), 1);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depth(node => node.value !== b), 2);

    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).breadthTraverse().toArray(), [ nodea, nodeb, nodee, nodec, noded ]);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depthTraverse().toArray(),   [ nodea, nodeb, nodec, noded, nodee ]);

    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).breadthSearch(node => node.value === e), nodee);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depthSearch(node => node.value === c),   nodec);

    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).breadthSubTree(node => node.value === e).select(node => node.value).toArray(), [ nodee ]);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depthSubTree(node => node.value === c).select(node => node.value).toArray(),   [ nodec ]);

    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).isBinary(), true);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).isFullBinary(), true);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).isCompleteBinary(), true);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).isPerfectBinary(), false);

    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).asBinary().preOrder().toArray(),  [ nodea, nodeb, nodec, noded, nodee ]);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).asBinary().inOrder().toArray(),   [ nodec, nodeb, noded, nodea, nodee ]);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).asBinary().postOrder().toArray(), [ nodec, noded, nodeb, nodee, nodea ]);

	(() => {
        let theTree = nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0);
        let bTree = theTree.getChild(0);
        let eTree = theTree.getChild(1);
        let cTree = bTree.getChild(0);
        let dTree = bTree.getChild(1);

        assert.strictEqual(theTree.isAncestorOf(eTree), true);
        assert.strictEqual(eTree.isDescendantOf(theTree), true);
        assert.strictEqual(dTree.isAncestorOf(eTree), false);
        assert.strictEqual(eTree.isDescendantOf(dTree), false);

        assert.deepStrictEqual(theTree.pathTo(cTree).toArray(), [ nodea, nodeb, nodec ]);

        assert.strictEqual(theTree.lowestAncestor(cTree, dTree), nodeb);
        assert.strictEqual(theTree.lowestAncestor(nodec, noded), nodeb);

        assert.strictEqual(theTree.getParentNode(nodec).value, bTree.value);

        assert.deepStrictEqual(theTree.prevAll(noded).toArray(), [ nodec ]);
        assert.deepStrictEqual(theTree.prev(noded), nodec);
        assert.deepStrictEqual(theTree.nextAll(nodec).toArray(), [ noded ]);
        assert.deepStrictEqual(theTree.next(nodec), noded);
        assert.deepStrictEqual(theTree.siblings(noded).toArray(), [ nodec ]);
        assert.deepStrictEqual(theTree.siblings(nodec).toArray(), [ noded ]);

        assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).toObject(), tree[0]);
        assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).toValue(), tree[0]);
	})();

    (() => {
        let theTree = tree[0].asEnumerable(node => node.children);
        let bTree = theTree.getChild(0);
        let eTree = theTree.getChild(1);
        let cTree = bTree.getChild(0);
        let dTree = bTree.getChild(1);

        assert.strictEqual(theTree.isAncestorOf(eTree), true);
        assert.strictEqual(eTree.isDescendantOf(theTree), true);
        assert.strictEqual(dTree.isAncestorOf(eTree), false);
        assert.strictEqual(eTree.isDescendantOf(dTree), false);

        assert.deepStrictEqual(theTree.pathTo(cTree).toArray(), [ nodea, nodeb, nodec ]);

        assert.strictEqual(theTree.lowestAncestor(cTree, dTree), nodeb);
        assert.strictEqual(theTree.lowestAncestor(nodec, noded), nodeb);

        assert.strictEqual(theTree.getParentNode(nodec).value, bTree.value);

        assert.deepStrictEqual(theTree.prevAll(noded).toArray(), [ nodec ]);
        assert.deepStrictEqual(theTree.prev(noded), nodec);
        assert.deepStrictEqual(theTree.nextAll(nodec).toArray(), [ noded ]);
        assert.deepStrictEqual(theTree.next(nodec), noded);
        assert.deepStrictEqual(theTree.siblings(noded).toArray(), [ nodec ]);
        assert.deepStrictEqual(theTree.siblings(nodec).toArray(), [ noded ]);

        assert.deepStrictEqual(tree[0].asEnumerable(node => node.children).toObject(), treeNoKey[0]);
        assert.deepStrictEqual(tree[0].asEnumerable(node => node.children).toValue(), treeNoKey[0]);
    })();

    assert.deepStrictEqual(Enumerable.toPreOrder([ a, b, c, d, e, f ]).preOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual(Enumerable.toInOrder([ a, b, c, d, e, f ]).inOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual(Enumerable.toPostOrder([ a, b, c, d, e, f ]).postOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual([ a, b, c, d, e, f ].asEnumerable().toPreOrder().preOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual([ a, b, c, d, e, f ].asEnumerable().toInOrder().inOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual([ a, b, c, d, e, f ].asEnumerable().toPostOrder().postOrder().toArray(), [ a, b, c, d, e, f ]);

    //builtins array function
	(() => {
		//splice
		let array_splice = [1, 2, 4, 3, 5, 6].asEnumerable();
		assert.deepStrictEqual(array_splice.splice(2, 2, 3, 4).toArray(), [4, 3]);
		assert.deepStrictEqual(array_splice.toArray(), [1, 2, 3, 4, 5, 6]);
		//slice
		assert.deepStrictEqual([1, 2, 3, 4, 5, 6].asEnumerable().slice(2, 5).toArray(), [3, 4, 5]);
		//copyWithin
		let array_copyWithin = ["alpha", "beta", "copy", "delta"].asEnumerable();
		assert.deepStrictEqual(array_copyWithin.copyWithin(1, 2, 3).toArray(), ["alpha", "copy", "copy", "delta"]);
		assert.deepStrictEqual(array_copyWithin.toArray(), ["alpha", "copy", "copy", "delta"]);
		array_copyWithin = ['alpha', 'bravo', 'charlie', 'delta'].asEnumerable();
		assert.deepStrictEqual(array_copyWithin.copyWithin(2, 0).toArray(), ["alpha", "bravo", "alpha", "bravo"]);
		assert.deepStrictEqual(array_copyWithin.toArray(), ["alpha", "bravo", "alpha", "bravo"]);
		//every
		assert.strictEqual([12, 5, 8, 130, 44].every(element => element >= 10), false);
		assert.strictEqual([12, 54, 18, 130, 44].every(element => element >= 10), true);
		//fill
		let array_fill = [1, 2, 3].asEnumerable();
		assert.deepStrictEqual(array_fill.fill(4).toArray(), [4, 4, 4]);
		assert.deepStrictEqual(array_fill.toArray(), [4, 4, 4]);
		array_fill = [1, 2, 3].asEnumerable();
		assert.deepStrictEqual(array_fill.fill(4, 1).toArray(), [1, 4, 4]);
		assert.deepStrictEqual(array_fill.toArray(), [1, 4, 4]);
		array_fill = [1, 2, 3].asEnumerable();
		assert.deepStrictEqual(array_fill.fill(4, 1, 2).toArray(), [1, 4, 3]);
		assert.deepStrictEqual(array_fill.toArray(), [1, 4, 3]);
		//filter
		assert.deepStrictEqual([12, 5, 8, 130, 44].asEnumerable().filter(value => value >= 10).toArray(), [12, 130, 44]);
		//find
		assert.strictEqual([12, 5, 8, 130, 44].asEnumerable().find(element => element >= 15), 130);
		//findIndex
		assert.strictEqual([12, 5, 8, 130, 44].asEnumerable().findIndex(element => element >= 15), 3);
		//forEach
		//ignore
		//indices
        assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().indices([0, 2, 4]).toArray(), [a, c, e]);
        assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().indices([3, 2, 3, 5, 0]).toArray(), [d, c, d, f, a]);
		//includes
		assert.strictEqual([1, 2, 3].asEnumerable().includes(2), true);
		assert.strictEqual([1, 2, 3].asEnumerable().includes(4), false);
		//indexOf
		assert.strictEqual([2, 9, 9].asEnumerable().indexOf(2), 0);
		assert.strictEqual([2, 9, 9].asEnumerable().indexOf(7), -1);
		//lastIndexOf
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2), 3);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(7), -1);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2, 3), 3);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2, 2), 0);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2, -2), 0);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2, -1), 3);
		//findLast
		assert.strictEqual([2, 5, 9, 2].asEnumerable().findLast(element => element % 2 === 1), 9);
		//map
		assert.deepStrictEqual([1, 5, 10, 15].asEnumerable().map(x => x * 2).toArray(), [2, 10, 20, 30]);
		assert.deepStrictEqual([1, 4, 9].asEnumerable().map(x => Math.sqrt(x)).toArray(), [1, 2, 3]);
		//reduce
		assert.strictEqual([0, 1, 2, 3].asEnumerable().reduce((acc, val) => acc + val, 0), 6);
		let array_reduce1 = [
			[0, 1],
			[2, 3],
			[4, 5]
		].asEnumerable();
		let array_reduce2 = [0, [1, [2, [3, [4, [5, [6]]]]]]].asEnumerable();
		let flatten_reduce = (arr) => {
			return arr.reduce(
				(acc, val) => {
					return acc.concat(Array.isArray(val) ? flatten_reduce(val) : val)
				}, []
			);
		};
		assert.deepStrictEqual(flatten_reduce(array_reduce1), [0, 1, 2, 3, 4, 5]);
		assert.deepStrictEqual(flatten_reduce(array_reduce2), [0, 1, 2, 3, 4, 5, 6]);
		//reduceRight
		assert.deepStrictEqual([
			[0, 1],
			[2, 3],
			[4, 5]
		].asEnumerable().reduceRight((a, b) => a.concat(b), []), [4, 5, 2, 3, 0, 1]);
		//some
		assert.strictEqual([2, 5, 8, 1, 4].asEnumerable().some(element => element >= 10), false);
		assert.strictEqual([12, 5, 8, 1, 4].asEnumerable().some(element => element >= 10), true);
		//sort
		let array_sort = ['cherries', 'apples', 'bananas'].asEnumerable();
		assert.deepStrictEqual(array_sort.sort().toArray(), ['apples', 'bananas', 'cherries']);
		assert.deepStrictEqual(array_sort.toArray(), ['apples', 'bananas', 'cherries']);
		//pop
		let array_pop = [1, 2, 3].asEnumerable();
		assert.strictEqual(array_pop.pop(), 3);
		assert.deepStrictEqual(array_pop.toArray(), [1, 2]);
		//push
		let array_push = [1, 2, 3].asEnumerable();
		assert.strictEqual(array_push.push(4), 4);
		assert.deepStrictEqual(array_push.toArray(), [1, 2, 3, 4]);
		//shift
		let array_shift = [1, 2, 3].asEnumerable();
		assert.strictEqual(array_shift.shift(), 1);
		assert.deepStrictEqual(array_shift.toArray(), [2, 3]);
		//unshift
		let array_unshift = [1, 2, 3].asEnumerable();
		assert.strictEqual(array_unshift.unshift(4), 4);
		assert.deepStrictEqual(array_unshift.toArray(), [4, 1, 2, 3]);

		//heap
		let array_heap = [2, 3, 7, 8, 1, 5, 6].asEnumerable();
		let array_max_heap = array_heap.toMaxHeap();
		assert.deepStrictEqual(array_max_heap.toArray(), [ 8, 7, 6, 2, 1, 3, 5]);
		assert.strictEqual(array_max_heap.push(5), 8);
		assert.strictEqual(array_max_heap.pop(), 8);
		assert.strictEqual(array_max_heap.push(9), 8);
		assert.strictEqual(array_max_heap.pop(), 9);
		assert.strictEqual(array_max_heap.push(0), 8);
		assert.strictEqual(array_max_heap.pop(), 7);
		let array_min_heap = array_heap.toMinHeap();
		assert.deepStrictEqual(array_min_heap.toArray(), [ 1, 2, 5, 8, 3, 7, 6]);
		assert.strictEqual(array_min_heap.push(5), 8);
		assert.strictEqual(array_min_heap.pop(), 1);
		assert.strictEqual(array_min_heap.push(9), 8);
		assert.strictEqual(array_min_heap.pop(), 2);
		assert.strictEqual(array_min_heap.push(0), 8);
		assert.strictEqual(array_min_heap.pop(), 0);

		//top
		let array_top = [3,1,5,7,4,2,9,0,6,8].asEnumerable();
		assert.deepStrictEqual(array_top.top(4).toArray(), [0,1,2,3]);
		//bottom
		let array_bottom = [3,1,5,7,4,2,9,0,6,8].asEnumerable();
		assert.deepStrictEqual(array_bottom.bottom(4).toArray(), [4,5,6,7,8,9]);
		//orderBy+take
		let array_orderBy_take = [3,1,5,7,4,2,9,0,6,8].asEnumerable();
		assert.deepStrictEqual(array_orderBy_take.orderBy().take(4).toArray(), [0,1,2,3]);
		//orderBy+thenBy+take
		let array_orderBy_thenBy_take = [13,1,15,7,4,12,9,10,16,8].asEnumerable();
		assert.deepStrictEqual(array_orderBy_thenBy_take.orderBy(v => v % 5).thenBy().take(5).toArray(), [10,15,1,16,7]);

		//random
		let random_base = [1,2,3,4,5,6].asEnumerable();
		assert.isStrictTrue(random_base.contains(random_base.random()));
		assert.isStrictTrue(random_base.contains(random_base.randomProbability()));
		assert.isStrictTrue(random_base.contains(random_base.randomProbability(t => 10 - t)));

		//getEnumerator
		let array_getEnumerator = [1,2,3,4,5,6];
		let enumerator = [...array_getEnumerator].asEnumerable().getEnumerator();
		for(let gei = 0; enumerator.moveNext(); gei++) {
			assert.strictEqual(enumerator.current, array_getEnumerator[gei]);
		}
		enumerator.reset();
		while(enumerator.moveNext()) {
			assert.strictEqual(enumerator.current, array_getEnumerator.shift());
		}
		assert.strictEqual(array_getEnumerator.length, 0);
	})();

	assert.deepStrictEqual(Enumerable.toDictionary(['a', 'b', 'c']).toObject(), {
		a: 'a',
		b: 'b',
		c: 'c'
	});
	assert.deepStrictEqual(Enumerable.toDictionary([{
		key: 'apple',
		value: 'red'
	}, {
		key: 'orange',
		value: 'yellow'
	}, {
		key: 'watermelon',
		value: 'green'
	}], v => v.key, v => v.value).toObject(), {
		apple: 'red',
		orange: 'yellow',
		watermelon: 'green'
	});

	assert.deepStrictEqual(Enumerable.toLookup(['a', 'b', 'a', 'c']).toObject(), {
		a: ['a', 'a'],
		b: ['b'],
		c: ['c']
	});
	assert.deepStrictEqual(Enumerable.toLookup([{
		key: 'red',
		value: 'apple'
	}, {
		key: 'yellow',
		value: 'orange'
	}, {
		key: 'green',
		value: 'watermelon'
	}, {
		key: 'yellow',
		value: 'pear'
	}], v => v.key, v => v.value).toObject(), {
		red: ['apple'],
		yellow: ['orange', 'pear'],
		green: ['watermelon']
	});

	assert.deepStrictEqual(Enumerable([1, 2, 3]).toArray(), [1, 2, 3]);

	assert.deepStrictEqual(Enumerable.where([{a:1, b:2, c:3}, {a:3, b:2, c:3}, {a:1, b:5, c:3}], {b:5, c:3}).toArray(), [{a:1, b:5, c:3}]);

	class TestArray { *[Symbol.iterator]() { yield 0; } }

	Enumerable.typeAs(TestArray, Enumerable.types.Array);

	assert.strictEqual(new TestArray().asEnumerable().elementAt(0), 0);

    global.Enumerable = require('../src/linq');
    global.Enumerable.noConflict();
    global.Enumerable.noConflict(true);

    assert.deepStrictEqual(({ key: 1, value: 'a' }).asEnumerable().select(v => v.toObject()).toArray(), [ { key: 'key', value: 1 }, { key: 'value', value: 'a' }]);

	console.log(Enumerable.version + ' test successful!');
};