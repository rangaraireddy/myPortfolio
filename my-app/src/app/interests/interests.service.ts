import { Injectable } from '@angular/core';

@Injectable()
export class InterestsService {

  constructor() {}

  getRandomStyles(allPositions: Position[], height: number, width: number): Position[] {
    const newPositions: Position[] = [];
    const tops = [];
    const lefts = [];
    allPositions.forEach((position: Position) => {
        newPositions.push(this.getCalculatedPosition(position, height, width));
    });
    newPositions.forEach((position: Position) => {
        tops.push(position['top']);
        lefts.push(position['left']);
    });
    const validatedTops = this.distinctCollection(tops, height);
    const validatedLefts = this.distinctCollection(lefts, width);

    for (let eachPosition = 0; eachPosition < newPositions.length; eachPosition++) {
        newPositions[eachPosition].top = validatedTops[eachPosition] + 'px';
        newPositions[eachPosition].left = validatedLefts[eachPosition] + 'px';
        newPositions[eachPosition].position = 'absolute';
    }
    return newPositions;
  }

  getCalculatedPosition(position: Position, height: number, width: number) {
    position.top = Math.abs(((Math.random() * height) - 50));
    position.left = Math.abs(((Math.random() * width) - 50));
    return position;
  }

  distinctCollection(collection: number[], dimension: number) {
      const uniqueKeys = [];
      let filteredCollection = [];
      collection.forEach((val: number) => {
        if (collection.includes(val, val)) {
            uniqueKeys.push(val);
        }
      });
      if (uniqueKeys.length = 0) {
          filteredCollection = collection;
      } else {
          const keyToRemove = uniqueKeys[0];
          for (let i = 0; i < uniqueKeys.length - 1; i++) {
            uniqueKeys[i + 1] = uniqueKeys[i] + 10;
          }
          filteredCollection = collection.filter((item) => { return item !== keyToRemove; }).concat(uniqueKeys);
      }
      return this.minimumDifferenceCheck(filteredCollection, dimension);
  }

  minimumDifferenceCheck(collection: number[], dimension: number) {
    const minimumDifference = 50;
    const avgDimension = dimension / 2;
    for (let each = 0; each < collection.length - 1; each++) {
        for (let next = each + 1; next < collection.length; next++) {
            if (Math.abs(collection[next] - collection[each]) < 50) {
                const maxNumber = Math.max(collection[each], collection[next]);
                if (collection[each] > collection[next]) {
                    if (maxNumber < avgDimension) {
                        collection[each] = collection[each] + avgDimension;
                    } else {
                        collection[each] = collection[each] - avgDimension;
                    }
                } else {
                    if (maxNumber < avgDimension) {
                        collection[next] = collection[next] + avgDimension;
                    } else {
                        collection[next] = collection[next] - avgDimension;
                    }
                }
            }
        }
    }
    return collection;
  }

  calculateRandomNumber(val: number) {
     return Math.random() * val;
  }
}

export class Position {
    top: string | number;
    left: string | number;
    position: string;
}

export class StyleObj {
    height: number;
    width: number;
}
