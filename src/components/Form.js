import React from "react";

export default function Form() {
  return (
    <section id="contact">
      <form method="post" action="">
        <input type="text" name="name" id="name" placeholder="Nombre" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="text" name="subject" id="subject" placeholder="Asunto" />
        <input type="text" name="message" id="message" placeholder="Mensaje" />
        <button type="submit" value="Send Mesagge">
          Enviar
        </button>
        <button type="reset" value="Clear Form">
          Limpiar
        </button>
      </form>
    </section>
  );
}
