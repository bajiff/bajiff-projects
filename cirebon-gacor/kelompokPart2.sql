-- Membuat DB
CREATE DATABASE KampusGacor;

-- Gunakan DB tersebut
USE KampusGacor;

-- Create tabel Jurusan
CREATE TABLE Jurusan(
jurusan_id INT PRIMARY KEY AUTO_INCREMENT,
jurusan_name VARCHAR(100) NOT NULL
);

-- Buat tabel Fakultas
CREATE TABLE Fakultas(
fakultas_id INT PRIMARY KEY AUTO_INCREMENT,
fakultas_name VARCHAR(100) NOT NULL
);

-- Buat table Mahasiswa yang berelasi ke table Jurusan
CREATE TABLE Mahasiswa(
nim CHAR(10) PRIMARY KEY,
mahasiswa_name VARCHAR(100) NOT NULL,
jurusan_id INT,
fakultas_id INT,
FOREIGN KEY (fakultas_id) REFERENCES Fakultas(fakultas_id),
FOREIGN KEY (jurusan_id) REFERENCES Jurusan(jurusan_id)
);


INSERT INTO Mahasiswa (nim, mahasiswa_name) VALUES (230511091,'Baji Gacor');


ALTER TABLE Mahasiswa add jenis_kelamin ENUM('L','P') NOT NULL AFTER mahasiswa_name;



-- Mencari mahasiswa yang mengandung nama "cor"
SELECT * FROM Mahasiswa WHERE mahasiswa_name LIKE %cor%;

-- Mencari mahasiswa dengna NIM antara 230511090 dan 230511099
SELECT * FROM Mahasiswa WHERE nim BETWEEN 230511090 AND 230511099;


-- Menampilkan Jumlah Mahasiswa PerJurusan
SELECT j.jurusan_name, COUNT(m.nim) AS jml_mhs
FROM Mahasiswa m
JOIN Jurusan j ON m.jurusan_id = j.jurusan_id
GROUP BY j.jurusan_name;



-- Menampilkan Struktur Tabel
DESC Mahasiswa;


-- Menampilkan isi Tabel
SELECT * FROM Mahasiswa;


DROP TABLE Mahasiswa;
