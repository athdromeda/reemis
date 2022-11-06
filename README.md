<p align="center"><h1 align="center">ReEMIS</h1></p>
<p align="center">Santri's data inputting form for PDPontren Kemenag</p>
<p align="center">Built with ReactJS, NextJS, react-bootstrap, Formik</p> 
<hr>

## Why ReEMIS?
Inputting data can be done just using Google Form. But with ReEMIS you have more power to do with the data. You can deploy this project to your own hosting too!

## Features
Let's explore the feature:
- Form validation (with Formik + Yup), including name, NIK, NISN, KKS, KIP, and many more! 
- Reuse previous data

    If you have previous incompleted data (e.g. registration data) and you wanna reuse it for EMIS, you can setup the form just with ```.env.local``` that contain ```GOOGLE_SHEETS_PRIVATE_KEY```, ```GOOGLE_SHEETS_CLIENT_EMAIL```, and ```SPREADSHEET_ID```
- Deploy to Vercel / Netlify / your own


## Getting Started

To run the project on your local computer:
- Clone this repository

    ```git clone https://github.com/athdromeda/reemis```
- Install dependencies with ```pnpm install```, and 
- Run the development server with ```npm run dev```.
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

Go take a look at the following resources:
- [EMIS PD-Pontren](https://emispendis.kemenag.go.id/pdpontrenv2/) - EMIS PD-Pontren
- [PD-Pontren](https://ditpdpontren.kemenag.go.id/) - know more about PD-Pontren
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.