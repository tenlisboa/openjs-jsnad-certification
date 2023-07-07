import EventEmitter, { once } from "events";
import { setTimeout } from "timers/promises";

const uneventful = new EventEmitter();

const ac = new AbortController()
const { signal } = ac

setTimeout(500).then(() => {
  ac.abort();
})

try {
  await once(uneventful, 'event', { signal })
  console.log("Fired!! ")
} catch (error) {
  if (error.code !== 'ABORT_ERR') throw error
  console.log("Aborted!!")
}