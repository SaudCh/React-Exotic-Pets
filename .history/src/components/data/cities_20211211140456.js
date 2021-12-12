const cities = [
  { label: "Karachi ,Sindh", value: "Karachi ,Sindh" },
  { label: "Lahore ,Punjab", value: "Lahore ,Punjab" },
  { label: "Faisalabad ,Punjab", value: "Faisalabad ,Punjab" },
  { label: "Rawalpindi ,Punjab", value: "Rawalpindi ,Punjab" },
  { label: "Gujranwala ,Punjab", value: "Gujranwala ,Punjab" },
  {
    label: "Peshawar ,Khyber Pakhtunkhwa",
    value: "Peshawar ,Khyber Pakhtunkhwa",
  },
  { label: "Multan ,Punjab", value: "Multan ,Punjab" },
  {
    label: "Saidu Sharif ,Khyber Pakhtunkhwa",
    value: "Saidu Sharif ,Khyber Pakhtunkhwa",
  },
  { label: "Hyderabad City ,Sindh", value: "Hyderabad City ,Sindh" },
  { label: "Islamabad ,Islāmābād", value: "Islamabad ,Islāmābād" },
  { label: "Quetta ,Balochistān", value: "Quetta ,Balochistān" },
  { label: "Bahawalpur ,Punjab", value: "Bahawalpur ,Punjab" },
  { label: "Sargodha ,Punjab", value: "Sargodha ,Punjab" },
  { label: "Sialkot City ,Punjab", value: "Sialkot City ,Punjab" },
  { label: "Sukkur ,Sindh", value: "Sukkur ,Sindh" },
  { label: "Larkana ,Sindh", value: "Larkana ,Sindh" },
  { label: "Chiniot ,Punjab", value: "Chiniot ,Punjab" },
  { label: "Shekhupura ,Punjab", value: "Shekhupura ,Punjab" },
  { label: "Jhang City ,Punjab", value: "Jhang City ,Punjab" },
  { label: "Dera Ghazi Khan ,Punjab", value: "Dera Ghazi Khan ,Punjab" },
  { label: "Gujrat ,Punjab", value: "Gujrat ,Punjab" },
  { label: "Rahimyar Khan ,Punjab", value: "Rahimyar Khan ,Punjab" },
  { label: "Kasur ,Punjab", value: "Kasur ,Punjab" },
  { label: "Mardan ,Khyber Pakhtunkhwa", value: "Mardan ,Khyber Pakhtunkhwa" },
  {
    label: "Mingaora ,Khyber Pakhtunkhwa",
    value: "Mingaora ,Khyber Pakhtunkhwa",
  },
  { label: "Nawabshah ,Sindh", value: "Nawabshah ,Sindh" },
  { label: "Sahiwal ,Punjab", value: "Sahiwal ,Punjab" },
  { label: "Mirpur Khas ,Sindh", value: "Mirpur Khas ,Sindh" },
  { label: "Okara ,Punjab", value: "Okara ,Punjab" },
  { label: "Mandi Burewala ,Punjab", value: "Mandi Burewala ,Punjab" },
  { label: "Jacobabad ,Sindh", value: "Jacobabad ,Sindh" },
  { label: "Saddiqabad ,Punjab", value: "Saddiqabad ,Punjab" },
  { label: "Kohat ,Khyber Pakhtunkhwa", value: "Kohat ,Khyber Pakhtunkhwa" },
  { label: "Muridke ,Punjab", value: "Muridke ,Punjab" },
  { label: "Muzaffargarh ,Punjab", value: "Muzaffargarh ,Punjab" },
  { label: "Khanpur ,Punjab", value: "Khanpur ,Punjab" },
  { label: "Gojra ,Punjab", value: "Gojra ,Punjab" },
  { label: "Mandi Bahauddin ,Punjab", value: "Mandi Bahauddin ,Punjab" },
  {
    label: "Abbottabad ,Khyber Pakhtunkhwa",
    value: "Abbottabad ,Khyber Pakhtunkhwa",
  },
  { label: "Turbat ,Balochistān", value: "Turbat ,Balochistān" },
  { label: "Dadu ,Sindh", value: "Dadu ,Sindh" },
  { label: "Bahawalnagar ,Punjab", value: "Bahawalnagar ,Punjab" },
  { label: "Khuzdar ,Balochistān", value: "Khuzdar ,Balochistān" },
  { label: "Pakpattan ,Punjab", value: "Pakpattan ,Punjab" },
  { label: "Tando Allahyar ,Sindh", value: "Tando Allahyar ,Sindh" },
  { label: "Ahmadpur East ,Punjab", value: "Ahmadpur East ,Punjab" },
  { label: "Vihari ,Punjab", value: "Vihari ,Punjab" },
  { label: "Jaranwala ,Punjab", value: "Jaranwala ,Punjab" },
  { label: "New Mirpur ,Azad Kashmir", value: "New Mirpur ,Azad Kashmir" },
  { label: "Kamalia ,Punjab", value: "Kamalia ,Punjab" },
  { label: "Kot Addu ,Punjab", value: "Kot Addu ,Punjab" },
  {
    label: "Nowshera ,Khyber Pakhtunkhwa",
    value: "Nowshera ,Khyber Pakhtunkhwa",
  },
  { label: "Swabi ,Khyber Pakhtunkhwa", value: "Swabi ,Khyber Pakhtunkhwa" },
  { label: "Khushab ,Punjab", value: "Khushab ,Punjab" },
  {
    label: "Dera Ismail Khan ,Khyber Pakhtunkhwa",
    value: "Dera Ismail Khan ,Khyber Pakhtunkhwa",
  },
  { label: "Chaman ,Balochistān", value: "Chaman ,Balochistān" },
  {
    label: "Charsadda ,Khyber Pakhtunkhwa",
    value: "Charsadda ,Khyber Pakhtunkhwa",
  },
  { label: "Kandhkot ,Sindh", value: "Kandhkot ,Sindh" },
  { label: "Chishtian ,Punjab", value: "Chishtian ,Punjab" },
  { label: "Hasilpur ,Punjab", value: "Hasilpur ,Punjab" },
  { label: "Attock Khurd ,Punjab", value: "Attock Khurd ,Punjab" },
  { label: "Muzaffarabad ,Azad Kashmir", value: "Muzaffarabad ,Azad Kashmir" },
  { label: "Mianwali ,Punjab", value: "Mianwali ,Punjab" },
  { label: "Jalalpur Jattan ,Punjab", value: "Jalalpur Jattan ,Punjab" },
  { label: "Bhakkar ,Punjab", value: "Bhakkar ,Punjab" },
  { label: "Zhob ,Balochistān", value: "Zhob ,Balochistān" },
  { label: "Dipalpur ,Punjab", value: "Dipalpur ,Punjab" },
  { label: "Kharian ,Punjab", value: "Kharian ,Punjab" },
  { label: "Mian Channun ,Punjab", value: "Mian Channun ,Punjab" },
  { label: "Bhalwal ,Punjab", value: "Bhalwal ,Punjab" },
  { label: "Jamshoro ,Sindh", value: "Jamshoro ,Sindh" },
  { label: "Pattoki ,Punjab", value: "Pattoki ,Punjab" },
  { label: "Harunabad ,Punjab", value: "Harunabad ,Punjab" },
  { label: "Kahror Pakka ,Punjab", value: "Kahror Pakka ,Punjab" },
  { label: "Toba Tek Singh ,Punjab", value: "Toba Tek Singh ,Punjab" },
  { label: "Samundri ,Punjab", value: "Samundri ,Punjab" },
  { label: "Shakargarh ,Punjab", value: "Shakargarh ,Punjab" },
  { label: "Sambrial ,Punjab", value: "Sambrial ,Punjab" },
  { label: "Shujaabad ,Punjab", value: "Shujaabad ,Punjab" },
  { label: "Hujra Shah Muqim ,Punjab", value: "Hujra Shah Muqim ,Punjab" },
  { label: "Kabirwala ,Punjab", value: "Kabirwala ,Punjab" },
  {
    label: "Mansehra ,Khyber Pakhtunkhwa",
    value: "Mansehra ,Khyber Pakhtunkhwa",
  },
  { label: "Lala Musa ,Punjab", value: "Lala Musa ,Punjab" },
  { label: "Chunian ,Punjab", value: "Chunian ,Punjab" },
  { label: "Nankana Sahib ,Punjab", value: "Nankana Sahib ,Punjab" },
  { label: "Bannu ,Khyber Pakhtunkhwa", value: "Bannu ,Khyber Pakhtunkhwa" },
  { label: "Pasrur ,Punjab", value: "Pasrur ,Punjab" },
  {
    label: "Timargara ,Khyber Pakhtunkhwa",
    value: "Timargara ,Khyber Pakhtunkhwa",
  },
  {
    label: "Parachinar ,Khyber Pakhtunkhwa",
    value: "Parachinar ,Khyber Pakhtunkhwa",
  },
  { label: "Chenab Nagar ,Punjab", value: "Chenab Nagar ,Punjab" },
  { label: "Gwadar ,Balochistān", value: "Gwadar ,Balochistān" },
  { label: "Abdul Hakim ,Punjab", value: "Abdul Hakim ,Punjab" },
  { label: "Hassan Abdal ,Punjab", value: "Hassan Abdal ,Punjab" },
  { label: "Tank ,Khyber Pakhtunkhwa", value: "Tank ,Khyber Pakhtunkhwa" },
  { label: "Hangu ,Khyber Pakhtunkhwa", value: "Hangu ,Khyber Pakhtunkhwa" },
  {
    label: "Risalpur Cantonment ,Khyber Pakhtunkhwa",
    value: "Risalpur Cantonment ,Khyber Pakhtunkhwa",
  },
  { label: "Karak ,Khyber Pakhtunkhwa", value: "Karak ,Khyber Pakhtunkhwa" },
  { label: "Kundian ,Punjab", value: "Kundian ,Punjab" },
  { label: "Umarkot ,Sindh", value: "Umarkot ,Sindh" },
  {
    label: "Chitral ,Khyber Pakhtunkhwa",
    value: "Chitral ,Khyber Pakhtunkhwa",
  },
  { label: "Dainyor ,Gilgit-Baltistan", value: "Dainyor ,Gilgit-Baltistan" },
  {
    label: "Kulachi ,Khyber Pakhtunkhwa",
    value: "Kulachi ,Khyber Pakhtunkhwa",
  },
  { label: "Kalat ,Balochistān", value: "Kalat ,Balochistān" },
  { label: "Kotli ,Azad Kashmir", value: "Kotli ,Azad Kashmir" },
  { label: "Gilgit ,Gilgit-Baltistan", value: "Gilgit ,Gilgit-Baltistan" },
  { label: "Narowal ,Punjab", value: "Narowal ,Punjab" },
  { label: "Khairpur Mir’s ,Sindh", value: "Khairpur Mir’s ,Sindh" },
  { label: "Khanewal ,Punjab", value: "Khanewal ,Punjab" },
  { label: "Jhelum ,Punjab", value: "Jhelum ,Punjab" },
  {
    label: "Haripur ,Khyber Pakhtunkhwa",
    value: "Haripur ,Khyber Pakhtunkhwa",
  },
  { label: "Shikarpur ,Sindh", value: "Shikarpur ,Sindh" },
  { label: "Rawala Kot ,Azad Kashmir", value: "Rawala Kot ,Azad Kashmir" },
  { label: "Hafizabad ,Punjab", value: "Hafizabad ,Punjab" },
  { label: "Lodhran ,Punjab", value: "Lodhran ,Punjab" },
  {
    label: "Malakand ,Khyber Pakhtunkhwa",
    value: "Malakand ,Khyber Pakhtunkhwa",
  },
  { label: "Attock City ,Punjab", value: "Attock City ,Punjab" },
  {
    label: "Batgram ,Khyber Pakhtunkhwa",
    value: "Batgram ,Khyber Pakhtunkhwa",
  },
  { label: "Matiari ,Sindh", value: "Matiari ,Sindh" },
  { label: "Ghotki ,Sindh", value: "Ghotki ,Sindh" },
  { label: "Naushahro Firoz ,Sindh", value: "Naushahro Firoz ,Sindh" },
  {
    label: "Alpurai ,Khyber Pakhtunkhwa",
    value: "Alpurai ,Khyber Pakhtunkhwa",
  },
  { label: "Bagh ,Azad Kashmir", value: "Bagh ,Azad Kashmir" },
  { label: "Daggar ,Khyber Pakhtunkhwa", value: "Daggar ,Khyber Pakhtunkhwa" },
  { label: "Leiah ,Punjab", value: "Leiah ,Punjab" },
  { label: "Tando Muhammad Khan ,Sindh", value: "Tando Muhammad Khan ,Sindh" },
  { label: "Chakwal ,Punjab", value: "Chakwal ,Punjab" },
  { label: "Badin ,Sindh", value: "Badin ,Sindh" },
  { label: "Lakki ,Khyber Pakhtunkhwa", value: "Lakki ,Khyber Pakhtunkhwa" },
  { label: "Rajanpur ,Punjab", value: "Rajanpur ,Punjab" },
  { label: "Dera Allahyar ,Balochistān", value: "Dera Allahyar ,Balochistān" },
  { label: "Shahdad Kot ,Sindh", value: "Shahdad Kot ,Sindh" },
  { label: "Pishin ,Balochistān", value: "Pishin ,Balochistān" },
  { label: "Sanghar ,Sindh", value: "Sanghar ,Sindh" },
  {
    label: "Upper Dir ,Khyber Pakhtunkhwa",
    value: "Upper Dir ,Khyber Pakhtunkhwa",
  },
  { label: "Thatta ,Sindh", value: "Thatta ,Sindh" },
  {
    label: "Dera Murad Jamali ,Balochistān",
    value: "Dera Murad Jamali ,Balochistān",
  },
  { label: "Kohlu ,Balochistān", value: "Kohlu ,Balochistān" },
  { label: "Mastung ,Balochistān", value: "Mastung ,Balochistān" },
  { label: "Dasu ,Khyber Pakhtunkhwa", value: "Dasu ,Khyber Pakhtunkhwa" },
  { label: "Athmuqam ,Azad Kashmir", value: "Athmuqam ,Azad Kashmir" },
  { label: "Loralai ,Balochistān", value: "Loralai ,Balochistān" },
  { label: "Barkhan ,Balochistān", value: "Barkhan ,Balochistān" },
  {
    label: "Musa Khel Bazar ,Balochistān",
    value: "Musa Khel Bazar ,Balochistān",
  },
  { label: "Ziarat ,Balochistān", value: "Ziarat ,Balochistān" },
  { label: "Gandava ,Balochistān", value: "Gandava ,Balochistān" },
  { label: "Sibi ,Balochistān", value: "Sibi ,Balochistān" },
  { label: "Dera Bugti ,Balochistān", value: "Dera Bugti ,Balochistān" },
  { label: "Eidgah ,Gilgit-Baltistan", value: "Eidgah ,Gilgit-Baltistan" },
  { label: "Uthal ,Balochistān", value: "Uthal ,Balochistān" },
  { label: "Khuzdar ,Balochistān", value: "Khuzdar ,Balochistān" },
  { label: "Chilas ,Gilgit-Baltistan", value: "Chilas ,Gilgit-Baltistan" },
  { label: "Panjgur ,Balochistān", value: "Panjgur ,Balochistān" },
  { label: "Gakuch ,Gilgit-Baltistan", value: "Gakuch ,Gilgit-Baltistan" },
  {
    label: "Qila Saifullah ,Balochistān",
    value: "Qila Saifullah ,Balochistān",
  },
  { label: "Kharan ,Balochistān", value: "Kharan ,Balochistān" },
  { label: "Aliabad ,Gilgit-Baltistan", value: "Aliabad ,Gilgit-Baltistan" },
  { label: "Awaran ,Balochistān", value: "Awaran ,Balochistān" },
  { label: "Dalbandin ,Balochistān", value: "Dalbandin ,Balochistān" },
];
export function getCities() {
  return cities;
}
