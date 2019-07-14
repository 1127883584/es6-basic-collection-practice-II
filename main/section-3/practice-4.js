'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionNormal = collectionA.map(x => x.substring(0, 1));
    let collectionFormat = collectionA.filter(x => x.length > 1);
    collectionFormat.map(x => {
        let el = x.substring(0, 1);
        let count = parseInt(x.replace(/[^0-9]/ig,""));
        collectionNormal = collectionNormal.concat((new Array(count - 1)).fill(el));
    })
    collectionA = collectionNormal;
    let collectionTemp = Array.from(new Set(collectionA));
    collectionTemp = collectionTemp.map(value => {
        return {key: value, count: collectionA.filter(x => x === value).length}
    });
    return collectionTemp.map(value => {
        return objectB['value'].indexOf(value.key) > -1 ? {key: value.key, count: Math.ceil(value.count * 2 / 3)  } : value;
    })
}
