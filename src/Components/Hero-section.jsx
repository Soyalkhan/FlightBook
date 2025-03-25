
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, Users, Map, Plane  } from "lucide-react"

import bgImage from "../assets/background.jpg"

const HeroSection = () => {
  const [tripType, setTripType] = useState("round-trip")
  const [fromAirport, setFromAirport] = useState("")
  const [toAirport, setToAirport] = useState("")
  const [departureDate, setDepartureDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [passengers, setPassengers] = useState(1)
  const [showFromDropdown, setShowFromDropdown] = useState(false)
  const [showToDropdown, setShowToDropdown] = useState(false)

  const fromRef = useRef(null)
  const toRef = useRef(null)

  const airports = [
    // internaional airports
    { code: "AAR", name: "Aarhus Airport", city: "Aarhus" },
    { code: "ZNZ", name: "Abeid Amani Karume International Airport", city: "Unguja, Zanzibar" },
    { code: "AHB", name: "Abha International Airport", city: "Abha" },
    { code: "AUH", name: "Abu Dhabi International Airport", city: "Abu Dhabi" },
    { code: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa" },
    { code: "ADL", name: "Adelaide Airport", city: "Adelaide" },
    { code: "MGQ", name: "Aden Adde International Airport", city: "Mogadishu" },
    { code: "AEP", name: "Aeroparque Jorge Newbery", city: "Buenos Aires" },
    { code: "CWB", name: "Afonso Pena International Airport", city: "Curitiba" },
    { code: "ENU", name: "Akanu Ibiam International Airport", city: "Enugu" },
    { code: "AKX", name: "Aktobe International Airport", city: "Aktobe" },
    { code: "HOF", name: "Al-Ahsa International Airport", city: "Al-Ahsa" },
    { code: "PAC", name: "Albrook \"Marcos A. Gelabert\" International Airport", city: "Panama City" },
    { code: "LHE", name: "Allama Iqbal International Airport", city: "Lahore" },
    { code: "ALA", name: "Almaty International Airport", city: "Almaty" },
    { code: "RCH", name: "Almirante Padilla Airport", city: "Riohacha" },
    { code: "AMS", name: "Amsterdam Airport", city: "Amsterdam" },
    { code: "SID", name: "Amílcar Cabral International Airport", city: "Sal Island" },
    { code: "ANR", name: "Antwerp International Airport", city: "Antwerp" },
    { code: "BVC", name: "Aristides Pereira International Airport", city: "Boa Vista" },
    { code: "VLN", name: "Arturo Michelena International Airport", city: "Valencia" },
    { code: "ABB", name: "Asaba International Airport", city: "Asaba, Delta" },
    { code: "ASW", name: "Aswan International Airport", city: "Aswan" },
    { code: "ATH", name: "Athens International Airport", city: "Athens" },
    { code: "ACY", name: "Atlantic City International Airport", city: "Atlantic City" },
    { code: "AUS", name: "Austin–Bergstrom International Airport", city: "Austin (TX)" },
    { code: "PEW", name: "Bacha Khan International Airport", city: "Peshawar" },
    { code: "BGW", name: "Baghdad International Airport", city: "Baghdad" },
    { code: "BWI", name: "Baltimore/Washington International Airport", city: "Baltimore" },
    { code: "CMB", name: "Bandaranaike International Airport", city: "Colombo" },
    { code: "BGF", name: "Bangui M'Poko International Airport", city: "Bangui" },
    { code: "BJL", name: "Banjul International Airport", city: "Banjul" },
    { code: "PEK", name: "Beijing Capital International Airport", city: "Beijing" },
    { code: "PKX", name: "Beijing Daxing International Airport", city: "Beijing" },
    { code: "BFS", name: "Belfast International Airport", city: "Belfast" },
    { code: "BEG", name: "Belgrade Nikola Tesla Airport", city: "Belgrade" },
    { code: "TLV", name: "Ben Gurion Airport", city: "Tel Aviv" },
    { code: "NVA", name: "Benito Salas Airport", city: "Neiva" },
    { code: "BER", name: "Berlin Brandenburg Airport", city: "Berlin" },
    { code: "YTZ", name: "Billy Bishop Toronto City Airport", city: "Toronto" },
    { code: "BVB", name: "Boa Vista International Airport", city: "Boa Vista" },
    { code: "KQT", name: "Bokhtar International Airport", city: "Bokhtar" },
    { code: "HBE", name: "Borg El Arab International Airport", city: "Alexandria" },
    { code: "KBP", name: "Boryspil International Airport", city: "Kyiv" },
    { code: "BDL", name: "Bradley International Airport", city: "Hartford (CT)" },
    { code: "BFN", name: "Bram Fischer International Airport", city: "Bloemfontein" },
    { code: "BRE", name: "Bremen Airport", city: "Bremen" },
    { code: "BNE", name: "Brisbane Airport", city: "Brisbane" },
    { code: "BRQ", name: "Brno–Tuřany Airport", city: "Brno" },
    { code: "BRO", name: "Brownsville South Padre Island International Airport", city: "Brownsville" },
    { code: "BUD", name: "Budapest Ferenc Liszt International Airport", city: "Budapest" },
    { code: "BJM", name: "Bujumbura International Airport", city: "Bujumbura " },
    { code: "BHK", name: "Bukhara International Airport", city: "Bukhara" },
    { code: "COO", name: "Cadjehoun Airport", city: "Cotonou" },
    { code: "CAI", name: "Cairo International Airport", city: "Cairo" },
    { code: "CXR", name: "Cam Ranh International Airport", city: "Nha Trang" },
    { code: "CBR", name: "Canberra Airport", city: "Canberra" },
    { code: "CPT", name: "Cape Town International Airport", city: "Cape Town" },
    { code: "ESM", name: "Carlos Concha Torres International Airport", city: "Esmeraldas" },
    { code: "MVD", name: "Carrasco International Airport", city: "Montevideo" },
    { code: "HPH", name: "Cat Bi International Airport", city: "Hải Phòng" },
    { code: "CAY", name: "Cayenne – Félix Eboué Airport", city: "Cayenne" },
    { code: "CGQ", name: "Changchun Longjia International Airport", city: "Changchun" },
    { code: "SIN", name: "Changi Airport", city: "Singapore" },
    { code: "CSX", name: "Changsha Huanghua International Airport", city: "Changsha" },
    { code: "CZX", name: "Changzhou Benniu International Airport", city: "Changzhou" },
    { code: "CYB", name: "Charles Kirkconnell International Airport", city: "Cayman Brac" },
    { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris" },
    { code: "CLT", name: "Charlotte Douglas International Airport", city: "Charlotte" },
    { code: "GEO", name: "Cheddi Jagan International Airport", city: "Georgetown" },
    { code: "CTU", name: "Chengdu Shuangliu International Airport", city: "Chengdu" },
    { code: "TFU", name: "Chengdu Tianfu International Airport", city: "Chengdu" },
    { code: "CJJ", name: "Cheongju International Airport", city: "Cheongju" },
    { code: "RFD", name: "Chicago Rockford International Airport", city: "Rockford (IL)" },
    { code: "UBN", name: "Chinggis Khaan International Airport", city: "Ulaanbaatar" },
    { code: "NGO", name: "Chubu Centrair International Airport", city: "Nagoya" },
    { code: "CRK", name: "Clark International Airport", city: "Angeles City" },
    { code: "CAE", name: "Columbia Metropolitan Airport", city: "Columbia (SC)" },
    { code: "FTE", name: "Comandante Armando Tola International Airport", city: "El Calafate" },
    { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen" },
    { code: "ORK", name: "Cork Airport", city: "Cork" },
    { code: "CXB", name: "Cox's Bazar International Airport", city: "Cox's Bazar" },
    { code: "TAE", name: "Daegu International Airport", city: "Daegu" },
    { code: "LIR", name: "Daniel Oduber Quirós International Airport", city: "Liberia" },
    { code: "DAY", name: "Dayton International Airport", city: "Dayton (OH)" },
    { code: "SSA", name: "Deputado Luís Eduardo Magalhães International Airport", city: "Salvador" },
    { code: "DTW", name: "Detroit Metropolitan Airport", city: "Detroit" },
    { code: "NIM", name: "Diori Hamani International Airport", city: "Niamey" },
    { code: "DJE", name: "Djerba–Zarzis International Airport", city: "Djerba" },
    { code: "CNQ", name: "Doctor Fernando Piragine Niveyro International Airport", city: "Corrientes" },
    { code: "DME", name: "Domodedovo International Airport", city: "Moscow" },
    { code: "DMK", name: "Don Mueang International Airport", city: "Bangkok" },
    { code: "DJJ", name: "Dortheys Hiyo Eluay International Airport", city: "Jayapura" },
    { code: "DXB", name: "Dubai International Airport", city: "Dubai" },
    { code: "DUB", name: "Dublin Airport", city: "Dublin" },
    { code: "IAD", name: "Dulles International Airport", city: "Washington, D.C." },
    { code: "DZA", name: "Dzaoudzi–Pamandzi International Airport", city: "Dzaoudzi" },
    { code: "EDI", name: "Edinburgh Airport", city: "Edinburgh" },
    { code: "DBB", name: "El Alamein International Airport", city: "El Dabaa" },
    { code: "LPB", name: "El Alto International Airport", city: "La Paz" },
    { code: "AAC", name: "El Arish International Airport", city: "El Arish" },
    { code: "ELP", name: "El Paso International Airport", city: "El Paso" },
    { code: "SAL", name: "El Salvador International Airport", city: "San Salvador" },
    { code: "EDL", name: "Eldoret International Airport", city: "Eldoret" },
    { code: "NBE", name: "Enfidha–Hammamet International Airport", city: "Enfidha" },
    { code: "ENH", name: "Enshi Xujiaping Airport", city: "Enshi City" },
    { code: "EBB", name: "Entebbe International Airport", city: "Entebbe" },
    { code: "OMA", name: "Eppley Airfield", city: "Omaha" },
    { code: "ERI", name: "Erie International Airport", city: "Erie" },
    { code: "YXY", name: "Erik Nielsen Whitehorse International Airport", city: "Whitehorse" },
    { code: "LYP", name: "Faisalabad International Airport", city: "Faisalabad" },
    { code: "INL", name: "Falls International Airport", city: "International Falls" },
    { code: "FAO", name: "Faro Airport", city: "Faro" },
    { code: "NLU", name: "Felipe Ángeles International Airport", city: "Mexico City" },
    { code: "FEG", name: "Fergana International Airport", city: "Fergana" },
    { code: "BON", name: "Flamingo International Airport", city: "Kralendijk, Bonaire" },
    { code: "DVO", name: "Francisco Bangoy International Airport", city: "Davao City" },
    { code: "OPO", name: "Francisco Sá Carneiro Airport", city: "Porto" },
    { code: "FRW", name: "Francistown International Airport", city: "Francistown" },
    { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt" },
    { code: "FAT", name: "Fresno Yosemite International Airport", city: "Fresno" },
    { code: "GAN", name: "Gan International Airport", city: "Addu City" },
    { code: "KOW", name: "Ganzhou Huangjin Airport", city: "Ganzhou" },
    { code: "GYY", name: "Gary/Chicago International Airport", city: "Gary" },
    { code: "CRD", name: "General Enrique Mosconi International Airport", city: "Comodoro Rivadavia" },
    { code: "MLM", name: "General Francisco Mujica International Airport", city: "Morelia" },
    { code: "REX", name: "General Lucio Blanco International Airport", city: "Reynosa" },
    { code: "BHD", name: "George Best Belfast City Airport", city: "Belfast" },
    { code: "GRR", name: "Gerald R. Ford International Airport", city: "Grand Rapids" },
    { code: "PUS", name: "Gimhae International Airport", city: "Busan" },
    { code: "GMP", name: "Gimpo International Airport", city: "Seoul" },
    { code: "PMF", name: "Giuseppe Verdi Airport", city: "Parma" },
    { code: "GLA", name: "Glasgow Airport", city: "Glasgow" },
    { code: "PIK", name: "Glasgow Prestwick Airport", city: "Glasgow" },
    { code: "JUJ", name: "Gobernador Horacio Guzmán International Airport", city: "San Salvador de Jujuy" },
    { code: "OOL", name: "Gold Coast Airport", city: "Gold Coast" },
    { code: "PVH", name: "Governador Jorge Teixeira de Oliveira International Airport", city: "Porto Velho" },
    { code: "BGI", name: "Grantley Adams International Airport", city: "Bridgetown" },
    { code: "NAT", name: "Greater Natal International Airport", city: "Natal" },
    { code: "ROC", name: "Greater Rochester International Airport", city: "Rochester (NY)" },
    { code: "GRB", name: "Green Bay–Austin Straubel International Airport", city: "Green Bay" },
    { code: "AGT", name: "Guaraní International Airport", city: "Ciudad del Este" },
    { code: "KWL", name: "Guilin Liangjiang International Airport", city: "Guilin" },
    { code: "PPN", name: "Guillermo León Valencia Airport", city: "Popayán" },
    { code: "FLA", name: "Gustavo Artunduaga Paredes Airport", city: "Florencia" },
    { code: "HAS", name: "Ha'il International Airport", city: "Ha'il" },
    { code: "HFA", name: "Haifa Airport", city: "Haifa" },
    { code: "HKD", name: "Hakodate Airport", city: "Hakodate" },
    { code: "HLP", name: "Halim Perdanakusuma International Airport", city: "Jakarta" },
    { code: "DOH", name: "Hamad International Airport", city: "Doha" },
    { code: "HAM", name: "Hamburg Airport", city: "Hamburg" },
    { code: "HND", name: "Haneda Airport", city: "Tokyo" },
    { code: "BTH", name: "Hang Nadim International Airport", city: "Batam" },
    { code: "HGH", name: "Hangzhou Xiaoshan International Airport", city: "Hangzhou" },
    { code: "HAJ", name: "Hannover Airport", city: "Hanover" },
    { code: "LVI", name: "Harry Mwanga Nkumbula International Airport", city: "Livingstone" },
    { code: "LAS", name: "Harry Reid International Airport", city: "Las Vegas" },
    { code: "ATL", name: "Hartsfield–Jackson Atlanta International Airport", city: "Atlanta" },
    { code: "DAC", name: "Hazrat Shahjalal International Airport", city: "Dhaka" },
    { code: "HEL", name: "Helsinki-Vantaa Airport", city: "Helsinki" },
    { code: "OTP", name: "Henri Coandă International Airport", city: "Bucharest" },
    { code: "FLN", name: "Hercílio Luz International Airport", city: "Florianópolis" },
    { code: "RGA", name: "Hermes Quijada International Airport", city: "Río Grande" },
    { code: "GYD", name: "Heydar Aliyev International Airport", city: "Baku" },
    { code: "HIJ", name: "Hiroshima Airport", city: "Hiroshima" },
    { code: "HKG", name: "Hong Kong International Airport", city: "Chek Lap Kok, New Territories" },
    { code: "WDH", name: "Hosea Kutako International Airport", city: "Windhoek" },
    { code: "HUN", name: "Hualien Airport", city: "Hualien City" },
    { code: "TXN", name: "Huangshan Tunxi International Airport", city: "Huangshan City" },
    { code: "HRG", name: "Hurghada International Airport", city: "Hurghada" },
    { code: "DPS", name: "I Gusti Ngurah Rai International Airport", city: "Denpasar" },
    { code: "CMW", name: "Ignacio Agramonte International Airport", city: "Camagüey" },
    { code: "ILO", name: "Iloilo International Airport", city: "Iloilo City" },
    { code: "IKA", name: "Imam Khomeini International Airport", city: "Tehran" },
    { code: "ICN", name: "Incheon International Airport", city: "Seoul" },
    { code: "IND", name: "Indianapolis International Airport", city: "Indianapolis" },
    { code: "COR", name: "Ingeniero Aeronáutico Ambrosio L.V. Taravella International Airport", city: "Córdoba" },
    { code: "TAS", name: "Islam Karimov Tashkent International Airport", city: "Tashkent" },
    { code: "ISB", name: "Islamabad International Airport", city: "Islamabad" },
    { code: "IKU", name: "Issyk-Kul International Airport", city: "Issyk-Kul" },
    { code: "IST", name: "Istanbul Airport", city: "Istanbul" },
    { code: "JAX", name: "Jacksonville International Airport", city: "Jacksonville" },
    { code: "JAN", name: "Jackson–Medgar Wiley Evers International Airport", city: "Jackson (MS)" },
    { code: "CJU", name: "Jeju International Airport", city: "Jeju" },
    { code: "JER", name: "Jersey Airport", city: "Saint Helier" },
    { code: "TNA", name: "Jinan Yaoqiang International Airport", city: "Jinan" },
    { code: "KHI", name: "Jinnah International Airport", city: "Karachi" },
    { code: "PBM", name: "Johan Adolf Pengel International Airport", city: "Paramaribo" },
    { code: "JFK", name: "John F. Kennedy International Airport", city: "New York City (Queens)" },
    { code: "CMH", name: "John Glenn Columbus International Airport", city: "Columbus (OH)" },
    { code: "SNA", name: "John Wayne Airport", city: "Orange County (CA)" },
    { code: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi" },
    { code: "MCJ", name: "Jorge Isaacs Airport", city: "Maicao" },
    { code: "CBB", name: "Jorge Wilstermann International Airport", city: "Cochabamba" },
    { code: "BCN", name: "Josep Tarradellas Barcelona–El Prat Airport", city: "Barcelona" },
    { code: "BUQ", name: "Joshua Mqabuko Nkomo International Airport", city: "Bulawayo" },
    { code: "HAV", name: "José Martí International Airport", city: "Havana" },
    { code: "MDE", name: "José María Córdova International Airport", city: "Medellín" },
    { code: "SJO", name: "Juan Santamaría International Airport", city: "San José" },
    { code: "SUB", name: "Juanda International Airport", city: "Surabaya" },
    { code: "JUB", name: "Juba International Airport", city: "Juba" },
    { code: "DAR", name: "Julius Nyerere International Airport", city: "Dar es Salaam" },
    { code: "KBL", name: "Kabul International Airport", city: "Kabul" },
    { code: "KLO", name: "Kalibo International Airport", city: "Kalibo" },
    { code: "KIX", name: "Kansai International Airport", city: "Osaka" },
    { code: "MCI", name: "Kansas City International Airport", city: "Kansas City (MO)" },
    { code: "KHH", name: "Kaohsiung International Airport", city: "Kaohsiung" },
    { code: "KUN", name: "Kaunas Airport", city: "Kaunas" },
    { code: "KEF", name: "Keflavik International Airport", city: "Reykjavík" },
    { code: "LUN", name: "Kenneth Kaunda International Airport", city: "Lusaka" },
    { code: "EYW", name: "Key West International Airport", city: "Key West" },
    { code: "HRK", name: "Kharkiv International Airport", city: "Kharkiv" },
    { code: "KRT", name: "Khartoum International Airport", city: "Khartoum" },
    { code: "KGL", name: "Kigali International Airport", city: "Kigali" },
    { code: "JRO", name: "Kilimanjaro International Airport", city: "Hai District" },
    { code: "JED", name: "King Abdulaziz International Airport", city: "Jeddah" },
    { code: "DMM", name: "King Fahd International Airport", city: "Dammam" },
    { code: "RUH", name: "King Khalid International Airport", city: "Riyadh" },
    { code: "DUR", name: "King Shaka International Airport", city: "Durban" },
    { code: "KIS", name: "Kisumu International Airport", city: "Kisumu" },
    { code: "ACC", name: "Kotoka International Airport", city: "Accra" },
    { code: "KSC", name: "Košice International Airport", city: "Košice" },
    { code: "KBV", name: "Krabi International Airport", city: "Krabi" },
    { code: "MQP", name: "Kruger Mpumalanga International Airport", city: "Nelspruit" },
    { code: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur" },
    { code: "KNO", name: "Kualanamu International Airport", city: "Medan" },
    { code: "KCH", name: "Kuching International Airport", city: "Kuching" },
    { code: "KMS", name: "Kumasi International Airport", city: "Kumasi" },
    { code: "KWI", name: "Kuwait International Airport", city: "Kuwait City" },
    { code: "IEV", name: "Kyiv International Airport", city: "Kyiv" },
    { code: "BDA", name: "L.F. Wade International Airport", city: "Hamilton" },
    { code: "LGK", name: "Langkawi International Airport", city: "Langkawi" },
    { code: "HLA", name: "Lanseria International Airport", city: "Johannesburg" },
    { code: "LHW", name: "Lanzhou Zhongchuan International Airport", city: "Lanzhou" },
    { code: "LAO", name: "Laoag International Airport", city: "Laoag" },
    { code: "TLL", name: "Lennart Meri Tallinn Airport", city: "Tallinn" },
    { code: "FCO", name: "Leonardo da Vinci–Fiumicino Airport", city: "Rome" },
    { code: "LXA", name: "Lhasa Gonggar Airport", city: "Lhasa" },
    { code: "LYI", name: "Linyi Qiyang Airport", city: "Linyi" },
    { code: "LJU", name: "Ljubljana Jože Pučnik Airport", city: "Ljubljana" },
    { code: "BOS", name: "Logan International Airport", city: "Boston" },
    { code: "LAX", name: "Los Angeles International Airport", city: "Los Angeles" },
    { code: "MTR", name: "Los Garzones Airport", city: "Montería" },
    { code: "LPQ", name: "Luang Prabang International Airport", city: "Luang Prabang" },
    { code: "LXR", name: "Luxor International Airport", city: "Luxor" },
    { code: "LWO", name: "Lviv Danylo Halytskyi International Airport", city: "Lviv" },
    { code: "LYS", name: "Lyon–Saint-Exupéry Airport", city: "Lyon" },
    { code: "MFM", name: "Macau International Airport", city: "Taipa, Macau" },
    { code: "CEB", name: "Mactan–Cebu International Airport", city: "Lapu-Lapu City" },
    { code: "MAD", name: "Madrid-Barajas Airport", city: "Madrid" },
    { code: "KAN", name: "Mallam Aminu Kano International Airport", city: "Kano" },
    { code: "MLA", name: "Malta International Airport", city: "Ħal Luqa" },
    { code: "FRU", name: "Manas International Airport", city: "Bishkek" },
    { code: "MPM", name: "Maputo International Airport", city: "Maputo" },
    { code: "CGB", name: "Marechal Rondon International Airport", city: "Cuiabá" },
    { code: "CBQ", name: "Margaret Ekpo International Airport", city: "Calabar" },
    { code: "CUE", name: "Mariscal Lamar International Airport", city: "Cuenca" },
    { code: "RMF", name: "Marsa Alam International Airport", city: "Marsa Alam" },
    { code: "SLA", name: "Martín Miguel de Güemes International Airport", city: "Salta" },
    { code: "MYP", name: "Mary International Airport", city: "Mary" },
    { code: "PEI", name: "Matecaña International Airport", city: "Pereira" },
    { code: "MXZ", name: "Meixian Airport", city: "Meizhou" },
    { code: "MEL", name: "Melbourne Airport", city: "Melbourne" },
    { code: "MLB", name: "Melbourne Orlando International Airport", city: "Melbourne (FL)" },
    { code: "MUH", name: "Mersa Matruh International Airport", city: "Mersa Matruh" },
    { code: "MXL", name: "Mexicali International Airport", city: "Mexicali" },
    { code: "MEX", name: "Mexico City International Airport", city: "Mexico City" },
    { code: "MDW", name: "Midway International Airport", city: "Chicago" },
    { code: "MXP", name: "Milan Malpensa Airport", city: "Milan" },
    { code: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires" },
    { code: "MSP", name: "Minneapolis–Saint Paul International Airport", city: "Minneapolis/St. Paul" },
    { code: "MSQ", name: "Minsk International Airport", city: "Minsk" },
    { code: "CMN", name: "Mohammed V International Airport", city: "Casablanca" },
    { code: "MBA", name: "Moi International Airport", city: "Mombasa" },
    { code: "MIR", name: "Monastir Habib Bourguiba International Airport", city: "Monastir" },
    { code: "YUL", name: "Montréal–Trudeau International Airport", city: "Montreal (Dorval)" },
    { code: "MWX", name: "Muan International Airport", city: "Muan" },
    { code: "MUX", name: "Multan International Airport", city: "Multan" },
    { code: "MUC", name: "Munich Airport", city: "Munich" },
    { code: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos" },
    { code: "MCT", name: "Muscat International Airport", city: "Muscat" },
    { code: "MYR", name: "Myrtle Beach International Airport", city: "Myrtle Beach" },
    { code: "MID", name: "Mérida International Airport", city: "Mérida" },
    { code: "NDJ", name: "N'Djamena International Airport", city: "N'Djamena" },
    { code: "NDR", name: "Nador International Airport", city: "Nador" },
    { code: "NGS", name: "Nagasaki Airport", city: "Nagasaki" },
    { code: "OKA", name: "Naha Airport", city: "Naha" },
    { code: "NMA", name: "Namangan Airport", city: "Namangan" },
    { code: "KHN", name: "Nanchang Changbei International Airport", city: "Nanchang" },
    { code: "NNG", name: "Nanning Wuxu International Airport", city: "Nanning" },
    { code: "NTG", name: "Nantong Xingdong International Airport", city: "Nantong" },
    { code: "NRT", name: "Narita International Airport", city: "Tokyo" },
    { code: "NVI", name: "Navoiy International Airport", city: "Navoiy" },
    { code: "NYT", name: "Naypyidaw International Airport", city: "Nay Pyi Taw" },
    { code: "RAI", name: "Nelson Mandela International Airport", city: "Praia, Santiago Island" },
    { code: "EWR", name: "Newark Liberty International Airport", city: "Newark" },
    { code: "NCL", name: "Newcastle International Airport", city: "Newcastle upon Tyne" },
    { code: "IAG", name: "Niagara Falls International Airport", city: "Niagara Falls" },
    { code: "NCE", name: "Nice Côte d'Azur Airport", city: "Nice" },
    { code: "NGB", name: "Ningbo Lishe International Airport", city: "Ningbo" },
    { code: "MNL", name: "Ninoy Aquino International Airport", city: "Manila" },
    { code: "ABV", name: "Nnamdi Azikiwe International Airport", city: "Abuja" },
    { code: "ORF", name: "Norfolk International Airport", city: "Norfolk (VA)" },
    { code: "ECP", name: "Northwest Florida Beaches International Airport", city: "Panama City (FL)" },
    { code: "NQZ", name: "Nursultan Nazarbayev International Airport", city: "Astana" },
    { code: "ORD", name: "O'Hare International Airport", city: "Chicago" },
    { code: "JNB", name: "O. R. Tambo International Airport", city: "Johannesburg" },
    { code: "OAK", name: "Oakland International Airport", city: "Oakland" },
    { code: "ODS", name: "Odesa International Airport", city: "Odesa" },
    { code: "ONT", name: "Ontario International Airport", city: "Ontario" },
    { code: "DSN", name: "Ordos Ejin Horo International Airport", city: "Ordos City" },
    { code: "MCO", name: "Orlando International Airport", city: "Orlando" },
    { code: "SFB", name: "Orlando Sanford International Airport", city: "Sanford (FL)" },
    { code: "OSL", name: "Oslo Airport, Gardermoen", city: "Oslo" },
    { code: "ZYL", name: "Osmani International Airport", city: "Sylhet" },
    { code: "OST", name: "Ostend–Bruges International Airport", city: "Ostend/Bruges" },
    { code: "GCM", name: "Owen Roberts International Airport", city: "Georgetown" },
    { code: "PLQ", name: "Palanga International Airport", city: "Palanga" },
    { code: "PBI", name: "Palm Beach International Airport", city: "West Palm Beach" },
    { code: "BLB", name: "Panama Pacifico International Airport", city: "Panama City" },
    { code: "PBH", name: "Paro International Airport", city: "Paro" },
    { code: "PER", name: "Perth Airport", city: "Perth" },
    { code: "BZE", name: "Philip S. W. Goldson International Airport", city: "Belize City" },
    { code: "PNH", name: "Phnom Penh International Airport", city: "Phnom Penh" },
    { code: "PHX", name: "Phoenix Sky Harbor International Airport", city: "Phoenix" },
    { code: "AZA", name: "Phoenix–Mesa Gateway Airport", city: "Phoenix/Mesa" },
    { code: "HKT", name: "Phuket International Airport", city: "Phuket" },
    { code: "RGL", name: "Piloto Civil Norberto Fernández International Airport", city: "Río Gallegos" },
    { code: "FOR", name: "Pinto Martins International Airport", city: "Fortaleza" },
    { code: "PKR", name: "Pokhara Regional International Airport", city: "Pokhara" },
    { code: "PTG", name: "Polokwane International Airport", city: "Polokwane" },
    { code: "PHC", name: "Port Harcourt International Airport", city: "Port Harcourt" },
    { code: "PZU", name: "Port Sudan New International Airport", city: "Port Sudan" },
    { code: "PDX", name: "Portland International Airport", city: "Portland (OR)" },
    { code: "PWM", name: "Portland International Jetport", city: "Portland (ME)" },
    { code: "DIL", name: "Presidente Nicolau Lobato International Airport", city: "Dili" },
    { code: "MED", name: "Prince Mohammad bin Abdulaziz International Airport", city: "Medina" },
    { code: "ELQ", name: "Prince Naif bin Abdulaziz International Airport", city: "Buraydah" },
    { code: "PBC", name: "Puebla International Airport", city: "Puebla" },
    { code: "LED", name: "Pulkovo Airport", city: "Saint Petersburg" },
    { code: "FNJ", name: "Pyongyang International Airport", city: "Pyongyang" },
    { code: "AUA", name: "Queen Beatrix International Airport", city: "Oranjestad" },
    { code: "MPN", name: "RAF Mount Pleasant", city: "Mount Pleasant" },
    { code: "ETM", name: "Ramon Airport", city: "Eilat" },
    { code: "RKT", name: "Ras Al Khaimah International Airport", city: "Ras Al Khaimah" },
    { code: "RES", name: "Resistencia International Airport", city: "Resistencia" },
    { code: "RKV", name: "Reykjavík Airport", city: "Reykjavík" },
    { code: "LCK", name: "Rickenbacker International Airport", city: "Columbus (OH)" },
    { code: "RIX", name: "Riga International Airport", city: "Riga" },
    { code: "RBR", name: "Rio Branco International Airport", city: "Rio Branco" },
    { code: "GIG", name: "Rio de Janeiro/Galeão International Airport", city: "Rio de Janeiro" },
    { code: "RVY", name: "Rivera International Airport", city: "Rivera" },
    { code: "HRE", name: "Robert Gabriel Mugabe International Airport", city: "Harare" },
    { code: "RST", name: "Rochester International Airport", city: "Rochester (MN)" },
    { code: "RUN", name: "Roland Garros Airport", city: "Saint-Denis" },
    { code: "DCA", name: "Ronald Reagan Washington National Airport**", city: "Washington, D.C." },
    { code: "ROS", name: "Rosario – Islas Malvinas International Airport", city: "Rosario" },
    { code: "SAW", name: "Sabiha Gökçen International Airport", city: "Istanbul" },
    { code: "SKO", name: "Sadiq Abubakar III International Airport", city: "Sokoto" },
    { code: "YSJ", name: "Saint John Airport", city: "St. John" },
    { code: "POA", name: "Salgado Filho Porto Alegre International Airport", city: "Porto Alegre" },
    { code: "SLC", name: "Salt Lake City International Airport", city: "Salt Lake City" },
    { code: "SLW", name: "Saltillo Airport", city: "Saltillo" },
    { code: "SZG", name: "Salzburg Airport", city: "Salzburg" },
    { code: "SKD", name: "Samarkand International Airport", city: "Samarkand" },
    { code: "SAT", name: "San Antonio International Airport", city: "San Antonio" },
    { code: "SAN", name: "San Diego International Airport", city: "San Diego" },
    { code: "SFO", name: "San Francisco International Airport", city: "San Francisco" },
    { code: "SJC", name: "San Jose International Airport", city: "San Jose (CA)" },
    { code: "TRF", name: "Sandefjord Airport, Torp", city: "Oslo" },
    { code: "GYN", name: "Santa Genoveva Airport", city: "Goiânia" },
    { code: "AJU", name: "Santa Maria Airport", city: "Aracaju" },
    { code: "ETR", name: "Santa Rosa International Airport", city: "Machala" },
    { code: "SDU", name: "Santos Dumont Airport", city: "Rio de Janeiro" },
    { code: "SYX", name: "Sanya Phoenix International Airport", city: "Sanya" },
    { code: "SAV", name: "Savannah/Hilton Head International Airport", city: "Savannah (GA)" },
    { code: "SEZ", name: "Seychelles International Airport", city: "Victoria" },
    { code: "SFA", name: "Sfax–Thyna International Airport", city: "Sfax" },
    { code: "CGP", name: "Shah Amanat International Airport", city: "Chittagong" },
    { code: "SHA", name: "Shanghai Hongqiao International Airport", city: "Shanghai" },
    { code: "PVG", name: "Shanghai Pudong International Airport", city: "Shanghai" },
    { code: "SHJ", name: "Sharjah International Airport", city: "Sharjah" },
    { code: "SSH", name: "Sharm El Sheikh International Airport", city: "Sharm El Sheikh" },
    { code: "SHE", name: "Shenyang Taoxian International Airport", city: "Shenyang" },
    { code: "SVO", name: "Sheremetyevo International Airport", city: "Moscow" },
    { code: "SJW", name: "Shijiazhuang Zhengding International Airport", city: "Shijiazhuang" },
    { code: "SKT", name: "Sialkot International Airport", city: "Sialkot" },
    { code: "ASU", name: "Silvio Pettirossi International Airport", city: "Asunción" },
    { code: "NLA", name: "Simon Mwansa Kapwepwe International Airport", city: "Ndola" },
    { code: "SMR", name: "Simón Bolívar International Airport", city: "Santa Marta" },
    { code: "CCS", name: "Simón Bolívar International Airport", city: "Caracas" },
    { code: "MRU", name: "Sir Seewoosagur Ramgoolam International Airport", city: "Plaine Magnien" },
    { code: "GBE", name: "Sir Seretse Khama International Airport", city: "Gaborone" },
    { code: "CGK", name: "Soekarno–Hatta International Airport", city: "Jakarta" },
    { code: "HMB", name: "Sohag International Airport", city: "Sohag" },
    { code: "OHS", name: "Sohar International Airport", city: "Sohar" },
    { code: "RSW", name: "Southwest Florida International Airport", city: "Fort Myers" },
    { code: "SKV", name: "St. Catherine International Airport", city: "Saint Catherine" },
    { code: "YYT", name: "St. John's International Airport", city: "St. John's" },
    { code: "STL", name: "St. Louis Lambert International Airport", city: "St. Louis" },
    { code: "PIE", name: "St. Pete–Clearwater International Airport", city: "St. Petersburg (FL)" },
    { code: "STW", name: "Stavropol Shpakovskoye Airport", city: "Stavropol" },
    { code: "SWF", name: "Stewart International Airport", city: "Newburgh" },
    { code: "ARN", name: "Stockholm Arlanda Airport", city: "Stockholm" },
    { code: "SFS", name: "Subic Bay International Airport", city: "Olongapo" },
    { code: "SZB", name: "Sultan Abdul Aziz Shah Airport", city: "Kuala Lumpur" },
    { code: "KBR", name: "Sultan Ismail Petra Airport", city: "Kota Bharu" },
    { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok" },
    { code: "SYD", name: "Sydney Airport", city: "Sydney" },
    { code: "TBJ", name: "Tabarka–Aïn Draham International Airport", city: "Tabarka" },
    { code: "RMQ", name: "Taichung International Airport", city: "Taichung" },
    { code: "TYN", name: "Taiyuan Wusu International Airport", city: "Taiyuan" },
    { code: "SGN", name: "Tan Son Nhat International Airport", city: "Hồ Chí Minh City" },
    { code: "TPE", name: "Taoyuan International Airport", city: "Taipei" },
    { code: "TBS", name: "Tbilisi International Airport", city: "Tbilisi" },
    { code: "MME", name: "Teesside International Airport", city: "Middlesbrough" },
    { code: "EIS", name: "Terrance B. Lettsome International Airport", city: "Road Town" },
    { code: "TSN", name: "Tianjin Binhai International Airport", city: "Tianjin" },
    { code: "PTY", name: "Tocumen International Airport", city: "Panama City" },
    { code: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto/Mississauga" },
    { code: "TLS", name: "Toulouse–Blagnac Airport", city: "Toulouse" },
    { code: "TOE", name: "Tozeur–Nefta International Airport", city: "Tozeur" },
    { code: "KTM", name: "Tribhuvan International Airport", city: "Kathmandu" },
    { code: "TUN", name: "Tunis–Carthage International Airport", city: "Tunis" },
    { code: "CRZ", name: "Turkmenabat International Airport", city: "Türkmenabat" },
    { code: "KRW", name: "Turkmenbashi International Airport", city: "Turkmenbashi" },
    { code: "UGC", name: "Urgench International Airport", city: "Urgench" },
    { code: "USH", name: "Ushuaia – Malvinas Argentinas International Airport", city: "Ushuaia" },
    { code: "ANU", name: "V. C. Bird International Airport", city: "St. John’s" },
    { code: "VLC", name: "Valencia Airport", city: "Valencia" },
    { code: "RLO", name: "Valle del Conlara Airport", city: "Santa Rosa del Conlara" },
    { code: "VDO", name: "Van Don International Airport", city: "Vân Đồn" },
    { code: "YVR", name: "Vancouver International Airport", city: "Vancouver (Richmond)" },
    { code: "MLE", name: "Velana International Airport", city: "Malé" },
    { code: "VCE", name: "Venice Marco Polo Airport", city: "Venice" },
    { code: "VNT", name: "Ventspils International Airport", city: "Ventspils" },
    { code: "VIE", name: "Vienna International Airport", city: "Vienna" },
    { code: "VAM", name: "Villa International Airport Maamigili", city: "Maamigili" },
    { code: "VNO", name: "Vilnius Airport", city: "Vilnius" },
    { code: "VVI", name: "Viru Viru International Airport", city: "Santa Cruz de la Sierra" },
    { code: "PRG", name: "Václav Havel Airport", city: "Prague" },
    { code: "FAE", name: "Vágar Airport", city: "Vágar" },
    { code: "WAW", name: "Warsaw Chopin Airport", city: "Warsaw" },
    { code: "VTE", name: "Wattay International Airport", city: "Vientiane" },
    { code: "OKC", name: "Will Rogers World Airport", city: "Oklahoma City" },
    { code: "HOU", name: "William P. Hobby Airport", city: "Hartford (CT)" },
    { code: "ILM", name: "Wilmington International Airport", city: "Wilmington (NC)" },
    { code: "YQG", name: "Windsor International Airport", city: "Windsor" },
    { code: "YNY", name: "Yangyang International Airport", city: "Yangyang" },
    { code: "YTY", name: "Yangzhou Taizhou International Airport", city: "Yangzhou" },
    { code: "INC", name: "Yinchuan Hedong International Airport", city: "Yinchuan" },
    { code: "ZAG", name: "Zagreb Airport", city: "Zagreb" },
    { code: "ZAM", name: "Zamboanga International Airport", city: "Zamboanga City" },
    { code: "CGO", name: "Zhengzhou Xinzheng International Airport", city: "Zhengzhou" },
    { code: "ZUH", name: "Zhuhai Jinwan Airport", city: "Zhuhai" },
    { code: "ZYI", name: "Zunyi Xinzhou Airport", city: "Zunyi" },
    { code: "EVN", name: "Zvartnots International Airport", city: "Yerevan" },

    //indian airports

    { code: "AGX", name: "Agatti Island Airport", city: "Agatti Island" },
    { code: "AMD", name: "Ahmedabad Airport", city: "Ahmedabad" },
    { code: "AJL", name: "Aizawl Airport", city: "Aizawl" },
    { code: "AKD", name: "Akola Airport", city: "Akola" },
    { code: "IXV", name: "Along Airport", city: "Along" },
    { code: "LKO", name: "Amausi Airport", city: "Lucknow" },
    { code: "ATQ", name: "Amritsar Airport", city: "Amritsar" },
    { code: "IXB", name: "Bagdogra Airport", city: "Bagdogra" },
    { code: "IXE", name: "Bajpe Airport", city: "Mangalore" },
    { code: "IXL", name: "Bakula Rimpoche Airport", city: "Leh" },
    { code: "RGH", name: "Balurghat Airport", city: "Balurghat" },
    { code: "IXD", name: "Bamrauli Airport", city: "Allahabad" },
    { code: "SHL", name: "Barapani Airport", city: "Shillong" },
    { code: "BEK", name: "Bareli Airport", city: "Bareli" },
    { code: "BEP", name: "Bellary Airport", city: "Bellary" },
    { code: "BLR", name: "Bengaluru International Airport", city: "Bangalore" },
    { code: "BUP", name: "Bhatinda Airport", city: "Bhatinda" },
    { code: "BHU", name: "Bhavnagar Airport", city: "Bhavnagar" },
    { code: "BHO", name: "Bhopal Airport", city: "Bhopal" },
    { code: "BBI", name: "Bhubaneswar Airport", city: "Bhubaneswar" },
    { code: "BKB", name: "Bikaner Airport", city: "Bikaner" },
    { code: "PAB", name: "Bilaspur Airport", city: "Bilaspur" },
    { code: "IXR", name: "Birsa Munda International Airport", city: "Ranchi" },
    { code: "GAU", name: "Borjhar Airport", city: "Guwahati" },
    { code: "CBD", name: "Car Nicobar Airport", city: "Car Nicobar" },
    { code: "IXC", name: "Chandigarh Airport", city: "Chandigarh" },
    { code: "MAA", name: "Chennai International Airport", city: "Chennai" },
    { code: "BOM", name: "Chhatrapati Shivaji International Airport", city: "Mumbai" },
    { code: "IXU", name: "Chikkalthana Airport", city: "Aurangabad" },
    { code: "COK", name: "Cochin International Airport", city: "Kochi" },
    { code: "COH", name: "Cooch Behar Airport", city: "Cooch Behar" },
    { code: "CDP", name: "Cuddapah Airport", city: "Cuddapah" },
    { code: "UDR", name: "Dabok Airport", city: "Udaipur" },
    { code: "GOI", name: "Dabolim Airport", city: "Goa" },
    { code: "NMB", name: "Daman Airport", city: "Daman" },
    { code: "DAE", name: "Daparizo Airport", city: "Daparizo" },
    { code: "DAI", name: "Darjeeling Airport", city: "Darjeeling" },
    { code: "DED", name: "Dehra Dun Airport", city: "Dehra Dun" },
    { code: "DEP", name: "Deparizo Airport", city: "Deparizo" },
    { code: "IDR", name: "Devi Ahilyabai Holkar Airport", city: "Indore" },
    { code: "DBD", name: "Dhanbad Airport", city: "Dhanbad" },
    { code: "DIB", name: "Dibrugarh Airport", city: "Dibrugarh" },
    { code: "DMU", name: "Dimapur Airport", city: "Dimapur" },
    { code: "DIU", name: "Diu Airport", city: "Diu" },
    { code: "HGI", name: "Donyi Polo Airport", city: "Itanagar" },
    { code: "DHM", name: "Gaggal Airport", city: "Dharamsala" },
    { code: "ISK", name: "Gandhinagar Airport", city: "Nasik" },
    { code: "GAY", name: "Gaya Airport", city: "Gaya" },
    { code: "GOP", name: "Gorakhpur Airport", city: "Gorakhpur" },
    { code: "JGA", name: "Govardhanpur Airport", city: "Jamnagar" },
    { code: "GUX", name: "Guna Airport", city: "Guna" },
    { code: "GWL", name: "Gwalior Airport", city: "Gwalior" },
    { code: "HSS", name: "Hissar Airport", city: "Hissar" },
    { code: "HBX", name: "Hubli Airport", city: "Hubli" },
    { code: "HYD", name: "Hyderabad International Airport", city: "Hyderabad" },
    { code: "DEL", name: "Indira Gandhi International Airport", city: "New Delhi" },
    { code: "JLR", name: "Jabalpur Airport", city: "Jabalpur" },
    { code: "JGB", name: "Jagdalpur Airport", city: "Jagdalpur" },
    { code: "JSA", name: "Jaisalmer Airport", city: "Jaisalmer" },
    { code: "PYB", name: "Jeypore Airport", city: "Jeypore" },
    { code: "JDH", name: "Jodhpur Airport", city: "Jodhpur" },
    { code: "IXH", name: "Kailashahar Airport", city: "Kailashahar" },
    { code: "IXQ", name: "Kamalpur Airport", city: "Kamalpur" },
    { code: "IXY", name: "Kandla Airport", city: "Kandla" },
    { code: "CNN", name: "Kannur International Airport", city: "Kannur" },
    { code: "KNU", name: "Kanpur Airport", city: "Kanpur" },
    { code: "IXK", name: "Keshod Airport", city: "Keshod" },
    { code: "HJR", name: "Khajuraho Airport", city: "Khajuraho" },
    { code: "AGR", name: "Kheria Airport", city: "Agra" },
    { code: "IXN", name: "Khowai Airport", city: "Khowai" },
    { code: "KLH", name: "Kolhapur Airport", city: "Kolhapur" },
    { code: "KTU", name: "Kota Airport", city: "Kota" },
    { code: "CCJ", name: "Kozhikode Airport", city: "Kozhikode" },
    { code: "KUU", name: "Kullu Manali Airport", city: "Bhuntar Kullu" },
    { code: "IXS", name: "Kumbhirgram Airport", city: "Silchar" },
    { code: "IXI", name: "Lilabari Airport", city: "Lilabari" },
    { code: "PNQ", name: "Lohegaon Airport", city: "Pune" },
    { code: "IXM", name: "Madurai Airport", city: "Madurai" },
    { code: "LDA", name: "Malda Airport", city: "Malda" },
    { code: "MOH", name: "Mohanbari Airport", city: "Mohanbari" },
    { code: "IMF", name: "Municipal Airport", city: "Imphal" },
    { code: "MZA", name: "Muzaffarnagar Airport", city: "Muzaffarnagar" },
    { code: "MZU", name: "Muzaffarpur Airport", city: "Muzaffarpur" },
    { code: "MYQ", name: "Mysore Airport", city: "Mysore" },
    { code: "NDC", name: "Nanded Airport", city: "Nanded" },
    { code: "CCU", name: "Netaji Subhash Chandra Bose International Airport", city: "Kolkata" },
    { code: "NVY", name: "Neyveli Airport", city: "Neyveli" },
    { code: "OMN", name: "Osmanabad Airport", city: "Osmanabad" },
    { code: "PGH", name: "Pantnagar Airport", city: "Pantnagar" },
    { code: "IXT", name: "Pasighat Airport", city: "Pasighat" },
    { code: "IXP", name: "Pathankot Airport", city: "Pathankot" },
    { code: "PAT", name: "Patna Airport", city: "Patna" },
    { code: "CJB", name: "Peelamedu Airport", city: "Coimbatore" },
    { code: "PNY", name: "Pondicherry Airport", city: "Pondicherry" },
    { code: "PBD", name: "Porbandar Airport", city: "Porbandar" },
    { code: "IXZ", name: "Port Blair Airport", city: "Port Blair" },
    { code: "PUT", name: "Puttaparthi Airport", city: "Puttaparthi" },
    { code: "RPR", name: "Raipur Airport", city: "Raipur" },
    { code: "ATQ", name: "Raja Sansi Airport", city: "Amritsar" },
    { code: "RJA", name: "Rajahmundry Airport", city: "Rajahmundry" },
    { code: "RAJ", name: "Rajkot Airport", city: "Rajkot" },
    { code: "RJI", name: "Rajouri Airport", city: "Rajouri" },
    { code: "RMD", name: "Ramagundam Airport", city: "Ramagundam" },
    { code: "RTC", name: "Ratnagiri Airport", city: "Ratnagiri" },
    { code: "REW", name: "Rewa Airport", city: "Rewa" },
    { code: "RRK", name: "Rourkela Airport", city: "Rourkela" },
    { code: "JRH", name: "Rowriah Airport", city: "Jorhat" },
    { code: "BHJ", name: "Rudra Mata Airport", city: "Bhuj" },
    { code: "RUP", name: "Rupsi Airport", city: "Rupsi" },
    { code: "SXV", name: "Salem Airport", city: "Salem" },
    { code: "TEZ", name: "Salonibari Airport", city: "Tezpur" },
    { code: "IXG", name: "Sambre Airport", city: "Belgaum" },
    { code: "JAI", name: "Sanganeer Airport", city: "Jaipur" },
    { code: "TNI", name: "Satna Airport", city: "Satna" },
    { code: "IXJ", name: "Satwari Airport", city: "Jammu" },
    { code: "SSE", name: "Sholapur Airport", city: "Sholapur" },
    { code: "SLV", name: "Simla Airport", city: "Simla" },
    { code: "IXA", name: "Singerbhil Airport", city: "Agartala" },
    { code: "IXW", name: "Sonari Airport", city: "Jamshedpur" },
    { code: "NAG", name: "Sonegaon Airport", city: "Nagpur" },
    { code: "SXR", name: "Srinagar Airport", city: "Srinagar" },
    { code: "STV", name: "Surat Airport", city: "Surat" },
    { code: "TEI", name: "Tezu Airport", city: "Tezu" },
    { code: "TJV", name: "Thanjavur Airport", city: "Thanjavur" },
    { code: "TRV", name: "Thiruvananthapuram International Airport", city: "Trivandrum" },
    { code: "TIR", name: "Tirupati Airport", city: "Tirupati" },
    { code: "TRZ", name: "Trichy Airport", city: "Trichy" },
    { code: "TCR", name: "Tuticorin Airport", city: "Tuticorin" },
    { code: "BDQ", name: "Vadodara Airport", city: "Vadodara" },
    { code: "VNS", name: "Varanasi Airport", city: "Varanasi" },
    { code: "VGA", name: "Vijayawada Airport", city: "Vijayawada" },
    { code: "VTZ", name: "Vishakhapatnam Airport", city: "Vishakhapatnam" }

  ];

  //format date 
  const formatDate = (dateString) => {
    if (!dateString) return "Select Date"
    const [year, month, day] = dateString.split("-")
    return `${day}-${month}-${year}`
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromRef.current && !fromRef.current.contains(event.target)) {
        setShowFromDropdown(false)
      }
      if (toRef.current && !toRef.current.contains(event.target)) {
        setShowToDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])


  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     // Handle form submission
  //     console.log({
  //         tripType,
  //         fromAirport,
  //         toAirport,
  //         departureDate,
  //         returnDate,
  //         passengers,
  //     })
  // }


  const handleSubmit = (e) => {
    e.preventDefault()

    const formattedMessage = `
    *New Flight Enquiry*
    
    *Trip Type:* ${tripType}
    *From:* ${fromAirport}
    *To:* ${toAirport}
    *Departure Date:* ${departureDate}
    ${tripType === "round-trip" ? `*Return Date:* ${returnDate}\n` : ""}
    *Passengers:* ${passengers}
    *Date of Enquiry:* ${new Date().toLocaleString()}
        `.trim()

    const phoneNumber = "7535964612"
    const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`

    window.open(whatsappURL, "_blank")
  }



  return (
    <div className="pl-10 pr-10 pb-10">
      <div className="relative w-full h-screen min-h-[500px] overflow-hidden text-white font-sans ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: `url(${bgImage})`
            , borderRadius: "60px",
            marginBottom: "30px"

          }}
        ></div>


        {/* Navigation Arrows */}
        {/* <div className="absolute inset-0 flex justify-between items-center px-5 pointer-events-none">
                <button className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center cursor-pointer pointer-events-auto transition-colors hover:bg-white/50">
                    <ChevronLeft size={24} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center cursor-pointer pointer-events-auto transition-colors hover:bg-white/50">
                    <ChevronRight size={24} />
                </button>
            </div> */}

        {/* Hero Content */}
        <div className="relative w-full h-full flex flex-col justify-center items-center p-5 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-2 drop-shadow-md mt-12">Welcome to Flyanza</h1>
          <div className="text-lg md:text-xl tracking-widest mb-12 relative px-8 drop-shadow-md before:content-[''] before:absolute before:top-1/2 before:left-[-30px] before:w-[50px] before:h-[1px] before:bg-white after:content-[''] after:absolute after:top-1/2 after:right-[-30px] after:w-[50px] after:h-[1px] after:bg-white">
            FLIGHTS & TRAVEL
          </div>

          {/* Booking Form */}
          <form
            className="bg-white/90 rounded-3xl p-5 md:p-6 w-[90%] max-w-[1200px] mt-auto mb-10 text-gray-800 shadow-lg"
            onSubmit={handleSubmit}
          >
            {/* Trip Type Row */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="w-full">
                <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">Trip Type</label>
                <div className="flex gap-2 md:gap-3">
                  <button
                    type="button"
                    className={`flex-1 py-2 px-3 border rounded-full transition-colors ${tripType === "round-trip" ? "bg-[#009488] text-white border-yellow-600" : "bg-gray-100 border-gray-300"
                      }`}
                    onClick={() => setTripType("round-trip")}
                  >
                    Round Trip
                  </button>
                  <button
                    type="button"
                    className={`flex-1 py-2 px-3 border rounded-full transition-colors ${tripType === "one-way" ? "bg-[#009488] text-white border-yellow-600" : "bg-gray-100 border-gray-300"
                      }`}
                    onClick={() => setTripType("one-way")}
                  >
                    One Way
                  </button>
                  {/* <button
                                    type="button"
                                    className={`flex-1 py-2 px-3 border rounded-md transition-colors ${tripType === "multi-city" ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 border-gray-300"
                                        }`}
                                    onClick={() => setTripType("multi-city")}
                                >
                                    Multi-City
                                </button> */}
                </div>
              </div>
            </div>

            {/* From/To Row */}
            <div className="flex flex-wrap gap-4 mb-4">
              {/* From Airport */}
              <div className="flex-1 min-w-[200px]">
                <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">From</label>
                <div className="relative" ref={fromRef}>
                  <div className="flex items-center border border-gray-300 rounded-md bg-white">
                    <Plane size={18} className="absolute left-3 text-gray-500" />
                    <input
                      type="text"
                      value={fromAirport}
                      onChange={(e) => {
                        setFromAirport(e.target.value)
                        setShowFromDropdown(true)
                      }}
                      onFocus={() => setShowFromDropdown(true)}
                      placeholder="Type airport code, name or city"
                      className="w-full py-2 px-4 pl-10 rounded-md bg-transparent"
                    />
                  </div>
                  {showFromDropdown && (
                    <div className="absolute top-full left-0 w-full max-h-[300px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-[9999]">
                      {airports
                        .filter((airport) =>
                          `${airport.code} ${airport.city} ${airport.name}`
                            .toLowerCase()
                            .includes(fromAirport.toLowerCase())
                        )
                        .map((airport) => (
                          <div
                            key={airport.code}
                            className="flex p-3 cursor-pointer border-b border-gray-100 hover:bg-gray-50"
                            onClick={() => {
                              setFromAirport(`${airport.city} (${airport.code})`)
                              setShowFromDropdown(false)
                            }}
                          >
                             

                            <div className="font-bold mr-4 text-[#009488]">{airport.code}</div>
                            <div className="flex-1">
                              <div>{airport.city}</div>
                              <div className="text-sm text-gray-500">{airport.name}</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              {/* To Airport */}
              <div className="flex-1 min-w-[200px]">
                <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">To</label>
                <div className="relative" ref={toRef}>
                  <div className="flex items-center border border-gray-300 rounded-md bg-white">
                    <Map size={18} className="absolute left-3 text-gray-500" />
                    <input
                      type="text"
                      value={toAirport}
                      onChange={(e) => {
                        setToAirport(e.target.value)
                        setShowToDropdown(true)
                      }}
                      onFocus={() => setShowToDropdown(true)}
                      placeholder="Type airport code, name or city"
                      className="w-full py-2 px-4 pl-10 rounded-md bg-transparent"
                    />
                  </div>
                  {showToDropdown && (
                    <div className="absolute top-full left-0 w-full max-h-[300px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-[9999]">
                      {airports
                        .filter((airport) =>
                          `${airport.code} ${airport.city} ${airport.name}`
                            .toLowerCase()
                            .includes(toAirport.toLowerCase())
                        )
                        .map((airport) => (
                          <div
                            key={airport.code}
                            className="flex p-3 cursor-pointer border-b border-gray-100 hover:bg-gray-50"
                            onClick={() => {
                              setToAirport(`${airport.city} (${airport.code})`)
                              setShowToDropdown(false)
                            }}
                          >
                            <div className="font-bold mr-4 text-[#009488]">{airport.code}</div>
                           
                            <div className="flex-1">
                              <div>{airport.city}</div>
                              <div className="text-sm text-gray-500">{airport.name}</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>


            {/* Dates and Passengers Row */}
            <div className="flex flex-wrap gap-4">
              {/* Departure Date */}
              <div className="flex-1 min-w-[200px]">
                <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">Departure Date</label>
                <div className="relative flex items-center border border-gray-300 rounded-md bg-white">
                  <Calendar size={18} className="absolute left-3 text-gray-500" />
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full py-2 px-4 pl-10 rounded-md bg-transparent uppercase"
                  />
                </div>
              </div>

              {/* Return Date - Only show if Round Trip is selected */}
              {tripType === "round-trip" && (
                <div className="flex-1 min-w-[200px]">
                  <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">Return Date</label>
                  <div className="relative flex items-center border border-gray-300 rounded-md bg-white">
                    <Calendar size={18} className="absolute left-3 text-gray-500" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full py-2 px-4 pl-10 rounded-md bg-transparent uppercase"
                    />
                  </div>
                </div>
              )}

              {/* Passengers */}
              <div className="flex-1 min-w-[200px]">
                <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">Passengers</label>
                <div className="relative flex items-center border border-gray-300 rounded-md bg-white">
                  <Users size={18} className="absolute left-3 text-gray-500" />
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={passengers}
                    onChange={(e) => setPassengers(Number.parseInt(e.target.value))}
                    className="w-full py-2 px-4 pl-10 rounded-md bg-transparent"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end w-full md:w-auto mt-4 md:mt-0">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#009488] border-yellow-600 text-white font-bold py-2 px-6 rounded-md transition-colors tracking-wide min-w-[180px]"
                >
                  Send Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

