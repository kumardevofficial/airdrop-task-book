import React, { useState, useEffect } from "react";
import DropListBox from "./DropListBox";
import "../App.css";
import ChangeSegment from "./ChangeSegment";
import DropListGalxe from "./DropListGalxe";
import DropListTodo from "./DropListTodo";
import DropListWaitlist from "./DropListWaitlist";
import axios from "axios";
import PopUpBox from "./Popup";

const DropList = () => {
  const [segments, setSegments] = useState(0);
  const [airdropList, setAirdropList] = useState([]);
  const [galxeAirdropList, setGalxeAirdropList] = useState([]);
  const [waitlistAirdropList, setWaitlistAirdropList] = useState([]);
  const [showPopup, setShowPopup] = useState({
    thepopupu: false,
    discription: "",
    popUpTaskLink: "",
  });

  const changeSegments = (value) => {
    setSegments(value);
  };

  // useEffect(() => {
  //   console.log("Updated airdropList:", airdropList);
  // }, [airdropList]);

  const getData = async () => {
    await axios
      .get("https://airdroptaskbook-server.vercel.app/project/all-project")
      .then((response) => {
        setAirdropList(response.data);
      })
      .catch((err) => {
        console.log(`there is some error${err}`);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const getGalxeData = async () => {
    await axios
      .get("https://airdroptaskbook-server.vercel.app/project/all-project")
      .then((response) => {
        setGalxeAirdropList(response.data);
      })
      .catch((err) => {
        console.log(`there is some error${err}`);
      });
  };

  useEffect(() => {
    getGalxeData();
  }, []);

  const getWaitlistData = async () => {
    await axios
      .get(
        "https://airdroptaskbook-server.vercel.app/waitlistairdrop/showwaitlistairdrop"
      )
      .then((response) => {
        setWaitlistAirdropList(response.data);
      })
      .catch((err) => {
        console.log(`there is some error${err}`);
      });
  };

  useEffect(() => {
    getWaitlistData();
  }, []);

  // const dropLists = [
  //   {
  //     projectName: "Genesis",
  //     postUrl: "https://genesis.chainbase.com/",
  //     postImage:
  //       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn5jMqbbIM4Z2WSqLDwvUtaJ1zNmLG1d6vOUt5fp6MZXHpWs59Ee-SOzVhDBDbIPEd6CtmYF7JgAIQMHSxWrcrPDgjZn-f_l45L_-7M0R51sukAtZSmV7vF7KpcsPkzj7RE4Jo0ZY5TC3upHn-CKw48mzi_9PIK-eIlAgC042przH_tSETg16pEUUsx_I/s1600/download%20(4).png",
  //   },
  //   {
  //     projectName: "Omni",
  //     postUrl: "https://omni.testnet.variational.io/perpetual/1INCH",
  //     postImage:
  //       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbJSRPpbcKtwKATxsrQb29YAdcTeHU_FbvTcgsmjG5_mHHzcLOi17anu9n2AsP5ScmtCTHLP3YY4vcz0vtGpIXDzm_mDPt_7JPj1zp7nnrdvKYl1aYeeOCzmXYwN8LdpmDM_PhVORaf533u3446EUemf1YTfYTev_K1lTluvaZgNvEk0aCKYlYPbof3Bw/s1600/download%20(5).png",
  //   },
  //   {
  //     projectName: "Krain",
  //     postUrl: "https://airdrop.krain.ai/",
  //     postImage:
  //       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgu8xlQ0j_WXlGljDY_dmAxDGpdt_Djc8kY2KBdh0XcI8s37agF_4ZkKRJ8Ci2f0o02xUG31R_v6w8U7CzzQtUIxsu0LKsmWruUWML6jpBlJl0kwZS16H0yzZPhVPwTyPy7EAsbEL2zMl1_M-LoOKajigyeTVFYwL8aYZNFvFHP0lEoBmjc6-uya0fPmD0/s1600/download.jpeg",
  //   },
  //   {
  //     projectName: "GoPlusLabs",
  //     postUrl: "https://app.gopluslabs.io/",
  //     postImage:
  //       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTC5ofjifKtloEB4utV3GWrIX8Fz9QdffyBZ-qumxfdHKboSU2QnAi6NY0cgChQVc5HxP_jgPs6-UUsPLWthd10xoRvCJMnWyxVxwvJnMR-G_70zICUDY6WO-eydezV6ZL5llKYxTbSTB8x7TfbxjLgGbdJfd7stDAh5wGebIAtiM_v6FjtX9JePlL-XE/s1600/download%20(6).png",
  //   },
  //   {
  //     projectName: "ChainOpera",
  //     postUrl: "https://chainopera.ai/",
  //     postImage:
  //       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiErodH41pDjEugd1ywiaLzzrR5_gog_ZOv2U3ujFPFZ3n5JEpeAfxbrl75JUOSa6bugs3Z_Ms_cUePKtiYFFBVLMlIjV7L5VfPZHXIJz8C-oZnA-HynS8hPzjzpNrWLFyiI220AEhwnSKpXQ_P4ZbmSmDwngIN85VdpROADH_xUdJyruRgHvTSWXoa5jU/s1600/download%20(7).png",
  //   },
  // ];

  // const drogalxelist = [
  //   {
  //     projectName: "Genesis",
  //     postUrl: "https://genesis.chainbase.com/",
  //     postImage:
  //       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn5jMqbbIM4Z2WSqLDwvUtaJ1zNmLG1d6vOUt5fp6MZXHpWs59Ee-SOzVhDBDbIPEd6CtmYF7JgAIQMHSxWrcrPDgjZn-f_l45L_-7M0R51sukAtZSmV7vF7KpcsPkzj7RE4Jo0ZY5TC3upHn-CKw48mzi_9PIK-eIlAgC042przH_tSETg16pEUUsx_I/s1600/download%20(4).png",
  //   },
  // ];

  // const dropwaitlist = [
  //   {
  //     projectName: "Genesis",
  //     postUrl: "https://genesis.chainbase.com/",
  //     postImage:
  //       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn5jMqbbIM4Z2WSqLDwvUtaJ1zNmLG1d6vOUt5fp6MZXHpWs59Ee-SOzVhDBDbIPEd6CtmYF7JgAIQMHSxWrcrPDgjZn-f_l45L_-7M0R51sukAtZSmV7vF7KpcsPkzj7RE4Jo0ZY5TC3upHn-CKw48mzi_9PIK-eIlAgC042przH_tSETg16pEUUsx_I/s1600/download%20(4).png",
  //   },
  // ];

  const droptodolist = [
    {
      projectName: "Genesis",
      postUrl: "https://genesis.chainbase.com/",
      postImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn5jMqbbIM4Z2WSqLDwvUtaJ1zNmLG1d6vOUt5fp6MZXHpWs59Ee-SOzVhDBDbIPEd6CtmYF7JgAIQMHSxWrcrPDgjZn-f_l45L_-7M0R51sukAtZSmV7vF7KpcsPkzj7RE4Jo0ZY5TC3upHn-CKw48mzi_9PIK-eIlAgC042przH_tSETg16pEUUsx_I/s1600/download%20(4).png",
    },
  ];

  // console.log(airdropList.tasks);
  return (
    <>
      <ChangeSegment changeSeg={changeSegments} />

      {segments === 0 ? (
        <div className="w-[98%] m-auto mt-[2%] grid-cols-1 grid md:grid-cols-4 grid-rows-3 place-items-center items-start gap-y-7 gap-x-3">
          {airdropList.map((item, index) => (
            <DropListBox
              index={index}
              itemData={item}
              taskArray={item.tasks}
              popUpDisplay={showPopup.thepopupu}
              popUpDis={showPopup.discription}
              setShowPopup={setShowPopup}
            />
          ))}
        </div>
      ) : segments === 1 ? (
        <div className="w-[98%] m-auto mt-[2%] grid grid-cols-5 grid-rows-3 justify-center items-center">
          {galxeAirdropList.map((item, index) => (
            <DropListGalxe key={index} itemData={item} itemIndex={index} />
          ))}
        </div>
      ) : segments === 2 ? (
        <div className="w-[98%] m-auto mt-[2%] grid grid-cols-5 grid-rows-3 justify-center items-center">
          {" "}
          {waitlistAirdropList.map((item, index) => (
            <DropListWaitlist key={index} itemData={item} itemIndex={index} />
          ))}
        </div>
      ) : segments === 3 ? (
        droptodolist.map((item, index) => (
          <DropListTodo key={index} itemData={item} itemIndex={index} />
        ))
      ) : null}

      <PopUpBox itemData={showPopup} setShowPopup={setShowPopup} />
    </>
  );
};

export default DropList;
