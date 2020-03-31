import { Pipe, PipeTransform } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Pipe({
  name: 'flyingHerosImpure',
  pure:false
})
export class FlyingHerosImpurePipe implements PipeTransform {

 
transform(allHeros: any[]) {
  return allHeros.filter(hero => hero.canFly);
}

}

