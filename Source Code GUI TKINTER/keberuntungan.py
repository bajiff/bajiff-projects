from tkinter import *
import random

def cek_keberuntungan():
    nama = entry_nama.get()
    if nama.strip() == "":
        hasil_label.config(text="Masukkan nama terlebih dahulu!", fg="black")
        return

    keberuntungan = random.randint(0, 100)

    if keberuntungan >= 80:
        emoji = "🌟"
        warna = "green"
        pesan = "Luar biasa! Ini hari keberuntungan Anda!"
    elif keberuntungan >= 50:
        emoji = "😊"
        warna = "orange"
        pesan = "Cukup baik, nikmati hari Anda!"
    else:
        emoji = "💫"
        warna = "red"
        pesan = "Tetap semangat, besok pasti lebih baik!"

    hasil_label.config(
        text=f"Halo {nama},\nKeberuntungan Anda hari ini: {keberuntungan}% {emoji}\n{pesan}",
        fg=warna
    )

# Jendela utama
root = Tk()
root.title("Cek Keberuntungan Hari Ini")
root.geometry("600x400")  # Ukuran awal

# Buat frame tengah
frame_tengah = Frame(root)
frame_tengah.pack(expand=True)  # Ini yang bikin selalu di tengah

# Widget di dalam frame
Label(frame_tengah, text="Masukkan Nama Anda:").pack(pady=10)
entry_nama = Entry(frame_tengah, font=("Arial", 11))
entry_nama.pack()

Button(frame_tengah, text="Cek Keberuntungan", command=cek_keberuntungan).pack(pady=10)

hasil_label = Label(frame_tengah, text="", justify="center", font=("Arial", 11))
hasil_label.pack(pady=10)

root.mainloop()