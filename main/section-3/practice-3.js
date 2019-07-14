'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionTemp = Array.from(new Set(collectionA));
    collectionTemp = collectionTemp.map(value => {
        return {key: value, count: collectionA.filter(x => x === value).length}
    })
    return collectionTemp.map(value => {
        return objectB['value'].indexOf(value.key) > -1 ? {key: value.key, count: Math.ceil(value.count * 2 / 3)  } : value;
    })
}

