import {Injectable} from '@angular/core'
import {DocumentInterface} from './document.interface'

@Injectable()
export class PDocsService {
  private items: DocumentInterface[] = [
    // Stacionarnie
    // Catalogs
    // GNB
    {
      title: 'Аккумуляторы технологии dryfit',
      text: 'Необслуживаемые свинцово-кислотные аккумуляторы с желеобразным электролитом',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/dryfit_12_2017_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/2019/dryfit_02_2019.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-gnb'
      ]
    },
    {
      title: 'Аккумуляторы технологии AGM',
      text: 'Необслуживаемые свинцово-кислотные аккумуляторы',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/AGM_12_-2017_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/2019/AGM_03_19.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-gnb'
      ]
    },
    {
      title: 'Аккумуляторы с жидким электролитом',
      text: 'Малообслуживаемые свинцово-кислотные аккумуляторы',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/Classic_12_-2017_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/2019/Classic_03_2019.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-gnb'
      ]
    },
    {
      title: 'Аккумуляторы Solar',
      text: 'Стационарные свинцово-кислотные аккумуляторы для применения в установках преобразования энергии альтернативных источников',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/SOLAR_12_17_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/2019/SOLAR-03.2019.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-gnb'
      ]
    },
    {
      title: 'Высокоемкие энергетические модули на основе свинцово-кислотных аккумуляторных батарей (BESS)',
      text: 'Современное и технологичное решение для накопления, хранения и распределения энергии возобновляемых источников',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/Ener_modul_-12_-2017_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/2019/BESS_03-2019.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-gnb'
      ]
    },
    {
      title: 'Аккумуляторы Sonnenschein PowerCycle',
      text: 'Новое решение для тяжелых условий эксплуатации',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/Sonnenschein_PowerCycle_11_-2017_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/2019/Sonnenschein_PowerCycle_03_19.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-gnb'
      ]
    },
    {
      title: 'Аккумуляторы Sonnenschein SOLAR для использования в установках альтернативной энергетики',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/solar_may2018_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/solar_may2018.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-gnb'
      ]
    },

    // BB Battery, Ventura
    {
      title: 'Промышленные аккумуляторы B.B. Battery',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/b.b.battery_14.10.16_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/b.b.battery_14.10.16.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-bb-battery-ventura',
      ]
    },
    {
      title: 'Промышленные необслуживаемые свинцово-кислотные аккумуляторы Ventura',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/ventura_14.10.16_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/ventura_14.10.16.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-bb-battery-ventura'
      ]
    },
    {
      title: 'Промышленные аккумуляторы Ventura серии FT\n',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/ventura_ft_2016_new_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/ventura_ft_2016_new.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-bb-battery-ventura'
      ]
    },
    {
      title: 'Зарядные устройства Ventura Eco Series',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/ventura_eco_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/ventura_eco.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-bb-battery-ventura'
      ]
    },
    {
      title: 'Высокочастотные зарядные устройства серии Stark ProHF',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/prohf_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/prohf.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-catalogs',
        'stacionarnye-akkumulyatory-catalogs-bb-battery-ventura'
      ]
    },

    // Instructions
    // GNB
    {
      title: 'Аккумуляторы Sonnenschein A400, A500, A600 OPzV, A700 OGiV и технологии AGM: Marathon, Sprinter, Powerfit',
      text: 'Эксплуатационная документация: необслуживаемые аккумуляторы технологии dryfit',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_dryfit_2017_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/2019/Instr_-dryfit_AGM_08_2019.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-gnb'
      ]
    },
    {
      title: 'Аккумуляторы Sonnenschein SOLAR, SOLAR BLOCK, A600 SOLAR',
      text: 'Эксплуатационная документация: стационарные свинцово-кислотные герметизированные необслуживаемые аккумуляторы технологии dryfit',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_solar_nov-2016_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/instr_solar_nov-2016.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-gnb'
      ]
    },
    {
      title: 'Аккумуляторы OPzS, GroE, OGi, OCSM',
      text: 'Эксплуатационная документация: малообслуживаемые аккумуляторные батареи серии Classic',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_Classic_fev-2015_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/Instr-Classic-nov-2018.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-gnb'
      ]
    },
    {
      title: 'Аккумуляторы Tudor',
      text: 'Эксплуатационная документация: стационарные свинцово-кислотные герметичные необслуживаемые аккумуляторные батареи технологии AGM',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/Instr_Tudor_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/Instr_Tudor.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-gnb'
      ]
    },

    // BB Battery, Ventura
    {
      title: 'Промышленные аккумуляторы B.B. Battery',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_bb.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/instr_bb_02_2017.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Свинцово-кислотные батареи глубокого разряда U.S. Battery ХС2',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/usb_xc2.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/06886_usb_care_vertical.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Зарядные устройства Stark ProHF',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_prohf.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/instr_prohf.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Зарядные устройства Ventura Eco',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_ventura_eco_220.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/instr_ventura_eco_220v.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Зарядные устройства Ventura Eco 3-фазное',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_ventura_eco_400.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/instr_ventura_eco_400v.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Необслуживаемые батареи с загущенным электролитом Ventura VTG',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_ventura_vtg.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/instr_ventura_vtg.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Стационарные свинцово-кислотные необслуживаемые аккумуляторы с регулирующим клапаном Ventura GP',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_ventura_gp.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/instr_ventura_gp.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Стационарные свинцово-кислотные необслуживаемые аккумуляторы с регулирующим клапаном Ventura GPL',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_ventura_gpl.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/instr_ventura_gpl.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Стационарные свинцово-кислотные необслуживаемые аккумуляторы с регулирующим клапаном Ventura HR',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/titul-HR.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/Ventura_HR_instr_po_ekspl.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Стационарные свинцово-кислотные необслуживаемые аккумуляторы с регулирующим клапаном Ventura HRL',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_ventura_hrl.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/RE-Ventura_hrl_vr.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Необслуживаемые свинцово-кислотные аккумуляторы Ventura VG',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/Titul.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/Ventura_VG_instr_po_ekspl_low.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },
    {
      title: 'Стационарные свинцово-кислотные необслуживаемые аккумуляторы с регулирующим клапаном Ventura FT',
      text: '',
      image: 'assets/img/documents/stacionarnye_akkumulyatory/instr_ventura_ft_1.jpg',
      fileLink: 'assets/documents/stacionarnye_akkumulyatory/B.B.%20Battery,%20Ventura/instrukcii/instr_ventura_ft.pdf',
      categories: [
        'stacionarnye-akkumulyatory',
        'stacionarnye-akkumulyatory-instructions',
        'stacionarnye-akkumulyatory-instructions-bb-battery-ventura'
      ]
    },

    // Dlya tehniki na elektrotyge
    // Catalogs
    {
      title: 'Промышленные аккумуляторы / Тяговые аккумуляторы',
      text: 'Обзор продукции',
      image: 'assets/img/documents/tyagovye_akkumulyatory/prospekt_obzor_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/Obzor_tyagovye_january-2019.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-catalogs',
      ]
    },
    {
      title: 'Блочные батареи для тягового применения',
      text: 'Обзор продукции',
      image: 'assets/img/documents/tyagovye_akkumulyatory/tyag_block_12_-2017_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/Motive-Power_Blocks-04-04-19.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-catalogs',
      ]
    },
    {
      title: 'Tensor xGEL',
      text: 'Высокопроизводительные и полностью необслуживаемые аккумуляторные батареи',
      image: 'assets/img/documents/tyagovye_akkumulyatory/TENSOR_xGEL_02_19_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/TENSOR_xGEL_02_19.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-catalogs',
      ]
    },
    {
      title: 'Tensor',
      text: 'Новые батареи с увеличенной мощностью, энергоэффективностью и длительным сроком службы',
      image: 'assets/img/documents/tyagovye_akkumulyatory/TENSOR_02_19_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/TENSOR_02_19.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-catalogs',
      ]
    },
    {
      title: 'Зарядные устройства 2100 * 2100.net',
      text: 'Зарядные устройства 2100 * 2100.net',
      image: 'assets/img/documents/tyagovye_akkumulyatory/Zar_ustr_2100_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/Brochure-2100-net_03_-2019.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-catalogs',
      ]
    },
    {
      title: 'Зарядные устройства Stark Pro12, Pro8 Pulse, ProHF',
      text: 'Зарядные устройства для тяговых аккумуляторных батарей',
      image: 'assets/img/documents/tyagovye_akkumulyatory/Stark_Pro_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/Shargers_STARK-Pro_03_19.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-catalogs',
      ]
    },
    {
      title: 'STARK LITHIUM ЭКСПЕРТ',
      text: 'Литий-ионные аккумуляторы',
      image: 'assets/img/documents/tyagovye_akkumulyatory/STARK_LITHIUM_EXPERT_2019_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/STARK_LITHIUM_EXPERT_2019.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-catalogs',
      ]
    },

    // Instructions
    {
      title: 'EPzS, EPzB, ECSM',
      text: 'Инструкция по установке, обслуживанию и эксплуатации классических тяговых аккумуляторных батарей',
      image: 'assets/img/documents/tyagovye_akkumulyatory/Instruction_EPzS_EPzB_ECSM_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/Instruction_EPzS_EPzB_ECSM.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'EPzV',
      text: 'Инструкция по установке и эксплуатации необслуживаемых герметизированных тяговых аккумуляторных батарей',
      image: 'assets/img/documents/tyagovye_akkumulyatory/instr_EPzV_2018.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/instr_EPzV_2018.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'FF, FT',
      text: 'Инструкция по установке и эксплуатации тяговых аккумуляторных батарей серий FF и FT',
      image: 'assets/img/documents/tyagovye_akkumulyatory/inst_FF_FT_2018.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/inst_FF_FT_2018.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Sonnenschein GF-V, GF-Y; Marathon Classic FF, FT; drysafe AS, AF-X',
      text: 'Инструкция по эксплуатации полностью необслуживаемых тяговых аккумуляторов с намазными пластинами',
      image: 'assets/img/documents/tyagovye_akkumulyatory/Instr-tyagovye_block_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/Instr-tyagovye_block.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Аккумуляторная батарея STARK LITHIUM серия ЭКСПЕРТ',
      text: 'Инструкция по установке и эксплуатации',
      image: 'assets/img/documents/tyagovye_akkumulyatory/Instruktsiya-STARK-LITHIUM-EKSPERT_09_-2019_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/Instruktsiya-STARK-LITHIUM-EKSPERT_09_-2019.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Аккумуляторная батарея STARK LITHIUM серия БЛОК',
      text: 'Инструкция по установке и эксплуатации',
      image: 'assets/img/documents/tyagovye_akkumulyatory/STARK-LITHIUM-BLOK_09_19_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/STARK-LITHIUM-BLOK_09_19.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Памятка по обслуживанию',
      text: 'Памятка по обслуживанию тяговых аккумуляторных батарей',
      image: 'assets/img/documents/tyagovye_akkumulyatory/pamyatka_chistka_taygov_2018.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/pamyatka_chistka_taygov_2018.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Зарядные устройства серии Stark Pro12',
      text: 'Инструкция по эксплуатации зарядного устройства Stark Pro12 (для тяговых аккумуляторных батарей)',
      image: 'assets/img/documents/tyagovye_akkumulyatory/Instruction_Pro12_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/Instruction_Pro12.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Зарядные устройства серии Stark Pro8 Pulse',
      text: 'Инструкция по эксплуатации зарядного устройства Stark Pro8 Pulse (для тяговых аккумуляторных батарей)',
      image: 'assets/img/documents/tyagovye_akkumulyatory/instr_pro8pulse_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/instr_pro8pulse.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Зарядные устройства серии Stark ProHF',
      text: 'Инструкция по эксплуатации зарядных устройств серии ProHF',
      image: 'assets/img/documents/tyagovye_akkumulyatory/ProHF_instruct_rus_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/ProHF_instruct_rus.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Зарядные устройства серии 2100 HP',
      text: 'Инструкция по эксплуатации зарядных устройств серии 2100 HP (для тяговых аккумуляторных батарей)',
      image: 'assets/img/documents/tyagovye_akkumulyatory/instr_2100HP_2018.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/instr_2100HP_2018.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Зарядные устройства серии 2100 SP',
      text: 'Инструкция по эксплуатации зарядных устройств серии 2100 SP (для тяговых аккумуляторных батарей)',
      image: 'assets/img/documents/tyagovye_akkumulyatory/Instruction_SP_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/Instruction_SP.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Автономная система долива воды ServiceMobil',
      text: 'Инструкция по эксплуатации автономной системы долива воды ServiceMobil',
      image: 'assets/img/documents/tyagovye_akkumulyatory/ServisMobile_2018.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/ServisMobile_2018.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'HydroFill',
      text: 'Инструкция по эксплуатации автономной тележки для транспортировки и долива воды HydroFill',
      image: 'assets/img/documents/tyagovye_akkumulyatory/hydrofill-1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/hydrofill.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },
    {
      title: 'Обслуживание батарей. Управление парком батарей. Замена батарей',
      text: '',
      image: 'assets/img/documents/tyagovye_akkumulyatory/Philadelphia_02_19_1.jpg',
      fileLink: 'assets/documents/tyagovye_akkumulyatory/2019/Philadelphia_02_19.pdf',
      categories: [
        'akkumulyatory-dlya-tehniki-na-elektrotyage',
        'akkumulyatory-dlya-tehniki-na-elektrotyage-instructions',
      ]
    },

    // li-on
    // catalogs
    {
      title: 'Литиевые элементы питания',
      text: 'Литиевые тионил-хлоридные LTC первичные элементы питания, элементы питания PulsesPlus, литиевые металл-оксидные TLM первичные элементы питания 4В',
      image: 'assets/img/documents/litivye_istochniki_toka/Tadiran_nov2016-1.jpg',
      fileLink: 'assets/documents/litivye_istochniki_toka/2019/TADIRAN_03_19.pdf',
      categories: [
        'li-ion-istochniki-toka',
        'li-ion-istochniki-toka-catalogs',
      ]
    },
    {
      title: 'STARK Lithium (ШТАРК ЛИА)',
      text: 'Литий-ионные аккумуляторы серии Штарк ЛИА',
      image: 'assets/img/documents/litivye_istochniki_toka/Stark_LIA-1.jpg',
      fileLink: 'assets/documents/litivye_istochniki_toka/Listovka-SHTARK-LIA_may-2018.pdf',
      categories: [
        'li-ion-istochniki-toka',
        'li-ion-istochniki-toka-catalogs',
      ]
    },

    // instructions
    {
      title: 'Аккумуляторная батарея STARK Lithium (ШТАРК ЛИА)',
      text: 'Инструкция по установке и эксплуатации',
      image: 'assets/img/documents/litivye_istochniki_toka/Instr_Stark_Lithium-1.jpg',
      fileLink: 'assets/documents/litivye_istochniki_toka/Instruktsiya-STARK-Lithium-iyun-2018.pdf',
      categories: [
        'li-ion-istochniki-toka',
        'li-ion-istochniki-toka-instructions',
      ]
    },

    // ipb
    // prospects
    {
      title: 'Проспект Stark Country Online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Listo_IBP_online_low_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Listo_IBP_online_low.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },
    {
      title: 'Stark Country 1000 Online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark_Country_1000_online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark_Country_1000_online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },
    {
      title: 'Stark Country 3000 Online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark_Country_3000_%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark_Country_3000_%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },
    {
      title: 'Stark Country 6000 Online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark_Country_6000_%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark_Country_6000_%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },
    {
      title: 'Stark Country 10000 Online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark_Country_10000_online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark_Country_10000_online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },
    {
      title: 'Проспект Stark Country INV',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Listo_IBP_INV_low_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Listo_IBP_INV_low.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },
    {
      title: 'Stark Country 1200 INV',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark_Country_1200_INV_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark_Country_1200_INV.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },
    {
      title: 'Stark Country 2000 INV',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark_Country_2000_INV_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark_Country_2000_INV.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },
    {
      title: 'Stark Country 3000 INV',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark_Country_3000_%20INV_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark_Country_3000_%20INV.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },
    {
      title: 'Stark Country 5000 INV',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark_Country_5000_INV_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark_Country_5000_INV.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-prospects'
      ]
    },

    // instructions
    {
      title: 'Инструкция Stark Country 600&2000',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/inst_Stark_600_2000_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/inst_Stark_600_2000.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-instructions'
      ]
    },
    {
      title: 'Инструкция Stark Country на типы 6000_10000',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%206000&10000%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%206000&10000%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-instructions'
      ]
    },
    {
      title: 'Инструкция Stark Country 1-3kVa Online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%201-3kVa%20Online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%201-3kVa%20Online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-instructions'
      ]
    },
    {
      title: 'Инструкция Stark Country 700&1200INV',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%20700&1200INV_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%20700&1200INV.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-instructions'
      ]
    },
    {
      title: 'Инструкция Stark Country 2000&3000INV-MPPT',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%202000&3000INV-MPPT_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%202000&3000INV-MPPT.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-instructions'
      ]
    },
    {
      title: 'Инструкция Stark Country 3000INV-MPPT Plus',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%203000INV-MPPT%20Plus_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%203000INV-MPPT%20Plus.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-instructions'
      ]
    },
    {
      title: 'Инструкция Stark Country 5000INV-MPPT',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%205000INV-MPPT_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/inst%20Stark%20Country%205000INV-MPPT.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-instructions'
      ]
    },

    // tehnicheskoe-opisanie
    {
      title: 'Stark Country 1000 LI',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%201000%20LI_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%201000%20LI.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 1000 online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%201000%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%201000%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 1000 online (24В)',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%201000%2024%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%201000%2024%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 2000 online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%202000%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%202000%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 2000 online (48В)',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%202000%2048%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%202000%2048%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 3000 online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%203000%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%203000%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 6000 online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%206000%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%206000%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 10000 online',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%2010000%20online_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%2010000%20online.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 700 INV',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%20700%20INV_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%20700%20INV.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 1200 INV',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%201200%20INV_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%201200%20INV.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 2000 INV-W_O',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%202000%20INV-W_O_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%202000%20INV-W_O.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 3000 INV-W_O',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%203000%20INV-W_O_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%203000%20INV-W_O.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 5000 INV-W_O',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%205000%20INV-W_O_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%205000%20INV-W_O.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 2000 INV-MPPT',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%202000%20INV-MPPT_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%202000%20INV-MPPT.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 3000 INV-MPPT',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%203000%20INV-MPPT_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%203000%20INV-MPPT.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 3000 INV-MPPT Plus',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%203000%20INV-MPPT%20Plus_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%203000%20INV-MPPT%20Plus.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },
    {
      title: 'Stark Country 5000 INV-MPPT',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/Stark%20Country%205000%20INV-MPPT_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/Stark%20Country%205000%20INV-MPPT.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-tehnicheskoe-opisanie'
      ]
    },

    // certificates
    {
      title: 'ISO 14001 Certificate',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/ISO%2014001%20Certificate_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/ISO%2014001%20Certificate.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-certificates'
      ]
    },
    {
      title: 'ISO 9001 Certificate',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/ISO%209001%20Certificate_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/ISO%209001%20Certificate.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-certificates'
      ]
    },
    {
      title: 'OHSAS 18001',
      text: '',
      image: 'assets/img/documents/ist_bespereb_pitaniya/OHSAS%2018001_1.jpg',
      fileLink: 'assets/documents/ist_bespereb_pitaniya/OHSAS%2018001.pdf',
      categories: [
        'istochniki-besperebojnogo-pitaniya',
        'istochniki-besperebojnogo-pitaniya-certificates'
      ]
    },

    // Certificates
    {
      title: 'Cертификат дистрибьютерства от TUNGSTONE',
      text: '',
      image: 'assets/img/documents/certificates/tungstone.png',
      fileLink: 'assets/documents/certificates/tungstone.pdf',
      categories: ['certificates']
    },
    {
      title: 'Cертификат дистрибьютерства от Tadiran Batteries',
      text: '',
      image: 'assets/img/documents/certificates/tadiran-batteries_1.jpg',
      fileLink: 'assets/documents/certificates/tadiran-batteries.pdf',
      categories: ['certificates']
    },
    {
      title: 'Сертификат от производителя Alcad Ltd',
      text: '',
      image: 'assets/img/documents/certificates/sertifikat-ot-proizvoditelya-alcad-ltd.jpg',
      fileLink: 'assets/documents/certificates/sertifikat-ot-proizvoditelya-alcad-ltd.pdf',
      categories: ['certificates']
    },
    {
      title: 'Сертификат от производителя B.B. Battery Company Limited',
      text: '',
      image: 'assets/img/documents/certificates/b.b._battery_company_limited-2019_1.jpg',
      fileLink: 'assets/documents/certificates/b.b._battery_company_limited-2019.pdf',
      categories: ['certificates']
    },
    {
      title: 'Сертификат от производителя GNB Industrial Power (EXIDE Technologies)',
      text: '',
      image: 'assets/img/documents/certificates/Exide_GNB_1.jpg',
      fileLink: 'assets/documents/certificates/Exide_GNB.pdf',
      categories: ['certificates']
    },
    {
      title: 'Сертификат от производителя FIRSTPOWER TECHNOLOGY (VENTURA)',
      text: '',
      image: 'assets/img/documents/certificates/fp_1.jpg',
      fileLink: 'assets/documents/certificates/fp.pdf',
      categories: ['certificates']
    },
    {
      title: 'Сертификат от производителя VISION EUROPE BVBA (VENTURA)',
      text: '',
      image: 'assets/img/documents/certificates/vision_europe_1.jpg',
      fileLink: 'assets/documents/certificates/vision_europe.pdf',
      categories: ['certificates']
    },
    {
      title: 'Сертификат от производителя OSTAR POWER TECHNOLOGY (VENTURA)',
      text: '',
      image: 'assets/img/documents/certificates/op_1.jpg',
      fileLink: 'assets/documents/certificates/op.pdf',
      categories: ['certificates']
    },
    {
      title: 'Свидетельство от производителя ЗАО Конвертор',
      text: '',
      image: 'assets/img/documents/certificates/konvertor.jpg',
      fileLink: 'assets/documents/certificates/konvertor.pdf',
      categories: ['certificates']
    },
    {
      title: 'Свидетельство от производителя ООО «Завод Конвертор»',
      text: '',
      image: 'assets/img/documents/certificates/Svidetelstvo_OOO_Zavod_Konvertor_1.jpg',
      fileLink: 'assets/documents/certificates/Svidetelstvo_OOO_Zavod_Konvertor.pdf',
      categories: ['certificates']
    },
  ]


  getItems(category: string): DocumentInterface[] {
    return this.items
      .filter(item => item.categories
        .find(itemFromCategories => itemFromCategories === category)
      )
  }
}
