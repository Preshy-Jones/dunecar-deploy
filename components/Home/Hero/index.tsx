import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getCars } from "../../../features/car/carSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { motion } from "framer-motion";
import { MultiMultiSelect, MultiSelect } from "../../ui/form";
import { Spinner } from "../../ui/others";
import { getModels } from "../../../features/model/modelSlice";
import { getMakes, setMakeOptions } from "../../../features/make/makeSlice";

// import heroImage from "../../assets/heroimage.svg";

const Hero = () => {
  const dummyModels = [
    {
      _id: "i3N0CP4394DPkFv2su0rN",
      make_name: "Toyota",
      models: [
        {
          _id: "IjcrIyKuoeeknTBSmIJ7q",
          title: "4Runner",
          slug: "4runner",
        },
        {
          _id: "u8Jnl1dQ3GCv6yAmqnoeg",
          title: "86",
          slug: "86",
        },
        {
          _id: "vAaDq9yeXxVoEkKwS5cUe",
          title: "Avalon",
          slug: "avalon",
        },
        {
          _id: "LbOOSDUCWMleQlk97WR0M",
          title: "Avalon Hybrid",
          slug: "avalon hybrid",
        },
        {
          _id: "2UrnP-tOBuluGtfag6w73",
          title: "Camry",
          slug: "camry",
        },
        {
          _id: "JwSgi7xdxM2kFKwD98f_D",
          title: "Camry Hybrid",
          slug: "camry hybrid",
        },
        {
          _id: "mFp8bSMN0ebiobYr4C2j5",
          title: "C-HR",
          slug: "c-hr",
        },
        {
          _id: "aUI55eRhYapvYpHx3sIEC",
          title: "Corolla",
          slug: "corolla",
        },
        {
          _id: "thSC91BkZphJN6yLnCArg",
          title: "Corolla Cross",
          slug: "corolla cross",
        },
        {
          _id: "zeX65DjkPC1E04LHO1yPx",
          title: "Corolla Hatchback",
          slug: "corolla hatchback",
        },
        {
          _id: "D1E79sJaPwRgr-Hfj41UR",
          title: "Corolla Hybrid",
          slug: "corolla hybrid",
        },
        {
          _id: "jBHzW9ILBwafB41aqf_0Y",
          title: "Corolla iM",
          slug: "corolla im",
        },
        {
          _id: "kFdHHFcA3bZAdV5-pPCai",
          title: "FJ Cruiser",
          slug: "fj cruiser",
        },
        {
          _id: "lHOoQ_jPzkOtzPcofCYSu",
          title: "GR86",
          slug: "gr86",
        },
        {
          _id: "ok6aAQ1zoWzPDFhKZyA93",
          title: "Highlander",
          slug: "highlander",
        },
        {
          _id: "pbOmvvMo3j7Mjc3Wc_l1a",
          title: "Highlander Hybrid",
          slug: "highlander hybrid",
        },
        {
          _id: "U_R5bJvRGRe4kmxM8Allb",
          title: "Prius",
          slug: "prius",
        },
        {
          _id: "Nj2YbQ7tQQaVZcsSrMzib",
          title: "Prius c",
          slug: "prius c",
        },
        {
          _id: "CDquKVUAfYc4xW1Uf0WYC",
          title: "Prius Plug In Hybrid",
          slug: "prius plug in hybrid",
        },
        {
          _id: "Ngk3DKj80csm2-Uit76LH",
          title: "Prius Prime Hybrid",
          slug: "prius prime hybrid",
        },
        {
          _id: "GB-FRFLI7rRW1eYxkq6qm",
          title: "Prius v",
          slug: "prius v",
        },
        {
          _id: "uXmqrRf3CgWAgXVI3ib1O",
          title: "RAV4",
          slug: "rav4",
        },
        {
          _id: "47AdgRM_aTUZiESbB52GS",
          title: "RAV4 Hybrid",
          slug: "rav4 hybrid",
        },
        {
          _id: "5_1RQ-98HAc-uaDqDDojW",
          title: "RAV4 Prime Plug-In",
          slug: "rav4 prime plug-in",
        },
        {
          _id: "9DvP-X6I3O9gJHfM49cOc",
          title: "Sequoia",
          slug: "sequoia",
        },
        {
          _id: "1S5F3mLw0dwncPxnkYODf",
          title: "Sienna",
          slug: "sienna",
        },
        {
          _id: "LEVdBK4eIIur6xpwJBGEC",
          title: "Sienna Hybrid",
          slug: "sienna hybrid",
        },
        {
          _id: "q5hxmzPSF0Ks7qVHJ6GJa",
          title: "Supra",
          slug: "supra",
        },
        {
          _id: "rVDHC1Qjy_jzRooTz-25B",
          title: "Tacoma",
          slug: "tacoma",
        },
        {
          _id: "GkMQYZUrEfsFg8-V6qSZ8",
          title: "Tundra",
          slug: "tundra",
        },
        {
          _id: "gYNzjX0-CQksi-ltjDjAy",
          title: "Venza",
          slug: "venza",
        },
        {
          _id: "ehcb0naL9S5JkM9XxvCa4",
          title: "Venza Hybrid",
          slug: "venza hybrid",
        },
        {
          _id: "VLWE4RCNzKIOi5LV9NMyp",
          title: "Yaris",
          slug: "yaris",
        },
        {
          _id: "RlQ5Vyo9TWgvikjJpIrZF",
          title: "Yaris iA",
          slug: "yaris ia",
        },
      ],
    },
    {
      _id: "WYXOozT5E5IamJYPe82jx",
      make_name: "Audi",
      models: [
        {
          _id: "ZN2ZcJNWXo6jsVqdrmAYM",
          title: "A3",
          slug: "a3",
        },
        {
          _id: "1c--AYr5_XHgTUMYeJUXT",
          title: "A3 Plug-in Hybrid",
          slug: "a3 plug-in hybrid",
        },
        {
          _id: "V-UIyYT8vrj8bIzpH_N-5",
          title: "A4",
          slug: "a4",
        },
        {
          _id: "ZpNOVOnELNOzeWZaNRaUe",
          title: "A5",
          slug: "a5",
        },
        {
          _id: "Gn6nYzTbyu9NeTcn9AkN7",
          title: "A5 Sportback",
          slug: "a5 sportback",
        },
        {
          _id: "VS6fvHIZn1me7AMTnXp8i",
          title: "A6",
          slug: "a6",
        },
        {
          _id: "ETG22U1HcryJdZFnBLR_H",
          title: "A7",
          slug: "a7",
        },
        {
          _id: "onRjMG0BlrZKgzKkPdMwK",
          title: "A8",
          slug: "a8",
        },
        {
          _id: "tpdsu69jE5DdxIweTX-Rv",
          title: "Allroad",
          slug: "allroad",
        },
        {
          _id: "As30xltu8bPUeDteb6bnz",
          title: "e-tron",
          slug: "e-tron",
        },
        {
          _id: "rX71Z207WzneCqjKgsw-y",
          title: "e-tron Sportback",
          slug: "e-tron sportback",
        },
        {
          _id: "awF3hQV04G5eY1VxkxBO9",
          title: "Q3",
          slug: "q3",
        },
        {
          _id: "cwlFn-SxONQoCWfihmNZP",
          title: "Q5",
          slug: "q5",
        },
        {
          _id: "QNHhBRyFKoZZ-ISORofFY",
          title: "Q5 Plug-in Hybrid",
          slug: "q5 plug-in hybrid",
        },
        {
          _id: "1UbRwMo9FSMuQZsOO9TwG",
          title: "Q5 Sportback",
          slug: "q5 sportback",
        },
        {
          _id: "63BU1vdklyMjMfvu6j62U",
          title: "Q7",
          slug: "q7",
        },
        {
          _id: "QrZ8NjtMEfmDd1Hcag86g",
          title: "Q8",
          slug: "q8",
        },
        {
          _id: "LA6VytuQ8x2XWDAxFKwN6",
          title: "RS3",
          slug: "rs3",
        },
        {
          _id: "WV1jgaMy4nM5H_yKef8wq",
          title: "RS5",
          slug: "rs5",
        },
        {
          _id: "HLXfslV0nCHaEZQk_ZULV",
          title: "S3",
          slug: "s3",
        },
        {
          _id: "ZmBoRiiWG-zr_2Cui0TuR",
          title: "S4",
          slug: "s4",
        },
        {
          _id: "xVh81_Z05D-OEjJCIKz02",
          title: "S5",
          slug: "s5",
        },
        {
          _id: "xRaoqBbTtmik38jAtmiJP",
          title: "S6",
          slug: "s6",
        },
        {
          _id: "i_KtFw149nQNrL2Koip52",
          title: "S7",
          slug: "s7",
        },
        {
          _id: "AbpYIrq5FYGSXwHiwGtQV",
          title: "S8",
          slug: "s8",
        },
        {
          _id: "gZojvOVccrzu4PdZmZn5y",
          title: "SQ5",
          slug: "sq5",
        },
        {
          _id: "woDbJKiYqrGQEYtpjJFF-",
          title: "TT",
          slug: "tt",
        },
        {
          _id: "lY_f7D_M6-OW6yyyorzHn",
          title: "TTS",
          slug: "tts",
        },
      ],
    },
    {
      _id: "YQgZD03XvPilvvMzsWXM9",
      make_name: "BMW",
      models: [
        {
          _id: "t1suaMcJ8vSwqXJbxAvc1",
          title: "128",
          slug: "128",
        },
        {
          _id: "I4939NVM9uF3tt3knt5Je",
          title: "135",
          slug: "135",
        },
        {
          _id: "sWfZhULFqeMR-FP2KVegl",
          title: "228",
          slug: "228",
        },
        {
          _id: "H_ZDnWT3khNMhSo3QWQak",
          title: "230",
          slug: "230",
        },
        {
          _id: "0U8sURN-47MLRWIELdAsx",
          title: "320",
          slug: "320",
        },
        {
          _id: "zGMAT4Ho0pYYsUJ7I9unT",
          title: "328",
          slug: "328",
        },
        {
          _id: "myOZkSub9XJBW7YeF_aNP",
          title: "330",
          slug: "330",
        },
        {
          _id: "-OoncFnQhADNlbqyImgnW",
          title: "330 Plug In Hybrid",
          slug: "330 plug in hybrid",
        },
        {
          _id: "F8Nk0kQA5ggZ1CsuhoGC6",
          title: "335",
          slug: "335",
        },
        {
          _id: "1PHAt_IIYWHsw7aX1z8wv",
          title: "340",
          slug: "340",
        },
        {
          _id: "rp_6AHjbNpw-ffsZIpHax",
          title: "428",
          slug: "428",
        },
        {
          _id: "Pz4lBNW3JHprVmLtSBicU",
          title: "430",
          slug: "430",
        },
        {
          _id: "VjIN350zpjsYWJU_JnRIC",
          title: "435",
          slug: "435",
        },
        {
          _id: "EopoLMcEc9HLGSnhswhzx",
          title: "440",
          slug: "440",
        },
        {
          _id: "QDQplh1jgNPbUX4PgywSH",
          title: "528",
          slug: "528",
        },
        {
          _id: "AM94uPEX0R7cXPaC8TBOu",
          title: "530",
          slug: "530",
        },
        {
          _id: "JVIq_5zE2dJd8PSR0QZIv",
          title: "530e Plug-in Hybrid",
          slug: "530e plug-in hybrid",
        },
        {
          _id: "Wr6YR1gCB5WUe5N3E9mfo",
          title: "535",
          slug: "535",
        },
        {
          _id: "Oii35Dh7PBhcaqO2wmpVI",
          title: "540",
          slug: "540",
        },
        {
          _id: "O7LFY40_SspKtN7JsHeWJ",
          title: "550",
          slug: "550",
        },
        {
          _id: "aTB4DhHEXlenm3LFLzlqh",
          title: "640",
          slug: "640",
        },
        {
          _id: "jE-Y8pDDyqr46HCwlRE7J",
          title: "650",
          slug: "650",
        },
        {
          _id: "dBvU3OAMM9C22dvo_e-8t",
          title: "740",
          slug: "740",
        },
        {
          _id: "ifByNo9wtUTPO791cYWIH",
          title: "750",
          slug: "750",
        },
        {
          _id: "IcAbsVOvMW7I9sYF2UuKE",
          title: "760",
          slug: "760",
        },
        {
          _id: "kXmu1T91NmrCieZ016tg2",
          title: "840",
          slug: "840",
        },
        {
          _id: "5LdtETZGGTZDlz7iycFFT",
          title: "I3",
          slug: "i3",
        },
        {
          _id: "3XCcKv3B4_I_EUjsDTX9u",
          title: "M2",
          slug: "m2",
        },
        {
          _id: "5ouYEzUl2w4-HZEi7OzVe",
          title: "M235",
          slug: "m235",
        },
        {
          _id: "tX1sylEHNKvUgUlexpc1u",
          title: "M240",
          slug: "m240",
        },
        {
          _id: "dum_ZrblWSQMFfVdsYzmL",
          title: "M3",
          slug: "m3",
        },
        {
          _id: "LvlLwI0-It6nFCw_ozmf7",
          title: "M340",
          slug: "m340",
        },
        {
          _id: "w-tq9MWcW-FjdtATDgd4d",
          title: "M4",
          slug: "m4",
        },
        {
          _id: "vtdhD09PteZTVDc6zSn8K",
          title: "M440",
          slug: "m440",
        },
        {
          _id: "Ej8jIo8XS6d9Y22O1pq9Q",
          title: "M5",
          slug: "m5",
        },
        {
          _id: "s2RbxLuBF02gnXzx-zzi7",
          title: "M550",
          slug: "m550",
        },
        {
          _id: "wtnNbpFRp930cWYL3rLOX",
          title: "M6",
          slug: "m6",
        },
        {
          _id: "6l0a15GLJZBFbNEQkzbKf",
          title: "M760",
          slug: "m760",
        },
        {
          _id: "oV3SpqShyK-kJ6SYZLvUx",
          title: "M850",
          slug: "m850",
        },
        {
          _id: "hCzIT9npjtjwnO837oseW",
          title: "X1",
          slug: "x1",
        },
        {
          _id: "eIxaP5E0vHvF3FR64hqyg",
          title: "X2",
          slug: "x2",
        },
        {
          _id: "4TD6SaCGcE5LoHGTNN6Ne",
          title: "X3",
          slug: "x3",
        },
        {
          _id: "qe7dnH1H4yRjOsCYigqAA",
          title: "X3 Plug In Hybrid",
          slug: "x3 plug in hybrid",
        },
        {
          _id: "T3cX4Rv087EIkGhLp38By",
          title: "X4",
          slug: "x4",
        },
        {
          _id: "B6r8MfhSaybzrNhNAnM7c",
          title: "X5",
          slug: "x5",
        },
        {
          _id: "788AXFx8onC2Z2_lW7Hry",
          title: "X5 Plug In Hybrid",
          slug: "x5 plug in hybrid",
        },
        {
          _id: "QMvUUzNQtLKki7bX-Eeja",
          title: "X6",
          slug: "x6",
        },
        {
          _id: "h3gqD1GHdzZysFztZz2eg",
          title: "X7",
          slug: "x7",
        },
        {
          _id: "36apaPSPPXs5khVzPQNko",
          title: "Z4",
          slug: "z4",
        },
      ],
    },
    {
      _id: "IJb2ff-bS_V5OcbRIGTFl",
      make_name: "Honda",
      models: [
        {
          _id: "y-IgroFikicj5nMia_-5V",
          title: "Accord",
          slug: "accord",
        },
        {
          _id: "LdTR63R_ze90curPity2i",
          title: "Accord CrossTour",
          slug: "accord crosstour",
        },
        {
          _id: "0cShyDt3a3zLeyjfZjG8y",
          title: "Accord Hybrid",
          slug: "accord hybrid",
        },
        {
          _id: "xnyECZLT1TYf240twpiym",
          title: "Civic",
          slug: "civic",
        },
        {
          _id: "X-a_Ahm-Ywkxfw9Uc5ILE",
          title: "Civic Hybrid",
          slug: "civic hybrid",
        },
        {
          _id: "_HQ-EsUxRu_40ARslI1H6",
          title: "Clarity Plug in Hybrid",
          slug: "clarity plug in hybrid",
        },
        {
          _id: "RTemDRTLxgFLJGSFCCSIq",
          title: "CR-V",
          slug: "cr-v",
        },
        {
          _id: "vS-Glh6NmfEyZJiShyN2w",
          title: "CR-V Hybrid",
          slug: "cr-v hybrid",
        },
        {
          _id: "WH2T_j3W5pda9zMz8k7VK",
          title: "CR-Z",
          slug: "cr-z",
        },
        {
          _id: "_bxiwdZoRiQm5mtrBlo25",
          title: "Fit",
          slug: "fit",
        },
        {
          _id: "i7meCTndgeE0W6NW0URZ-",
          title: "HR-V",
          slug: "hr-v",
        },
        {
          _id: "W-7G6Ukc6404HR-rJD1UO",
          title: "Insight",
          slug: "insight",
        },
        {
          _id: "_clfETF14r-zKndIK84HY",
          title: "Odyssey",
          slug: "odyssey",
        },
        {
          _id: "oaecrhAL5W9exIic7i0Xn",
          title: "Passport",
          slug: "passport",
        },
        {
          _id: "PhkbMGyzdO4qo7N1ccieT",
          title: "Pilot",
          slug: "pilot",
        },
        {
          _id: "17TnGEUW9fTOHpVrKxpUH",
          title: "Ridgeline",
          slug: "ridgeline",
        },
      ],
    },
    {
      _id: "ltNXr7cTURbrPbNZ44EWI",
      make_name: "Genesis",
      models: [
        {
          _id: "yQMZZUdgDetgEv_TpLHdp",
          title: "G70",
          slug: "g70",
        },
        {
          _id: "p5stLIkVm7l2ep_wPFuas",
          title: "G80",
          slug: "g80",
        },
        {
          _id: "ALYmc25JY0XZgrtVEX-ev",
          title: "GV70",
          slug: "gv70",
        },
        {
          _id: "1ojdFsj0GsLLrwIEw65ug",
          title: "GV80",
          slug: "gv80",
        },
      ],
    },
  ];

  const [active, setActive] = React.useState(0);
  const dispatch = useAppDispatch();
  let { cars, carFilter, filterTotal, isLoading } = useAppSelector(
    (state) => state.car
  );

  let { models } = useAppSelector((state) => state.model);

  let { makes, makeOptions } = useAppSelector((state) => state.make);

  let makeOptionsPayload = makes.map((make) => ({
    value: make.slug,
    label: make.title,
  }));

  const modelOptions = models.map((model) => ({
    collection_name: model.make_name,
    options: model.models.map((model) => ({
      value: model.slug,
      label: model.title,
    })),
  }));

  const [makeToggled, setMakeToggled] = React.useState(true);
  const [modelToggled, setModelToggled] = React.useState(false);

  const makeCloseHandleOperation = (makes: string[]) => {
    dispatch(getModels({ makes: makes }));
    dispatch(getCars({ makes }));
    if (makes.length > 0) {
      setModelToggled(true);
    } else {
      setModelToggled(false);
    }
  };

  const makeOpenHandleOperation = (setSelect) => {
    setModelToggled(false);
    setSelect([]);
  };

  const modelCloseHandleOperation = (models: string[]) => {
    dispatch(getCars({ models, makes: carFilter.makes }));
    setMakeToggled(true);
  };

  const modelOpenHandleOperation = () => {
    setMakeToggled(false);
  };
  const locationHandleOperation = (locations: string[]) => {
    // dispatch(getCars({ locations }));
  };

  useEffect(() => {
    dispatch(getMakes());
    // console.log(modelOptions);
  }, [dispatch]);

  useEffect(() => {
    let makeOptionsPayload = makes.map((make) => ({
      value: make.slug,
      label: make.title,
    }));
    dispatch(setMakeOptions(makeOptionsPayload));
  }, [makes]);

  return (
    <div className="font-roboto">
      <div className="relative mb-10">
        <div
          className="top-0 w-full h-[21.625rem] sm:h-[29.875rem] bg-cover bg-center bg-no-repeat flex justify-center md:justify-center "
          style={{
            backgroundImage: `url("assets/heroimage.svg")`,
          }}
        >
          <div className="md:grid md:grid-cols-2 w-[70.97%] sm:mb-16">
            <div className="flex  text-white flex-col justify-start md:justify-center md:pt-0 pt-11 ">
              <h1 className="md:text-[3.6875rem] text-[1.75rem] font-extrabold leading-[1.9375rem] md:leading-[3.75rem] mb-3 tracking-[-0.01em]">
                Drive away in your dream car today
              </h1>
              <p className="md:text-[1.25rem]  md:leading-[1.9375rem] leading-[1.5rem] tracking-[-0.01em]">
                We offer a wide selection of used cars, we’re confident you’ll
                find the perfect vehicle at our store
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className="absolute top-[19.5rem]  flex justify-center w-full md:hidden ">
          <div className="bg-white px-4 pt-4 pb-8 shadow-card rounded-[4px] w-[89.33%]">
            <div className="flex mb-4 border-b border-b-[#D1D1D1]">
              <div
                className="px-9 pb-3 cursor-pointer"
                onClick={() => setActive(0)}
              >
                <h2 className="text-[1.125rem] font-bold">Buy a Car</h2>
              </div>
              <div
                className="px-9 pb-3 cursor-pointer"
                onClick={() => setActive(1)}
              >
                <h2 className="text-[1.125rem]">Sell a Car</h2>
              </div>
            </div>
            <motion.div
              animate={{ x: active === 1 ? 160 : 0 }}
              className="h-[2px] bg-red-700 w-[50%] relative bottom-[1.1rem] rounded-md"
            ></motion.div>
            {active === 0 ? (
              <div>
                <div className="mb-3">
                  <MultiSelect
                    placeHolder="Select Make"
                    payloadOptions={makeOptionsPayload}
                    options={makeOptions}
                    handleOpenOperation={makeOpenHandleOperation}
                    handleCloseOperation={makeCloseHandleOperation}
                  />
                </div>
                <div className="mb-3">
                  <MultiMultiSelect
                    placeHolder="Select Model"
                    isDisabled={!modelToggled}
                    fieldOptions={modelOptions}
                    handleCloseOperation={modelCloseHandleOperation}
                    handleOpenOperation={modelOpenHandleOperation}
                  />
                </div>
                <div className="mb-6">
                  <MultiSelect
                    placeHolder="Select Location"
                    options={makeOptions}
                    handleCloseOperation={makeCloseHandleOperation}
                  />
                </div>
                <button className="bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]">
                  <AiOutlineSearch className="mr-3 text-[1.5rem]" />
                  Search all 22 cars
                </button>
              </div>
            ) : (
              <div>
                <p className="mb-[1.1rem] mt-2 text-lg leading-[1.9375rem] font-light text-black tracking-[-0.01em]">
                  Get an instant offer and a fast payment on handover day when
                  you sell outright.
                </p>
                <button className="bg-black text-white h-[48px] px-4 rounded-[4px] w-full">
                  Start Valuation
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-[21rem]  md:flex justify-center w-full hidden h-[13.25rem] ">
          <div className="  md:flex justify-center w-[70.97%] ">
            <div className="flex bg-white p-6 rounded-[3px] shadow-bigCard">
              <div className="flex-4 mr-8">
                <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] mb-4">
                  Buy car
                </h2>
                <div className="flex  relative bottom-[10rem] justify-between mb-6">
                  <MultiSelect
                    placeHolder="Select Make"
                    payloadOptions={makeOptionsPayload}
                    options={makeOptions}
                    isDisabled={!makeToggled}
                    handleCloseOperation={makeCloseHandleOperation}
                    handleOpenOperation={makeOpenHandleOperation}
                  />
                  <MultiMultiSelect
                    placeHolder="Select Model"
                    isDisabled={!modelToggled}
                    fieldOptions={modelOptions}
                    handleCloseOperation={modelCloseHandleOperation}
                    handleOpenOperation={modelOpenHandleOperation}
                  />
                  <MultiSelect
                    placeHolder="Select Location"
                    payloadOptions={makeOptionsPayload}
                    options={makeOptions}
                    isDisabled={!makeToggled}
                    handleCloseOperation={makeCloseHandleOperation}
                    handleOpenOperation={makeOpenHandleOperation}
                  />
                </div>
                <button
                  className={`${
                    filterTotal === 0 ? "" : "relative bottom-[17.35rem]"
                  } bg-specialRed w-full text-white font-semibold rounded-[4px] flex items-center justify-center h-[3rem]`}
                >
                  {!isLoading ? (
                    <AiOutlineSearch className="mr-3 text-[1.5rem]" />
                  ) : (
                    <Spinner />
                  )}
                  Search all {cars.length} cars
                </button>
              </div>
              <div className="flex-2 text-[#212121] ">
                <h2 className="font-bold text text-[1.5rem] leading-[1.75rem] tracking-[-0.01em]">
                  Sell car
                </h2>
                <p className="mb-[1.1rem] mt-2 text-lg leading-[1.9375rem] font-light text-black tracking-[-0.01em]">
                  Get an instant offer and a fast payment on handover day when
                  you sell outright.
                </p>
                <button className="bg-black text-white h-[48px] px-4 rounded-[4px] w-[12.1875rem]">
                  Start Valuation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
