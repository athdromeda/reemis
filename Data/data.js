import * as Yup from "yup";

export const DropdownOptions = {
  hobi: [
    "Olahraga",
    "Kesenian",
    "Membaca",
    "Menulis",
    "Jalan-jalan",
    "Lainnya",
  ],
  statusRumah: [
    "Tinggal dengan Orangtua/Wali",
    "Ikut Saudara/Kerabat",
    "Kontrak/Kost",
    "Rumah Singgah",
    "Panti Asuhan",
    "Asrama bukan milik lembaga",
    "Asrama milik lembaga",
    "Lainnya",
  ],
  kebutuhanKhusus: [
    "Tidak Ada",
    "Tuna Netra",
    "Tuna Rungu",
    "Tuna Grahita",
    "Tuna Daksa",
    "Tuna Laras",
    "Tuna Wicara",
    "Bakat Istimewa",
    "Kesulitan Belajar",
  ],
  citaCita: [
    "PNS",
    "TNI/Polri",
    "Guru/Dosen",
    "Dokter",
    "Politikus",
    "Wiraswasta",
    "Seniman/Artis",
    "Ilmuwan",
    "Agamawan",
    "Lainnya",
  ],
  pendidikan: [
    "Tidak memiliki pendidikan formal",
    "SD/MI/Sederajat",
    "SMP/MTs/Sederajat",
    "SMA/MA/Sederajat",
    "D1",
    "D2",
    "D3",
    "D4/S1",
    "S2",
    "S3",
  ],
  penghasilan: [
    "Tidak berpenghasilan",
    "Kurang dari 500.000",
    "Rp. 500.001 - Rp. 1.000.000",
    "Rp. 1.000.001 - Rp. 2.000.000",
    "Rp. 2.000.001 - Rp. 3.000.000",
    "Rp. 3.000.001 - Rp. 4.000.000",
    "Rp. 4.000.001 - Rp. 5.000.000",
    ">= Rp. 5.000.001",
  ],
  pekerjaan: [
    "Tidak bekerja",
    "Buruh (Tani/Pabrik/Bangunan)",
    "Dokter/Bidan/Perawat",
    "Guru/Dosen",
    "Nelayan",
    "Pedagang",
    "Pegawai Swasta",
    "Pengacara/Hakim/Jaksa/Notaris",
    "Pensiunan",
    "Petani/Peternak",
    "Pilot/Pramugara",
    "PNS",
    "Politikus",
    "Seniman/Pelukis/Artis/Sejenis",
    "Sopir/Masinis/Kondektur",
    "TNI/Polisi",
    "Wiraswasta",
    "Lainnya",
    "Tidak Mengisi",
  ],
  hubunganWali: ["Kakek/Nenek", "Paman/Bibi", "Kakak", "Lainnya"],
};

export const YupSchema = {
  name: Yup.string().required("Wajib diisi"),
  birthPlace: Yup.string().required("Wajib diisi"),
  nik: Yup.string()
    .length(16, "NIK berjumlah 16 digit")
    .required("Wajib diisi"),
  kk: Yup.string()
    .length(16, "No. KK berjumlah 16 digit")
    .required("Wajib diisi"),
  nisn: Yup.string()
    .length(10, "No. NISN berjumlah 10 digit")
    .required("Wajib diisi"),
  nism: Yup.string().length(18, "No. NISM berjumlah 18 digit"),
  kip: Yup.string().length(6, "No. KIP berjumlah 6 digit"),
  kks: Yup.string().length(6, "No. KKS berjumlah 6 digit"),
  pkh: Yup.string().length(6, "No. PKH berjumlah 15 digit"),
};

{
  /* [Nama, NIK, NISM, NISN, KIP, PKH, KKS, TTL, Jenis Kelamin, 
            Hobi, Cita, Kebutuhan Khusus, Status Mukim, WNA/WNI, No. Paspor,
            Nama Ibu, NIK, Telepon, Pekerjaan, Pendidikan, 
            Nama Ayah, NIK, KK, Telepon, Pekerjaan, Pendidikan, Rata Penghasilan,
            Nama Wali, Hubungan Wali, NIK, Pekerjaan, Rata Penghasilan,
            RT, RW, Alamat rinci, Provinsi, Kab/Kota, Kec., Pos
            ] 
            
            {
              no: "6/6/2021 11:42:26",
              name: "Muamanah xxxxx",
              gender: "Perempuan",
              birthPlace: "xxxxx",
              birthDate: "6/29/xxxxx",
              ortuName: "Sxxxxx",
              ortuTelp: "08xxxxxxx",
            },
            */
}
