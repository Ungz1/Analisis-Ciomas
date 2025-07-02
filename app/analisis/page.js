"use client"

import { useEffect, useState } from 'react'
import TableViewer from '../../components/TableViewer'

import Image from 'next/image'
import Link from 'next/link'

export default function Analisis() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 font-sans text-gray-800 text-sm sm:text-base">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">📍 Detail Analisis Perubahan Lahan</h1>

      <section className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">📋 Ringkasan Hasil Analisis</h2>
        <table className="table-auto w-full text-xs sm:text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1 sm:px-4 sm:py-2 text-left">Tahun</th>
              <th className="border px-2 py-1 sm:px-4 sm:py-2">Akurasi</th>
              <th className="border px-2 py-1 sm:px-4 sm:py-2">Kappa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1 sm:px-4 sm:py-2">2015</td>
              <td className="border px-2 py-1 sm:px-4 sm:py-2 font-semibold">0.793</td>
              <td className="border px-2 py-1 sm:px-4 sm:py-2 font-semibold">0.675</td>
            </tr>
            <tr>
              <td className="border px-2 py-1 sm:px-4 sm:py-2">2025</td>
              <td className="border px-2 py-1 sm:px-4 sm:py-2 font-semibold">0.887</td>
              <td className="border px-2 py-1 sm:px-4 sm:py-2 font-semibold">0.819</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">📊 Grafik Perubahan</h2>
        <img
          src="/grafik_perubahan_tutupan_lahan.png"
          alt="Grafik Perubahan"
          className="w-full rounded-md border"
        />
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">📄 Tabel Perubahan Tutupan Lahan</h2>
        <div className="overflow-x-auto">
          <TableViewer file="/perubahan_tutupan_lahan_ciomas.csv" cleanHeaders={true} cleanValues={true} bordered={true} />
        </div>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">📄 Matriks Perubahan</h2>
        <div className="overflow-x-auto">
          <TableViewer file="/change_matrix_ciomas.csv" cleanHeaders={true} cleanValues={true} bordered={true} />
        </div>
      </section>

      <div className="text-center mt-6">
        <Link href="/">
          <span className="text-blue-600 hover:underline">← Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  )
}