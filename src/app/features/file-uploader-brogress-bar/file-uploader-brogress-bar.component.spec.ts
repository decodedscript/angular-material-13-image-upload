import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderBrogressBarComponent } from './file-uploader-brogress-bar.component';

describe('FileUploaderBrogressBarComponent', () => {
  let component: FileUploaderBrogressBarComponent;
  let fixture: ComponentFixture<FileUploaderBrogressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploaderBrogressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderBrogressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
