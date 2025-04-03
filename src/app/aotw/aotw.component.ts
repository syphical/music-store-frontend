import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-aotw',
  imports: [
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './aotw.component.html',
  styleUrl: './aotw.component.scss'
})
export class AotwComponent {

}
