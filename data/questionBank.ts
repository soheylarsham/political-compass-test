
// The `questionBank` constant holds raw data without `id` and `enabled` properties.
// These are added during initialization in `useQuestionBank.js`.
export const questionBank = {
  1: [
    {
        question: { fa: 'به نظر شما، نقش دولت در تضمین عدالت اجتماعی چیست؟', en: 'In your opinion, what is the government\'s role in ensuring social justice?' },
        options: [
            { text: { fa: 'دولت باید فعالانه ثروت را بازتوزیع کند تا نابرابری کاهش یابد.', en: 'The government should actively redistribute wealth to reduce inequality.' }, economicScore: -8, socialScore: -2 },
            { text: { fa: 'دولت باید فرصت‌های برابر برای همه فراهم کند، اما در بازار دخالت نکند.', en: 'The government should provide equal opportunities for all, but not interfere in the market.' }, economicScore: 2, socialScore: -4 },
            { text: { fa: 'عدالت اجتماعی یک مسئولیت فردی است، نه وظیفه دولت.', en: 'Social justice is an individual responsibility, not the government\'s duty.' }, economicScore: 7, socialScore: 3 },
            { text: { fa: 'تمرکز بر عدالت، نظم اجتماعی را به خطر می‌اندازد؛ اولویت با قانون و اقتدار است.', en: 'Focusing on justice endangers social order; the priority is law and authority.' }, economicScore: 5, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'مهم‌ترین اصل در سیاست خارجی یک کشور کدام است؟', en: 'What is the most important principle in a country\'s foreign policy?' },
        options: [
            { text: { fa: 'همکاری بین‌المللی و پایبندی به توافقات جهانی، حتی اگر به قیمت بخشی از حاکمیت ملی باشد.', en: 'International cooperation and adherence to global agreements, even at the cost of some national sovereignty.' }, economicScore: -4, socialScore: -7 },
            { text: { fa: 'اولویت دادن به منافع ملی، اما از طریق دیپلماسی و مشارکت در نهادهای بین‌المللی.', en: 'Prioritizing national interests, but through diplomacy and participation in international institutions.' }, economicScore: 2, socialScore: -2 },
            { text: { fa: 'حفظ استقلال و منافع ملی به هر قیمتی، حتی اگر به انزوای کشور منجر شود.', en: 'Preserving national independence and interests at all costs, even if it leads to isolation.' }, economicScore: 5, socialScore: 6 },
            { text: { fa: 'گسترش نفوذ و قدرت کشور از طریق ابزارهای نظامی و اقتصادی در سطح جهان.', en: 'Expanding the country\'s influence and power through military and economic tools globally.' }, economicScore: 8, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'کدام جمله رابطه فرد و جامعه را بهتر توصیف می‌کند؟', en: 'Which sentence best describes the relationship between the individual and society?' },
        options: [
            { text: { fa: 'فرد کاملاً محصول جامعه است و هویت او توسط ساختارهای اجتماعی شکل می‌گیرد.', en: 'The individual is entirely a product of society, and their identity is shaped by social structures.' }, economicScore: -6, socialScore: 5 },
            { text: { fa: 'جامعه بستر رشد فرد است و باید از او حمایت کند.', en: 'Society is the foundation for individual growth and should support the individual.' }, economicScore: -5, socialScore: -3 },
            { text: { fa: 'فرد باید مستقل باشد و برای موفقیت تنها به توانایی‌های خود تکیه کند.', en: 'The individual should be independent and rely solely on their own abilities for success.' }, economicScore: 8, socialScore: -5 },
            { text: { fa: 'فرد باید در خدمت جامعه و اهداف جمعی باشد.', en: 'The individual must serve society and collective goals.' }, economicScore: 3, socialScore: 7 }
        ]
    },
    {
        question: { fa: 'دیدگاه شما در مورد سیستم‌های اقتصادی مبتنی بر برنامه‌ریزی مرکزی (مانند مارکسیسم) چیست؟', en: 'What is your view on centrally planned economic systems (like Marxism)?' },
        options: [
            { text: { fa: 'این سیستم‌ها در تئوری عادلانه‌ترین راه برای توزیع منابع هستند.', en: 'In theory, these systems are the fairest way to distribute resources.' }, economicScore: -9, socialScore: -1 },
            { text: { fa: 'برخی از ایده‌های آن‌ها مانند خدمات عمومی گسترده، قابل استفاده هستند.', en: 'Some of their ideas, like extensive public services, are applicable.' }, economicScore: -5, socialScore: 1 },
            { text: { fa: 'این سیستم‌ها به دلیل سرکوب آزادی فردی و ناکارآمدی، همیشه شکست می‌خورند.', en: 'These systems always fail due to the suppression of individual freedom and inefficiency.' }, economicScore: 7, socialScore: -3 },
            { text: { fa: 'این سیستم‌ها ذاتاً مخرب هستند و به استبداد منجر می‌شوند.', en: 'These systems are inherently destructive and lead to tyranny.' }, economicScore: 8, socialScore: 6 }
        ]
    },
    {
        question: { fa: 'دولت باید تا چه حد در اقتصاد دخالت کند؟', en: 'To what extent should the government intervene in the economy?' },
        options: [
            { text: { fa: 'دولت باید مالکیت صنایع کلیدی را در دست داشته باشد و بازار را کاملاً کنترل کند.', en: 'The government should own key industries and fully control the market.' }, economicScore: -10, socialScore: 7 },
            { text: { fa: 'دولت باید بازار را برای جلوگیری از شکست و بی‌عدالتی، به شدت قانون‌گذاری کند.', en: 'The government should heavily regulate the market to prevent failure and injustice.' }, economicScore: -6, socialScore: 2 },
            { text: { fa: 'دولت فقط باید از حقوق مالکیت و اجرای قراردادها اطمینان حاصل کند.', en: 'The government should only ensure property rights and contract enforcement.' }, economicScore: 8, socialScore: -6 },
            { text: { fa: 'هیچ‌گونه دخالتی از سوی دولت پذیرفته نیست و بازار باید کاملاً آزاد باشد.', en: 'No government intervention is acceptable; the market should be completely free.' }, economicScore: 10, socialScore: -8 }
        ]
    },
    {
        question: { fa: 'حفاظت از محیط زیست در برابر رشد اقتصادی چه اولویتی دارد؟', en: 'What priority should environmental protection have over economic growth?' },
        options: [
            { text: { fa: 'حفاظت از محیط زیست باید به هر قیمتی، حتی به بهای کاهش رشد اقتصادی، در اولویت باشد.', en: 'Environmental protection should be the priority at any cost, even at the expense of economic growth.' }, economicScore: -5, socialScore: -6 },
            { text: { fa: 'می‌توان با نوآوری و فناوری‌های سبز، به رشد اقتصادی پایدار و سازگار با محیط زیست دست یافت.', en: 'Sustainable and eco-friendly economic growth can be achieved through innovation and green technologies.' }, economicScore: -1, socialScore: -3 },
            { text: { fa: 'رشد اقتصادی مهم‌تر است، زیرا منابع لازم برای حل مشکلات زیست‌محیطی را در آینده فراهم می‌کند.', en: 'Economic growth is more important, as it provides the resources to solve environmental problems in the future.' }, economicScore: 7, socialScore: 4 },
            { text: { fa: 'نگرانی‌های زیست‌محیطی اغراق‌شده هستند و نباید مانع پیشرفت اقتصادی شوند.', en: 'Environmental concerns are exaggerated and should not hinder economic progress.' }, economicScore: 9, socialScore: 5 }
        ]
    },
    {
        question: { fa: 'آزادی بیان باید تا کجا محدود شود؟', en: 'To what extent should freedom of speech be limited?' },
        options: [
            { text: { fa: 'آزادی بیان باید مطلق باشد و هیچ محدودیتی نداشته باشد.', en: 'Freedom of speech should be absolute and have no limits.' }, economicScore: 1, socialScore: -10 },
            { text: { fa: 'فقط در مواردی که به طور مستقیم به خشونت منجر شود باید محدود شود.', en: 'It should only be limited in cases that directly incite violence.' }, economicScore: -1, socialScore: -7 },
            { text: { fa: 'گفتار نفرت‌پراکن و توهین به مقدسات نباید شامل آزادی بیان شود.', en: 'Hate speech and blasphemy should not be protected by freedom of speech.' }, economicScore: -3, socialScore: 5 },
            { text: { fa: 'دولت باید برای حفظ وحدت و اخلاق جامعه، محتوای رسانه‌ها را کنترل کند.', en: 'The government should control media content to preserve social unity and morality.' }, economicScore: 4, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'بهترین رویکرد در قبال مهاجرت چیست؟', en: 'What is the best approach to immigration?' },
        options: [
            { text: { fa: 'مرزها باید باز باشند و جابجایی انسان‌ها آزاد باشد.', en: 'Borders should be open, and the movement of people should be free.' }, economicScore: -3, socialScore: -8 },
            { text: { fa: 'مهاجرت کنترل‌شده بر اساس نیازهای اقتصادی و با تأکید بر ادغام فرهنگی.', en: 'Controlled immigration based on economic needs with an emphasis on cultural integration.' }, economicScore: 2, socialScore: 1 },
            { text: { fa: 'محدودیت شدید مهاجرت برای حفظ هویت فرهنگی و امنیت ملی.', en: 'Strict immigration limits to preserve cultural identity and national security.' }, economicScore: 6, socialScore: 7 },
            { text: { fa: 'توقف کامل مهاجرت و اخراج مهاجران غیرقانونی.', en: 'A complete halt to immigration and deportation of illegal immigrants.' }, economicScore: 8, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'خدمات درمانی باید چگونه ارائه شود؟', en: 'How should healthcare services be provided?' },
        options: [
            { text: { fa: 'کاملاً دولتی و رایگان برای همه شهروندان.', en: 'Completely state-funded and free for all citizens.' }, economicScore: -9, socialScore: -2 },
            { text: { fa: 'سیستم ترکیبی با بیمه همگانی دولتی و خدمات خصوصی.', en: 'A hybrid system with universal public insurance and private services.' }, economicScore: -4, socialScore: -1 },
            { text: { fa: 'عمدتاً خصوصی و مبتنی بر بازار، با کمک‌های دولتی برای نیازمندان.', en: 'Mainly private and market-based, with government assistance for the needy.' }, economicScore: 6, socialScore: 2 },
            { text: { fa: 'کاملاً خصوصی و بدون دخالت دولت.', en: 'Completely private with no government involvement.' }, economicScore: 9, socialScore: -4 }
        ]
    },
    {
        question: { fa: 'نقش سنت و مذهب در قانون‌گذاری چه باید باشد؟', en: 'What should be the role of tradition and religion in lawmaking?' },
        options: [
            { text: { fa: 'قوانین باید کاملاً سکولار و بر اساس عقلانیت مدرن باشند.', en: 'Laws should be completely secular and based on modern rationality.' }, economicScore: -2, socialScore: -9 },
            { text: { fa: 'سنت و مذهب می‌توانند به عنوان یک منبع الهام اخلاقی عمل کنند، اما نباید مبنای قانون باشند.', en: 'Tradition and religion can serve as a source of moral inspiration but should not be the basis of law.' }, economicScore: 0, socialScore: -5 },
            { text: { fa: 'قوانین باید بازتاب‌دهنده ارزش‌های سنتی و مذهبی اکثریت جامعه باشند.', en: 'Laws should reflect the traditional and religious values of the majority of society.' }, economicScore: 3, socialScore: 7 },
            { text: { fa: 'قوانین باید مستقیماً از متون مقدس و سنت‌های دینی استخراج شوند.', en: 'Laws should be derived directly from sacred texts and religious traditions.' }, economicScore: 5, socialScore: 10 }
        ]
    },
    {
        question: { fa: 'معتقدید دولت باید نقش کمی در اقتصاد ایفا کند؟', en: 'Do you believe the government should play a minimal role in the economy?' },
        options: [
            { text: { fa: 'کاملا موافقم، بازار آزاد بهترین راه تخصیص منابع است.', en: 'Strongly agree, the free market is the best way to allocate resources.' }, economicScore: 9, socialScore: -4 },
            { text: { fa: 'موافقم، دخالت دولت باید به حداقل ممکن محدود شود.', en: 'Agree, government intervention should be limited to the minimum possible.' }, economicScore: 5, socialScore: -2 },
            { text: { fa: 'مخالفم، دولت برای اصلاح شکست‌های بازار و تضمین عدالت باید دخالت کند.', en: 'Disagree, the government must intervene to correct market failures and ensure justice.' }, economicScore: -5, socialScore: 2 },
            { text: { fa: 'کاملا مخالفم، دولت باید اقتصاد را برای رسیدن به اهداف اجتماعی کنترل کند.', en: 'Strongly disagree, the government should control the economy to achieve social goals.' }, economicScore: -9, socialScore: 5 }
        ]
    },
    {
        question: { fa: 'ارزش‌ها و هنجارهای فرهنگی سنتی چقدر برایتان مهم است؟', en: 'How important are traditional cultural values and norms to you?' },
        options: [
            { text: { fa: 'بسیار مهم است و باید اساس جامعه باشند.', en: 'Very important, and they should be the foundation of society.' }, economicScore: 4, socialScore: 9 },
            { text: { fa: 'مهم هستند اما باید با شرایط روز تطبیق داده شوند.', en: 'They are important but must be adapted to modern times.' }, economicScore: 2, socialScore: 4 },
            { text: { fa: 'اهمیت کمی دارند و نوآوری فرهنگی ارجح است.', en: 'They have little importance; cultural innovation is preferable.' }, economicScore: -2, socialScore: -5 },
            { text: { fa: 'هیچ اهمیتی ندارند و مانع پیشرفت هستند.', en: 'They have no importance and are an obstacle to progress.' }, economicScore: -3, socialScore: -8 }
        ]
    },
    {
        question: { fa: 'موافق افزایش برنامه‌های رفاهی اجتماعی (مانند بیمه بیکاری و کمک‌هزینه مسکن) هستید؟', en: 'Do you support increasing social welfare programs (like unemployment benefits and housing assistance)?' },
        options: [
            { text: { fa: 'کاملا موافقم، این وظیفه دولت است که از همه شهروندان حمایت کند.', en: 'Strongly agree, it is the government\'s duty to support all citizens.' }, economicScore: -8, socialScore: -2 },
            { text: { fa: 'موافقم، اما این برنامه‌ها باید کارآمد و هدفمند باشند.', en: 'Agree, but these programs should be efficient and targeted.' }, economicScore: -4, socialScore: 0 },
            { text: { fa: 'مخالفم، این برنامه‌ها باعث تنبلی و وابستگی به دولت می‌شوند.', en: 'Disagree, these programs encourage laziness and dependency on the government.' }, economicScore: 6, socialScore: 3 },
            { text: { fa: 'کاملا مخالفم، این مسئولیت فردی و خانوادگی است نه دولتی.', en: 'Strongly disagree, this is an individual and family responsibility, not the government\'s.' }, economicScore: 8, socialScore: 5 }
        ]
    },
    {
        question: { fa: 'فکر می‌کنید تغییرات اقلیمی باید در اولویت سیاست‌های دولتی باشد؟', en: 'Do you think climate change should be a priority for government policies?' },
        options: [
            { text: { fa: 'بله، این یک بحران وجودی است و باید اقدام فوری صورت گیرد.', en: 'Yes, it is an existential crisis, and immediate action must be taken.' }, economicScore: -5, socialScore: -6 },
            { text: { fa: 'بله، اما نباید به اقتصاد آسیب بزند.', en: 'Yes, but it should not harm the economy.' }, economicScore: -2, socialScore: -2 },
            { text: { fa: 'خیر، مسائل اقتصادی فوری‌تر و مهم‌تر هستند.', en: 'No, economic issues are more urgent and important.' }, economicScore: 6, socialScore: 4 },
            { text: { fa: 'خیر، تغییرات اقلیمی یک پدیده طبیعی است و نگرانی‌ها اغراق شده‌اند.', en: 'No, climate change is a natural phenomenon, and concerns are exaggerated.' }, economicScore: 8, socialScore: 6 }
        ]
    },
    {
        question: { fa: 'نظر شما درباره سیاست‌های مهاجرت چیست؟', en: 'What is your opinion on immigration policies?' },
        options: [
            { text: { fa: 'باید سیاست درهای باز را اتخاذ کرد.', en: 'We should adopt an open-door policy.' }, economicScore: -4, socialScore: -8 },
            { text: { fa: 'باید مهاجران متخصص و تحصیل‌کرده را جذب کرد.', en: 'We should attract skilled and educated immigrants.' }, economicScore: 2, socialScore: -1 },
            { text: { fa: 'باید قوانین سخت‌گیرانه‌ای برای کنترل ورود مهاجران وضع کرد.', en: 'Strict laws should be enacted to control the entry of immigrants.' }, economicScore: 6, socialScore: 7 },
            { text: { fa: 'باید مرزها را کاملا بست و مهاجرت را متوقف کرد.', en: 'Borders should be completely closed, and immigration stopped.' }, economicScore: 8, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'معتقدید سوسیالیسم یا سرمایه‌داری بهتر به نفع جامعه است؟', en: 'Do you believe socialism or capitalism better serves society?' },
        options: [
            { text: { fa: 'سوسیالیسم، زیرا برابری و عدالت اجتماعی را در اولویت قرار می‌دهد.', en: 'Socialism, because it prioritizes equality and social justice.' }, economicScore: -9, socialScore: -1 },
            { text: { fa: 'یک اقتصاد ترکیبی که بهترین ویژگی‌های هر دو را داشته باشد.', en: 'A mixed economy that combines the best features of both.' }, economicScore: -3, socialScore: 0 },
            { text: { fa: 'سرمایه‌داری، زیرا به نوآوری، رشد و آزادی فردی منجر می‌شود.', en: 'Capitalism, because it leads to innovation, growth, and individual freedom.' }, economicScore: 8, socialScore: -3 },
            { text: { fa: 'سرمایه‌داری لسه فر (Laissez-faire)، بدون هیچ دخالتی از سوی دولت.', en: 'Laissez-faire capitalism, with no government intervention whatsoever.' }, economicScore: 10, socialScore: -6 }
        ]
    },
    {
        question: { fa: 'چه میزان حاکمیت ملی برایتان اهمیت دارد؟', en: 'How important is national sovereignty to you?' },
        options: [
            { text: { fa: 'حاکمیت ملی یک اصل مقدس است و نباید به هیچ نهاد بین‌المللی واگذار شود.', en: 'National sovereignty is a sacred principle and should not be ceded to any international body.' }, economicScore: 6, socialScore: 9 },
            { text: { fa: 'مهم است، اما همکاری بین‌المللی برای حل مشکلات جهانی ضروری است.', en: 'It is important, but international cooperation is necessary to solve global problems.' }, economicScore: 2, socialScore: 2 },
            { text: { fa: 'در دنیای امروز مفهوم کم‌رنگی است و باید به سمت حاکمیت جهانی حرکت کرد.', en: 'It is a faded concept in today\'s world; we should move towards global governance.' }, economicScore: -5, socialScore: -8 },
            { text: { fa: 'اهمیتی ندارد، منافع اقتصادی و فردی بر منافع ملی ارجحیت دارد.', en: 'It doesn\'t matter; economic and individual interests take precedence over national interests.' }, economicScore: 3, socialScore: -7 }
        ]
    },
    {
        question: { fa: 'آیا باید دولت پلتفرم‌های شبکه‌های اجتماعی را برای مقابله با اخبار جعلی تنظیم کند؟', en: 'Should the government regulate social media platforms to combat fake news?' },
        options: [
            { text: { fa: 'بله، دولت مسئولیت دارد از شهروندان در برابر اطلاعات غلط محافظت کند.', en: 'Yes, the government has a responsibility to protect citizens from misinformation.' }, economicScore: -3, socialScore: 7 },
            { text: { fa: 'بله، اما باید توسط یک نهاد مستقل و غیردولتی انجام شود.', en: 'Yes, but it should be done by an independent, non-governmental body.' }, economicScore: -1, socialScore: 2 },
            { text: { fa: 'خیر، این کار به سانسور منجر می‌شود و آزادی بیان را محدود می‌کند.', en: 'No, this would lead to censorship and limit freedom of expression.' }, economicScore: 4, socialScore: -7 },
            { text: { fa: 'خیر، خود پلتفرم‌ها و کاربران مسئول مدیریت محتوا هستند.', en: 'No, the platforms themselves and the users are responsible for content management.' }, economicScore: 6, socialScore: -5 }
        ]
    },
    {
        question: { fa: 'از ایده ارائه خدمات بهداشتی همگانی و رایگان توسط دولت حمایت می‌کنید؟', en: 'Do you support the idea of universal and free healthcare provided by the government?' },
        options: [
            { text: { fa: 'کاملا حمایت می‌کنم، سلامت حق همه شهروندان است.', en: 'I fully support it; health is a right for all citizens.' }, economicScore: -9, socialScore: -2 },
            { text: { fa: 'حمایت می‌کنم، اما باید با مشارکت بخش خصوصی باشد.', en: 'I support it, but it should involve the private sector.' }, economicScore: -4, socialScore: 0 },
            { text: { fa: 'مخالفم، سیستم باید کاملا خصوصی و مبتنی بر بازار باشد.', en: 'I oppose it; the system should be completely private and market-based.' }, economicScore: 8, socialScore: 3 },
            { text: { fa: 'کاملا مخالفم، دخالت دولت کیفیت خدمات را پایین می‌آورد.', en: 'I strongly oppose it; government involvement lowers the quality of services.' }, economicScore: 9, socialScore: 1 }
        ]
    },
    {
        question: { fa: 'نظر شما درباره نقش دین در سیاست چیست؟', en: 'What is your opinion on the role of religion in politics?' },
        options: [
            { text: { fa: 'دین و دولت باید کاملا از هم جدا باشند.', en: 'Religion and state should be completely separate.' }, economicScore: -1, socialScore: -9 },
            { text: { fa: 'ارزش‌های دینی می‌توانند الهام‌بخش سیاستمداران باشند اما نباید مبنای قانون باشند.', en: 'Religious values can inspire politicians but should not be the basis of law.' }, economicScore: 1, socialScore: -4 },
            { text: { fa: 'قوانین کشور باید با اصول دینی اکثریت مردم هماهنگ باشد.', en: 'The country\'s laws should be in harmony with the religious principles of the majority.' }, economicScore: 4, socialScore: 7 },
            { text: { fa: 'کشور باید بر اساس قوانین دینی اداره شود.', en: 'The country should be governed according to religious laws.' }, economicScore: 6, socialScore: 10 }
        ]
    },
    {
        question: { fa: 'چه میزان به سیاست‌های امنیتی و نظامی کشور اعتماد دارید؟', en: 'How much do you trust the country\'s security and military policies?' },
        options: [
            { text: { fa: 'اعتماد کامل دارم و معتقدم برای حفظ امنیت ضروری هستند.', en: 'I have full trust and believe they are necessary for maintaining security.' }, economicScore: 5, socialScore: 8 },
            { text: { fa: 'تا حدودی اعتماد دارم اما نگران نقض حریم خصوصی هستم.', en: 'I have some trust but am concerned about privacy violations.' }, economicScore: 2, socialScore: 2 },
            { text: { fa: 'اعتماد کمی دارم و فکر می‌کنم بیش از حد قدرت دارند.', en: 'I have little trust and think they have too much power.' }, economicScore: -4, socialScore: -5 },
            { text: { fa: 'اصلا اعتماد ندارم و آن‌ها را تهدیدی برای آزادی‌های مدنی می‌دانم.', en: 'I have no trust at all and consider them a threat to civil liberties.' }, economicScore: -6, socialScore: -8 }
        ]
    },
    {
        question: { fa: 'آیا معتقدید نظارت دولتی بر فعالیت‌های اقتصادی لازم است؟', en: 'Do you believe government oversight of economic activities is necessary?' },
        options: [
            { text: { fa: 'بله، نظارت شدید برای جلوگیری از فساد و انحصار ضروری است.', en: 'Yes, strict oversight is necessary to prevent corruption and monopoly.' }, economicScore: -8, socialScore: 4 },
            { text: { fa: 'بله، اما فقط در حد قانون‌گذاری‌های کلی و شفاف.', en: 'Yes, but only to the extent of general and transparent regulations.' }, economicScore: -3, socialScore: 1 },
            { text: { fa: 'خیر، بازار باید خود را تنظیم کند و نظارت دولتی مانع رشد است.', en: 'No, the market should regulate itself, and government oversight hinders growth.' }, economicScore: 8, socialScore: -4 },
            { text: { fa: 'کاملا خیر، هرگونه نظارتی به ناکارآمدی و فساد منجر می‌شود.', en: 'Absolutely not, any oversight leads to inefficiency and corruption.' }, economicScore: 10, socialScore: -6 }
        ]
    },
    {
        question: { fa: 'چه میزان از آزادی‌های فردی (مانند سبک زندگی، پوشش و...) برایتان اهمیت دارد؟', en: 'How important are individual freedoms (like lifestyle, dress, etc.) to you?' },
        options: [
            { text: { fa: 'بسیار زیاد، این مهم‌ترین ارزش در یک جامعه است.', en: 'Very important, it is the most important value in a society.' }, economicScore: 2, socialScore: -10 },
            { text: { fa: 'زیاد، تا زمانی که به دیگران آسیب نرساند.', en: 'Important, as long as it does not harm others.' }, economicScore: 0, socialScore: -6 },
            { text: { fa: 'تا حدودی، اما ارزش‌های جامعه و نظم عمومی مهم‌تر هستند.', en: 'Somewhat, but societal values and public order are more important.' }, economicScore: 3, socialScore: 5 },
            { text: { fa: 'کم، افراد باید از هنجارهای جامعه پیروی کنند.', en: 'Not very; individuals should follow societal norms.' }, economicScore: 5, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'به نظر شما انتخابات باید به صورت اجباری باشد؟', en: 'In your opinion, should voting be mandatory?' },
        options: [
            { text: { fa: 'بله، این یک وظیفه مدنی است و مشارکت همه را تضمین می‌کند.', en: 'Yes, it is a civic duty and ensures everyone\'s participation.' }, economicScore: -4, socialScore: 7 },
            { text: { fa: 'شاید، می‌تواند به افزایش مشروعیت دموکراتیک کمک کند.', en: 'Maybe, it could help increase democratic legitimacy.' }, economicScore: -2, socialScore: 3 },
            { text: { fa: 'خیر، رأی دادن یک حق است نه یک وظیفه و باید اختیاری باشد.', en: 'No, voting is a right, not a duty, and should be optional.' }, economicScore: 3, socialScore: -5 },
            { text: { fa: 'کاملا خیر، این کار نقض آزادی فردی است.', en: 'Absolutely not, it is a violation of individual freedom.' }, economicScore: 5, socialScore: -8 }
        ]
    },
    {
        question: { fa: 'نابرابری اقتصادی را بیشتر ناشی از تلاش فردی یا ساختارهای اجتماعی می‌دانید؟', en: 'Do you see economic inequality as a result of individual effort or social structures?' },
        options: [
            { text: { fa: 'تقریبا به طور کامل ناشی از ساختارهای ناعادلانه اجتماعی است.', en: 'Almost entirely the result of unjust social structures.' }, economicScore: -9, socialScore: -2 },
            { text: { fa: 'عوامل اجتماعی نقش بزرگ‌تری دارند.', en: 'Social factors play a larger role.' }, economicScore: -6, socialScore: 0 },
            { text: { fa: 'تلاش و استعداد فردی نقش مهم‌تری دارد.', en: 'Individual effort and talent play a more important role.' }, economicScore: 7, socialScore: 2 },
            { text: { fa: 'تقریبا به طور کامل به تلاش و انتخاب‌های فردی بستگی دارد.', en: 'Almost entirely depends on individual effort and choices.' }, economicScore: 9, socialScore: 4 }
        ]
    },
    {
        question: { fa: 'میزان تاثیرگذاری شرکت‌های بزرگ در سیاست‌های کشور چقدر است؟', en: 'How much influence do large corporations have on the country\'s policies?' },
        options: [
            { text: { fa: 'بسیار زیاد، آن‌ها عملا دولت را کنترل می‌کنند.', en: 'A great deal; they practically control the government.' }, economicScore: -8, socialScore: -3 },
            { text: { fa: 'زیاد، نفوذ آن‌ها باید محدود شود.', en: 'A lot; their influence should be limited.' }, economicScore: -5, socialScore: 0 },
            { text: { fa: 'تا حدودی، اما هنوز دموکراسی حاکم است.', en: 'To some extent, but democracy still prevails.' }, economicScore: 2, socialScore: 1 },
            { text: { fa: 'کم، تاثیر آن‌ها اغراق شده است.', en: 'Little; their influence is exaggerated.' }, economicScore: 6, socialScore: 3 }
        ]
    },
    {
        question: { fa: 'از سیاست‌های توزیع مجدد ثروت (مانند مالیات بر ارث) حمایت می‌کنید؟', en: 'Do you support wealth redistribution policies (like inheritance tax)?' },
        options: [
            { text: { fa: 'کاملا حمایت می‌کنم، این راه رسیدن به جامعه‌ای برابرتر است.', en: 'I fully support it; it\'s the way to a more equal society.' }, economicScore: -9, socialScore: -1 },
            { text: { fa: 'حمایت می‌کنم، اما باید با نرخ‌های معقول باشد.', en: 'I support it, but the rates should be reasonable.' }, economicScore: -5, socialScore: 0 },
            { text: { fa: 'مخالفم، این مجازات کردن موفقیت است.', en: 'I oppose it; it\'s punishing success.' }, economicScore: 8, socialScore: 2 },
            { text: { fa: 'کاملا مخالفم، این دزدی قانونی از دارایی‌های شخصی است.', en: 'I strongly oppose it; it\'s legal theft of personal assets.' }, economicScore: 10, socialScore: 4 }
        ]
    },
    {
        question: { fa: 'حفظ محیط زیست باید بر توسعه اقتصادی ترجیح داده شود؟', en: 'Should environmental protection be prioritized over economic development?' },
        options: [
            { text: { fa: 'بله، همیشه. بقای سیاره ما در خطر است.', en: 'Yes, always. The survival of our planet is at stake.' }, economicScore: -6, socialScore: -7 },
            { text: { fa: 'باید توازنی بین این دو برقرار کرد.', en: 'A balance must be struck between the two.' }, economicScore: -2, socialScore: -3 },
            { text: { fa: 'خیر، توسعه اقتصادی برای رفاه انسان‌ها اولویت دارد.', en: 'No, economic development is the priority for human welfare.' }, economicScore: 7, socialScore: 5 },
            { text: { fa: 'خیر، اصلا. محیط زیست یک مسئله حاشیه‌ای است.', en: 'No, not at all. The environment is a marginal issue.' }, economicScore: 9, socialScore: 6 }
        ]
    },
    {
        question: { fa: 'حقوق گروه‌های حاشیه‌نشین و اقلیت‌ها چقدر برایتان مهم است؟', en: 'How important are the rights of marginalized groups and minorities to you?' },
        options: [
            { text: { fa: 'بسیار مهم است و دولت باید فعالانه از آن‌ها حمایت کند.', en: 'Very important, and the government should actively support them.' }, economicScore: -7, socialScore: -8 },
            { text: { fa: 'مهم است و باید حقوق برابر با دیگران داشته باشند.', en: 'Important, and they should have equal rights with others.' }, economicScore: -3, socialScore: -4 },
            { text: { fa: 'همه باید حقوق یکسان داشته باشند و نیازی به تاکید بر گروه‌های خاص نیست.', en: 'Everyone should have the same rights; there is no need to emphasize specific groups.' }, economicScore: 4, socialScore: 2 },
            { text: { fa: 'تمرکز بیش از حد بر این گروه‌ها باعث تفرقه در جامعه می‌شود.', en: 'Focusing too much on these groups causes division in society.' }, economicScore: 6, socialScore: 6 }
        ]
    },
    {
        question: { fa: 'جهانی‌شدن (Globalization) را بیشتر سودمند می‌دانید یا مضر؟', en: 'Do you consider globalization more beneficial or harmful?' },
        options: [
            { text: { fa: 'بسیار سودمند؛ باعث تبادل فرهنگ و رشد اقتصادی می‌شود.', en: 'Very beneficial; it promotes cultural exchange and economic growth.' }, economicScore: -5, socialScore: -7 },
            { text: { fa: 'بیشتر سودمند است، هرچند معایبی هم دارد.', en: 'Mostly beneficial, although it has some drawbacks.' }, economicScore: -2, socialScore: -3 },
            { text: { fa: 'بیشتر مضر است؛ باعث از بین رفتن فرهنگ‌های محلی و مشاغل می‌شود.', en: 'Mostly harmful; it causes the loss of local cultures and jobs.' }, economicScore: 6, socialScore: 6 },
            { text: { fa: 'بسیار مضر؛ ابزاری برای استثمار کشورهای ضعیف توسط قدرت‌های بزرگ است.', en: 'Very harmful; it is a tool for the exploitation of weak countries by major powers.' }, economicScore: 4, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'اعتماد شما به رهبران سیاسی چقدر است؟', en: 'How much do you trust political leaders?' },
        options: [
            { text: { fa: 'بسیار کم، معتقدم اکثر آنها فاسد هستند.', en: 'Very little; I believe most of them are corrupt.' }, economicScore: -5, socialScore: -6 },
            { text: { fa: 'کم، به طور کلی به آنها بدبین هستم.', en: 'Little; I am generally pessimistic about them.' }, economicScore: -2, socialScore: -2 },
            { text: { fa: 'زیاد، معتقدم اکثر آنها نیت خیر دارند.', en: 'A lot; I believe most of them have good intentions.' }, economicScore: 3, socialScore: 4 },
            { text: { fa: 'بسیار زیاد، کاملاً به سیستم سیاسی اعتماد دارم.', en: 'A great deal; I have complete trust in the political system.' }, economicScore: 5, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'محدودیت در هزینه‌های تبلیغات انتخاباتی لازم است؟', en: 'Are limits on campaign spending necessary?' },
        options: [
            { text: { fa: 'بله، برای جلوگیری از نفوذ پول در سیاست کاملاً ضروری است.', en: 'Yes, it is absolutely necessary to prevent the influence of money in politics.' }, economicScore: -7, socialScore: 2 },
            { text: { fa: 'بله، اما محدودیت‌ها باید معقول باشند.', en: 'Yes, but the limits should be reasonable.' }, economicScore: -4, socialScore: 1 },
            { text: { fa: 'خیر، این نوعی محدود کردن آزادی بیان است.', en: 'No, it is a form of limiting freedom of expression.' }, economicScore: 6, socialScore: -5 },
            { text: { fa: 'خیر، هر کس باید آزاد باشد هر چقدر می‌خواهد برای معرفی خود هزینه کند.', en: 'No, everyone should be free to spend as much as they want to promote themselves.' }, economicScore: 8, socialScore: -3 }
        ]
    },
    {
        question: { fa: 'دولت باید برای کاهش بیکاری چه اقداماتی انجام دهد؟', en: 'What measures should the government take to reduce unemployment?' },
        options: [
            { text: { fa: 'ایجاد مشاغل دولتی و پروژه‌های عمومی بزرگ.', en: 'Create public sector jobs and large public projects.' }, economicScore: -8, socialScore: 3 },
            { text: { fa: 'ارائه آموزش‌های فنی و حرفه‌ای و حمایت از کارآفرینان.', en: 'Provide vocational training and support for entrepreneurs.' }, economicScore: -3, socialScore: -2 },
            { text: { fa: 'کاهش مالیات‌ها و قوانین دست‌وپاگیر برای تشویق سرمایه‌گذاری خصوصی.', en: 'Reduce taxes and burdensome regulations to encourage private investment.' }, economicScore: 8, socialScore: -1 },
            { text: { fa: 'هیچ اقدامی، بازار کار به طور طبیعی به تعادل می‌رسد.', en: 'No action; the labor market will naturally reach equilibrium.' }, economicScore: 10, socialScore: 0 }
        ]
    },
    {
        question: { fa: 'نقش سازمان ملل را چگونه ارزیابی می‌کنید؟', en: 'How do you assess the role of the United Nations?' },
        options: [
            { text: { fa: 'یک نهاد ضروری برای حفظ صلح و همکاری جهانی است.', en: 'It is an essential institution for maintaining peace and global cooperation.' }, economicScore: -5, socialScore: -7 },
            { text: { fa: 'مفید است اما نیاز به اصلاحات جدی دارد.', en: 'It is useful but in need of serious reforms.' }, economicScore: -2, socialScore: -3 },
            { text: { fa: 'یک نهاد ناکارآمد است که تحت سلطه قدرت‌های بزرگ قرار دارد.', en: 'It is an inefficient body dominated by major powers.' }, economicScore: 4, socialScore: 4 },
            { text: { fa: 'تهدیدی برای حاکمیت ملی کشورها است و باید نادیده گرفته شود.', en: 'It is a threat to the national sovereignty of countries and should be ignored.' }, economicScore: 7, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'امنیت ملی در مقابل حفاظت از حریم خصوصی چه اولویتی دارد؟', en: 'What is the priority of national security versus privacy protection?' },
        options: [
            { text: { fa: 'حفاظت از حریم خصوصی همیشه اولویت دارد.', en: 'Privacy protection is always the priority.' }, economicScore: -2, socialScore: -9 },
            { text: { fa: 'باید توازنی دقیق بین این دو برقرار شود.', en: 'A careful balance must be struck between the two.' }, economicScore: 0, socialScore: -3 },
            { text: { fa: 'در موارد خاص، امنیت ملی می‌تواند ارجح باشد.', en: 'In special cases, national security can take precedence.' }, economicScore: 4, socialScore: 5 },
            { text: { fa: 'امنیت ملی همیشه و تحت هر شرایطی اولویت اول است.', en: 'National security is always the top priority under any circumstances.' }, economicScore: 6, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'میزان شفافیت دولت در چه حد است؟', en: 'How transparent should the government be?' },
        options: [
            { text: { fa: 'باید کاملاً شفاف باشد و تمام داده‌ها در دسترس عموم قرار گیرد.', en: 'It should be completely transparent, with all data available to the public.' }, economicScore: -6, socialScore: -7 },
            { text: { fa: 'باید شفافیت بیشتری وجود داشته باشد.', en: 'There should be more transparency.' }, economicScore: -3, socialScore: -2 },
            { text: { fa: 'شفافیت فعلی کافی است.', en: 'The current level of transparency is sufficient.' }, economicScore: 2, socialScore: 3 },
            { text: { fa: 'برخی مسائل برای حفظ امنیت ملی باید محرمانه بماند.', en: 'Some matters must remain confidential to protect national security.' }, economicScore: 5, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'همکاری‌های بین‌المللی برای ثبات اقتصادی چقدر ضروری است؟', en: 'How essential is international cooperation for economic stability?' },
        options: [
            { text: { fa: 'کاملاً ضروری است؛ اقتصاد جهانی به هم پیوسته است.', en: 'Absolutely essential; the global economy is interconnected.' }, economicScore: -6, socialScore: -5 },
            { text: { fa: 'مفید است اما نباید به استقلال اقتصادی کشور لطمه بزند.', en: 'It is useful but should not undermine the country\'s economic independence.' }, economicScore: -1, socialScore: 0 },
            { text: { fa: 'چندان ضروری نیست و خودکفایی اقتصادی ارجح است.', en: 'Not very essential; economic self-sufficiency is preferable.' }, economicScore: 6, socialScore: 5 },
            { text: { fa: 'مضر است و کشور را در برابر بحران‌های جهانی آسیب‌پذیر می‌کند.', en: 'It is harmful and makes the country vulnerable to global crises.' }, economicScore: 8, socialScore: 7 }
        ]
    },
    {
        question: { fa: 'دولت باید در بخش مالی و بانکداری نظارت بیشتری داشته باشد؟', en: 'Should the government have more oversight in the financial and banking sector?' },
        options: [
            { text: { fa: 'بله، نظارت شدید برای جلوگیری از بحران‌های مالی ضروری است.', en: 'Yes, strict oversight is necessary to prevent financial crises.' }, economicScore: -8, socialScore: 4 },
            { text: { fa: 'بله، اما این نظارت نباید مانع نوآوری شود.', en: 'Yes, but this oversight should not stifle innovation.' }, economicScore: -4, socialScore: 1 },
            { text: { fa: 'خیر، نظارت بیش از حد باعث ناکارآمدی می‌شود.', en: 'No, excessive oversight causes inefficiency.' }, economicScore: 7, socialScore: -3 },
            { text: { fa: 'خیر، بانک‌ها باید کاملاً آزاد باشند تا رقابت کنند.', en: 'No, banks should be completely free to compete.' }, economicScore: 9, socialScore: -5 }
        ]
    },
    {
        question: { fa: 'جدایی دین از دولت چقدر برایتان مهم است؟', en: 'How important is the separation of church and state to you?' },
        options: [
            { text: { fa: 'بسیار مهم است و باید یک دیوار مطلق بین آنها وجود داشته باشد.', en: 'Very important; there should be an absolute wall between them.' }, economicScore: -2, socialScore: -9 },
            { text: { fa: 'مهم است، اما دولت می‌تواند با نهادهای دینی همکاری کند.', en: 'Important, but the government can cooperate with religious institutions.' }, economicScore: 0, socialScore: -4 },
            { text: { fa: 'چندان مهم نیست، ارزش‌های دینی می‌توانند راهنمای خوبی برای جامعه باشند.', en: 'Not very important; religious values can be a good guide for society.' }, economicScore: 3, socialScore: 5 },
            { text: { fa: 'مهم نیست، دولت باید مبتنی بر اصول دینی باشد.', en: 'Not important; the government should be based on religious principles.' }, economicScore: 5, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'اصلاحات سیاسی باید بیشتر به سمت دموکراتیک کردن سیستم باشد؟', en: 'Should political reforms be aimed more at democratizing the system?' },
        options: [
            { text: { fa: 'بله، دموکراسی مستقیم و مشارکت شهروندان باید هدف نهایی باشد.', en: 'Yes, direct democracy and citizen participation should be the ultimate goal.' }, economicScore: -6, socialScore: -8 },
            { text: { fa: 'بله، تقویت نهادهای دموکراتیک ضروری است.', en: 'Yes, strengthening democratic institutions is necessary.' }, economicScore: -3, socialScore: -4 },
            { text: { fa: 'خیر، ثبات و کارآمدی مهم‌تر از دموکراسی بیشتر است.', en: 'No, stability and efficiency are more important than more democracy.' }, economicScore: 5, socialScore: 6 },
            { text: { fa: 'خیر، یک رهبر قدرتمند و مقتدر برای کشور بهتر است.', en: 'No, a strong and authoritative leader is better for the country.' }, economicScore: 7, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'نقش اعتراضات سیاسی در تغییرات اجتماعی چقدر برایتان مؤثر است؟', en: 'How effective do you find political protests in bringing about social change?' },
        options: [
            { text: { fa: 'بسیار مؤثر، این اصلی‌ترین راه برای شنیده شدن صدای مردم است.', en: 'Very effective; it is the primary way for people\'s voices to be heard.' }, economicScore: -5, socialScore: -8 },
            { text: { fa: 'می‌تواند مؤثر باشد اگر مسالمت‌آمیز و سازمان‌یافته باشد.', en: 'It can be effective if it is peaceful and organized.' }, economicScore: -2, socialScore: -3 },
            { text: { fa: 'به ندرت مؤثر است و بیشتر باعث هرج و مرج می‌شود.', en: 'It is rarely effective and mostly causes chaos.' }, economicScore: 4, socialScore: 6 },
            { text: { fa: 'کاملاً بی‌تأثیر و مخرب است و باید سرکوب شود.', en: 'It is completely ineffective and destructive and should be suppressed.' }, economicScore: 6, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'به تمرکززدایی قدرت سیاسی (واگذاری اختیارات به دولت‌های محلی) چه نظری دارید؟', en: 'What is your view on the decentralization of political power (delegating authority to local governments)?' },
        options: [
            { text: { fa: 'کاملاً موافقم، قدرت باید تا حد امکان به مردم نزدیک باشد.', en: 'I completely agree; power should be as close to the people as possible.' }, economicScore: -5, socialScore: -7 },
            { text: { fa: 'موافقم، این کار باعث افزایش کارآمدی می‌شود.', en: 'I agree; it increases efficiency.' }, economicScore: -2, socialScore: -3 },
            { text: { fa: 'مخالفم، این کار به تضعیف وحدت ملی منجر می‌شود.', en: 'I disagree; it leads to the weakening of national unity.' }, economicScore: 5, socialScore: 6 },
            { text: { fa: 'کاملاً مخالفم، یک دولت مرکزی قدرتمند برای کشور ضروری است.', en: 'I completely disagree; a strong central government is necessary for the country.' }, economicScore: 7, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'باید فناوری‌های نوین (مانند هوش مصنوعی) در سیاست‌های دولتی کنترل شوند؟', en: 'Should new technologies (like artificial intelligence) be controlled by government policies?' },
        options: [
            { text: { fa: 'بله، برای جلوگیری از سوءاستفاده و حفظ ارزش‌های انسانی باید به شدت کنترل شوند.', en: 'Yes, they should be strictly controlled to prevent misuse and preserve human values.' }, economicScore: -4, socialScore: 6 },
            { text: { fa: 'باید قانون‌گذاری شوند، اما نه به قیمت خفه کردن نوآوری.', en: 'They should be regulated, but not at the cost of stifling innovation.' }, economicScore: -1, socialScore: 1 },
            { text: { fa: 'خیر، بازار و رقابت بهترین راه برای مدیریت این فناوری‌ها هستند.', en: 'No, the market and competition are the best way to manage these technologies.' }, economicScore: 6, socialScore: -6 },
            { text: { fa: 'خیر، هرگونه کنترل دولتی مانع پیشرفت می‌شود.', en: 'No, any government control hinders progress.' }, economicScore: 8, socialScore: -8 }
        ]
    },
    {
        question: { fa: 'نظام انتخاباتی کشور شما عادلانه است؟', en: 'Is your country\'s electoral system fair?' },
        options: [
            { text: { fa: 'خیر، کاملاً ناعادلانه و نیازمند اصلاحات اساسی است.', en: 'No, it is completely unfair and in need of fundamental reforms.' }, economicScore: -6, socialScore: -5 },
            { text: { fa: 'خیر، مشکلاتی دارد اما قابل اصلاح است.', en: 'No, it has problems but they can be fixed.' }, economicScore: -3, socialScore: -2 },
            { text: { fa: 'بله، تا حد زیادی عادلانه است.', en: 'Yes, it is largely fair.' }, economicScore: 2, socialScore: 3 },
            { text: { fa: 'بله، کاملاً عادلانه و بی‌نقص است.', en: 'Yes, it is completely fair and flawless.' }, economicScore: 5, socialScore: 7 }
        ]
    },
    {
        question: { fa: 'مسئولان باید استانداردهای اخلاقی بالاتری داشته باشند؟', en: 'Should officials be held to higher ethical standards?' },
        options: [
            { text: { fa: 'بله، آنها باید الگوی جامعه باشند و زندگی خصوصی آنها نیز باید تحت نظارت باشد.', en: 'Yes, they should be role models for society, and their private lives should also be scrutinized.' }, economicScore: -2, socialScore: 7 },
            { text: { fa: 'بله، در امور عمومی باید استانداردهای بالایی داشته باشند.', en: 'Yes, they should have high standards in public affairs.' }, economicScore: 0, socialScore: 2 },
            { text: { fa: 'آنها مانند شهروندان عادی هستند و نباید استانداردهای متفاوتی برایشان قائل شد.', en: 'They are like ordinary citizens and should not be held to different standards.' }, economicScore: 3, socialScore: -4 },
            { text: { fa: 'تنها معیار سنجش آنها باید کارآمدی باشد، نه زندگی شخصی‌شان.', en: 'The only criterion for judging them should be their effectiveness, not their personal lives.' }, economicScore: 5, socialScore: -2 }
        ]
    }
  ],
  2: [
    {
        question: { fa: 'مالیات بر درآمد باید چگونه باشد؟', en: 'What should the income tax system be like?' },
        options: [
            { text: { fa: 'یک سیستم مالیاتی کاملاً تصاعدی که در آن ثروتمندان درصد بسیار بالاتری می‌پردازند.', en: 'A highly progressive tax system where the wealthy pay a much higher percentage.' }, economicScore: -9, socialScore: -1 },
            { text: { fa: 'سیستم تصاعدی ملایم که بار مالیاتی را به طور منصفانه توزیع کند.', en: 'A mildly progressive system that distributes the tax burden fairly.' }, economicScore: -4, socialScore: 0 },
            { text: { fa: 'مالیات ثابت (Flat Tax) که در آن همه درصد یکسانی از درآمد خود را می‌پردازند.', en: 'A flat tax, where everyone pays the same percentage of their income.' }, economicScore: 7, socialScore: 2 },
            { text: { fa: 'مالیات بر درآمد باید حذف و با مالیات بر مصرف جایگزین شود.', en: 'Income tax should be abolished and replaced with a consumption tax.' }, economicScore: 9, socialScore: -3 }
        ]
    },
    {
        question: { fa: 'آیا دولت باید برای کسب‌وکارهای بزرگ قوانینی مانند حداقل دستمزد یا حمایت از اتحادیه‌ها وضع کند؟', en: 'Should the government impose regulations like minimum wage or support for unions on large businesses?' },
        options: [
            { text: { fa: 'بله، دولت باید به شدت از حقوق کارگران در برابر شرکت‌ها دفاع کند.', en: 'Yes, the government must strongly defend workers\' rights against corporations.' }, economicScore: -8, socialScore: -2 },
            { text: { fa: 'بله، اما این قوانین باید متعادل باشند تا به اقتصاد آسیب نرسانند.', en: 'Yes, but these laws should be balanced so as not to harm the economy.' }, economicScore: -3, socialScore: -1 },
            { text: { fa: 'خیر، بازار کار باید آزاد باشد و روابط بین کارگر و کارفرما به صورت توافقی تعیین شود.', en: 'No, the labor market should be free, and employer-employee relationships should be determined by agreement.' }, economicScore: 8, socialScore: 1 },
            { text: { fa: 'خیر، اتحادیه‌ها مانع رشد اقتصادی هستند و باید فعالیتشان محدود شود.', en: 'No, unions hinder economic growth and their activities should be restricted.' }, economicScore: 9, socialScore: 5 }
        ]
    },
    {
        question: { fa: 'امنیت ملی در برابر حریم خصوصی شهروندان چه جایگاهی دارد؟', en: 'What is the balance between national security and citizen privacy?' },
        options: [
            { text: { fa: 'حریم خصوصی یک حق مطلق است و نظارت دولتی تحت هیچ شرایطی پذیرفته نیست.', en: 'Privacy is an absolute right, and government surveillance is unacceptable under any circumstances.' }, economicScore: -1, socialScore: -9 },
            { text: { fa: 'نظارت دولتی فقط با حکم قضایی شفاف و برای جرایم خاص مجاز است.', en: 'Government surveillance is only permissible with a transparent judicial warrant for specific crimes.' }, economicScore: 0, socialScore: -5 },
            { text: { fa: 'برای مقابله با تروریسم و جرایم بزرگ، نظارت گسترده بر ارتباطات قابل توجیه است.', en: 'Widespread surveillance of communications is justifiable to combat terrorism and major crimes.' }, economicScore: 4, socialScore: 6 },
            { text: { fa: 'امنیت ملی بر هر حقی اولویت دارد و دولت باید ابزارهای لازم برای نظارت کامل را داشته باشد.', en: 'National security takes precedence over every right, and the government must have the necessary tools for complete surveillance.' }, economicScore: 6, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'دولت تا چه حد باید به شهروندان نیازمند (بیکاران، معلولان) کمک مالی کند؟', en: 'To what extent should the government provide financial assistance to needy citizens (the unemployed, disabled)?' },
        options: [
            { text: { fa: 'دولت باید یک شبکه تأمین اجتماعی جامع برای حمایت کامل از همه نیازمندان فراهم کند.', en: 'The government should provide a comprehensive social safety net to fully support all those in need.' }, economicScore: -8, socialScore: -3 },
            { text: { fa: 'کمک‌ها باید موقتی و با هدف توانمندسازی افراد برای بازگشت به کار باشند.', en: 'Assistance should be temporary and aimed at empowering individuals to return to work.' }, economicScore: -2, socialScore: 1 },
            { text: { fa: 'کمک‌های دولتی افراد را تنبل می‌کند؛ این وظیفه خیریه‌ها و خانواده‌هاست.', en: 'Government aid makes people lazy; this is the responsibility of charities and families.' }, economicScore: 7, socialScore: 4 },
            { text: { fa: 'هیچ کمک مالی نباید وجود داشته باشد؛ هر کس مسئول زندگی خود است.', en: 'There should be no financial assistance; everyone is responsible for their own life.' }, economicScore: 9, socialScore: 2 }
        ]
    },
    {
        question: { fa: 'آیا مالکیت اسلحه برای شهروندان باید آزاد باشد؟', en: 'Should gun ownership be legal for citizens?' },
        options: [
            { text: { fa: 'خیر، مالکیت اسلحه باید کاملاً ممنوع باشد و تنها در اختیار نیروهای دولتی باشد.', en: 'No, gun ownership should be completely banned and restricted to state forces.' }, economicScore: -4, socialScore: 8 },
            { text: { fa: 'باید قوانین سخت‌گیرانه‌ای برای بررسی صلاحیت و نوع اسلحه وجود داشته باشد.', en: 'There should be strict laws for background checks and the type of firearms allowed.' }, economicScore: -2, socialScore: 3 },
            { text: { fa: 'شهروندان قانون‌مدار حق دارند برای دفاع از خود اسلحه داشته باشند.', en: 'Law-abiding citizens have the right to own guns for self-defense.' }, economicScore: 5, socialScore: -5 },
            { text: { fa: 'هر نوع محدودیتی برای مالکیت اسلحه، نقض حقوق اساسی فرد است.', en: 'Any restriction on gun ownership is a violation of a fundamental individual right.' }, economicScore: 7, socialScore: -9 }
        ]
    },
    {
        question: { fa: 'یارانه‌های دولتی (مثلاً برای کشاورزی یا انرژی) چه تاثیری دارند؟', en: 'What is the effect of government subsidies (e.g., for agriculture or energy)?' },
        options: [
            { text: { fa: 'یارانه‌ها برای حمایت از صنایع استراتژیک و تضمین قیمت‌های منصفانه برای مصرف‌کنندگان ضروری هستند.', en: 'Subsidies are necessary to support strategic industries and ensure fair prices for consumers.' }, economicScore: -7, socialScore: 3 },
            { text: { fa: 'فقط در موارد خاص و به صورت هدفمند برای کمک به اقشار آسیب‌پذیر قابل قبول هستند.', en: 'They are acceptable only in specific, targeted cases to help vulnerable populations.' }, economicScore: -3, socialScore: 1 },
            { text: { fa: 'یارانه‌ها بازار را مختل کرده و باعث ناکارآمدی می‌شوند و باید حذف شوند.', en: 'Subsidies distort the market, cause inefficiency, and should be eliminated.' }, economicScore: 8, socialScore: -2 },
            { text: { fa: 'یارانه‌ها نوعی دزدی از مالیات‌دهندگان برای منافع گروه‌های خاص هستند.', en: 'Subsidies are a form of theft from taxpayers for the benefit of special interest groups.' }, economicScore: 9, socialScore: -4 }
        ]
    },
    {
        question: { fa: 'آموزش و پرورش باید چگونه اداره شود؟', en: 'How should education be managed?' },
        options: [
            { text: { fa: 'سیستم آموزش باید کاملاً دولتی، رایگان و متمرکز باشد تا کیفیت یکسانی ارائه دهد.', en: 'The education system should be fully state-run, free, and centralized to provide uniform quality.' }, economicScore: -8, socialScore: 5 },
            { text: { fa: 'سیستم دولتی باید اساس باشد، اما مدارس خصوصی و انتخاب خانواده‌ها نیز باید حمایت شوند.', en: 'The public system should be the foundation, but private schools and parental choice should also be supported.' }, economicScore: -2, socialScore: -2 },
            { text: { fa: 'آموزش باید خصوصی‌سازی شود و دولت فقط به خانواده‌های کم‌درآمد کوپن آموزشی بدهد.', en: 'Education should be privatized, with the government only providing vouchers to low-income families.' }, economicScore: 7, socialScore: -4 },
            { text: { fa: 'دولت هیچ نقشی در آموزش نباید داشته باشد و این یک امر کاملاً خصوصی است.', en: 'The government should have no role in education; it is a completely private matter.' }, economicScore: 9, socialScore: -7 }
        ]
    },
    {
        question: { fa: 'رویکرد صحیح نسبت به مصرف مواد مخدر چیست؟', en: 'What is the correct approach to drug use?' },
        options: [
            { text: { fa: 'جرم‌زدایی کامل و تمرکز بر درمان و کاهش آسیب به عنوان یک مسئله بهداشت عمومی.', en: 'Complete decriminalization and a focus on treatment and harm reduction as a public health issue.' }, economicScore: -4, socialScore: -9 },
            { text: { fa: 'آزاد کردن مصرف مواد سبک (مانند ماری‌جوانا) و برخورد با مواد سنگین.', en: 'Legalize soft drugs (like marijuana) and crack down on hard drugs.' }, economicScore: 0, socialScore: -5 },
            { text: { fa: 'مقابله سخت‌گیرانه با مصرف‌کنندگان و فروشندگان برای حفظ سلامت جامعه.', en: 'Strict enforcement against users and dealers to protect public health.' }, economicScore: 5, socialScore: 7 },
            { text: { fa: 'اعمال مجازات‌های بسیار سنگین، از جمله اعدام، برای قاچاقچیان.', en: 'Impose very severe penalties, including the death penalty, for traffickers.' }, economicScore: 6, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'آیا شرکت در نهادهای حکومتی فراملی (مانند سازمان ملل یا اتحادیه‌های منطقه‌ای) به نفع کشور است؟', en: 'Is participation in supranational governing bodies (like the UN or regional unions) beneficial for the country?' },
        options: [
            { text: { fa: 'بله، حاکمیت جهانی برای حل مشکلات مشترک بشریت مانند تغییرات اقلیمی ضروری است.', en: 'Yes, global governance is necessary to solve common human problems like climate change.' }, economicScore: -5, socialScore: -8 },
            { text: { fa: 'بله، این نهادها برای تجارت و دیپلماسی مفید هستند، اما نباید در امور داخلی کشور دخالت کنند.', en: 'Yes, these bodies are useful for trade and diplomacy, but they should not interfere in domestic affairs.' }, economicScore: 1, socialScore: -3 },
            { text: { fa: 'خیر، این نهادها حاکمیت ملی ما را تضعیف می‌کنند و باید از آن‌ها کناره‌گیری کرد.', en: 'No, these bodies weaken our national sovereignty, and we should withdraw from them.' }, economicScore: 7, socialScore: 6 },
            { text: { fa: 'این نهادها توطئه‌ای برای کنترل کشورهای مستقل توسط قدرت‌های جهانی هستند.', en: 'These bodies are a conspiracy by global powers to control independent nations.' }, economicScore: 6, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'کدام ارزش در جامعه مهم‌تر است؟', en: 'Which value is more important in society?' },
        options: [
            { text: { fa: 'برابری؛ تلاش برای کاهش فاصله‌های اجتماعی و اقتصادی.', en: 'Equality; striving to reduce social and economic gaps.' }, economicScore: -8, socialScore: -1 },
            { text: { fa: 'آزادی؛ تضمین حقوق فردی و کمترین دخالت در زندگی مردم.', en: 'Liberty; guaranteeing individual rights and minimal interference in people\'s lives.' }, economicScore: 4, socialScore: -8 },
            { text: { fa: 'امنیت؛ حفظ نظم و ثبات در جامعه به هر قیمتی.', en: 'Security; maintaining order and stability in society at any cost.' }, economicScore: 6, socialScore: 8 },
            { text: { fa: 'سنت؛ احترام به تاریخ، فرهنگ و ارزش‌های موروثی.', en: 'Tradition; respecting history, culture, and inherited values.' }, economicScore: 5, socialScore: 7 }
        ]
    },
    {
        question: { fa: 'چقدر مایلید مالیات بیشتری برای برنامه‌های اجتماعی بپردازید؟', en: 'How willing are you to pay more taxes for social programs?' },
        options: [
            { text: { fa: 'بسیار مایلم، این سرمایه‌گذاری در جامعه است.', en: 'Very willing, it\'s an investment in society.' }, economicScore: -8, socialScore: -3 },
            { text: { fa: 'کمی مایلم، اگر بدانم به درستی خرج می‌شود.', en: 'Somewhat willing, if I know it will be spent properly.' }, economicScore: -4, socialScore: -1 },
            { text: { fa: 'مایل نیستم، مالیات‌ها همین الان هم بالا هستند.', en: 'Not willing, taxes are already too high.' }, economicScore: 6, socialScore: 2 },
            { text: { fa: 'به هیچ وجه، مالیات نوعی سرقت است.', en: 'Not at all, taxation is theft.' }, economicScore: 9, socialScore: 4 }
        ]
    },
    {
        question: { fa: 'آیا ترجیح می‌دهید محصولات داخلی را بر وارداتی ترجیح دهید؟', en: 'Do you prefer domestic products over imported ones?' },
        options: [
            { text: { fa: 'همیشه، حمایت از تولید ملی یک وظیفه است.', en: 'Always, supporting domestic production is a duty.' }, economicScore: 4, socialScore: 6 },
            { text: { fa: 'اغلب، اگر کیفیت و قیمت مناسب باشد.', en: 'Often, if the quality and price are reasonable.' }, economicScore: 2, socialScore: 3 },
            { text: { fa: 'به ندرت، کیفیت و قیمت محصول برایم مهم‌تر است.', en: 'Rarely, product quality and price are more important to me.' }, economicScore: -3, socialScore: -2 },
            { text: { fa: 'هرگز، تجارت آزاد به نفع همه است.', en: 'Never, free trade benefits everyone.' }, economicScore: -6, socialScore: -5 }
        ]
    },
    {
        question: { fa: 'معتقدید حداقل حقوق باید افزایش یابد؟', en: 'Do you believe the minimum wage should be increased?' },
        options: [
            { text: { fa: 'بله، باید به میزانی افزایش یابد که یک زندگی آبرومندانه را تضمین کند.', en: 'Yes, it should be raised to a level that ensures a decent living.' }, economicScore: -8, socialScore: -1 },
            { text: { fa: 'بله، اما به صورت تدریجی تا به کسب‌وکارها آسیب نزند.', en: 'Yes, but gradually so as not to harm businesses.' }, economicScore: -4, socialScore: 0 },
            { text: { fa: 'خیر، این کار باعث بیکاری و تورم می‌شود.', en: 'No, it causes unemployment and inflation.' }, economicScore: 7, socialScore: 2 },
            { text: { fa: 'خیر، حداقل حقوق باید توسط بازار تعیین شود نه دولت.', en: 'No, the minimum wage should be set by the market, not the government.' }, economicScore: 9, socialScore: 3 }
        ]
    },
    {
        question: { fa: 'فکر می‌کنید فناوری و اتوماسیون چه تاثیری بر بازار کار دارد؟', en: 'What impact do you think technology and automation have on the job market?' },
        options: [
            { text: { fa: 'بسیار نگران‌کننده است و باعث بیکاری گسترده خواهد شد.', en: 'It\'s very concerning and will cause widespread unemployment.' }, economicScore: -6, socialScore: 2 },
            { text: { fa: 'چالش‌هایی ایجاد می‌کند اما شغل‌های جدیدی هم به وجود می‌آورد.', en: 'It creates challenges but also creates new jobs.' }, economicScore: -2, socialScore: 0 },
            { text: { fa: 'یک فرصت عالی برای افزایش بهره‌وری و رفاه است.', en: 'It\'s a great opportunity to increase productivity and welfare.' }, economicScore: 5, socialScore: -3 },
            { text: { fa: 'باید بدون هیچ محدودیتی از آن استقبال کرد.', en: 'It should be embraced without any restrictions.' }, economicScore: 7, socialScore: -5 }
        ]
    },
    {
        question: { fa: 'حمایت شما از سیاست‌های توسعه کسب‌وکارهای کوچک چقدر است؟', en: 'How much do you support policies for developing small businesses?' },
        options: [
            { text: { fa: 'بسیار زیاد، آن‌ها موتور اقتصاد هستند.', en: 'A great deal, they are the engine of the economy.' }, economicScore: 3, socialScore: -2 },
            { text: { fa: 'زیاد، دولت باید از آن‌ها حمایت کند.', en: 'A lot, the government should support them.' }, economicScore: -1, socialScore: 0 },
            { text: { fa: 'متوسط، تفاوتی با کسب‌وکارهای بزرگ ندارند.', en: 'Moderately, they are no different from large businesses.' }, economicScore: 5, socialScore: 1 },
            { text: { fa: 'کم، باید اجازه داد بازار کار خود را بکند.', en: 'Little, the market should be allowed to work.' }, economicScore: 8, socialScore: 3 }
        ]
    },
    {
        question: { fa: 'چقدر نگران هزینه‌های درمان و سلامت خود هستید؟', en: 'How concerned are you about your healthcare costs?' },
        options: [
            { text: { fa: 'بسیار نگرانم و معتقدم دولت باید همه هزینه‌ها را پوشش دهد.', en: 'Very concerned, and I believe the government should cover all costs.' }, economicScore: -8, socialScore: -2 },
            { text: { fa: 'نگرانم، اما با بیمه مناسب می‌توان آن را مدیریت کرد.', en: 'Concerned, but it can be managed with proper insurance.' }, economicScore: -3, socialScore: 0 },
            { text: { fa: 'نگران نیستم، این مسئولیت شخصی من است.', en: 'Not concerned, it is my personal responsibility.' }, economicScore: 6, socialScore: 2 },
            { text: { fa: 'اصلا نگران نیستم، بازار آزاد بهترین خدمات را ارائه می‌دهد.', en: 'Not concerned at all, the free market provides the best services.' }, economicScore: 9, socialScore: -3 }
        ]
    },
    {
        question: { fa: 'آینده اقتصادی کشور را چطور ارزیابی می‌کنید؟', en: 'How do you assess the country\'s economic future?' },
        options: [
            { text: { fa: 'بسیار خوش‌بین، در مسیر درستی حرکت می‌کنیم.', en: 'Very optimistic, we are on the right track.' }, economicScore: 5, socialScore: 4 },
            { text: { fa: 'نسبتا خوش‌بین، اما چالش‌هایی وجود دارد.', en: 'Fairly optimistic, but there are challenges.' }, economicScore: 2, socialScore: 1 },
            { text: { fa: 'نسبتا بدبین، مشکلات ساختاری زیادی وجود دارد.', en: 'Fairly pessimistic, there are many structural problems.' }, economicScore: -4, socialScore: -1 },
            { text: { fa: 'بسیار بدبین، به سمت بحران پیش می‌رویم.', en: 'Very pessimistic, we are heading towards a crisis.' }, economicScore: -7, socialScore: -3 }
        ]
    },
    {
        question: { fa: 'سیاست‌های اقتصادی باید چه اولویت‌هایی داشته باشد؟', en: 'What should be the priorities of economic policies?' },
        options: [
            { text: { fa: 'کاهش نابرابری و حمایت از اقشار ضعیف.', en: 'Reducing inequality and supporting the vulnerable.' }, economicScore: -9, socialScore: -2 },
            { text: { fa: 'رشد اقتصادی و ایجاد اشتغال.', en: 'Economic growth and job creation.' }, economicScore: 2, socialScore: 1 },
            { text: { fa: 'کنترل تورم و ثبات بازار.', en: 'Controlling inflation and market stability.' }, economicScore: 5, socialScore: 3 },
            { text: { fa: 'آزادسازی اقتصادی و کاهش دخالت دولت.', en: 'Economic liberalization and reducing government intervention.' }, economicScore: 9, socialScore: -4 }
        ]
    },
    {
        question: { fa: 'آیا باور دارید نابرابری اقتصادی برای ایجاد انگیزه در جامعه لازم است؟', en: 'Do you believe economic inequality is necessary to create motivation in society?' },
        options: [
            { text: { fa: 'کاملا مخالفم، نابرابری ذاتا مخرب است.', en: 'Strongly disagree, inequality is inherently destructive.' }, economicScore: -9, socialScore: -3 },
            { text: { fa: 'مخالفم، نابرابری بیش از حد مضر است.', en: 'Disagree, excessive inequality is harmful.' }, economicScore: -5, socialScore: -1 },
            { text: { fa: 'موافقم، مقداری نابرابری برای تشویق به تلاش و نوآوری لازم است.', en: 'Agree, some inequality is necessary to encourage effort and innovation.' }, economicScore: 6, socialScore: 3 },
            { text: { fa: 'کاملا موافقم، این نتیجه طبیعی تفاوت در توانایی‌ها و تلاش‌هاست.', en: 'Strongly agree, it is the natural result of differences in abilities and efforts.' }, economicScore: 9, socialScore: 5 }
        ]
    },
    {
        question: { fa: 'چقدر به سیستم بانکی و مالی کشور اعتماد دارید؟', en: 'How much do you trust the country\'s banking and financial system?' },
        options: [
            { text: { fa: 'کاملا اعتماد دارم.', en: 'I have complete trust.' }, economicScore: 3, socialScore: 2 },
            { text: { fa: 'تا حدودی اعتماد دارم.', en: 'I have some trust.' }, economicScore: 1, socialScore: 1 },
            { text: { fa: 'اعتماد کمی دارم.', en: 'I have little trust.' }, economicScore: -4, socialScore: 0 },
            { text: { fa: 'اصلا اعتماد ندارم و آن را فاسد می‌دانم.', en: 'I have no trust at all and consider it corrupt.' }, economicScore: -7, socialScore: -2 }
        ]
    },
    {
        question: { fa: 'مصرف‌گرایی چه مقدار در زندگی شما اهمیت دارد؟', en: 'How important is consumerism in your life?' },
        options: [
            { text: { fa: 'بسیار کم، ترجیح می‌دهم ساده زندگی کنم.', en: 'Very little, I prefer to live simply.' }, economicScore: -4, socialScore: -3 },
            { text: { fa: 'کم، فقط به نیازهای اساسی توجه می‌کنم.', en: 'Little, I only focus on basic needs.' }, economicScore: -2, socialScore: -1 },
            { text: { fa: 'زیاد، از خرید و داشتن چیزهای جدید لذت می‌برم.', en: 'A lot, I enjoy buying and owning new things.' }, economicScore: 5, socialScore: 2 },
            { text: { fa: 'بسیار زیاد، موفقیت را با میزان دارایی‌ها می‌سنجم.', en: 'A great deal, I measure success by the amount of possessions.' }, economicScore: 8, socialScore: 4 }
        ]
    },
    {
        question: { fa: 'قصد دارید در بورس یا املاک سرمایه‌گذاری کنید؟', en: 'Do you plan to invest in the stock market or real estate?' },
        options: [
            { text: { fa: 'بله، این بهترین راه برای رشد سرمایه است.', en: 'Yes, it\'s the best way to grow capital.' }, economicScore: 7, socialScore: 0 },
            { text: { fa: 'شاید، اگر دانش کافی داشته باشم.', en: 'Maybe, if I have enough knowledge.' }, economicScore: 3, socialScore: -1 },
            { text: { fa: 'خیر، ریسک آن بالاست.', en: 'No, the risk is too high.' }, economicScore: -2, socialScore: 1 },
            { text: { fa: 'اصلا، سرمایه‌گذاری در این بازارها را غیراخلاقی می‌دانم.', en: 'Not at all, I consider investing in these markets unethical.' }, economicScore: -6, socialScore: 2 }
        ]
    },
    {
        question: { fa: 'میزان رضایت شما از سیستم آموزش و پرورش چقدر است؟', en: 'How satisfied are you with the education system?' },
        options: [
            { text: { fa: 'بسیار راضی، کیفیت آموزش عالی است.', en: 'Very satisfied, the quality of education is excellent.' }, economicScore: 2, socialScore: 3 },
            { text: { fa: 'راضی، اما جای بهبود دارد.', en: 'Satisfied, but there is room for improvement.' }, economicScore: 0, socialScore: 1 },
            { text: { fa: 'ناراضی، نیاز به اصلاحات اساسی دارد.', en: 'Dissatisfied, it needs fundamental reforms.' }, economicScore: -4, socialScore: -2 },
            { text: { fa: 'بسیار ناراضی، سیستم کاملا ناکارآمد است.', en: 'Very dissatisfied, the system is completely inefficient.' }, economicScore: -6, socialScore: -4 }
        ]
    },
    {
        question: { fa: 'چقدر در مصرف انرژی و منابع طبیعی صرفه‌جویی می‌کنید؟', en: 'How much do you conserve energy and natural resources?' },
        options: [
            { text: { fa: 'بسیار زیاد، این یک وظیفه اخلاقی است.', en: 'A great deal, it is a moral duty.' }, economicScore: -5, socialScore: -6 },
            { text: { fa: 'زیاد، تا جایی که برایم امکان‌پذیر باشد.', en: 'A lot, as much as is possible for me.' }, economicScore: -2, socialScore: -3 },
            { text: { fa: 'کم، به آن فکر نمی‌کنم.', en: 'Little, I don\'t think about it.' }, economicScore: 4, socialScore: 3 },
            { text: { fa: 'اصلا، این مسائل برایم اهمیتی ندارد.', en: 'Not at all, these issues don\'t matter to me.' }, economicScore: 7, socialScore: 5 }
        ]
    },
     {
        question: { fa: 'آیا موافق افزایش حداقل حقوق هستید؟', en: 'Do you agree with increasing the minimum wage?' },
        options: [
            { text: { fa: 'بله، و باید به طور قابل توجهی افزایش یابد.', en: 'Yes, and it should be increased significantly.' }, economicScore: -9, socialScore: 0 },
            { text: { fa: 'بله، اما به صورت متعادل و با توجه به تورم.', en: 'Yes, but in a balanced way, considering inflation.' }, economicScore: -5, socialScore: 0 },
            { text: { fa: 'خیر، این کار به ضرر کارفرمایان و اقتصاد است.', en: 'No, it is detrimental to employers and the economy.' }, economicScore: 7, socialScore: 2 },
            { text: { fa: 'خیر، دولت نباید در تعیین دستمزدها دخالت کند.', en: 'No, the government should not interfere in setting wages.' }, economicScore: 9, socialScore: 1 }
        ]
    },
    {
        question: { fa: 'میزان رضایت شما از حمل‌ونقل عمومی چقدر است؟', en: 'How satisfied are you with public transportation?' },
        options: [
            { text: { fa: 'بسیار راضی.', en: 'Very satisfied.' }, economicScore: -3, socialScore: 1 },
            { text: { fa: 'راضی.', en: 'Satisfied.' }, economicScore: -1, socialScore: 0 },
            { text: { fa: 'ناراضی.', en: 'Dissatisfied.' }, economicScore: 2, socialScore: -1 },
            { text: { fa: 'بسیار ناراضی.', en: 'Very dissatisfied.' }, economicScore: 4, socialScore: -2 }
        ]
    },
    {
        question: { fa: 'آیا معتقدید فقر کامل قابل رفع است؟', en: 'Do you believe that extreme poverty can be eradicated?' },
        options: [
            { text: { fa: 'بله، با سیاست‌های درست دولتی و توزیع مجدد ثروت.', en: 'Yes, with the right government policies and wealth redistribution.' }, economicScore: -8, socialScore: -3 },
            { text: { fa: 'بله، اما از طریق رشد اقتصادی و ایجاد فرصت.', en: 'Yes, but through economic growth and creating opportunities.' }, economicScore: 4, socialScore: -1 },
            { text: { fa: 'خیر، فقر همیشه بخشی از جامعه خواهد بود.', en: 'No, poverty will always be a part of society.' }, economicScore: 6, socialScore: 4 },
            { text: { fa: 'خیر، و تلاش برای رفع آن بی‌فایده و حتی مضر است.', en: 'No, and trying to eradicate it is futile and even harmful.' }, economicScore: 7, socialScore: 6 }
        ]
    },
    {
        question: { fa: 'اعتماد شما به آمارهای اقتصادی دولتی چقدر است؟', en: 'How much do you trust government economic statistics?' },
        options: [
            { text: { fa: 'اعتماد کامل دارم.', en: 'I have complete trust.' }, economicScore: -2, socialScore: 4 },
            { text: { fa: 'تا حدودی اعتماد دارم.', en: 'I have some trust.' }, economicScore: 0, socialScore: 1 },
            { text: { fa: 'اعتماد کمی دارم.', en: 'I have little trust.' }, economicScore: 3, socialScore: -2 },
            { text: { fa: 'اصلا اعتماد ندارم و آن‌ها را دستکاری شده می‌دانم.', en: 'I have no trust at all and consider them manipulated.' }, economicScore: 5, socialScore: -5 }
        ]
    },
    {
        question: { fa: 'چقدر در سرمایه‌گذاری‌های خود به مسائل اخلاقی (مانند محیط زیست) توجه می‌کنید؟', en: 'How much attention do you pay to ethical issues (like the environment) in your investments?' },
        options: [
            { text: { fa: 'بسیار زیاد، این اولویت اصلی من است.', en: 'A great deal, it is my main priority.' }, economicScore: -6, socialScore: -7 },
            { text: { fa: 'زیاد، اگر بازدهی خوبی هم داشته باشد.', en: 'A lot, if it also has a good return.' }, economicScore: -3, socialScore: -4 },
            { text: { fa: 'کم، بازدهی مالی برایم مهم‌تر است.', en: 'Little, financial return is more important to me.' }, economicScore: 5, socialScore: 2 },
            { text: { fa: 'اصلا، تنها هدف سرمایه‌گذاری کسب سود است.', en: 'Not at all, the only goal of investing is to make a profit.' }, economicScore: 8, socialScore: 4 }
        ]
    },
    {
        question: { fa: 'در فعالیت‌های اجتماعی و فرهنگی چقدر مشارکت دارید؟', en: 'How much do you participate in social and cultural activities?' },
        options: [
            { text: { fa: 'بسیار زیاد و فعالانه.', en: 'A great deal and actively.' }, economicScore: -4, socialScore: -5 },
            { text: { fa: 'گاهی اوقات.', en: 'Sometimes.' }, economicScore: -1, socialScore: -2 },
            { text: { fa: 'به ندرت.', en: 'Rarely.' }, economicScore: 2, socialScore: 2 },
            { text: { fa: 'اصلا.', en: 'Not at all.' }, economicScore: 4, socialScore: 4 }
        ]
    },
    {
        question: { fa: 'حمایت از آموزش‌های مالی و اقتصادی چه مقدار برایتان مهم است؟', en: 'How important is supporting financial and economic education to you?' },
        options: [
            { text: { fa: 'بسیار مهم است، باید جزئی از برنامه درسی مدارس باشد.', en: 'Very important, it should be part of the school curriculum.' }, economicScore: 3, socialScore: -3 },
            { text: { fa: 'مهم است، به افراد کمک می‌کند تصمیمات بهتری بگیرند.', en: 'Important, it helps people make better decisions.' }, economicScore: 1, socialScore: -1 },
            { text: { fa: 'چندان مهم نیست، مسائل مهم‌تری برای آموزش وجود دارد.', en: 'Not very important, there are more important things to teach.' }, economicScore: -2, socialScore: 2 },
            { text: { fa: 'مهم نیست، این یک مسئولیت شخصی است.', en: 'Not important, it is a personal responsibility.' }, economicScore: -4, socialScore: 1 }
        ]
    },
    {
        question: { fa: 'فناوری و نوآوری چه تاثیری بر آینده اقتصادی دارد؟', en: 'What impact do technology and innovation have on the economic future?' },
        options: [
            { text: { fa: 'تاثیر مثبت دارد و باعث رشد و رفاه می‌شود.', en: 'It has a positive impact and leads to growth and prosperity.' }, economicScore: 6, socialScore: -4 },
            { text: { fa: 'هم فرصت است و هم تهدید، و باید به درستی مدیریت شود.', en: 'It is both an opportunity and a threat, and must be managed properly.' }, economicScore: 1, socialScore: 1 },
            { text: { fa: 'بیشتر تهدید است و باعث نابرابری و بیکاری می‌شود.', en: 'It is more of a threat and causes inequality and unemployment.' }, economicScore: -6, socialScore: 3 },
            { text: { fa: 'تاثیر آن اغراق شده است، ساختارهای اساسی اقتصاد تغییری نمی‌کنند.', en: 'Its impact is exaggerated; the fundamental structures of the economy do not change.' }, economicScore: -2, socialScore: 4 }
        ]
    },
    {
        question: { fa: 'آیا دولت باید برای شفافیت قیمت‌ها و حمایت از مصرف‌کننده اقدام کند؟', en: 'Should the government take action for price transparency and consumer protection?' },
        options: [
            { text: { fa: 'بله، دولت باید به شدت بر قیمت‌ها نظارت کرده و با گران‌فروشی مقابله کند.', en: 'Yes, the government should strictly monitor prices and combat overcharging.' }, economicScore: -7, socialScore: 5 },
            { text: { fa: 'بله، با ارائه اطلاعات شفاف به مصرف‌کنندگان باید کمک کند.', en: 'Yes, it should help by providing transparent information to consumers.' }, economicScore: -3, socialScore: 1 },
            { text: { fa: 'خیر، رقابت در بازار آزاد بهترین راه برای حمایت از مصرف‌کننده است.', en: 'No, competition in the free market is the best way to protect consumers.' }, economicScore: 8, socialScore: -3 },
            { text: { fa: 'خیر، هرگونه دخالت دولت در قیمت‌گذاری مضر است.', en: 'No, any government intervention in pricing is harmful.' }, economicScore: 10, socialScore: -4 }
        ]
    },
    {
        question: { fa: 'حمایت بیشتری از حقوق کارگران کم‌درآمد دارید؟', en: 'Do you support more rights for low-income workers?' },
        options: [
            { text: { fa: 'بله، باید از طریق اتحادیه‌های قوی و قوانین حمایتی از آنها دفاع کرد.', en: 'Yes, they should be defended through strong unions and protective laws.' }, economicScore: -8, socialScore: -1 },
            { text: { fa: 'بله، باید حداقل دستمزد مناسبی برای آنها تضمین شود.', en: 'Yes, a decent minimum wage should be guaranteed for them.' }, economicScore: -6, socialScore: 0 },
            { text: { fa: 'خیر، این کار به ضرر کسب‌وکارها و در نهایت خود کارگران است.', en: 'No, it is detrimental to businesses and ultimately the workers themselves.' }, economicScore: 7, socialScore: 3 },
            { text: { fa: 'خیر، دستمزد باید صرفاً بر اساس عرضه و تقاضا در بازار تعیین شود.', en: 'No, wages should be determined solely by supply and demand in the market.' }, economicScore: 9, socialScore: 1 }
        ]
    },
    {
        question: { fa: 'آیا باور دارید نابرابری اقتصادی توجیه‌پذیر است؟', en: 'Do you believe economic inequality is justifiable?' },
        options: [
            { text: { fa: 'خیر، به هیچ وجه. نابرابری شدید همیشه نتیجه یک سیستم ناعادلانه است.', en: 'No, not at all. Extreme inequality is always the result of an unjust system.' }, economicScore: -9, socialScore: -2 },
            { text: { fa: 'تا حدی. مقداری نابرابری طبیعی است اما باید کنترل شود.', en: 'To some extent. Some inequality is natural but should be controlled.' }, economicScore: -4, socialScore: 0 },
            { text: { fa: 'بله، این یک انگیزه طبیعی برای تلاش و نوآوری است.', en: 'Yes, it is a natural incentive for effort and innovation.' }, economicScore: 7, socialScore: 4 },
            { text: { fa: 'بله، کاملاً. هرکس به اندازه لیاقت و تلاشش باید بهره‌مند شود.', en: 'Yes, completely. Everyone should benefit according to their merit and effort.' }, economicScore: 9, socialScore: 5 }
        ]
    },
    {
        question: { fa: 'رویکرد دولت نسبت به جنبش‌های جدایی‌طلبانه چه باید باشد؟', en: 'What should be the government\'s approach to separatist movements?' },
        options: [
            { text: { fa: 'سرکوب قاطع برای حفظ تمامیت ارضی کشور.', en: 'Decisive suppression to preserve the country\'s territorial integrity.' }, economicScore: 4, socialScore: 9 },
            { text: { fa: 'مذاکره و اعطای خودمختاری بیشتر برای حل مسالمت‌آمیز.', en: 'Negotiation and granting more autonomy for a peaceful resolution.' }, economicScore: -3, socialScore: -4 },
            { text: { fa: 'به رسمیت شناختن حق تعیین سرنوشت و اجازه برگزاری همه‌پرسی.', en: 'Recognizing the right to self-determination and allowing a referendum.' }, economicScore: -6, socialScore: -8 },
            { text: { fa: 'نادیده گرفتن آنها تا زمانی که به خشونت متوسل نشوند.', en: 'Ignoring them as long as they do not resort to violence.' }, economicScore: 1, socialScore: 2 }
        ]
    },
    {
        question: { fa: 'آیا باید برای محصولات سبز و سازگار با محیط زیست هزینه بیشتری پرداخت؟', en: 'Should we pay more for green and environmentally friendly products?' },
        options: [
            { text: { fa: 'بله، این یک مسئولیت اخلاقی برای حفظ سیاره است.', en: 'Yes, it is a moral responsibility to protect the planet.' }, economicScore: -5, socialScore: -6 },
            { text: { fa: 'بله، اگر تفاوت قیمت معقول باشد.', en: 'Yes, if the price difference is reasonable.' }, economicScore: -2, socialScore: -3 },
            { text: { fa: 'خیر، این محصولات لوکس هستند و برای همه قابل دسترس نیستند.', en: 'No, these products are luxury items and not accessible to everyone.' }, economicScore: 3, socialScore: 2 },
            { text: { fa: 'خیر، قیمت و کارایی محصول مهمترین معیار است.', en: 'No, the product\'s price and performance are the most important criteria.' }, economicScore: 6, socialScore: 4 }
        ]
    },
    {
        question: { fa: 'وضعیت اقتصادی و مالی فعلی خود را چگونه ارزیابی می‌کنید؟', en: 'How do you assess your current economic and financial situation?' },
        options: [
            { text: { fa: 'عالی، کاملاً راضی هستم.', en: 'Excellent, I am completely satisfied.' }, economicScore: 6, socialScore: 1 },
            { text: { fa: 'خوب، اما می‌توانست بهتر باشد.', en: 'Good, but it could be better.' }, economicScore: 2, socialScore: 0 },
            { text: { fa: 'متوسط، به سختی از پس هزینه‌ها برمی‌آیم.', en: 'Average, I can barely make ends meet.' }, economicScore: -4, socialScore: -1 },
            { text: { fa: 'بد، در وضعیت نامناسبی قرار دارم.', en: 'Bad, I am in a difficult situation.' }, economicScore: -7, socialScore: -2 }
        ]
    },
    {
        question: { fa: 'چقدر در مصرف محصولات ارگانیک و سبز فعالیت دارید؟', en: 'How often do you use organic and green products?' },
        options: [
            { text: { fa: 'بسیار زیاد، تقریباً تمام خریدهایم از این نوع است.', en: 'Very often, almost all my purchases are of this type.' }, economicScore: -5, socialScore: -5 },
            { text: { fa: 'گاهی اوقات، اگر در دسترس و به صرفه باشد.', en: 'Sometimes, if they are available and affordable.' }, economicScore: -2, socialScore: -2 },
            { text: { fa: 'به ندرت، برایم اهمیتی ندارد.', en: 'Rarely, it doesn\'t matter to me.' }, economicScore: 3, socialScore: 2 },
            { text: { fa: 'اصلاً، اینها را ترفندهای بازاریابی می‌دانم.', en: 'Never, I consider them marketing gimmicks.' }, economicScore: 6, socialScore: 4 }
        ]
    },
    {
        question: { fa: 'چقدر برای آموزش مالی و اقتصادی ارزش قائلید؟', en: 'How much value do you place on financial and economic education?' },
        options: [
            { text: { fa: 'بسیار زیاد، این یکی از مهمترین مهارت‌های زندگی است.', en: 'A great deal, it is one of the most important life skills.' }, economicScore: 5, socialScore: -2 },
            { text: { fa: 'زیاد، به افراد در مدیریت زندگی کمک می‌کند.', en: 'A lot, it helps people manage their lives.' }, economicScore: 2, socialScore: 0 },
            { text: { fa: 'متوسط، مهارت‌های دیگری هم به همین اندازه مهم هستند.', en: 'Moderately, other skills are just as important.' }, economicScore: -1, socialScore: 1 },
            { text: { fa: 'کم، ساختار اقتصادی مهم‌تر از دانش فردی است.', en: 'Little, the economic structure is more important than individual knowledge.' }, economicScore: -5, socialScore: 3 }
        ]
    }
  ],
  3: [
    {
        question: { fa: 'مفهوم "مالکیت خصوصی" از دید شما چیست؟', en: 'What is your concept of "private property"?' },
        options: [
            { text: { fa: 'مالکیت خصوصی یک ساختار اجتماعی است که به نابرابری دامن می‌زند و باید محدود یا لغو شود.', en: 'Private property is a social construct that fuels inequality and should be limited or abolished.' }, economicScore: -10, socialScore: 2 },
            { text: { fa: 'مالکیت خصوصی باید وجود داشته باشد اما با مسئولیت‌های اجتماعی سنگین همراه باشد.', en: 'Private property should exist but come with heavy social responsibilities.' }, economicScore: -5, socialScore: 1 },
            { text: { fa: 'مالکیت خصوصی یک حق طبیعی و اساسی برای شکوفایی فردی و اقتصادی است.', en: 'Private property is a natural and fundamental right for individual and economic prosperity.' }, economicScore: 8, socialScore: -4 },
            { text: { fa: 'حق مالکیت مطلق است و دولت تحت هیچ شرایطی حق دخالت در آن را ندارد.', en: 'The right to property is absolute, and the government has no right to interfere with it under any circumstances.' }, economicScore: 10, socialScore: -6 }
        ]
    },
    {
        question: { fa: 'آیا دولت باید برای مقابله با اطلاعات نادرست (fake news) پلتفرم‌های آنلاین را قانون‌گذاری کند؟', en: 'Should the government regulate online platforms to combat misinformation (fake news)?' },
        options: [
            { text: { fa: 'بله، دولت مسئولیت دارد تا شهروندان را از اطلاعات نادرست و مضر محافظت کند.', en: 'Yes, the government has a responsibility to protect citizens from false and harmful information.' }, economicScore: -4, socialScore: 7 },
            { text: { fa: 'بله، اما فقط از طریق نهادهای مستقل و با شفافیت کامل برای جلوگیری از سانسور.', en: 'Yes, but only through independent bodies and with full transparency to prevent censorship.' }, economicScore: -2, socialScore: 2 },
            { text: { fa: 'خیر، این کار به سانسور منجر می‌شود. بهترین راه، آموزش سواد رسانه‌ای به مردم است.', en: 'No, this would lead to censorship. The best way is to promote media literacy among the public.' }, economicScore: 3, socialScore: -7 },
            { text: { fa: 'خیر، هر فردی مسئول تشخیص حقیقت از دروغ است و بازار آزاد ایده‌ها باید حاکم باشد.', en: 'No, each individual is responsible for discerning truth from falsehood, and the free market of ideas should prevail.' }, economicScore: 5, socialScore: -9 }
        ]
    },
    {
        question: { fa: 'ایده "درآمد پایه جهانی" (Universal Basic Income) را چگونه ارزیابی می‌کنید؟', en: 'How do you evaluate the idea of "Universal Basic Income" (UBI)?' },
        options: [
            { text: { fa: 'یک ایده عالی برای ریشه‌کن کردن فقر و افزایش آزادی فردی در عصر اتوماسیون.', en: 'An excellent idea to eradicate poverty and increase individual freedom in the age of automation.' }, economicScore: -8, socialScore: -6 },
            { text: { fa: 'ارزش بررسی دارد، اما باید با دقت و به صورت آزمایشی اجرا شود تا پیامدهای آن مشخص شود.', en: 'It is worth considering, but it must be implemented carefully and on a trial basis to determine its consequences.' }, economicScore: -3, socialScore: -2 },
            { text: { fa: 'یک طرح غیرعملی و پرهزینه است که انگیزه کار را از بین می‌برد.', en: 'It is an impractical and costly scheme that destroys the incentive to work.' }, economicScore: 7, socialScore: 3 },
            { text: { fa: 'این طرح راهی برای کنترل مردم توسط دولت و نابودی ساختار کار و تلاش است.', en: 'This scheme is a way for the government to control people and destroy the structure of work and effort.' }, economicScore: 8, socialScore: 6 }
        ]
    },
    {
        question: { fa: 'آیا پیشرفت فناوری (مانند هوش مصنوعی یا مهندسی ژنتیک) باید توسط دولت کنترل شود؟', en: 'Should technological progress (like AI or genetic engineering) be controlled by the government?' },
        options: [
            { text: { fa: 'بله، این فناوری‌ها خطرات وجودی دارند و باید تحت نظارت شدید بین‌المللی و دولتی باشند.', en: 'Yes, these technologies pose existential risks and must be under strict international and governmental supervision.' }, economicScore: -5, socialScore: 6 },
            { text: { fa: 'باید چارچوب‌های اخلاقی و قانونی برای آن تعریف شود، اما نباید مانع نوآوری شد.', en: 'Ethical and legal frameworks should be defined for it, but it should not hinder innovation.' }, economicScore: -1, socialScore: -2 },
            { text: { fa: 'دولت باید کنار بایستد و اجازه دهد نوآوری بدون مانع به پیشرفت خود ادامه دهد.', en: 'The government should stand aside and allow innovation to proceed unhindered.' }, economicScore: 6, socialScore: -7 },
            { text: { fa: 'هرگونه تلاشی برای کنترل فناوری، محکوم به شکست است و تنها به نفع رقبا تمام می‌شود.', en: 'Any attempt to control technology is doomed to fail and will only benefit competitors.' }, economicScore: 8, socialScore: -5 }
        ]
    },
    {
        question: { fa: 'رویکرد نظام قضایی به جرم و مجازات چه باید باشد؟', en: 'What should the judicial system\'s approach to crime and punishment be?' },
        options: [
            { text: { fa: 'تمرکز اصلی باید بر بازپروری مجرمان و ریشه‌یابی علل اجتماعی جرم باشد.', en: 'The main focus should be on rehabilitating criminals and addressing the social root causes of crime.' }, economicScore: -6, socialScore: -8 },
            { text: { fa: 'باید توازنی بین تنبیه و بازپروری وجود داشته باشد.', en: 'There should be a balance between punishment and rehabilitation.' }, economicScore: -1, socialScore: -2 },
            { text: { fa: 'هدف اصلی مجازات، تنبیه مجرم و عبرت دیگران برای حفظ نظم جامعه است.', en: 'The main purpose of punishment is to penalize the offender and deter others to maintain social order.' }, economicScore: 5, socialScore: 7 },
            { text: { fa: 'مجازات‌های سخت و قاطع، تنها راه مؤثر برای کاهش جرم و جنایت است.', en: 'Harsh and decisive punishments are the only effective way to reduce crime.' }, economicScore: 7, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'مالیات بر ارث باید چگونه باشد؟', en: 'What should the inheritance tax be like?' },
        options: [
            { text: { fa: 'باید بسیار بالا باشد تا از شکل‌گیری اشرافیت موروثی جلوگیری کرده و به برابری فرصت‌ها کمک کند.', en: 'It should be very high to prevent the formation of a hereditary aristocracy and to promote equality of opportunity.' }, economicScore: -9, socialScore: -1 },
            { text: { fa: 'باید برای ثروت‌های بسیار کلان و با نرخ معقول وجود داشته باشد.', en: 'It should exist for very large fortunes at a reasonable rate.' }, economicScore: -4, socialScore: 0 },
            { text: { fa: 'این مالیات ناعادلانه است زیرا درآمدی است که قبلاً یک بار مالیات آن پرداخت شده.', en: 'This tax is unfair because it is on income that has already been taxed once.' }, economicScore: 8, socialScore: 2 },
            { text: { fa: 'باید به طور کامل حذف شود؛ هر فردی حق دارد دارایی خود را به هر کسی که می‌خواهد منتقل کند.', en: 'It should be completely abolished; every individual has the right to transfer their assets to whomever they wish.' }, economicScore: 9, socialScore: -3 }
        ]
    },
    {
        question: { fa: 'آیا شرکت‌های بزرگ فناوری (مانند گوگل، فیسبوک) باید تجزیه شوند؟', en: 'Should large technology companies (like Google, Facebook) be broken up?' },
        options: [
            { text: { fa: 'بله، قدرت انحصاری آن‌ها برای دموکراسی و اقتصاد خطرناک است و باید تجزیه شوند.', en: 'Yes, their monopoly power is dangerous for democracy and the economy and they should be broken up.' }, economicScore: -8, socialScore: -3 },
            { text: { fa: 'نیازی به تجزیه نیست، اما باید تحت نظارت و قانون‌گذاری شدید ضد انحصار قرار گیرند.', en: 'There is no need to break them up, but they should be subject to strict antitrust regulation and oversight.' }, economicScore: -4, socialScore: 1 },
            { text: { fa: 'موفقیت آن‌ها نتیجه نوآوری است و دولت نباید در بازار آزاد دخالت کند.', en: 'Their success is the result of innovation, and the government should not interfere in the free market.' }, economicScore: 7, socialScore: -5 },
            { text: { fa: 'این شرکت‌ها خدمات ارزشمندی ارائه می‌دهند و هرگونه دخالت دولتی به مصرف‌کنندگان آسیب می‌زند.', en: 'These companies provide valuable services, and any government intervention harms consumers.' }, economicScore: 9, socialScore: -6 }
        ]
    },
    {
        question: { fa: 'در یک دموکراسی، حقوق اقلیت‌ها در برابر خواست اکثریت چه جایگاهی دارد؟', en: 'In a democracy, what is the status of minority rights versus the will of the majority?' },
        options: [
            { text: { fa: 'حقوق اساسی اقلیت‌ها (فردی، فرهنگی، مذهبی) باید تحت هر شرایطی محافظت شود، حتی اگر خلاف نظر اکثریت باشد.', en: 'The fundamental rights of minorities (individual, cultural, religious) must be protected under all circumstances, even if it goes against the majority\'s opinion.' }, economicScore: -5, socialScore: -9 },
            { text: { fa: 'باید توازنی بین خواست اکثریت و حقوق اقلیت‌ها ایجاد کرد.', en: 'A balance must be struck between the will of the majority and the rights of minorities.' }, economicScore: -1, socialScore: -2 },
            { text: { fa: 'خواست اکثریت باید حاکم باشد، تا زمانی که به سرکوب فیزیکی اقلیت منجر نشود.', en: 'The will of the majority should prevail, as long as it does not lead to the physical suppression of minorities.' }, economicScore: 4, socialScore: 6 },
            { text: { fa: 'دموکراسی یعنی حکومت اکثریت، و اقلیت‌ها باید خود را با آن تطبیق دهند.', en: 'Democracy means the rule of the majority, and minorities must adapt to it.' }, economicScore: 6, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'جهانی‌شدن (Globalization) چه پیامدهایی داشته است؟', en: 'What have been the consequences of globalization?' },
        options: [
            { text: { fa: 'یک نیروی مثبت که به صلح، رفاه و تبادل فرهنگی در سراسر جهان کمک کرده است.', en: 'A positive force that has contributed to peace, prosperity, and cultural exchange worldwide.' }, economicScore: -6, socialScore: -7 },
            { text: { fa: 'مزایا و معایبی داشته؛ باعث رشد اقتصادی شده اما نابرابری را نیز افزایش داده است.', en: 'It has had pros and cons; it has led to economic growth but has also increased inequality.' }, economicScore: -2, socialScore: -1 },
            { text: { fa: 'عمدتاً منفی بوده و باعث از بین رفتن مشاغل داخلی و تضعیف فرهنگ‌های ملی شده است.', en: 'It has been mostly negative, causing the loss of domestic jobs and the weakening of national cultures.' }, economicScore: 7, socialScore: 7 },
            { text: { fa: 'ابزاری برای استثمار کشورهای در حال توسعه توسط شرکت‌های چندملیتی و قدرت‌های غربی است.', en: 'It is a tool for the exploitation of developing countries by multinational corporations and Western powers.' }, economicScore: -8, socialScore: 5 }
        ]
    },
    {
        question: { fa: 'هدف نهایی جامعه بشری چه باید باشد؟', en: 'What should be the ultimate goal of human society?' },
        options: [
            { text: { fa: 'بیشترین خوشبختی و رفاه برای بیشترین تعداد از مردم.', en: 'The greatest happiness and well-being for the greatest number of people.' }, economicScore: -6, socialScore: -4 },
            { text: { fa: 'حداکثر کردن آزادی و خودمختاری فردی.', en: 'Maximizing individual freedom and autonomy.' }, economicScore: 5, socialScore: -9 },
            { text: { fa: 'پیشرفت علمی و فناورانه و کشف ناشناخته‌ها.', en: 'Scientific and technological advancement and the discovery of the unknown.' }, economicScore: 2, socialScore: -3 },
            { text: { fa: 'حفظ نظم، ثبات و ارزش‌های معنوی برای نسل‌های آینده.', en: 'Preserving order, stability, and spiritual values for future generations.' }, economicScore: 4, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'چقدر با میراث فرهنگی و سنت‌های خود هویت دارید؟', en: 'How much do you identify with your cultural heritage and traditions?' },
        options: [
            { text: { fa: 'بسیار زیاد، این بخش مهمی از هویت من است.', en: 'A great deal, it is an important part of my identity.' }, economicScore: 3, socialScore: 8 },
            { text: { fa: 'تا حدودی، برایم قابل احترام است.', en: 'To some extent, I respect it.' }, economicScore: 1, socialScore: 4 },
            { text: { fa: 'کم، بیشتر خودم را یک شهروند جهانی می‌دانم.', en: 'Little, I see myself more as a global citizen.' }, economicScore: -2, socialScore: -5 },
            { text: { fa: 'اصلا، سنت‌ها را مانع پیشرفت می‌دانم.', en: 'Not at all, I consider traditions an obstacle to progress.' }, economicScore: -4, socialScore: -8 }
        ]
    },
    {
        question: { fa: 'چندفرهنگی چه میزان جامعه را غنی‌تر می‌کند؟', en: 'To what extent does multiculturalism enrich a society?' },
        options: [
            { text: { fa: 'بسیار زیاد، تنوع فرهنگی باعث پویایی و خلاقیت جامعه می‌شود.', en: 'A great deal, cultural diversity leads to a dynamic and creative society.' }, economicScore: -4, socialScore: -8 },
            { text: { fa: 'تا حدودی، اگر به درستی مدیریت شود.', en: 'To some extent, if it is managed properly.' }, economicScore: -1, socialScore: -3 },
            { text: { fa: 'کم، بیشتر باعث تفرقه و از بین رفتن هویت ملی می‌شود.', en: 'Little, it mostly causes division and the loss of national identity.' }, economicScore: 5, socialScore: 6 },
            { text: { fa: 'اصلا، جامعه باید یکپارچگی فرهنگی خود را حفظ کند.', en: 'Not at all, a society must preserve its cultural homogeneity.' }, economicScore: 7, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'حمایت از برابری جنسیتی در تمام عرصه‌ها چه میزان برایتان اهمیت دارد؟', en: 'How important is supporting gender equality in all areas to you?' },
        options: [
            { text: { fa: 'اولویت اصلی من است و باید فعالانه برای آن مبارزه کرد.', en: 'It is my top priority, and we must actively fight for it.' }, economicScore: -6, socialScore: -9 },
            { text: { fa: 'بسیار مهم است و باید موانع قانونی برداشته شود.', en: 'Very important, and legal barriers must be removed.' }, economicScore: -3, socialScore: -6 },
            { text: { fa: 'مهم است، اما تفاوت‌های طبیعی بین زن و مرد را باید پذیرفت.', en: 'It is important, but natural differences between men and women should be accepted.' }, economicScore: 3, socialScore: 4 },
            { text: { fa: 'اهمیتی ندارد، نقش‌های سنتی جنسیتی باید حفظ شوند.', en: 'It is not important, traditional gender roles should be preserved.' }, economicScore: 6, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'خانواده و اتحاد خانوادگی چه قدر برایتان اهمیت دارد؟', en: 'How important is family and family unity to you?' },
        options: [
            { text: { fa: 'مهم‌ترین نهاد اجتماعی است و باید به هر قیمتی حفظ شود.', en: 'It is the most important social institution and must be preserved at all costs.' }, economicScore: 4, socialScore: 9 },
            { text: { fa: 'بسیار مهم است، اما تعریف خانواده می‌تواند متنوع باشد.', en: 'Very important, but the definition of family can be diverse.' }, economicScore: 1, socialScore: 2 },
            { text: { fa: 'مهم است، اما آزادی فردی ارجحیت دارد.', en: 'It is important, but individual freedom takes precedence.' }, economicScore: -2, socialScore: -4 },
            { text: { fa: 'یک ساختار اجتماعی قدیمی است که اهمیت خود را از دست داده.', en: 'It is an outdated social construct that has lost its importance.' }, economicScore: -5, socialScore: -7 }
        ]
    },
    {
        question: { fa: 'معتقدید تغییرات فرهنگی برای پیشرفت جامعه لازم است؟', en: 'Do you believe cultural changes are necessary for a society to progress?' },
        options: [
            { text: { fa: 'بله، جامعه برای پیشرفت باید دائما در حال تغییر و نو شدن باشد.', en: 'Yes, society must constantly be changing and renewing itself to progress.' }, economicScore: -3, socialScore: -7 },
            { text: { fa: 'بله، اما این تغییرات باید تدریجی و ارگانیک باشند.', en: 'Yes, but these changes should be gradual and organic.' }, economicScore: 0, socialScore: -2 },
            { text: { fa: 'خیر، باید از ارزش‌های اصلی فرهنگی محافظت کرد.', en: 'No, core cultural values must be protected.' }, economicScore: 4, socialScore: 6 },
            { text: { fa: 'کاملا خیر، تغییرات فرهنگی به انحطاط جامعه منجر می‌شود.', en: 'Absolutely not, cultural changes lead to societal decay.' }, economicScore: 6, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'آزادی دینی و مذهبی چه مقدار برایتان اهمیت دارد؟', en: 'How important is religious freedom to you?' },
        options: [
            { text: { fa: 'بسیار زیاد، هر فردی باید در انتخاب و عمل به دین خود آزاد باشد.', en: 'Very important, everyone should be free to choose and practice their religion.' }, economicScore: -2, socialScore: -9 },
            { text: { fa: 'زیاد، تا زمانی که به امنیت و نظم عمومی آسیب نزند.', en: 'Important, as long as it does not harm public safety and order.' }, economicScore: 1, socialScore: -4 },
            { text: { fa: 'کم، دین اکثریت باید در جامعه حاکم باشد.', en: 'Not very, the religion of the majority should prevail in society.' }, economicScore: 5, socialScore: 7 },
            { text: { fa: 'اصلا، دین باید از عرصه عمومی حذف شود.', en: 'Not at all, religion should be removed from the public sphere.' }, economicScore: -4, socialScore: 2 }
        ]
    },
    {
        question: { fa: 'آیا معتقدید کلیشه‌های فرهنگی مضر هستند؟', en: 'Do you believe cultural stereotypes are harmful?' },
        options: [
            { text: { fa: 'بله، همیشه مضر و منبع تبعیض هستند.', en: 'Yes, they are always harmful and a source of discrimination.' }, economicScore: -5, socialScore: -8 },
            { text: { fa: 'اغلب مضر هستند، اما گاهی رگه‌هایی از حقیقت دارند.', en: 'They are often harmful, but sometimes contain a grain of truth.' }, economicScore: -2, socialScore: -3 },
            { text: { fa: 'لزوما مضر نیستند و می‌توانند به درک سریع‌تر کمک کنند.', en: 'Not necessarily harmful, and can aid in quick understanding.' }, economicScore: 3, socialScore: 4 },
            { text: { fa: 'خیر، آن‌ها بازتاب واقعیت‌های فرهنگی هستند.', en: 'No, they are a reflection of cultural realities.' }, economicScore: 6, socialScore: 7 }
        ]
    },
    {
        question: { fa: 'تفاوت‌های فرهنگی باید منبع اختلاف باشند یا غنی‌سازی؟', en: 'Should cultural differences be a source of conflict or enrichment?' },
        options: [
            { text: { fa: 'قطعا منبع غنی‌سازی و یادگیری هستند.', en: 'Definitely a source of enrichment and learning.' }, economicScore: -4, socialScore: -8 },
            { text: { fa: 'می‌توانند غنی‌کننده باشند اگر مدیریت شوند.', en: 'They can be enriching if managed.' }, economicScore: -1, socialScore: -2 },
            { text: { fa: 'بیشتر باعث اختلاف و سوءتفاهم می‌شوند.', en: 'They mostly cause conflict and misunderstanding.' }, economicScore: 4, socialScore: 5 },
            { text: { fa: 'قطعا منبع اختلاف هستند و باید برای یکپارچگی تلاش کرد.', en: 'Definitely a source of conflict, and we must strive for homogeneity.' }, economicScore: 6, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'حمایت از ازدواج‌های بین‌فرهنگی و بین‌نژادی چه میزان است؟', en: 'How much do you support intercultural and interracial marriages?' },
        options: [
            { text: { fa: 'کاملا حمایت می‌کنم و آن را تشویق می‌کنم.', en: 'I fully support and encourage it.' }, economicScore: -3, socialScore: -9 },
            { text: { fa: 'حمایت می‌کنم، این یک انتخاب شخصی است.', en: 'I support it, it is a personal choice.' }, economicScore: 0, socialScore: -5 },
            { text: { fa: 'بی‌طرف هستم، اما چالش‌های خود را دارد.', en: 'I am neutral, but it has its challenges.' }, economicScore: 2, socialScore: 2 },
            { text: { fa: 'مخالفم، بهتر است افراد با هم‌فرهنگ خود ازدواج کنند.', en: 'I am against it, it is better for people to marry within their own culture.' }, economicScore: 5, socialScore: 7 }
        ]
    },
    {
        question: { fa: 'باید فرهنگ و مذهب در مقابل تغییرات مدرن مقاوم باشند یا سازگار شوند؟', en: 'Should culture and religion resist or adapt to modern changes?' },
        options: [
            { text: { fa: 'باید کاملا سازگار شوند تا مرتبط باقی بمانند.', en: 'They must fully adapt to remain relevant.' }, economicScore: -3, socialScore: -7 },
            { text: { fa: 'باید بخش‌هایی را تطبیق دهند اما اصول را حفظ کنند.', en: 'They should adapt some parts but preserve their core principles.' }, economicScore: 0, socialScore: -1 },
            { text: { fa: 'باید در برابر تغییرات مقاومت کنند تا اصالت خود را حفظ کنند.', en: 'They must resist changes to preserve their authenticity.' }, economicScore: 5, socialScore: 8 },
            { text: { fa: 'مدرنیته خود یک تهدید است و باید با آن مقابله کرد.', en: 'Modernity itself is a threat and must be opposed.' }, economicScore: 7, socialScore: 10 }
        ]
    },
    {
        question: { fa: 'از حقوق اقوام بومی و میراث آن‌ها حمایت می‌کنید؟', en: 'Do you support the rights and heritage of indigenous peoples?' },
        options: [
            { text: { fa: 'بله، دولت باید فعالانه از حقوق و فرهنگ آن‌ها محافظت کند.', en: 'Yes, the government must actively protect their rights and culture.' }, economicScore: -6, socialScore: -7 },
            { text: { fa: 'بله، حقوق آن‌ها باید محترم شمرده شود.', en: 'Yes, their rights must be respected.' }, economicScore: -2, socialScore: -4 },
            { text: { fa: 'آن‌ها باید مانند سایر شهروندان حقوق یکسان داشته باشند، نه بیشتر.', en: 'They should have the same rights as other citizens, no more.' }, economicScore: 4, socialScore: 3 },
            { text: { fa: 'تمرکز بر این مسائل باعث تضعیف وحدت ملی می‌شود.', en: 'Focusing on these issues weakens national unity.' }, economicScore: 6, socialScore: 6 }
        ]
    },
    {
        question: { fa: 'چقدر در جشن‌ها و سنت‌های فرهنگی ملی شرکت می‌کنید؟', en: 'How often do you participate in national cultural festivals and traditions?' },
        options: [
            { text: { fa: 'بسیار زیاد و با افتخار.', en: 'Very often, and with pride.' }, economicScore: 2, socialScore: 7 },
            { text: { fa: 'گاهی اوقات.', en: 'Sometimes.' }, economicScore: 0, socialScore: 2 },
            { text: { fa: 'به ندرت.', en: 'Rarely.' }, economicScore: -2, socialScore: -3 },
            { text: { fa: 'اصلا.', en: 'Never.' }, economicScore: -4, socialScore: -6 }
        ]
    },
    {
        question: { fa: 'دیدگاه شما درباره ادغام فرهنگی مهاجران چیست؟', en: 'What is your view on the cultural integration of immigrants?' },
        options: [
            { text: { fa: 'مهاجران باید کاملا در فرهنگ کشور میزبان ادغام شوند.', en: 'Immigrants should fully integrate into the host country\'s culture.' }, economicScore: 3, socialScore: 7 },
            { text: { fa: 'باید تشویق به ادغام شوند اما حق حفظ فرهنگ خود را دارند.', en: 'They should be encouraged to integrate but have the right to maintain their own culture.' }, economicScore: 0, socialScore: 1 },
            { text: { fa: 'نباید هیچ فشاری برای ادغام باشد؛ چندفرهنگی بهترین الگو است.', en: 'There should be no pressure to integrate; multiculturalism is the best model.' }, economicScore: -4, socialScore: -7 },
            { text: { fa: 'ادغام غیرممکن است و مهاجرت به ایجاد جوامع موازی منجر می‌شود.', en: 'Integration is impossible, and immigration leads to the creation of parallel societies.' }, economicScore: 6, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'باور دارید دین در زندگی روزمره چه میزان نقش دارد؟', en: 'How much of a role do you believe religion has in daily life?' },
        options: [
            { text: { fa: 'باید راهنمای اصلی تمام جنبه‌های زندگی باشد.', en: 'It should be the primary guide for all aspects of life.' }, economicScore: 4, socialScore: 9 },
            { text: { fa: 'می‌تواند یک منبع مهم معنویت و اخلاق باشد.', en: 'It can be an important source of spirituality and morality.' }, economicScore: 1, socialScore: 3 },
            { text: { fa: 'یک مسئله کاملا شخصی و خصوصی است.', en: 'It is a completely personal and private matter.' }, economicScore: -2, socialScore: -5 },
            { text: { fa: 'یک خرافه قدیمی است که باید کنار گذاشته شود.', en: 'It is an old superstition that should be discarded.' }, economicScore: -5, socialScore: -8 }
        ]
    },
    {
        question: { fa: 'هنر و بیان هنری چه مقدار در زندگی شما اهمیت دارد؟', en: 'How important is art and artistic expression in your life?' },
        options: [
            { text: { fa: 'بسیار زیاد، هنر روح جامعه است.', en: 'Very important, art is the soul of society.' }, economicScore: -4, socialScore: -7 },
            { text: { fa: 'زیاد، از آن لذت می‌برم.', en: 'A lot, I enjoy it.' }, economicScore: -1, socialScore: -3 },
            { text: { fa: 'کم، بیشتر سرگرمی است.', en: 'Not much, it\'s mostly entertainment.' }, economicScore: 2, socialScore: 2 },
            { text: { fa: 'اصلا، اتلاف وقت و منابع است.', en: 'Not at all, it\'s a waste of time and resources.' }, economicScore: 5, socialScore: 5 }
        ]
    },
    {
        question: { fa: 'حمایت از آموزش چندفرهنگی در مدارس چقدر است؟', en: 'How much do you support multicultural education in schools?' },
        options: [
            { text: { fa: 'کاملا ضروری است تا دانش‌آموزان با تنوع آشنا شوند.', en: 'It is absolutely necessary for students to learn about diversity.' }, economicScore: -5, socialScore: -8 },
            { text: { fa: 'مفید است، اما نباید جایگزین آموزش تاریخ و فرهنگ ملی شود.', en: 'It is useful, but should not replace the teaching of national history and culture.' }, economicScore: 0, socialScore: -2 },
            { text: { fa: 'غیرضروری است و باعث سردرگمی دانش‌آموزان می‌شود.', en: 'It is unnecessary and confuses students.' }, economicScore: 4, socialScore: 5 },
            { text: { fa: 'مضر است و وحدت ملی را تضعیف می‌کند.', en: 'It is harmful and weakens national unity.' }, economicScore: 6, socialScore: 8 }
        ]
    },
    {
        question: { fa: 'حمایت از قوانین و سیاست‌هایی برای حفاظت از میراث فرهنگی چقدر است؟', en: 'How much do you support laws and policies to protect cultural heritage?' },
        options: [
            { text: { fa: 'بسیار زیاد، این وظیفه دولت است.', en: 'A great deal, it is the government\'s duty.' }, economicScore: -2, socialScore: 5 },
            { text: { fa: 'زیاد، اما با بودجه معقول.', en: 'A lot, but with a reasonable budget.' }, economicScore: 0, socialScore: 2 },
            { text: { fa: 'کم، این وظیفه بخش خصوصی و خیریه‌هاست.', en: 'Little, it is the responsibility of the private sector and charities.' }, economicScore: 5, socialScore: -2 },
            { text: { fa: 'اصلا، منابع باید صرف مسائل مهم‌تر شوند.', en: 'Not at all, resources should be spent on more important issues.' }, economicScore: 7, socialScore: 1 }
        ]
    },
    {
        question: { fa: 'چقدر به تفاوت‌های فرهنگی احترام می‌گذارید؟', en: 'How much do you respect cultural differences?' },
        options: [
            { text: { fa: 'بسیار زیاد، همه فرهنگ‌ها به یک اندازه ارزشمند هستند.', en: 'A great deal, all cultures are equally valuable.' }, economicScore: -4, socialScore: -9 },
            { text: { fa: 'زیاد، تا زمانی که با ارزش‌های اساسی انسانی در تضاد نباشند.', en: 'A lot, as long as they do not conflict with fundamental human values.' }, economicScore: -1, socialScore: -3 },
            { text: { fa: 'کم، فرهنگ خودم را برتر می‌دانم.', en: 'Little, I consider my own culture superior.' }, economicScore: 5, socialScore: 6 },
            { text: { fa: 'اصلا، فقط یک راه درست برای زندگی وجود دارد.', en: 'Not at all, there is only one right way to live.' }, economicScore: 7, socialScore: 9 }
        ]
    },
    {
        question: { fa: 'نقش ارزش‌های فرهنگی در شکل‌گیری هویت فردی چگونه است؟', en: 'What is the role of cultural values in shaping individual identity?' },
        options: [
            { text: { fa: 'نقش اصلی را دارد و هویت ما را کاملا شکل می‌دهد.', en: 'It plays the main role and completely shapes our identity.' }, economicScore: 3, socialScore: 8 },
            { text: { fa: 'نقش مهمی دارد، اما عوامل دیگری هم موثرند.', en: 'It plays an important role, but other factors are also influential.' }, economicScore: 1, socialScore: 3 },
            { text: { fa: 'نقش کمی دارد، هویت فردی بیشتر اکتسابی است.', en: 'It plays a small role, individual identity is mostly acquired.' }, economicScore: -3, socialScore: -4 },
            { text: { fa: 'هیچ نقشی ندارد، هر فردی هویت منحصر به فرد خود را می‌سازد.', en: 'It plays no role, each person creates their own unique identity.' }, economicScore: -5, socialScore: -8 }
        ]
    },
    {
        question: { fa: 'حمایت از تنوع دینی و مذهبی چه مقدار است؟', en: 'How much do you support religious diversity?' },
        options: [
            { text: { fa: 'بسیار زیاد، پلورالیسم دینی برای یک جامعه سالم ضروری است.', en: 'A great deal, religious pluralism is essential for a healthy society.' }, economicScore: -3, socialScore: -9 },
            { text: { fa: 'زیاد، باید به همه ادیان احترام گذاشت.', en: 'A lot, all religions should be respected.' }, economicScore: 0, socialScore: -4 },
            { text: { fa: 'کم، باعث تفرقه و درگیری می‌شود.', en: 'Little, it causes division and conflict.' }, economicScore: 4, socialScore: 6 },
            { text: { fa: 'اصلا، فقط یک دین حقیقی وجود دارد.', en: 'Not at all, there is only one true religion.' }, economicScore: 6, socialScore: 9 }
        ]
    },
     {
        question: { fa: 'دولت باید از مراسم فرهنگی و مذهبی حمایت مالی کند؟', en: 'Should the government financially support cultural and religious ceremonies?' },
        options: [
            { text: { fa: 'بله، این بخشی از میراث فرهنگی کشور است.', en: 'Yes, it is part of the country\'s cultural heritage.' }, economicScore: -3, socialScore: 6 },
            { text: { fa: 'بله، اما فقط برای مراسمی که به هویت ملی کمک می‌کنند.', en: 'Yes, but only for ceremonies that contribute to national identity.' }, economicScore: 1, socialScore: 7 },
            { text: { fa: 'خیر، این یک امر خصوصی است و نباید از بودجه عمومی هزینه شود.', en: 'No, it is a private matter and should not be funded by public money.' }, economicScore: 4, socialScore: -3 },
            { text: { fa: 'خیر، این کار باعث تفرقه مذهبی و فرهنگی می‌شود.', en: 'No, this causes religious and cultural division.' }, economicScore: 2, socialScore: -5 }
        ]
    },
    {
        question: { fa: 'نقش تنوع فرهنگی در نوآوری و خلاقیت چگونه است؟', en: 'What is the role of cultural diversity in innovation and creativity?' },
        options: [
            { text: { fa: 'نقش حیاتی دارد و منبع اصلی نوآوری است.', en: 'It plays a vital role and is the main source of innovation.' }, economicScore: -4, socialScore: -8 },
            { text: { fa: 'می‌تواند مفید باشد.', en: 'It can be beneficial.' }, economicScore: -1, socialScore: -3 },
            { text: { fa: 'بی‌ارتباط است.', en: 'It is irrelevant.' }, economicScore: 2, socialScore: 1 },
            { text: { fa: 'مضر است و مانع از تمرکز و یکپارچگی می‌شود.', en: 'It is harmful and hinders focus and integration.' }, economicScore: 5, socialScore: 6 }
        ]
    },
    {
        question: { fa: 'اهمیت نقش دین در زندگی اجتماعی چقدر است؟', en: 'How important is the role of religion in social life?' },
        options: [
            { text: { fa: 'بسیار زیاد، دین ستون فقرات یک جامعه اخلاقی است.', en: 'Very important, religion is the backbone of a moral society.' }, economicScore: 4, socialScore: 9 },
            { text: { fa: 'مهم است، به عنوان یک راهنمای اخلاقی.', en: 'Important, as a moral guide.' }, economicScore: 2, socialScore: 4 },
            { text: { fa: 'کم، دین باید یک امر کاملاً شخصی باقی بماند.', en: 'Little, religion should remain a completely personal matter.' }, economicScore: -3, socialScore: -6 },
            { text: { fa: 'هیچ، دین در جامعه مدرن نقشی ندارد و مضر است.', en: 'None, religion has no role in modern society and is harmful.' }, economicScore: -5, socialScore: -8 }
        ]
    },
    {
        question: { fa: 'چه میزان برای آموزش فرهنگی نسل آینده اهمیت قائل هستید؟', en: 'How important do you consider cultural education for the next generation?' },
        options: [
            { text: { fa: 'بسیار زیاد، باید هویت فرهنگی خود را به آنها منتقل کنیم.', en: 'Very important, we must pass on our cultural identity to them.' }, economicScore: 2, socialScore: 8 },
            { text: { fa: 'زیاد، اما باید آنها را با فرهنگ‌های دیگر نیز آشنا کرد.', en: 'Important, but they should also be familiarized with other cultures.' }, economicScore: -1, socialScore: -2 },
            { text: { fa: 'کم، آنها خودشان راهشان را پیدا خواهند کرد.', en: 'Little, they will find their own way.' }, economicScore: 1, socialScore: -5 },
            { text: { fa: 'هیچ، آموزش باید بر روی علوم و مهارت‌های عملی متمرکز باشد.', en: 'None, education should focus on sciences and practical skills.' }, economicScore: 4, socialScore: -1 }
        ]
    },
    {
        question: { fa: 'معتقدید که سنت‌ها باید تغییر یا حفظ شوند؟', en: 'Do you believe traditions should be changed or preserved?' },
        options: [
            { text: { fa: 'باید به هر قیمتی حفظ شوند.', en: 'They should be preserved at all costs.' }, economicScore: 4, socialScore: 9 },
            { text: { fa: 'باید حفظ شوند اما با زمانه تطبیق پیدا کنند.', en: 'They should be preserved but adapted to the times.' }, economicScore: 1, socialScore: 3 },
            { text: { fa: 'باید مورد بازبینی قرار گیرند و سنت‌های مضر حذف شوند.', en: 'They should be reviewed and harmful traditions eliminated.' }, economicScore: -3, socialScore: -5 },
            { text: { fa: 'سنت‌ها مانع پیشرفت هستند و باید کنار گذاشته شوند.', en: 'Traditions are an obstacle to progress and should be abandoned.' }, economicScore: -5, socialScore: -8 }
        ]
    }
  ],
};