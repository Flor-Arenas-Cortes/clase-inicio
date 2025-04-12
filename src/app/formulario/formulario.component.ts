import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  isDarkTheme = false

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme')
    }

    //Guardar en el localStroage para que se mantenga si recargas
    localStorage.setItem('modoOscuro', this.isDarkTheme.toString());
  }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {

      //verificar si ya estaba activado el modo oscuro antes
      const guardado = localStorage.getItem('modoOscuro');
      if (guardado === 'true') {
        this.isDarkTheme = true;

        document.body.classList.add('dark-theme');
      }

    }
  }
}
