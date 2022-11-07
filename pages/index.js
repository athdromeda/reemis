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

export default function Home({ santris }) {
  return (
    <div>
      <Head>
        <title>ReEMIS PDPontren</title>
        <meta name="description" content="EMIS PDPontren Kemenag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />

      <main>
        <ControlledTabs data={santris} />
      </main>
    </div>
  );
}

function ControlledTabs({ data }) {
  const [selected, setSelected] = useState(0);
  const [key, setKey] = useState(1);
  const [formData, setFormData] = useState({});

  const handlePost = async () => {
    
    await fetch("/api/postData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const handleData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      justify
    >
      <Tab eventKey={1} title="1 - Data Diri">
        <Tab1
          setSelected={setSelected}
          selectedId={selected}
          dataRaw={data}
          toTab={setKey}
          handleData={handleData}
        />
      </Tab>
      <Tab eventKey={2} title="2 - Data Ibu">
        <Tab2 toTab={setKey} handleData={handleData} />
      </Tab>
      <Tab eventKey={3} title="3 - Data Ayah">
        <Tab3 toTab={setKey} handleData={handleData} />
      </Tab>
      <Tab eventKey={4} title="4 - Data Wali">
        <Tab4 toTab={setKey} handleData={handleData} />
      </Tab>
      <Tab eventKey={5} title="5 - Alamat">
        <Tab5
          toTab={setKey}
          handleData={handleData}
          submitData={() => handlePost()}
        />
      </Tab>
    </Tabs>
  );
}

export async function getServerSideProps() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "Form Responses 1",
    });

    const rows = response.data.values;
    if (rows.length) {
      return {
        props: {
          santris: rows.map((row) => ({
            no: row[0],
            name: row[2],
            gender: row[3],
            birthPlace: row[4],
            birthDate: row[5],
            ortuName: row[12],
            ortuTelp: row[14],
          })),
        },
      };
    }
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      santris: "rows",
    },
  };
}
