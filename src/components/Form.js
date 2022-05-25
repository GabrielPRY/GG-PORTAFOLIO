import React from "react";
import "../css/form.css";

export default function Form() {
  return (
    <section id="contact" className="contact">
      <form method="post" action="" className="form-contact">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            className="input-type1"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input-type1"
          />
        </div>

        <div>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Asunto"
            className="input-type2"
          />
        </div>

        <div>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Mensaje"
            className="input-type3"
          />
        </div>

        <div>
          <button type="submit" value="Send Mesagge" className="button-blue">
            Enviar
          </button>
        </div>

        <div>
          <button type="reset" value="Clear Form" className="button-grey">
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}
