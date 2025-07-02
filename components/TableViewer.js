"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function TableViewer({ file, cleanHeaders = false, cleanValues = false, bordered = false }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!file) return;

    // Ambil file dari public folder
    fetch(file)
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            let parsedData = results.data;

            // Bersihkan header jika diminta
            if (cleanHeaders && results.meta.fields) {
              const cleanedFields = results.meta.fields.map((h) =>
                h.trim().replace(/[^a-zA-Z0-9]/g, "_")
              );
              parsedData = parsedData.map((row) => {
                const newRow = {};
                cleanedFields.forEach((h, i) => {
                  newRow[h] = Object.values(row)[i];
                });
                return newRow;
              });
            }

            // Bersihkan value jika diminta
            if (cleanValues) {
              parsedData = parsedData.map((row) => {
                const cleanedRow = {};
                Object.keys(row).forEach((key) => {
                  cleanedRow[key] = typeof row[key] === "string" ? row[key].trim() : row[key];
                });
                return cleanedRow;
              });
            }

            setData(parsedData);
          },
          error: (error) => {
            console.error("Gagal mem-parsing CSV:", error);
          },
        });
      });
  }, [file]);

  if (data.length === 0) return <p>📭 Tidak ada data ditemukan.</p>;

  const headers = Object.keys(data[0]);

  return (
    <table className={`table-auto w-full text-xs sm:text-sm ${bordered ? "border border-gray-300" : ""}`}>
      <thead className="bg-gray-100">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className={`px-2 py-1 sm:px-4 sm:py-2 ${bordered ? "border" : ""}`}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex} className={`px-2 py-1 sm:px-4 sm:py-2 ${bordered ? "border" : ""}`}>
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
