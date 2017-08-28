module.exports = (Model, _exclusions) => {
  const exclusions = _exclusions || [];
  const remoteMethods = [
    'create',
    'upsert',
    'replaceOrCreate',
    'patchOrCreate',
    'exists',
    'findById',
    'find',
    'findOne',
    'destroyById',
    'count',
    'replaceById',
    'prototype.patchAttributes',
    'createChangeStream',
    'updateAll',
    'replaceOrCreate',
    'replaceById',
    'deleteById',
    'upsertWithWhere',
    'login',
    'logout',
    'confirm',
    'resetPassword',
    'updateAttributes',
    'invoke',
  ].filter(method => exclusions.indexOf(method) === -1);

  remoteMethods.forEach((remoteMethod) => {
    Model.disableRemoteMethodByName(remoteMethod);
  });
};
