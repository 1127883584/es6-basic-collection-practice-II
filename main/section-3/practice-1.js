'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(value => {
    return objectB['value'].indexOf(value.key) > -1 ? {key: value.key, count: value.count - 1} : value;
  })
}
