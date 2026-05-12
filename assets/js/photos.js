/* ============================================================
   photos.js - shared local photo catalogue for lesson decks

   Keep reusable teaching photos here so lesson slide files can stay focused
   on lesson sequence and economic content.
   ============================================================ */

window.IGCSE = window.IGCSE || {};

(() => {
  const photo = (folder, file, alt, credit, source) => ({
    type: 'photo',
    src: `../../../assets/images/${folder}/${file}`,
    alt,
    caption: alt.replace(/\.$/, ''),
    credit,
    source,
  });

  const factPhoto = (file, caption, credit, source) => ({
    type: 'photo',
    src: `../../../assets/images/fiscal-policy/facts/${file}`,
    alt: caption,
    caption,
    credit,
    source,
  });

  const marketEconomicSystem = {
    starbucks: photo(
      'market-economic-system',
      'first-starbucks-pike-place.jpg',
      'Customers inside the Starbucks store at Pike Place Market in Seattle.',
      'Wikimedia Commons / Liz525',
      'https://commons.wikimedia.org/wiki/File:FirstStarbucks.jpg'
    ),
    bubbleTeaShop: photo(
      'market-economic-system',
      'bubble-tea-shop.jpg',
      'A Tapioca Express bubble tea shop in Alameda, California.',
      'Wikimedia Commons / Tony Webster',
      'https://commons.wikimedia.org/wiki/File:Tapioca_Express,_Alameda,_California_(17240075099).jpg'
    ),
    phoneDisplay: photo(
      'market-economic-system',
      'iphone-display.jpg',
      'Rows of smartphones displayed in an Apple Store.',
      'Wikimedia Commons / Fastily',
      'https://commons.wikimedia.org/wiki/File:Apple_Store_iPhone_Display_1_2023-12-10.jpg'
    ),
    eBikeShop: photo(
      'market-economic-system',
      'electric-bike-shop.jpg',
      'An electric bicycle shop on 9th Avenue in New York.',
      'Wikimedia Commons / Jim.henderson',
      'https://commons.wikimedia.org/wiki/File:DC_Electric_Power_Bicycle_shop_jeh.jpg'
    ),
    evCharging: photo(
      'market-economic-system',
      'ev-charging-station.jpg',
      'An electric vehicle charging station.',
      'Wikimedia Commons / Rgaenzle',
      'https://commons.wikimedia.org/wiki/File:Electric_vehicle_charging_station.jpg'
    ),
    vegetables: photo(
      'market-economic-system',
      'supermarket-vegetables.jpg',
      'A supermarket vegetable shelf kept fresh by a mist generator.',
      'Wikimedia Commons / Simon Speed',
      'https://commons.wikimedia.org/wiki/File:VegetableShelfMistGenerator.JPG'
    ),
    factorySmoke: photo(
      'market-economic-system',
      'factory-smoke.jpg',
      'A factory chimney releasing smoke into the sky.',
      'Wikimedia Commons / Thomas Berg',
      'https://commons.wikimedia.org/wiki/File:Factory_Emitting_Smoke.jpg'
    ),
    streetLight: photo(
      'market-economic-system',
      'street-light.jpg',
      'A yellow street light at a road intersection at night.',
      'Wikimedia Commons / Famartin',
      'https://commons.wikimedia.org/wiki/File:2021-10-08_21_20_53_Yellow_street_light_at_the_intersection_of_Kuakini_Highway_and_Likana_Lane_in_Kailua-Kona,_Hawaii_County,_Hawaii.jpg'
    ),
    amazonWarehouse: photo(
      'market-economic-system',
      'amazon-warehouse-garner.jpg',
      'Amazon fulfilment center in Garner, North Carolina.',
      'Wikimedia Commons / Indy beetle',
      'https://commons.wikimedia.org/wiki/File:Amazon_warehouse,_Garner.jpg'
    ),
  };

  const fiscalPolicy = {
    budgetMeeting: photo(
      'fiscal-policy',
      'budget-meeting-with-congress.jpg',
      'Government officials seated around a table during budget negotiations.',
      'Wikimedia Commons / Robert McNeely',
      'https://commons.wikimedia.org/wiki/File:President_Clinton_Meeting_with_Congressional_Leaders_on_the_Federal_Budget_-_NARA_-_6036986.jpg'
    ),
    budgetHearing: photo(
      'fiscal-policy',
      'house-budget-committee-meeting-2020-01-15.jpg',
      'A legislative budget committee meeting in progress.',
      'Wikimedia Commons / House Budget Committee Democrats',
      'https://commons.wikimedia.org/wiki/File:House_Budget_Committee_Meeting_2020-01-15.jpg'
    ),
    classroom: photo(
      'fiscal-policy',
      'students-in-a-classroom.jpg',
      'Students working at desks in a classroom.',
      'Wikimedia Commons / Ente75',
      'https://commons.wikimedia.org/wiki/File:Students_in_a_classroom.jpg'
    ),
    healthcare: photo(
      'fiscal-policy',
      'doctors-and-nurses-at-the-3rd-field-hospital.jpg',
      'Doctors and nurses standing together in a hospital.',
      'Wikimedia Commons / Defense VI Records Center',
      'https://commons.wikimedia.org/wiki/File:Doctors_and_nurses_at_the_3rd_Field_Hospital.jpg'
    ),
    defence: photo(
      'fiscal-policy',
      'defence-officials-meeting.jpg',
      'Defence officials seated for a formal bilateral meeting.',
      'Wikimedia Commons / U.S. Secretary of Defense',
      'https://commons.wikimedia.org/wiki/File:Ash_Carter_hosts_an_enhanced_honor_cordon_and_bilateral_meeting_for_Greek_Defense_Minister_Panos_Kammenos_150521-D-LU733-028.jpg'
    ),
    roadwork: photo(
      'fiscal-policy',
      'going-to-the-sun-road-paving.jpg',
      'A road construction crew paving a mountain road.',
      'Wikimedia Commons / U.S. Dept. of Transportation',
      'https://commons.wikimedia.org/wiki/File:Going-to-the-Sun_Road_paving.jpg'
    ),
    industry: photo(
      'fiscal-policy',
      'national-semiconductor-factory.jpg',
      'The exterior of a semiconductor factory.',
      'Wikimedia Commons / william craig',
      'https://commons.wikimedia.org/wiki/File:National_Semiconductor_1.jpg'
    ),
    socialSecurity: photo(
      'fiscal-policy',
      'signing-of-the-social-security-act.jpg',
      'President Roosevelt signing the Social Security Act.',
      'Wikimedia Commons / National Archives',
      'https://commons.wikimedia.org/wiki/File:Signing_of_the_Social_Security_Act.jpg'
    ),
    shopping: photo(
      'fiscal-policy',
      'shopping-carts-in-a-grocery-store.jpg',
      'Rows of shopping carts inside a grocery store.',
      'Wikimedia Commons / Visitor7',
      'https://commons.wikimedia.org/wiki/File:Shopping_Carts_in_a_Grocery_Store.jpg'
    ),
    taxForms: photo(
      'fiscal-policy',
      'tax-forms.jpg',
      'Printed tax forms laid out on a table.',
      'Wikimedia Commons / Kalamazoo Public Library',
      'https://commons.wikimedia.org/wiki/File:Tax_Forms.jpg'
    ),
    tobacco: photo(
      'fiscal-policy',
      'tobacco-cigarette-pack.jpg',
      'A cigarette pack photographed on a table.',
      'Wikimedia Commons / Lindsay Fox',
      'https://commons.wikimedia.org/wiki/File:Cigarette_pack.jpg'
    ),
    pollution: photo(
      'fiscal-policy',
      'smokestack-in-detroit.jpg',
      'A smokestack rising from an industrial plant.',
      'Wikimedia Commons / Gyre',
      'https://commons.wikimedia.org/wiki/File:Smokestack_in_Detroit.jpg'
    ),
    port: photo(
      'fiscal-policy',
      'cargo-containers.jpg',
      'Stacks of cargo containers at a waterfront port.',
      'Wikimedia Commons / Roy Luck',
      'https://commons.wikimedia.org/wiki/File:Cargo_containers.jpg'
    ),
    inflation: photo(
      'fiscal-policy',
      'meat-inflation-in-the-united-states.jpg',
      'A grocery shelf with posted meat prices.',
      'Wikimedia Commons / Wikideas1',
      'https://commons.wikimedia.org/wiki/File:Meat_Inflation_in_the_United_States.jpg'
    ),
  };

  const fiscalPolicyFacts = {
    ukBudget: factPhoto(
      'uk-budget-rachel-reeves.jpg',
      'Rachel Reeves official portrait',
      'Wikimedia Commons / Chris McAndrew',
      'https://commons.wikimedia.org/wiki/File:Official_portrait_of_Rachel_Reeves_crop_2.jpg'
    ),
    finlandEducation: factPhoto(
      'finland-vantaankoski-classroom.jpg',
      'Vantaankoski school classroom',
      'Wikimedia Commons / Leo-seta',
      'https://commons.wikimedia.org/wiki/File:Elementary_school_classroom_in_Vantaankoski_school_in_Vantaa,_Finland,_2010.jpg'
    ),
    usSemiconductors: factPhoto(
      'us-intel-d1x-fab.png',
      'Intel D1X semiconductor fab',
      'Wikimedia Commons / Intel Free Press',
      'https://commons.wikimedia.org/wiki/File:Intel_D1X_Development_Fab_Hillsboro_Oregon.png'
    ),
    denmarkTax: factPhoto(
      'denmark-ministry-taxation.jpg',
      'Danish Ministry of Taxation',
      'Wikimedia Commons / Bjoertvedt',
      'https://commons.wikimedia.org/wiki/File:Copenhagen_Skatteministeriet_IMG_5647.jpg'
    ),
    philippinesTobacco: factPhoto(
      'philippines-tobacco-warning-labels.jpg',
      'Philippine tobacco warning labels',
      'Wikimedia Commons / Government of the Philippines',
      'https://commons.wikimedia.org/wiki/File:PH_tobacco_packaging_graphic_warning_labels.jpg'
    ),
    ukSugar: factPhoto(
      'uk-soft-drink-shelf.jpg',
      'Soft drinks on supermarket shelves',
      'Wikimedia Commons',
      'https://commons.wikimedia.org/wiki/File:Soft_drink_shelf.JPG'
    ),
    euCbam: factPhoto(
      'netherlands-rotterdam-container-terminal.jpg',
      'Port of Rotterdam container terminal',
      'Wikimedia Commons / AgainErick',
      'https://commons.wikimedia.org/wiki/File:Waalhaven_pier_6_-_Port_of_Rotterdam_-_container_terminal_and_cranes.jpg'
    ),
    swedenCarbon: factPhoto(
      'sweden-hammarbyverket.jpg',
      'Hammarbyverket energy plant',
      'Wikimedia Commons / Holger.Ellgaard',
      'https://commons.wikimedia.org/wiki/File:Hammarbyverket_2008.jpg'
    ),
    singaporeBudget: factPhoto(
      'singapore-budget-2024-thumbnail.jpg',
      'Singapore Budget 2024 video thumbnail',
      'YouTube / Singapore MOF',
      'https://www.mof.gov.sg/budget-archives/budget-2024/'
    ),
    indiaBudget2024: factPhoto(
      'india-union-budget-2024.jpg',
      'India Finance Minister Nirmala Sitharaman arriving to present the Union Budget 2024-25',
      'Wikimedia Commons / Ministry of Finance, Government of India',
      'https://commons.wikimedia.org/wiki/File:The_Union_Minister_for_Finance_and_Corporate_Affairs,_Smt._Nirmala_Sitharaman_along_with_arrived_at_the_Parliament_House_to_present_the_first_Union_Budget_2024-25_of_Modi_3.0,_in_New_Delhi_on_July_23,_2024_(1).jpg'
    ),
    chipsForAmerica: factPhoto(
      'tsmc-arizona-fab-21-construction.jpg',
      'TSMC Fab 21 under construction in Phoenix, Arizona',
      'Wikimedia Commons / TrickHunter',
      'https://commons.wikimedia.org/wiki/File:231105-1_TSMC_Fab_21_construction.jpg'
    ),
    usSocialSecurity: factPhoto(
      'us-social-security-headquarters.jpg',
      'Social Security Administration headquarters',
      'Wikimedia Commons / Coolcaesar',
      'https://commons.wikimedia.org/wiki/File:Socialsecurityheadquarters.jpg'
    ),
    euCbamOfficial: factPhoto(
      'eu-cbam-banner.webp',
      'European Commission CBAM banner',
      'European Commission',
      'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en'
    ),
    swedenCarbonTaxRate: factPhoto(
      'sweden-carbon-tax-rate.png',
      'Swedish carbon tax rate chart',
      'Government Offices of Sweden',
      'https://www.government.se/government-policy/taxes-and-tariffs/swedens-carbon-tax/'
    ),
    hmrcLondon: factPhoto(
      'hmrc-lower-thames-street.jpg',
      'HM Revenue and Customs buildings on Lower Thames Street',
      'Wikimedia Commons / Stephen Richards',
      'https://commons.wikimedia.org/wiki/File:View_of_the_HM_Revenue_%5E_Customs_buildings_on_Lower_Thames_Street_-_geograph.org.uk_-_5448128.jpg'
    ),
  };

  const monetaryPolicy = {
    fed: photo(
      'monetary-policy',
      'fed-eccles-building.jpg',
      'Marriner S. Eccles Federal Reserve Board Building in Washington, DC.',
      'Wikimedia Commons',
      'https://commons.wikimedia.org/wiki/File:Marriner_S._Eccles_Federal_Reserve_Board_Building.jpg'
    ),
    bankEngland: photo(
      'monetary-policy',
      'bank-of-england-facade.jpg',
      'The front facade of the Bank of England building in London.',
      'Wikimedia Commons / Michael',
      'https://commons.wikimedia.org/wiki/File:Bank_of_England_Facade.jpg'
    ),
    pboc: photo(
      'monetary-policy',
      'people-bank-of-china-2020.jpg',
      "People's Bank of China headquarters in Beijing.",
      'Wikimedia Commons',
      "https://commons.wikimedia.org/wiki/File:People's_Bank_of_China_(2020).jpg"
    ),
    moneySupply: photo(
      'monetary-policy',
      'us-money-supply-components.svg',
      'Chart showing components of the United States money supply.',
      'Wikimedia Commons / Autopilot',
      'https://commons.wikimedia.org/wiki/File:Components_of_US_Money_supply.svg'
    ),
    exchangeRate: photo(
      'monetary-policy',
      'cny-usd-exchange-rate.svg',
      'Chart showing the renminbi and United States dollar exchange rate.',
      'Wikimedia Commons / Monaneko',
      'https://commons.wikimedia.org/wiki/File:CNY-USD_v2.svg'
    ),
  };

  IGCSE.photos = {
    ...(IGCSE.photos || {}),
    fiscalPolicy,
    fiscalPolicyFacts,
    marketTeaching: {
      ...marketEconomicSystem,
      classroom: fiscalPolicy.classroom,
      healthcare: fiscalPolicy.healthcare,
      tobacco: fiscalPolicy.tobacco,
      socialSecurity: fiscalPolicy.socialSecurity,
      port: fiscalPolicy.port,
      roadwork: fiscalPolicy.roadwork,
    },
    marketEconomicSystem,
    monetaryPolicy,
  };

  // Backward-compatible alias for older market lessons.
  IGCSE.marketPhotos = IGCSE.marketPhotos || IGCSE.photos.marketTeaching;
})();
