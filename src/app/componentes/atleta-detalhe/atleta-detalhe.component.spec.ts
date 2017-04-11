import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaDetalheComponent } from './atleta-detalhe.component';

describe('AtletaDetalheComponent', () => {
  let component: AtletaDetalheComponent;
  let fixture: ComponentFixture<AtletaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
