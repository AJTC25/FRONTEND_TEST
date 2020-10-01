import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorShellComponent } from './contenedor-shell.component';

describe('ContenedorShellComponent', () => {
  let component: ContenedorShellComponent;
  let fixture: ComponentFixture<ContenedorShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
