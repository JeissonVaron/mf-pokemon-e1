import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLlistComponent } from './pokemon-llist.component';

describe('PokemonLlistComponent', () => {
  let component: PokemonLlistComponent;
  let fixture: ComponentFixture<PokemonLlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonLlistComponent]
    });
    fixture = TestBed.createComponent(PokemonLlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
