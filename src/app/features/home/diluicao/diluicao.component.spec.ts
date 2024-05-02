import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiluicaoComponent } from './diluicao.component';

describe('DiluicaoComponent', () => {
  let component: DiluicaoComponent;
  let fixture: ComponentFixture<DiluicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiluicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiluicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
