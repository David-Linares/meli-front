import { Header } from "../../molecules/header/header.component";
import { ResultItems } from "../../organisms/Resultitems/result-items";
import { Breadcrumb } from "../../molecules/Breadcrumb/breadcrumb.component";
import { useState } from "react";

export function ResultItemsPage() {
  const [resultData, setResultData] = useState({
    author: {
      name: "David",
      lastname: "Linares",
    },
    categories: [
      {
        id: "MLA1000",
        name: "Electrónica, Audio y Video",
      },
      {
        id: "MLA409810",
        name: "Audio",
      },
      {
        id: "MLA431428",
        name: "Reproductores Portátiles",
      },
      {
        id: "MLA7262",
        name: "iPod",
      },
    ],
    items: [
      {
        id: "MLA804207882",
        title: "iPod Touch 32 Gb  ",
        price: {
          currency: "ARS",
          amount: 34999,
          decimals: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_677004-MLA31971773611_082019-O.jpg",
        condition: "new",
        free_shipping: true,
        address: "Capital Federal",
      },
      {
        id: "MLA804207795",
        title: "iPod Touch 32 Gb  representante Oficial De Apple ",
        price: {
          currency: "ARS",
          amount: 42999,
          decimals: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_684489-MLA32011256128_082019-O.jpg",
        condition: "new",
        free_shipping: true,
        address: "Santa fé",
      },
      {
        id: "MLA908598551",
        title: "iPod Classic 160gb Black Usado",
        price: {
          currency: "ARS",
          amount: 12500,
          decimals: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_816323-MLA44908748208_022021-I.jpg",
        condition: "used",
        free_shipping: false,
        address: "Santa fé",
      },
      {
        id: "MLA896323509",
        title: "iPod Touch 4g De 32gb Con Ios6.1.6-no Envios",
        price: {
          currency: "ARS",
          amount: 3700,
          decimals: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_841349-MLA44024162954_112020-O.jpg",
        condition: "used",
        free_shipping: false,
        address: "Buenos Aires",
      },
    ],
  });

  return (
    <>
      <Header></Header>
      <Breadcrumb />
      <ResultItems items={resultData.items}></ResultItems>
    </>
  );
}
