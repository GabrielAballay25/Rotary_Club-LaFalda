import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Datos de ejemplo: actividades por fecha
const actividades = {
  "2025-09-06": ["Reunión del comité", "Llamar a socios"],
  "2025-09-08": ["Campaña solidaria"],
  "2025-09-15": ["Evento comunitario"],
  "2025-09-21": ["Visita a institución"],
  "2025-09-22": ["Capacitación interna"],
  "2025-09-29": ["Cena anual"],
};

const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const CalendarioHero = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const hoy = new Date();
  const mes = fechaSeleccionada.getMonth();
  const anio = fechaSeleccionada.getFullYear();

  const primerDiaMes = new Date(anio, mes, 1).getDay(); // 0=Domingo
  const diasMes = new Date(anio, mes + 1, 0).getDate();

  // Ajustar primer día para que lunes sea 0
  const primerDiaAjustado = (primerDiaMes + 6) % 7;

  // Construir cuadrícula de días
  const dias = [];
  for (let i = 0; i < primerDiaAjustado; i++) dias.push(null);
  for (let i = 1; i <= diasMes; i++) dias.push(i);

  // Función para cambiar fecha seleccionada
  const seleccionarDia = (dia) => {
    const nuevaFecha = new Date(anio, mes, dia);
    setFechaSeleccionada(nuevaFecha);
  };

  // Formatear fecha para mostrar actividades
  const fechaKey = `${fechaSeleccionada.getFullYear()}-${String(
    fechaSeleccionada.getMonth() + 1
  ).padStart(2, "0")}-${String(fechaSeleccionada.getDate()).padStart(2, "0")}`;

  return (
    <div className="container mt-4 p-4 bg-light rounded shadow d-flex">
      {/* Calendario */}
      <div className="me-4 flex-shrink-0">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() =>
              setFechaSeleccionada(
                new Date(anio, mes - 1, fechaSeleccionada.getDate())
              )
            }
          >
            &lt;
          </button>
          <h5 className="mb-0 text-center">
            {fechaSeleccionada.toLocaleString("es-ES", { month: "long" })} {anio}
          </h5>
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() =>
              setFechaSeleccionada(
                new Date(anio, mes + 1, fechaSeleccionada.getDate())
              )
            }
          >
            &gt;
          </button>
        </div>

        <div className="d-flex">
          {diasSemana.map((d) => (
            <div key={d} className="text-center fw-bold flex-fill">
              {d}
            </div>
          ))}
        </div>

        {/* Días con CSS Grid */}
        <div
          className="d-grid gap-1"
          style={{
            gridTemplateColumns: "repeat(7, 40px)", // 7 columnas
          }}
        >
          {dias.map((dia, idx) => {
            const fechaDia = dia
              ? `${anio}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`
              : null;
            const tieneActividad = dia && actividades[fechaDia];
            const esHoy =
              dia === hoy.getDate() &&
              mes === hoy.getMonth() &&
              anio === hoy.getFullYear();

            return (
              <div
                key={idx}
                className="border p-2 text-center"
                style={{
                  width: "40px",
                  height: "40px",
                  cursor: dia ? "pointer" : "default",
                  position: "relative",
                  borderRadius: "6px",
                  backgroundColor: esHoy ? "#0d6efd" : "#fff",
                  color: esHoy ? "#fff" : "#000",
                }}
                onClick={() => dia && seleccionarDia(dia)}
              >
                {dia}
                {tieneActividad && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      right: "2px",
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#ffc107",
                      borderRadius: "50%",
                    }}
                  ></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Panel lateral de actividades */}
      <div className="flex-grow-1 border-start ps-4">
        <h5>Actividades</h5>
        <p className="text-muted">
          {fechaSeleccionada.toLocaleDateString("es-ES", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <ul>
          {actividades[fechaKey] ? (
            actividades[fechaKey].map((act, idx) => <li key={idx}>{act}</li>)
          ) : (
            <li className="text-muted">No hay eventos programados para este día.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CalendarioHero;
