async function getDemo() {
  console.log("this is demo")
  return "demo"
}

function getSyncDemo() {
  console.log("this is sync demo")
  return "SyncDemo"
}
function say() {
  console.log("Hello World")
  return "Hello World"
}

export {say}

export {getDemo, getSyncDemo}
