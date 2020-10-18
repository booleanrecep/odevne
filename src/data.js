import { assets } from "./images/svg/ecology/index";
import TrDate from "tr-date";
import { animations } from "./images/animations/lottie/index";

const tr = new TrDate();
const atasozleri = [
  {
    soz: "Acele işin sonu pişmanlık.",
    anlam: "Bir işte çok acele edildiği zaman istenilen sonuç ortaya çıkmaz.",
  },
  {
    soz: "Ağaç düşse de yakınına yaslanır.",
    anlam: "Zor ve sıkıntılı zamanlarda kişilere yakınları destek olur.",
  },
  {
    soz: "İşleyen demir ışıldar.",
    anlam: "Çalışmak, insandaki isteksizliği bitirip onu canlı, etkili kılar.",
  },
  {
    soz: "Keçiyi yardan uçuran bir tutam ottur.",
    anlam:
      "Açgözlü, gözü doymak bilmeyen, hırslı kişiler, küçük bir çıkar için bütün varlıklarını tehlikeye atar.",
  },
  {
    soz: "Kork Allah’tan korkmayandan.",
    anlam:
      "Bir kişi Allah’tan korkmuyorsa her türlü kötülüğü yapabilir. Böyle kişilerden korkmak gerekir.",
  },
];
const data = [
  //ÖRNEK DATA////
  // {
  //   img: animations.wash_hand,
  //   classroom: "5-A SINIFI ÖDEVLERİ",
  //   atasozu: "Seher vakti bir güzele tutuldum!",
  //   homeworks: [
  //     {
  //       sinif: "5-A",
  //       baslama: `${tr.getFullDate(".")}`,
  //       bitis: `${tr.getFullDate(".")}`,
  //       konu: "Mustafa Kemal'in Kağnısı",
  //       odev: `Mustafa Kemal'in Kağnısı şiirini defterimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini defterimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini defterimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini defterimize yazalım. İlk üç etkinliği yapalım.`,
  //       img: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
  //       imgTitle: "Image1",

  //     }
  //   ],
  // },
  ////////////////

  {
    img: animations.girl_bike,
    classroom: "5-A",
    homeworks: [
      {
        id: Math.floor(Math.random() * 10 ** 5),
        sinif: "5-A",
        baslama: `${tr.getFullDate(".")}`,
        bitis: `${tr.getFullDate(".")}`,
        konu: "ÖRNEK KONU",
        odev: `ÖRNEK ÖDEV: Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      },
    ],
  },
  {
    img: animations.woman_with_flower,
    classroom: "5-B",
    homeworks: [
      {
        id: Math.floor(Math.random() * 10 ** 5),
        sinif: "5-B",
        baslama: `${tr.getFullDate(".")}`,
        bitis: `${tr.getFullDate(".")}`,
        konu: "ÖRNEK KONU",
        odev: `ÖRNEK ÖDEV: Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      },
    ],
  },
  {
    img: animations.cat_with_hat,
    classroom: "6-B",
    homeworks: [
      {
        id: Math.floor(Math.random() * 10 ** 5),
        sinif: "6-B",
        baslama: `${tr.getFullDate(".")}`,
        bitis: `${tr.getFullDate(".")}`,
        konu: "ÖRNEK KONU",
        odev: `ÖRNEK ÖDEV: Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      },
    ],
  },
  {
    img: animations.wash_hand,
    classroom: "8-A",
    homeworks: [
      {
        id: Math.floor(Math.random() * 10 ** 5),
        sinif: "8-A",
        baslama: `${tr.getFullDate(".")}`,
        bitis: `${tr.getFullDate(".")}`,
        konu: "ÖRNEK KONU",
        odev: `ÖRNEK ÖDEV: Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      },
    ],
  },
];

export { atasozleri, data };
