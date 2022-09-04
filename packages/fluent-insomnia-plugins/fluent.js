customizedHeader = require('./headers/customer-headers')

exports.requestHooks = [
  customizedHeader.setHeaders
]
exports.requestActions = [customizedHeader.excludeRequest, customizedHeader.includeRequest]
exports.requestGroupActions = [customizedHeader.excludeRequestGroup, customizedHeader.includeRequestGroup]
