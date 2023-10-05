import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test = false;
  color = 'pink';
  images: string[] = ['/assets/H60-L043528.JPG', '/assets/H60-L043770.JPG',
    '/assets/HUAWEI MT7-TL103993.JPG', '/assets/HUAWEI MT7-TL103999.JPG']
}
