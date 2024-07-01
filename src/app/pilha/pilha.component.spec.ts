import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilhaComponent } from './pilha.component';

describe('PilhaComponent', () => {
  let component: PilhaComponent;
  let fixture: ComponentFixture<PilhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
