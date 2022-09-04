async function getDemo() {
  console.log("this is demo")
  return "demo"
}

function getSyncDemo() {
  console.log("this is sync demo")
  return "SyncDemo"
}

module.exports = {getDemo, getSyncDemo}
