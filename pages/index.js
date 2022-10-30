import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Head from "next/head";
import TopNav from "../Components/TopNav";
import Tab1 from "../Tabs/Tab1";
import Tab2 from "../Tabs/Tab2";
import Tab3 from "../Tabs/Tab3";
import Tab4 from "../Tabs/Tab4";
import Tab5 from "../Tabs/Tab5";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ReEMIS PDPontren</title>
        <meta name="description" content="EMIS PDPontren Kemenag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />

      <main>
        <ControlledTabs />
      </main>
    </div>
  );
}

function ControlledTabs() {
  const [key, setKey] = useState("1");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      justify
    >
      <Tab eventKey="1" title="1 - Data Diri">
        <Tab1 />
        <Button onClick={()=>{setKey(2)}}>Lanjut</Button>
      </Tab>
      <Tab eventKey="2" title="2 - Data Ibu">
        <Tab2 />
        <Button onClick={()=>{setKey(3)}}>Lanjut</Button>
      </Tab>
      <Tab eventKey="3" title="3 - Data Ayah">
        <Tab3/>
        <Button onClick={()=>{setKey(4)}}>Lanjut</Button>
      </Tab>
      <Tab eventKey="4" title="4 - Data Wali">
        <Tab4/>
        <Button onClick={()=>{setKey(5)}}>Lanjut</Button>
      </Tab>
      <Tab eventKey="5" title="5 - Alamat">
        <Tab5/>
        <Button onClick={()=>{setKey(1)}}>Lanjut</Button>
      </Tab>
    </Tabs>
  );
}
