export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET request are allowed!" });
  }

  try{
    const {locs} = req.query
    const baseUrl = 'https://emsifa.github.io/api-wilayah-indonesia/api/';
    const response = await fetch(baseUrl + locs.join('/') + '.json');
    const data = await response.json()

    return res.status(200).json({data});
  }catch(e){
    console.log("logs")
    return res.status(500).send({message: e.message + ' Oops.. Something wrong! by /...locs'})
  }
}
