/**
 * set headers according to different configuration
 * TODO: READ configuration in config files
 * this method run by every request
 * TODO:set header in different level
 * TODO: set header by script
 * @param context
 * @returns {Promise<void>}
 */
async function setHeaders(context) {
  const isExcluded = await context.store.hasItem(`excluded.${context.request.getId()}`);
  console.log(`excluded.${context.request.getId()}`)
  if (isExcluded) {
    console.log("[customized-header]: skipping ... request is excluded")
    return false
  }
  const CUSTOMIZED_HEADERS = await context.request.getEnvironmentVariable("CUSTOMIZED_HEADERS")
  if (!CUSTOMIZED_HEADERS) {
    console.log("no customized header existing")
    return
  }
  for (const headerKey of Object.keys(CUSTOMIZED_HEADERS)) {
    const headerValue = CUSTOMIZED_HEADERS[headerKey]
    if (context.request.hasHeader(headerKey)) {
      console.log(`skipping setting header for ${context.request}`)
      continue
    }
    await context.request.setHeader(headerKey, headerValue)
  }
  console.log("customized headers are set")
}

/**
 * disable request use headers
 * TODO: add expressions
 * @type {{action: ((function(*, *): Promise<void>)|*), label: string}}
 */
const excludeRequest = {
  label: 'Disable Customized Headers',  //for insomnia display
  action: async (context, data) => {
    console.log("the data is ", data)
    const {request} = data
    context.store.setItem(`exclude.${request._id}`, "true")
  }
}

const excludeRequestGroup = {
  label: 'Disable Customized Headers',
  action: async (context, data) => {
    const {requests} = data
    for (const request of requests) {
      context.store.setItem(`exclude.${request._id}`, "true")
    }
  }
}

const includeRequest = {
  label: 'enable Customized Headers',  //for insomnia display
  action: async (context, data) => {
    const {request} = data
    context.store.setItem(`include.${request._id}`, "true")
  }
}

const includeRequestGroup = {
  label: 'Enable Customized Headers',
  action: async (context, data) => {
    const {requests} = data
    for (const request of requests) {
      context.store.setItem(`include.${request._id}`, "true")
    }
  }
}

module.exports = [setHeaders, excludeRequest, excludeRequestGroup, includeRequest, includeRequestGroup]
