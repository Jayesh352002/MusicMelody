import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiclistComponent } from './musiclist.component';

describe('MusiclistComponent', () => {
  let component: MusiclistComponent;
  let fixture: ComponentFixture<MusiclistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusiclistComponent]
    });
    fixture = TestBed.createComponent(MusiclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
