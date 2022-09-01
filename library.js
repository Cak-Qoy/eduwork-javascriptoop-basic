class Biodata {
    nama = ''
    umur = ''
    gender = ''

    constructor (nama, umur, gender) {
        this.nama = nama;
        this.umur = umur;
        this.gender = gender;
    }
}

let biodata1 = new Biodata('Abdul', '25', 'Laki-laki');
let biodata2 = new Biodata('Qoyyum', '25', 'Laki-laki');
let biodata3 = new Biodata('Sholica', '24', 'Perempuan');
let nama1 = document.getElementById('nama1');
let umur1 = document.getElementById('umur1');
let gender1 = document.getElementById('gender1');
let nama2 = document.getElementById('nama2');
let umur2 = document.getElementById('umur2');
let gender2 = document.getElementById('gender2');
let nama3 = document.getElementById('nama3');
let umur3 = document.getElementById('umur3');
let gender3 = document.getElementById('gender3');

nama1.textContent = biodata1.nama;
umur1.textContent = biodata1.umur;
gender1.textContent = biodata1.gender;
nama2.textContent = biodata2.nama;
umur2.textContent = biodata2.umur;
gender2.textContent = biodata2.gender;
nama3.textContent = biodata3.nama;
umur3.textContent = biodata3.umur;
gender3.textContent = biodata3.gender;