import tkinter as tk
from tkinter import messagebox

# Fungsi tombol
def klik_tombol():
    hasil_label.config(text=f"Halo, {entry_nama.get()}!")

def tampil_pesan():
    messagebox.showinfo("Info", "Ini adalah pesan informasi")

# Buat jendela utama
root = tk.Tk()
root.title("Contoh Komponen GUI Tkinter")
root.geometry("400x600")

#=== Label ===
label = tk.Label(root, text="👋 Selamat datang di Demo Tkinter!", font=("Arial", 12, "bold"))
label.pack(pady=10)

# === Entry ===
entry_nama = tk.Entry(root)
entry_nama.pack()

# === Button ===
tombol = tk.Button(root, text="Klik untuk Sapa", command=klik_tombol)
tombol.pack(pady=5)

# === Label Hasil ===
hasil_label = tk.Label(root, text="", fg="blue")
hasil_label.pack(pady=5)

# === Text (multibaris) ===
label_text = tk.Label(root, text="Komentar:")
label_text.pack()
text_komentar = tk.Text(root, height=3, width=30)
text_komentar.pack()

# === Checkbutton ===
var_check = tk.IntVar()
check = tk.Checkbutton(root, text="Saya setuju dengan syarat", variable=var_check)
check.pack()

# === Radiobutton ===
label_radio = tk.Label(root, text="Pilih jenis kelamin:")
label_radio.pack()
gender = tk.StringVar()
radio1 = tk.Radiobutton(root, text="Laki-laki", variable=gender, value="L")
radio2 = tk.Radiobutton(root, text="Perempuan", variable=gender, value="P")
radio1.pack()
radio2.pack()

# === Listbox ===
label_listbox = tk.Label(root, text="Pilih negara:")
label_listbox.pack()
listbox = tk.Listbox(root, height=4)
for item in ["Indonesia", "Malaysia", "Singapura", "Thailand"]:
    listbox.insert(tk.END, item)
listbox.pack()

# === Scale ===
label_scale = tk.Label(root, text="Nilai Kepuasan:")
label_scale.pack()
scale = tk.Scale(root, from_=0, to=10, orient=tk.HORIZONTAL)
scale.pack()

# === Spinbox ===
label_spinbox = tk.Label(root, text="Pilih jumlah:")
label_spinbox.pack()
spinbox = tk.Spinbox(root, from_=1, to=20)
spinbox.pack()

# === Frame ===
frame = tk.Frame(root, bg="#e0e0e0", padx=10, pady=10)
frame.pack(pady=10)
label_frame = tk.Label(frame, text="Ini di dalam frame")
label_frame.pack()

# === Canvas ===
label_canvas = tk.Label(root, text="Canvas (Gambar Kotak Biru):")
label_canvas.pack()
canvas = tk.Canvas(root, width=200, height=80, bg="white")
canvas.pack()
canvas.create_rectangle(50, 20, 150, 60, fill="blue")

# === Messagebox Button ===
btn_msg = tk.Button(root, text="Tampilkan Pesan", command=tampil_pesan)
btn_msg.pack(pady=10)

# Jalankan aplikasi
root.mainloop()
