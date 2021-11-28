import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {

  @Input() imagePath:string; 
  constructor() { }

  ngOnInit(): void {
  }

}
